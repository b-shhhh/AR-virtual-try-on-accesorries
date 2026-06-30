import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getAccessoryById } from "../data/accessories";
import useCamera from "../hooks/useCamera";
import useFaceMesh from "../hooks/useFaceMesh";

function drawLandmarks(ctx, landmarks, width, height) {
  ctx.fillStyle = "#C2185B";

  for (const point of landmarks) {
    ctx.beginPath();
    ctx.arc(point.x * width, point.y * height, 1.6, 0, Math.PI * 2);
    ctx.fill();
  }
}

function getAccessoryTransforms(face, width, height, accessory) {
  const leftEar = face[234];
  const rightEar = face[454];
  const leftCheek = face[127] ?? leftEar;
  const rightCheek = face[356] ?? rightEar;
  const nose = face[1] ?? face[4] ?? leftEar;
  const chin = face[152] ?? nose;

  const leftX = leftEar.x * width;
  const leftY = leftEar.y * height;
  const rightX = rightEar.x * width;
  const rightY = rightEar.y * height;
  const faceWidth = Math.hypot(
    rightCheek.x * width - leftCheek.x * width,
    rightCheek.y * height - leftCheek.y * height
  );
  const angle = Math.atan2(rightY - leftY, rightX - leftX);

  if (accessory.placement === "eyes") {
    const leftEye = face[33] ?? leftEar;
    const rightEye = face[263] ?? rightEar;
    const centerX = ((leftEye.x + rightEye.x) / 2) * width;
    const centerY = ((leftEye.y + rightEye.y) / 2) * height;
    const eyeAngle = Math.atan2(
      rightEye.y * height - leftEye.y * height,
      rightEye.x * width - leftEye.x * width
    );

    return [
      {
        x: centerX - width / 2,
        y: height / 2 - centerY + faceWidth * (accessory.yOffset ?? 0),
        drawWidth: clamp(faceWidth * 0.9 * accessory.modelScale, 150, 330),
        rotation: -eyeAngle,
        mirror: 1,
        holder: "center"
      }
    ];
  }

  if (accessory.placement === "neck") {
    const neckY = chin.y * height + faceWidth * 0.24;

    return [
      {
        x: nose.x * width - width / 2,
        y: height / 2 - neckY,
        drawWidth: clamp(faceWidth * 0.72 * accessory.modelScale, 110, 260),
        rotation: -angle * 0.35,
        mirror: 1,
        holder: "center"
      }
    ];
  }

  const earringHeight = clamp(faceWidth * 0.32 * accessory.modelScale, 44, 124);
  const yOffset = earringHeight * accessory.yOffset;

  return [
    {
      x: leftX - width / 2,
      y: height / 2 - leftY - yOffset,
      drawHeight: earringHeight,
      rotation: -angle,
      mirror: -1,
      holder: "left",
      crop: "left"
    },
    {
      x: rightX - width / 2,
      y: height / 2 - rightY - yOffset,
      drawHeight: earringHeight,
      rotation: -angle,
      mirror: 1,
      holder: "right",
      crop: "right"
    }
  ];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getCropRect(image, crop) {
  if (crop === "left") {
    return { sx: 0, sy: 0, sw: image.naturalWidth / 2, sh: image.naturalHeight };
  }

  if (crop === "right") {
    return {
      sx: image.naturalWidth / 2,
      sy: 0,
      sw: image.naturalWidth / 2,
      sh: image.naturalHeight
    };
  }

  return { sx: 0, sy: 0, sw: image.naturalWidth, sh: image.naturalHeight };
}

function drawProductImage(ctx, image, transform) {
  const crop = getCropRect(image, transform.crop);
  const aspect = crop.sw / crop.sh;
  const drawWidth = transform.drawWidth ?? transform.drawHeight * aspect;
  const drawHeight = transform.drawHeight ?? drawWidth / aspect;

  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.rotate(transform.rotation);
  ctx.scale(transform.mirror, 1);
  ctx.drawImage(
    image,
    crop.sx,
    crop.sy,
    crop.sw,
    crop.sh,
    -drawWidth / 2,
    -drawHeight / 2,
    drawWidth,
    drawHeight
  );
  ctx.restore();
}

function createEarringModel() {
  const group = new THREE.Group();

  const gold = new THREE.MeshStandardMaterial({
    color: "#D9A441",
    metalness: 0.85,
    roughness: 0.22
  });
  const ruby = new THREE.MeshStandardMaterial({
    color: "#B3164F",
    metalness: 0.15,
    roughness: 0.14
  });

  const stud = new THREE.Mesh(new THREE.SphereGeometry(9, 32, 16), ruby);
  stud.position.y = 38;
  group.add(stud);

  const hoop = new THREE.Mesh(new THREE.TorusGeometry(28, 3.2, 24, 80), gold);
  hoop.position.y = 9;
  group.add(hoop);

  const chain = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 34, 16), gold);
  chain.position.y = -18;
  group.add(chain);

  const drop = new THREE.Mesh(new THREE.SphereGeometry(11, 32, 16), ruby);
  drop.position.y = -39;
  drop.scale.set(0.78, 1.18, 0.78);
  group.add(drop);

  const cap = new THREE.Mesh(new THREE.ConeGeometry(11, 14, 32), gold);
  cap.position.y = -27;
  cap.rotation.x = Math.PI;
  group.add(cap);

  group.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  return group;
}

function createThreeTryOnScene(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-480, 480, 360, -360, -1000, 1000);
  camera.position.z = 500;

  const leftEarring = createEarringModel();
  const rightEarring = createEarringModel();
  scene.add(leftEarring, rightEarring);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
  keyLight.position.set(140, 180, 320);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffd9e6, 1.2);
  fillLight.position.set(-180, -80, 160);
  scene.add(fillLight);

  scene.add(new THREE.AmbientLight(0xffffff, 1.35));

  return {
    renderer,
    scene,
    camera,
    earrings: {
      left: leftEarring,
      right: rightEarring
    }
  };
}

function resizeThreeScene(threeScene, width, height) {
  const { renderer, camera } = threeScene;

  renderer.setSize(width, height, false);
  camera.left = -width / 2;
  camera.right = width / 2;
  camera.top = height / 2;
  camera.bottom = -height / 2;
  camera.updateProjectionMatrix();
}

function estimateHeadPose(face, width, height) {
  const leftEar = face[234];
  const rightEar = face[454];
  const leftEye = face[33] ?? leftEar;
  const rightEye = face[263] ?? rightEar;
  const nose = face[1] ?? face[4] ?? leftEar;

  const earSpan = Math.max(Math.abs(rightEar.x - leftEar.x), 0.001);
  const faceCenterX = (leftEar.x + rightEar.x) / 2;
  const roll = Math.atan2(
    rightEar.y * height - leftEar.y * height,
    rightEar.x * width - leftEar.x * width
  );
  const yaw = clamp((nose.x - faceCenterX) / earSpan, -0.65, 0.65);
  const pitch = clamp((nose.y - (leftEye.y + rightEye.y) / 2) / earSpan - 0.24, -0.35, 0.35);

  return { roll, yaw, pitch };
}

function updateThreeEarrings(threeScene, face, width, height, selectedAccessory) {
  const transforms = getAccessoryTransforms(face, width, height, selectedAccessory);
  const pose = estimateHeadPose(face, width, height);

  for (const side of ["left", "right"]) {
    const model = threeScene.earrings[side];
    const transform = transforms.find((item) => item.holder === side);

    if (!transform) {
      model.visible = false;
      continue;
    }

    const scale = (transform.drawHeight ?? 88) / 100;
    model.visible = true;
    model.position.set(transform.x, transform.y, 0);
    model.scale.set(scale * transform.mirror, scale, scale);
    model.rotation.set(pose.pitch * 0.6, pose.yaw * transform.mirror * 0.9, transform.rotation);
  }

  threeScene.renderer.render(threeScene.scene, threeScene.camera);
}

export default function ARCanvas({ selectedAccessoryId, onStatsChange }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const threeCanvasRef = useRef(null);
  const threeSceneRef = useRef(null);
  const productImageRef = useRef(null);
  const [productStatus, setProductStatus] = useState("Loading product photo");
  const fpsRef = useRef({
    lastFrameTime: performance.now(),
    frameCount: 0,
    fps: 0
  });

  const selectedAccessory = useMemo(
    () => getAccessoryById(selectedAccessoryId),
    [selectedAccessoryId]
  );

  const {
    cameraError,
    isCameraReady,
    isStartingCamera,
    startCamera,
    stopCamera,
    switchFacingMode,
    facingMode
  } =
    useCamera(videoRef);

  useEffect(() => {
    if (!threeCanvasRef.current) {
      return undefined;
    }

    const threeScene = createThreeTryOnScene(threeCanvasRef.current);
    threeSceneRef.current = threeScene;

    return () => {
      threeScene.renderer.dispose();
      threeScene.scene.traverse((child) => {
        child.geometry?.dispose?.();
        child.material?.dispose?.();
      });
      threeSceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";

    productImageRef.current = null;
    setProductStatus(
      selectedAccessory.placement === "ears" ? "Loading 3D earring model" : "Loading product photo"
    );

    image.onload = () => {
      if (!cancelled) {
        productImageRef.current = image;
        setProductStatus(
          selectedAccessory.placement === "ears"
            ? `${selectedAccessory.name} 3D model active`
            : `${selectedAccessory.name} product photo active`
        );
      }
    };

    image.onerror = () => {
      if (!cancelled) {
        setProductStatus("Product photo could not load");
      }
    };

    image.src = selectedAccessory.tryOnImageUrl ?? selectedAccessory.thumbnailUrl;

    return () => {
      cancelled = true;
    };
  }, [selectedAccessory]);

  const renderProductImage = useCallback((ctx, face, width, height) => {
    const image = productImageRef.current;

    if (!image) {
      return;
    }

    ctx.save();
    ctx.translate(width / 2, height / 2);
    getAccessoryTransforms(face, width, height, selectedAccessory).forEach((transform) => {
      drawProductImage(ctx, image, transform);
    });
    ctx.restore();
  }, [selectedAccessory]);

  const handleResults = useCallback(
    (results) => {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      if (!canvas || !video) {
        return;
      }

      const width = video.videoWidth || 960;
      const height = video.videoHeight || 720;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);

      if (threeSceneRef.current) {
        resizeThreeScene(threeSceneRef.current, width, height);
        threeSceneRef.current.renderer.clear();
      }

      const face = results.multiFaceLandmarks?.[0];

      if (!face) {
        return;
      }

      drawLandmarks(ctx, face, width, height);

      if (selectedAccessory.placement === "ears" && threeSceneRef.current) {
        updateThreeEarrings(threeSceneRef.current, face, width, height, selectedAccessory);
      } else {
        renderProductImage(ctx, face, width, height);
      }

      const now = performance.now();
      fpsRef.current.frameCount += 1;

      if (now - fpsRef.current.lastFrameTime >= 1000) {
        fpsRef.current.fps = fpsRef.current.frameCount;
        fpsRef.current.frameCount = 0;
        fpsRef.current.lastFrameTime = now;

        onStatsChange?.({
          fps: fpsRef.current.fps,
          landmarkCount: face.length,
          trackingStatus: "Tracking"
        });
      }
    },
    [onStatsChange, renderProductImage, selectedAccessory]
  );

  const { landmarkCount, trackingStatus } = useFaceMesh({
    videoRef,
    enabled: isCameraReady,
    onResults: handleResults
  });

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  useEffect(() => {
    onStatsChange?.({
      fps: fpsRef.current.fps,
      landmarkCount,
      trackingStatus: cameraError ? "Camera blocked" : trackingStatus
    });
  }, [cameraError, landmarkCount, onStatsChange, trackingStatus]);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-rose-100 bg-[#1C1117] p-4 shadow-aura">
      <div className="mb-4 flex items-center justify-between gap-3 text-white">
        <div>
          <p className="font-display text-2xl">Live AR Preview</p>
          <p className="text-sm text-rose-100/80">
            Facial data is processed only on this device.
          </p>
        </div>

        <button
          type="button"
          onClick={switchFacingMode}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Camera: {facingMode === "user" ? "Front" : "Rear"}
        </button>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black sm:aspect-video">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full scale-x-[-1] object-cover"
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full scale-x-[-1]"
        />
        <canvas
          ref={threeCanvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full scale-x-[-1]"
        />
        {isCameraReady ? (
          <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">
            {productStatus}
          </div>
        ) : null}

        {!isCameraReady && !cameraError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45 px-6 text-center text-white">
            {isStartingCamera ? "Starting camera..." : "Camera is ready to start."}
          </div>
        ) : null}

        {cameraError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/65 px-6 text-center text-white">
            <div className="max-w-md">
              <p>{cameraError}</p>
              <button
                type="button"
                onClick={startCamera}
                className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-aura-primary transition hover:bg-rose-50"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
