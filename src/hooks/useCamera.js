import { useCallback, useRef, useState } from "react";

export default function useCamera(videoRef) {
  const streamRef = useRef(null);
  const isStartingCameraRef = useRef(false);
  const [facingMode, setFacingMode] = useState("user");
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [isStartingCamera, setIsStartingCamera] = useState(false);

  const stopCamera = useCallback(() => {
    const stream = streamRef.current;

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    setIsCameraReady(false);
  }, []);

  const getCameraErrorMessage = useCallback((error) => {
    if (!window.isSecureContext) {
      return "Camera access requires HTTPS or localhost. Open the app at https:// or http://localhost.";
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      return "Camera access is not available in this browser. Use Chrome, Edge, or Safari on HTTPS or localhost.";
    }

    if (error?.name === "NotAllowedError" || error?.name === "SecurityError") {
      return "Camera permission was blocked. Allow camera access in your browser settings, then try again.";
    }

    if (error?.name === "NotFoundError" || error?.name === "DevicesNotFoundError") {
      return "No camera was found on this device.";
    }

    if (error?.name === "NotReadableError" || error?.name === "TrackStartError") {
      return "The camera is already in use by another app or browser tab.";
    }

    return "Unable to access the camera. Please allow permission and try again.";
  }, []);

  const attachStreamToVideo = useCallback(
    async (stream) => {
      if (!videoRef.current) {
        return;
      }

      videoRef.current.srcObject = stream;

      await new Promise((resolve) => {
        if (videoRef.current.readyState >= 1) {
          resolve();
          return;
        }

        videoRef.current.onloadedmetadata = resolve;
      });

      await videoRef.current.play();
    },
    [videoRef]
  );

  const startCamera = useCallback(async () => {
    if (isStartingCameraRef.current) {
      return;
    }

    try {
      isStartingCameraRef.current = true;
      setIsStartingCamera(true);
      stopCamera();
      setCameraError("");

      if (!navigator.mediaDevices?.getUserMedia || !window.isSecureContext) {
        throw new Error("Camera unavailable");
      }

      let stream;

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: facingMode },
            width: { ideal: 960 },
            height: { ideal: 720 }
          },
          audio: false
        });
      } catch (error) {
        if (error?.name !== "OverconstrainedError" && error?.name !== "ConstraintNotSatisfiedError") {
          throw error;
        }

        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
      }

      streamRef.current = stream;
      await attachStreamToVideo(stream);
      setIsCameraReady(true);
    } catch (error) {
      setCameraError(getCameraErrorMessage(error));
      setIsCameraReady(false);
    } finally {
      isStartingCameraRef.current = false;
      setIsStartingCamera(false);
    }
  }, [attachStreamToVideo, facingMode, getCameraErrorMessage, stopCamera]);

  const switchFacingMode = useCallback(() => {
    setFacingMode((current) => (current === "user" ? "environment" : "user"));
  }, []);

  return {
    cameraError,
    facingMode,
    isCameraReady,
    isStartingCamera,
    startCamera,
    stopCamera,
    switchFacingMode
  };
}
