import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useCamera from "../hooks/useCamera";
import useFaceMesh from "../hooks/useFaceMesh";

const SAMPLE_ACCESSORIES = [
  {
    id: "rose-drop-earrings",
    name: "Rose Drop Earrings",
    category: "earrings",
    thumbnailUrl: "/assets/earrings/sample-earring.png",
    modelUrl: "/assets/earrings/sample-earring.png"
  }
];

function drawLandmarks(ctx, landmarks, width, height) {
  ctx.fillStyle = "#C2185B";

  for (const point of landmarks) {
    ctx.beginPath();
    ctx.arc(point.x * width, point.y * height, 1.6, 0, Math.PI * 2);
    ctx.fill();
  }
}

function getEarringTransform(leftEar, rightEar, imageWidth, imageHeight, width, height) {
  const leftX = leftEar.x * width;
  const leftY = leftEar.y * height;
  const rightX = rightEar.x * width;
  const rightY = rightEar.y * height;

  const faceWidth = Math.hypot(rightX - leftX, rightY - leftY);
  const angle = Math.atan2(rightY - leftY, rightX - leftX);
  const earringHeight = Math.max(faceWidth * 0.22, 36);
  const earringWidth = (imageWidth / imageHeight) * earringHeight;

  return {
    left: {
      x: leftX - earringWidth * 0.38,
      y: leftY + earringHeight * 0.28,
      width: earringWidth,
      height: earringHeight,
      angle
    },
    right: {
      x: rightX + earringWidth * 0.38,
      y: rightY + earringHeight * 0.28,
      width: earringWidth,
      height: earringHeight,
      angle
    }
  };
}

function drawEarring(ctx, image, transform, isLeft) {
  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.rotate(transform.angle);
  ctx.scale(isLeft ? -1 : 1, 1);
  ctx.drawImage(
    image,
    -transform.width / 2,
    -transform.height / 2,
    transform.width,
    transform.height
  );
  ctx.restore();
}

export default function ARCanvas({ selectedAccessoryId, onStatsChange }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const fpsRef = useRef({
    lastFrameTime: performance.now(),
    frameCount: 0,
    fps: 0
  });

  const selectedAccessory = useMemo(
    () => SAMPLE_ACCESSORIES.find((item) => item.id === selectedAccessoryId) ?? SAMPLE_ACCESSORIES[0],
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
    let active = true;
    const image = new Image();

    image.onload = () => {
      if (active) {
        setSelectedImage(image);
      }
    };

    image.src = selectedAccessory.modelUrl;

    return () => {
      active = false;
    };
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
        return;
      }

      drawLandmarks(ctx, face, width, height);

      if (!selectedImage) {
        return;
      }

      const transforms = getEarringTransform(
        face[234],
        face[454],
        selectedImage.width,
        selectedImage.height,
        width,
        height
      );

      drawEarring(ctx, selectedImage, transforms.left, true);
      drawEarring(ctx, selectedImage, transforms.right, false);

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
    [onStatsChange, selectedImage]
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
