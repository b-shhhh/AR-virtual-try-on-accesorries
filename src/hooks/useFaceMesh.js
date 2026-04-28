import { useEffect, useRef, useState } from "react";
import { FaceMesh } from "@mediapipe/face_mesh";

export default function useFaceMesh({ videoRef, enabled, onResults }) {
  const faceMeshRef = useRef(null);
  const frameRef = useRef(null);
  const [landmarkCount, setLandmarkCount] = useState(0);
  const [trackingStatus, setTrackingStatus] = useState("Idle");

  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6
    });

    faceMesh.onResults((results) => {
      const face = results.multiFaceLandmarks?.[0];
      setLandmarkCount(face ? face.length : 0);
      setTrackingStatus(face ? "Tracking" : "Searching");
      onResults?.(results);
    });

    faceMeshRef.current = faceMesh;

    return () => {
      cancelAnimationFrame(frameRef.current);
      faceMeshRef.current?.close();
      faceMeshRef.current = null;
    };
  }, [onResults]);

  useEffect(() => {
    if (!enabled || !videoRef.current || !faceMeshRef.current) {
      return undefined;
    }

    let cancelled = false;

    const processFrame = async () => {
      if (cancelled || !videoRef.current || !faceMeshRef.current) {
        return;
      }

      if (videoRef.current.readyState >= 2) {
        await faceMeshRef.current.send({ image: videoRef.current });
      }

      frameRef.current = requestAnimationFrame(processFrame);
    };

    processFrame();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameRef.current);
    };
  }, [enabled, videoRef]);

  return {
    landmarkCount,
    trackingStatus
  };
}
