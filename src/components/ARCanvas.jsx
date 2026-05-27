import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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

function makeRoseDropEarrings() {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({
    color: "#d8a441",
    metalness: 0.85,
    roughness: 0.28
  });
  const gem = new THREE.MeshStandardMaterial({
    color: "#c2185b",
    metalness: 0.2,
    roughness: 0.18
  });

  const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.045, 16, 48), metal);
  hoop.position.y = 0.18;
  group.add(hoop);

  const drop = new THREE.Mesh(new THREE.SphereGeometry(0.18, 24, 24), gem);
  drop.scale.set(0.82, 1.2, 0.82);
  drop.position.y = -0.42;
  group.add(drop);

  const connector = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.42, 12), metal);
  connector.position.y = -0.13;
  group.add(connector);

  return group;
}

function makeMidnightSunglasses() {
  const group = new THREE.Group();
  const frame = new THREE.MeshStandardMaterial({
    color: "#111111",
    metalness: 0.55,
    roughness: 0.3
  });
  const lens = new THREE.MeshPhysicalMaterial({
    color: "#151923",
    metalness: 0.1,
    roughness: 0.12,
    transmission: 0.15,
    transparent: true,
    opacity: 0.72
  });

  const leftLens = new THREE.Mesh(new THREE.SphereGeometry(0.36, 32, 20), lens);
  leftLens.scale.set(1, 0.68, 0.08);
  leftLens.position.x = -0.44;
  group.add(leftLens);

  const rightLens = leftLens.clone();
  rightLens.position.x = 0.44;
  group.add(rightLens);

  const leftRim = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 12, 48), frame);
  leftRim.scale.y = 0.68;
  leftRim.position.x = -0.44;
  group.add(leftRim);

  const rightRim = leftRim.clone();
  rightRim.position.x = 0.44;
  group.add(rightRim);

  const bridge = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 10, 32, Math.PI), frame);
  bridge.rotation.z = Math.PI;
  bridge.position.y = 0.02;
  group.add(bridge);

  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.05, 0.05), frame);
  leftArm.position.set(-0.98, 0.03, -0.04);
  leftArm.rotation.z = 0.08;
  group.add(leftArm);

  const rightArm = leftArm.clone();
  rightArm.position.x = 0.98;
  rightArm.rotation.z = -0.08;
  group.add(rightArm);

  return group;
}

function makeGoldPendantNecklace() {
  const group = new THREE.Group();
  const gold = new THREE.MeshStandardMaterial({
    color: "#d7a339",
    metalness: 0.88,
    roughness: 0.24
  });
  const pearl = new THREE.MeshStandardMaterial({
    color: "#fff3dc",
    metalness: 0.18,
    roughness: 0.18
  });

  const chain = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.022, 16, 96, Math.PI), gold);
  chain.rotation.z = Math.PI;
  chain.scale.y = 0.58;
  chain.position.y = 0.18;
  group.add(chain);

  const bail = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.018, 12, 32), gold);
  bail.position.y = -0.3;
  group.add(bail);

  const pendant = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 24), pearl);
  pendant.scale.set(0.82, 1.18, 0.28);
  pendant.position.y = -0.58;
  group.add(pendant);

  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 0.08, 24), gold);
  cap.position.y = -0.38;
  group.add(cap);

  return group;
}

function makeAccessoryModel(accessory) {
  switch (accessory.modelKind) {
    case "sunglasses":
      return makeMidnightSunglasses();
    case "necklace":
      return makeGoldPendantNecklace();
    case "earrings":
    default:
      return makeRoseDropEarrings();
  }
}

function normalizeModel(object) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const height = size.y || 1;

  object.position.sub(center);
  object.scale.multiplyScalar(1 / height);
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
        scale: THREE.MathUtils.clamp(faceWidth * 0.24 * accessory.modelScale, 34, 82),
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
        scale: THREE.MathUtils.clamp(faceWidth * 0.36 * accessory.modelScale, 48, 128),
        rotation: -angle * 0.35,
        mirror: 1,
        holder: "center"
      }
    ];
  }

  const earringHeight = THREE.MathUtils.clamp(faceWidth * 0.23 * accessory.modelScale, 34, 96);
  const yOffset = earringHeight * accessory.yOffset;

  return [
    {
      x: leftX - width / 2,
      y: height / 2 - leftY - yOffset,
      scale: earringHeight,
      rotation: -angle,
      mirror: -1,
      holder: "left"
    },
    {
      x: rightX - width / 2,
      y: height / 2 - rightY - yOffset,
      scale: earringHeight,
      rotation: -angle,
      mirror: 1,
      holder: "right"
    }
  ];
}

export default function ARCanvas({ selectedAccessoryId, onStatsChange }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const threeMountRef = useRef(null);
  const threeRef = useRef(null);
  const [modelStatus, setModelStatus] = useState("Loading 3D accessory");
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
    const mount = threeMountRef.current;

    if (!mount) {
      return undefined;
    }

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.className = "h-full w-full";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-480, 480, 360, -360, -1000, 1000);
    camera.position.z = 500;

    const leftModel = new THREE.Group();
    const centerModel = new THREE.Group();
    const rightModel = new THREE.Group();
    leftModel.visible = false;
    centerModel.visible = false;
    rightModel.visible = false;
    scene.add(leftModel, centerModel, rightModel);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x332222, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(0, 0, 300);
    scene.add(keyLight);

    threeRef.current = {
      camera,
      centerModel,
      leftModel,
      renderer,
      rightModel,
      scene
    };

    return () => {
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      threeRef.current = null;
    };
  }, []);

  useEffect(() => {
    const loader = new GLTFLoader();
    let cancelled = false;

    setModelStatus("Loading 3D accessory");

    const setSceneModels = (template) => {
      const three = threeRef.current;

      if (!three) {
        return;
      }

      for (const holder of [three.leftModel, three.centerModel, three.rightModel]) {
        holder.clear();
        holder.add(template.clone(true));
        holder.visible = false;
      }
    };

    const useGeneratedModel = () => {
      const generated = makeAccessoryModel(selectedAccessory);
      normalizeModel(generated);
      setSceneModels(generated);
      setModelStatus(`${selectedAccessory.name} 3D model active`);
    };

    if (!selectedAccessory.modelUrl) {
      useGeneratedModel();
    } else {
      loader.load(
        selectedAccessory.modelUrl,
        (gltf) => {
          if (cancelled) {
            return;
          }

          const model = gltf.scene;
          normalizeModel(model);
          setSceneModels(model);
          setModelStatus(`${selectedAccessory.name} GLB active`);
        },
        undefined,
        () => {
          if (cancelled) {
            return;
          }

          useGeneratedModel();
        }
      );
    }

    return () => {
      cancelled = true;
    };
  }, [selectedAccessory]);

  const renderAccessoryModel = useCallback((face, width, height) => {
    const three = threeRef.current;

    if (
      !three ||
      !three.leftModel.children.length ||
      !three.centerModel.children.length ||
      !three.rightModel.children.length
    ) {
      return;
    }

    const { camera, centerModel, leftModel, renderer, rightModel, scene } = three;
    renderer.setSize(width, height, false);

    camera.left = -width / 2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = -height / 2;
    camera.updateProjectionMatrix();

    leftModel.visible = false;
    centerModel.visible = false;
    rightModel.visible = false;

    const holders = {
      center: centerModel,
      left: leftModel,
      right: rightModel
    };

    getAccessoryTransforms(face, width, height, selectedAccessory).forEach((transform) => {
      const holder = holders[transform.holder];

      holder.visible = true;
      holder.position.set(transform.x, transform.y, 0);
      holder.rotation.set(0, 0, transform.rotation);
      holder.scale.set(transform.scale * transform.mirror, transform.scale, transform.scale);
    });

    renderer.render(scene, camera);
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

      const face = results.multiFaceLandmarks?.[0];

      if (!face) {
        const three = threeRef.current;

        if (three) {
          three.leftModel.visible = false;
          three.centerModel.visible = false;
          three.rightModel.visible = false;
          three.renderer.render(three.scene, three.camera);
        }

        return;
      }

      drawLandmarks(ctx, face, width, height);
      renderAccessoryModel(face, width, height);

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
    [onStatsChange, renderAccessoryModel]
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
        <div
          ref={threeMountRef}
          className="pointer-events-none absolute inset-0 h-full w-full scale-x-[-1]"
        />

        {isCameraReady ? (
          <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">
            {modelStatus}
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
