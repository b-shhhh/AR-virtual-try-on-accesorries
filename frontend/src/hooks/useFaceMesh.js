import { useEffect, useRef, useState } from "react";

const TASKS_VISION_CDN = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22";
const FACE_LANDMARKER_MODEL =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task";

export default function useFaceMesh({ videoRef, enabled, onResults }) {
  const faceLandmarkerRef = useRef(null);
  const frameRef = useRef(null);
  const [isDetectorReady, setIsDetectorReady] = useState(false);
  const [landmarkCount, setLandmarkCount] = useState(0);
  const [trackingStatus, setTrackingStatus] = useState("Idle");

  useEffect(() => {
    let cancelled = false;

    const loadFaceLandmarker = async () => {
      setTrackingStatus("Loading detector");

      try {
        const { FaceLandmarker, FilesetResolver } = await import(
          /* @vite-ignore */ TASKS_VISION_CDN
        );
        const vision = await FilesetResolver.forVisionTasks(`${TASKS_VISION_CDN}/wasm`);
        const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: FACE_LANDMARKER_MODEL,
            delegate: "GPU"
          },
          numFaces: 1,
          outputFaceBlendshapes: false,
          outputFacialTransformationMatrixes: false,
          runningMode: "VIDEO",
          minFaceDetectionConfidence: 0.6,
          minFacePresenceConfidence: 0.6,
          minTrackingConfidence: 0.6
        });

        if (cancelled) {
          faceLandmarker.close();
          return;
        }

        faceLandmarkerRef.current = faceLandmarker;
        setIsDetectorReady(true);
        setTrackingStatus("Searching");
      } catch (error) {
        setTrackingStatus("Detector failed");
      }
    };

    loadFaceLandmarker();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameRef.current);
      faceLandmarkerRef.current?.close();
      faceLandmarkerRef.current = null;
      setIsDetectorReady(false);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !isDetectorReady || !videoRef.current || !faceLandmarkerRef.current) {
      return undefined;
    }

    let cancelled = false;

    const processFrame = async () => {
      if (cancelled || !videoRef.current || !faceLandmarkerRef.current) {
        return;
      }

      if (videoRef.current.readyState >= 2) {
        const results = faceLandmarkerRef.current.detectForVideo(
          videoRef.current,
          performance.now()
        );
        const face = results.faceLandmarks?.[0];

        setLandmarkCount(face ? face.length : 0);
        setTrackingStatus(face ? "Tracking" : "Searching");
        onResults?.({
          ...results,
          multiFaceLandmarks: results.faceLandmarks
        });
      }

      frameRef.current = requestAnimationFrame(processFrame);
    };

    processFrame();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameRef.current);
    };
  }, [enabled, isDetectorReady, onResults, videoRef]);

  return {
    landmarkCount,
    trackingStatus
  };
}
