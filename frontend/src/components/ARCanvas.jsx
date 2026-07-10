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

const FACE_REFERENCE = {
  facialIndex: 94.72,
  interpupillaryToFaceWidth: 61.91 / 123.69,
  earOffsetXToFaceWidth: 8.06 / 123.69,
  earOffsetYToFaceHeight: 13.87 / 116.72,
  neckWidthToFaceWidth: 109.64 / 123.69
};
const CALIBRATION_SAMPLE_COUNT = 24;

function landmarkPoint(face, index, fallback) {
  return face[index] ?? fallback;
}

function toPixel(point, width, height) {
  return {
    x: point.x * width,
    y: point.y * height
  };
}

function distanceBetween(a, b, width, height) {
  return Math.hypot((b.x - a.x) * width, (b.y - a.y) * height);
}

function midpoint(a, b, width, height) {
  return {
    x: ((a.x + b.x) / 2) * width,
    y: ((a.y + b.y) / 2) * height
  };
}

function calculateFaceMetrics(face, width, height) {
  const leftEar = landmarkPoint(face, 234, face[0]);
  const rightEar = landmarkPoint(face, 454, leftEar);
  const leftCheek = landmarkPoint(face, 127, leftEar);
  const rightCheek = landmarkPoint(face, 356, rightEar);
  const forehead = landmarkPoint(face, 10, leftEar);
  const chin = landmarkPoint(face, 152, rightEar);
  const leftEye = landmarkPoint(face, 33, leftEar);
  const rightEye = landmarkPoint(face, 263, rightEar);
  const nose = landmarkPoint(face, 1, landmarkPoint(face, 4, leftEar));

  const cheekWidth = distanceBetween(leftCheek, rightCheek, width, height);
  const earWidth = distanceBetween(leftEar, rightEar, width, height);
  const faceWidth = Math.max(cheekWidth, earWidth * 0.78, 1);
  const faceHeight = Math.max(distanceBetween(forehead, chin, width, height), 1);
  const interpupillaryDistance = distanceBetween(leftEye, rightEye, width, height);
  const facialIndex = (faceHeight / faceWidth) * 100;
  const ratioScale = clamp(facialIndex / FACE_REFERENCE.facialIndex, 0.86, 1.16);
  const widthScale = clamp(
    interpupillaryDistance / Math.max(faceWidth * FACE_REFERENCE.interpupillaryToFaceWidth, 1),
    0.88,
    1.14
  );
  const roll = Math.atan2(
    rightEar.y * height - leftEar.y * height,
    rightEar.x * width - leftEar.x * width
  );

  return {
    leftEar,
    rightEar,
    leftCheek,
    rightCheek,
    leftEye,
    rightEye,
    nose,
    chin,
    faceWidth,
    faceHeight,
    interpupillaryDistance,
    facialIndex,
    ratioScale,
    widthScale,
    roll,
    center: midpoint(leftCheek, rightCheek, width, height)
  };
}

function createCalibrationSample(metrics) {
  return {
    faceWidth: metrics.faceWidth,
    faceHeight: metrics.faceHeight,
    facialIndex: metrics.facialIndex,
    interpupillaryToFaceWidth: metrics.interpupillaryDistance / Math.max(metrics.faceWidth, 1)
  };
}

function averageCalibrationSamples(samples) {
  const total = samples.reduce(
    (sum, sample) => ({
      faceWidth: sum.faceWidth + sample.faceWidth,
      faceHeight: sum.faceHeight + sample.faceHeight,
      facialIndex: sum.facialIndex + sample.facialIndex,
      interpupillaryToFaceWidth:
        sum.interpupillaryToFaceWidth + sample.interpupillaryToFaceWidth
    }),
    {
      faceWidth: 0,
      faceHeight: 0,
      facialIndex: 0,
      interpupillaryToFaceWidth: 0
    }
  );

  return {
    faceWidth: total.faceWidth / samples.length,
    faceHeight: total.faceHeight / samples.length,
    facialIndex: total.facialIndex / samples.length,
    interpupillaryToFaceWidth: total.interpupillaryToFaceWidth / samples.length
  };
}

function isCalibrationSampleStable(samples, sample) {
  const previous = samples.at(-1);

  if (!previous) {
    return true;
  }

  const widthShift = Math.abs(sample.faceWidth - previous.faceWidth) / Math.max(previous.faceWidth, 1);
  const indexShift = Math.abs(sample.facialIndex - previous.facialIndex);

  return widthShift < 0.08 && indexShift < 6;
}

function getAccessoryTransforms(face, width, height, accessory, calibration) {
  const metrics = calculateFaceMetrics(face, width, height);
  const {
    leftEar,
    rightEar,
    leftEye,
    rightEye,
    nose,
    chin,
    faceWidth,
    faceHeight,
    ratioScale,
    widthScale
  } = metrics;
  const calibratedRatioScale = calibration
    ? clamp(calibration.facialIndex / FACE_REFERENCE.facialIndex, 0.86, 1.16)
    : ratioScale;
  const calibratedWidthScale = calibration
    ? clamp(
        calibration.interpupillaryToFaceWidth / FACE_REFERENCE.interpupillaryToFaceWidth,
        0.88,
        1.14
      )
    : widthScale;

  const leftX = leftEar.x * width;
  const leftY = leftEar.y * height;
  const rightX = rightEar.x * width;
  const rightY = rightEar.y * height;
  const angle = Math.atan2(rightY - leftY, rightX - leftX);
  const anchorXOffset = faceWidth * FACE_REFERENCE.earOffsetXToFaceWidth;
  const anchorYOffset = faceHeight * FACE_REFERENCE.earOffsetYToFaceHeight;

  if (accessory.placement === "eyes") {
    const centerX = ((leftEye.x + rightEye.x) / 2) * width;
    const centerY = ((leftEye.y + rightEye.y) / 2) * height;
    const eyeSpan = Math.max(distanceBetween(leftEye, rightEye, width, height), faceWidth * 0.42);
    const eyeAngle = Math.atan2(
      rightEye.y * height - leftEye.y * height,
      rightEye.x * width - leftEye.x * width
    );

    return [
      {
        x: centerX - width / 2,
        y: height / 2 - centerY + faceWidth * (accessory.yOffset ?? 0),
        drawWidth: clamp(eyeSpan * 2.45 * accessory.modelScale * calibratedWidthScale, 150, 360),
        rotation: -eyeAngle,
        mirror: 1,
        holder: "center"
      }
    ];
  }

  if (accessory.placement === "neck") {
    const neckWidth = faceWidth * FACE_REFERENCE.neckWidthToFaceWidth;
    const neckY = chin.y * height + faceHeight * 0.18 * ratioScale;

    return [
      {
        x: nose.x * width - width / 2,
        y: height / 2 - neckY,
        drawWidth: clamp(neckWidth * 0.92 * accessory.modelScale, 120, 300),
        rotation: -angle * 0.35,
        mirror: 1,
        holder: "center"
      }
    ];
  }

  if (accessory.placement === "nose") {
    const noseTip = face[1] ?? face[4] ?? nose;
    const leftNostril = face[98] ?? noseTip;
    const rightNostril = face[327] ?? noseTip;
    const noseSide = accessory.xOffset < 0 ? leftNostril : rightNostril;
    const noseWidth = Math.hypot(
      rightNostril.x * width - leftNostril.x * width,
      rightNostril.y * height - leftNostril.y * height
    );
    const centerX = noseSide.x * width + faceWidth * (accessory.xOffset ?? 0);
    const centerY = noseSide.y * height + faceWidth * (accessory.yOffset ?? 0);

    return [
      {
        x: centerX - width / 2,
        y: height / 2 - centerY,
        drawWidth: clamp(noseWidth * 0.95 * accessory.modelScale, 24, 58),
        rotation: -angle * 0.2,
        mirror: 1,
        holder: "center"
      }
    ];
  }

  const earringHeight = clamp(
    faceHeight * 0.26 * accessory.modelScale * calibratedRatioScale,
    48,
    132
  );
  const yOffset = anchorYOffset + earringHeight * (accessory.yOffset ?? 0);

  return [
    {
      x: leftX - width / 2 - anchorXOffset,
      y: height / 2 - leftY - yOffset,
      drawHeight: earringHeight,
      rotation: -angle,
      mirror: -1,
      holder: "left",
      crop: "left"
    },
    {
      x: rightX - width / 2 + anchorXOffset,
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

function normalizeModelToHeight(model, targetHeight = 100) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const height = size.y || 1;

  model.position.sub(center);
  model.scale.multiplyScalar(targetHeight / height);
}

function prepareModelMaterials(model) {
  model.traverse((child) => {
    if (!child.isMesh) {
      return;
    }

    child.castShadow = false;
    child.receiveShadow = false;

    if (child.material) {
      child.material.needsUpdate = true;
      child.material.side = THREE.DoubleSide;
    }
  });
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

  const leftEarring = new THREE.Group();
  const rightEarring = new THREE.Group();
  const centerAccessory = new THREE.Group();
  leftEarring.visible = false;
  rightEarring.visible = false;
  centerAccessory.visible = false;
  scene.add(leftEarring, rightEarring, centerAccessory);

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
    centerAccessory,
    earrings: {
      left: leftEarring,
      right: rightEarring
    }
  };
}

function setEarringSceneModels(threeScene, template) {
  const leftModel = template.clone(true);
  const rightModel = template.clone(true);

  threeScene.earrings.left.clear();
  threeScene.earrings.right.clear();
  threeScene.earrings.left.add(leftModel);
  threeScene.earrings.right.add(rightModel);
}

function setCenterSceneModel(threeScene, template) {
  const model = template.clone(true);

  threeScene.centerAccessory.clear();
  threeScene.centerAccessory.add(model);
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
  const metrics = calculateFaceMetrics(face, width, height);
  const { leftEar, rightEar, leftEye, rightEye, nose } = metrics;

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

function updateThreeEarrings(threeScene, face, width, height, selectedAccessory, calibration) {
  const transforms = getAccessoryTransforms(face, width, height, selectedAccessory, calibration);
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

function updateThreeAccessory(threeScene, face, width, height, selectedAccessory, calibration) {
  if (selectedAccessory.placement === "ears") {
    threeScene.centerAccessory.visible = false;
    updateThreeEarrings(threeScene, face, width, height, selectedAccessory, calibration);
    return;
  }

  const transform = getAccessoryTransforms(face, width, height, selectedAccessory, calibration)[0];
  const pose = estimateHeadPose(face, width, height);

  threeScene.earrings.left.visible = false;
  threeScene.earrings.right.visible = false;

  if (!transform) {
    threeScene.centerAccessory.visible = false;
    threeScene.renderer.render(threeScene.scene, threeScene.camera);
    return;
  }

  const scale = (transform.drawHeight ?? transform.drawWidth ?? 88) / 100;
  threeScene.centerAccessory.visible = true;
  threeScene.centerAccessory.position.set(transform.x, transform.y, 0);
  threeScene.centerAccessory.scale.set(scale * transform.mirror, scale, scale);
  threeScene.centerAccessory.rotation.set(
    pose.pitch * 0.35,
    pose.yaw * 0.45,
    transform.rotation
  );
  threeScene.renderer.render(threeScene.scene, threeScene.camera);
}

function getPreviewScale(accessory) {
  if (accessory.placement === "ears") {
    return 1.05 * accessory.modelScale;
  }

  if (accessory.placement === "eyes") {
    return 2.35 * accessory.modelScale;
  }

  if (accessory.placement === "neck") {
    return 2.1 * accessory.modelScale;
  }

  return 1.4 * accessory.modelScale;
}

function updateThreePreview(threeScene, width, height, selectedAccessory) {
  const scale = getPreviewScale(selectedAccessory);

  if (selectedAccessory.placement === "ears") {
    const xOffset = Math.min(width * 0.18, 120);

    threeScene.centerAccessory.visible = false;
    threeScene.earrings.left.visible = true;
    threeScene.earrings.right.visible = true;
    threeScene.earrings.left.position.set(-xOffset, 0, 0);
    threeScene.earrings.right.position.set(xOffset, 0, 0);
    threeScene.earrings.left.scale.set(-scale, scale, scale);
    threeScene.earrings.right.scale.set(scale, scale, scale);
    threeScene.earrings.left.rotation.set(0, -0.18, 0);
    threeScene.earrings.right.rotation.set(0, 0.18, 0);
  } else {
    const yOffset = selectedAccessory.placement === "neck" ? -height * 0.08 : 0;

    threeScene.earrings.left.visible = false;
    threeScene.earrings.right.visible = false;
    threeScene.centerAccessory.visible = true;
    threeScene.centerAccessory.position.set(0, yOffset, 0);
    threeScene.centerAccessory.scale.set(scale, scale, scale);
    threeScene.centerAccessory.rotation.set(0, 0, 0);
  }

  threeScene.renderer.render(threeScene.scene, threeScene.camera);
}

function renderProductImagePreview(ctx, image, width, height, selectedAccessory) {
  if (!image) {
    return;
  }

  const maxWidth = width * 0.6;
  const transform =
    selectedAccessory.placement === "ears"
      ? null
      : {
          x: 0,
          y: selectedAccessory.placement === "neck" ? -height * 0.08 : 0,
          drawWidth: clamp(maxWidth * selectedAccessory.modelScale, 140, 360),
          rotation: 0,
          mirror: 1,
          holder: "center"
        };

  ctx.save();
  ctx.translate(width / 2, height / 2);

  if (transform) {
    drawProductImage(ctx, image, transform);
  } else {
    const xOffset = Math.min(width * 0.18, 120);
    const drawHeight = clamp(height * 0.2 * selectedAccessory.modelScale, 70, 150);

    drawProductImage(ctx, image, {
      x: -xOffset,
      y: 0,
      drawHeight,
      rotation: 0,
      mirror: -1,
      holder: "left",
      crop: "left"
    });
    drawProductImage(ctx, image, {
      x: xOffset,
      y: 0,
      drawHeight,
      rotation: 0,
      mirror: 1,
      holder: "right",
      crop: "right"
    });
  }

  ctx.restore();
}

export default function ARCanvas({ selectedAccessoryId, onStatsChange }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const threeCanvasRef = useRef(null);
  const threeSceneRef = useRef(null);
  const threeModelReadyRef = useRef(false);
  const modelLoadFailedRef = useRef(false);
  const productImageRef = useRef(null);
  const faceRatioRef = useRef(null);
  const calibrationRef = useRef(null);
  const calibrationSamplesRef = useRef([]);
  const [productStatus, setProductStatus] = useState("Loading product photo");
  const [calibrationStatus, setCalibrationStatus] = useState({
    state: "waiting",
    progress: 0
  });
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
    threeModelReadyRef.current = false;
    modelLoadFailedRef.current = false;
    calibrationRef.current = null;
    calibrationSamplesRef.current = [];
    setCalibrationStatus({ state: "waiting", progress: 0 });
    setProductStatus(selectedAccessory.modelUrl ? "Loading 3D jewelry asset" : "Loading product photo");

    if (selectedAccessory.modelUrl) {
      const threeScene = threeSceneRef.current;
      const loader = new GLTFLoader();

      const useFallbackModel = () => {
        modelLoadFailedRef.current = true;
        if (!threeScene || cancelled || selectedAccessory.placement !== "ears") {
          setProductStatus("3D asset missing, using product preview");
          return;
        }

        const fallback = createEarringModel();
        normalizeModelToHeight(fallback);
        prepareModelMaterials(fallback);
        setEarringSceneModels(threeScene, fallback);
        threeModelReadyRef.current = true;
        setProductStatus(`${selectedAccessory.name} placeholder 3D active`);
      };

      if (!selectedAccessory.modelUrl || !threeScene) {
        useFallbackModel();
      } else {
        loader.load(
          selectedAccessory.modelUrl,
          (gltf) => {
            if (cancelled) {
              return;
            }

            const model = gltf.scene;
            normalizeModelToHeight(model);
            prepareModelMaterials(model);
            if (selectedAccessory.placement === "ears") {
              setEarringSceneModels(threeScene, model);
            } else {
              setCenterSceneModel(threeScene, model);
            }
            threeModelReadyRef.current = true;
            setProductStatus(`${selectedAccessory.name} GLB active`);
          },
          undefined,
          useFallbackModel
        );
      }
    }

    image.onload = () => {
      if (!cancelled) {
        productImageRef.current = image;

        if (!selectedAccessory.modelUrl || !threeModelReadyRef.current) {
          setProductStatus(`${selectedAccessory.name} product photo active`);
        }
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

  const renderProductImage = useCallback((ctx, face, width, height, calibration) => {
    const image = productImageRef.current;

    if (!image) {
      return;
    }

    ctx.save();
    ctx.translate(width / 2, height / 2);
    getAccessoryTransforms(face, width, height, selectedAccessory, calibration).forEach((transform) => {
      drawProductImage(ctx, image, transform);
    });
    ctx.restore();
  }, [selectedAccessory]);

  const renderCameraPreview = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!canvas || !video) {
      return;
    }

    const width = video.videoWidth || canvas.clientWidth || 960;
    const height = video.videoHeight || canvas.clientHeight || 720;

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

    if (threeModelReadyRef.current && threeSceneRef.current) {
      updateThreePreview(threeSceneRef.current, width, height, selectedAccessory);
    } else if (!selectedAccessory.modelUrl || modelLoadFailedRef.current) {
      renderProductImagePreview(
        ctx,
        productImageRef.current,
        width,
        height,
        selectedAccessory
      );
    }
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
        if (!calibrationRef.current) {
          calibrationSamplesRef.current = [];
          setCalibrationStatus((current) =>
            current.state === "waiting" && current.progress === 0
              ? current
              : { state: "waiting", progress: 0 }
          );
        }

        if (isCameraReady) {
          renderCameraPreview();
        }
        return;
      }

      const faceMetrics = calculateFaceMetrics(face, width, height);
      faceRatioRef.current = Number(faceMetrics.facialIndex.toFixed(1));
      let calibration = calibrationRef.current;
      let isCalibrating = !calibration;

      if (!calibration) {
        const sample = createCalibrationSample(faceMetrics);
        const samples = calibrationSamplesRef.current;

        if (isCalibrationSampleStable(samples, sample)) {
          samples.push(sample);
        } else {
          calibrationSamplesRef.current = [sample];
        }

        const progress = Math.min(
          calibrationSamplesRef.current.length / CALIBRATION_SAMPLE_COUNT,
          1
        );

        if (calibrationSamplesRef.current.length >= CALIBRATION_SAMPLE_COUNT) {
          calibration = averageCalibrationSamples(calibrationSamplesRef.current);
          calibrationRef.current = calibration;
          isCalibrating = false;
          setCalibrationStatus({ state: "ready", progress: 1 });
        } else {
          setCalibrationStatus({ state: "scanning", progress });
        }
      }

      drawLandmarks(ctx, face, width, height);

      if (!isCalibrating) {
        if (threeModelReadyRef.current && threeSceneRef.current) {
          updateThreeAccessory(
            threeSceneRef.current,
            face,
            width,
            height,
            selectedAccessory,
            calibration
          );
        } else if (!selectedAccessory.modelUrl || modelLoadFailedRef.current) {
          renderProductImage(ctx, face, width, height, calibration);
        }
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
          faceRatio: faceRatioRef.current,
          trackingStatus: isCalibrating ? "Calibrating" : "Tracking"
        });
      }
    },
    [isCameraReady, onStatsChange, renderCameraPreview, renderProductImage, selectedAccessory]
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
      faceRatio: faceRatioRef.current,
      trackingStatus: cameraError ? "Camera blocked" : trackingStatus
    });
  }, [cameraError, landmarkCount, onStatsChange, trackingStatus]);

  useEffect(() => {
    if (isCameraReady) {
      renderCameraPreview();
    }
  }, [isCameraReady, productStatus, renderCameraPreview]);

  const calibrationPercent = Math.round(calibrationStatus.progress * 100);
  const calibrationLabel =
    calibrationStatus.state === "ready"
      ? "Face calibrated"
      : calibrationStatus.state === "scanning"
        ? `Scanning face ${calibrationPercent}%`
        : "Place your face in frame";

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

        {isCameraReady ? (
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/60 p-3 text-white backdrop-blur">
            <div className="mb-2 flex items-center justify-between gap-3 text-xs font-semibold">
              <span>{calibrationLabel}</span>
              <span>{calibrationPercent}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-200"
                style={{ width: `${calibrationPercent}%` }}
              />
            </div>
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
