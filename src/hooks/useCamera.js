import { useCallback, useRef, useState } from "react";

export default function useCamera(videoRef) {
  const streamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user");
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState("");

  const stopCamera = useCallback(() => {
    const stream = streamRef.current;

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    setIsCameraReady(false);
  }, []);

  const startCamera = useCallback(async () => {
    try {
      stopCamera();
      setCameraError("");

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode,
          width: { ideal: 960 },
          height: { ideal: 720 }
        },
        audio: false
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsCameraReady(true);
    } catch (error) {
      setCameraError("Unable to access the camera. Please allow permission and try again.");
      setIsCameraReady(false);
    }
  }, [facingMode, stopCamera, videoRef]);

  const switchFacingMode = useCallback(() => {
    setFacingMode((current) => (current === "user" ? "environment" : "user"));
  }, []);

  return {
    cameraError,
    facingMode,
    isCameraReady,
    startCamera,
    stopCamera,
    switchFacingMode
  };
}
