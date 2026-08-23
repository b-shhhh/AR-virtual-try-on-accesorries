import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AccessorySelector from "../components/AccessorySelector";
import ARCanvas from "../components/ARCanvas";
import { accessories, getAccessoryById } from "../data/accessories";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { saveTryOnEvent } from "../firebase/database";

// How often (ms) we snapshot fps/faceRatio for the signed-in account while AR is active.
const CAPTURE_INTERVAL_MS = 15000;

function createSessionId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function TryOn() {
  const [searchParams] = useSearchParams();
  const initialAccessoryId = searchParams.get("accessory");
  const initialAccessory = getAccessoryById(initialAccessoryId);
  const { user, authLoading } = useAuth();
  const { addToCart } = useCart();
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [selectedAccessoryId, setSelectedAccessoryId] = useState(initialAccessory?.id ?? accessories[0].id);
  const [cartMessage, setCartMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [stats, setStats] = useState({
    fps: 0,
    landmarkCount: 0,
    faceRatio: null,
    earlobeDistance: null,
    earlobeLength: null,
    trackingStatus: "Idle"
  });
  const [capturedCount, setCapturedCount] = useState(0);
  const selectedAccessory = getAccessoryById(selectedAccessoryId);
  const isSignedIn = Boolean(user?.uid);
  const guestAccessories = useMemo(
    () => [
      accessories.find((item) => item.category === "sunglasses"),
      accessories.find((item) => item.category === "earrings")
    ].filter(Boolean),
    []
  );
  const visibleAccessories = guestAccessories;

  const sessionIdRef = useRef(createSessionId());
  const statsRef = useRef(stats);
  const mountedRef = useRef(true);
  const hasCapturedSessionStartRef = useRef(false);
  const hasCapturedFirstTrackingSnapshotRef = useRef(false);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    statsRef.current = stats;
  }, [stats]);

  useEffect(() => {
    if (authLoading || isSignedIn) {
      return;
    }

    if (!visibleAccessories.some((item) => item.id === selectedAccessoryId)) {
      setSelectedAccessoryId(visibleAccessories[0]?.id ?? accessories[0].id);
    }
  }, [authLoading, isSignedIn, selectedAccessoryId, visibleAccessories]);

  function handleAddSelectedToCart() {
    addToCart({
      id: selectedAccessory.id,
      name: selectedAccessory.name,
      category: selectedAccessory.category,
      price: selectedAccessory.price,
      currency: "NPR",
      description: selectedAccessory.description,
      previewUrl: selectedAccessory.thumbnailUrl,
      thumbnailUrl: selectedAccessory.thumbnailUrl,
      tryOnImageUrl: selectedAccessory.tryOnImageUrl,
      modelUrl: selectedAccessory.modelUrl,
      accessoryId: selectedAccessory.id,
      arSupported: selectedAccessory.arSupported
    });
    setCartMessage("Added to cart.");
    window.setTimeout(() => setCartMessage(""), 3000);
  }

  const captureSessionStart = useCallback(async () => {
    if (!user?.uid || hasCapturedSessionStartRef.current) {
      return;
    }

    hasCapturedSessionStartRef.current = true;

    try {
      const saved = await saveTryOnEvent({
        userId: user.uid,
        userEmail: user.email,
        accessoryId: selectedAccessoryId,
        faceRatio: statsRef.current.faceRatio,
        earlobeDistance: statsRef.current.earlobeDistance,
        earlobeLength: statsRef.current.earlobeLength,
        fps: statsRef.current.fps || null,
        sessionId: sessionIdRef.current,
        trackingStatus: "Started"
      });

      if (saved && mountedRef.current) {
        setCapturedCount((count) => count + 1);
        setSaveMessage("Try-on saved to Firebase.");
      }
    } catch (error) {
      hasCapturedSessionStartRef.current = false;
      console.error("Failed to save try-on session start:", error);
      if (mountedRef.current) {
        setSaveMessage("Firebase save failed. Check Firestore rules and sign-in.");
      }
    }
  }, [selectedAccessoryId, user?.email, user?.uid]);

  // Persist an fps/faceRatio snapshot for whoever is currently signed in to this
  // account. Because the AR pipeline never identifies who is physically in front
  // of the camera, this intentionally ties every capture to the active login
  // session -- so if a different person uses an already-logged-in account, the
  // usage is still recorded against that account, exactly as required.
  const captureSession = useCallback(async ({ incrementCounter = true } = {}) => {
    if (!user?.uid) {
      return;
    }

    const current = statsRef.current;
    if (
      !current ||
      current.trackingStatus !== "Tracking" ||
      !current.fps ||
      current.faceRatio === null
    ) {
      return;
    }

    try {
      const saved = await saveTryOnEvent({
        userId: user.uid,
        userEmail: user.email,
        accessoryId: selectedAccessoryId,
        faceRatio: current.faceRatio,
        earlobeDistance: current.earlobeDistance,
        earlobeLength: current.earlobeLength,
        fps: current.fps,
        sessionId: sessionIdRef.current,
        trackingStatus: current.trackingStatus
      });

      if (saved && incrementCounter && mountedRef.current) {
        setCapturedCount((count) => count + 1);
        setSaveMessage("Try-on saved to Firebase.");
      }
    } catch (error) {
      console.error("Failed to save try-on session metrics:", error);
      if (mountedRef.current) {
        setSaveMessage("Firebase save failed. Check Firestore rules and sign-in.");
      }
    }
  }, [selectedAccessoryId, user?.email, user?.uid]);

  useEffect(() => {
    if (!cameraAllowed) {
      return;
    }

    captureSessionStart();
  }, [cameraAllowed, captureSessionStart]);

  useEffect(() => {
    if (
      !cameraAllowed ||
      hasCapturedFirstTrackingSnapshotRef.current ||
      stats.trackingStatus !== "Tracking" ||
      !stats.fps ||
      stats.faceRatio === null
    ) {
      return;
    }

    hasCapturedFirstTrackingSnapshotRef.current = true;
    captureSession();
  }, [cameraAllowed, captureSession, stats.faceRatio, stats.fps, stats.trackingStatus]);

  useEffect(() => {
    if (!cameraAllowed) {
      return undefined;
    }

    const intervalId = window.setInterval(captureSession, CAPTURE_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
      captureSession({ incrementCounter: false });
    };
  }, [cameraAllowed, captureSession]);

  const statCards = useMemo(
    () => [
      { label: "FPS", value: stats.fps },
      { label: "Landmarks", value: stats.landmarkCount || 0 },
      { label: "Face Ratio", value: stats.faceRatio ? `${stats.faceRatio}` : "--" },
      {
        label: "Lobe Distance",
        value: stats.earlobeDistance ? `${stats.earlobeDistance}px` : "--"
      },
      {
        label: "Lobe Length",
        value: stats.earlobeLength ? `${stats.earlobeLength}px` : "--"
      },
      { label: "Tracking", value: stats.trackingStatus },
      { label: "Accessory", value: selectedAccessory.name },
      { label: "Logged Sessions", value: user?.uid ? capturedCount : "Sign in to save" }
    ],
    [capturedCount, selectedAccessory.name, stats, user?.uid]
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8 rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-aura-accent">
          AR Try-On
        </p>
        <h1 className="font-display text-4xl text-aura-primary">
          Real-time accessory preview with local face tracking
        </h1>
        <p className="mt-4 max-w-3xl text-stone-600">
          Privacy notice: AuraAR processes images and facial landmarks only on your
          device. For signed-in accounts, AR usage saves FPS, face ratio, accessory,
          earlobe measurements, and session timing so each account use is recorded.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-aura-secondary/12 p-4">
            <p className="text-sm uppercase tracking-[0.2em] text-aura-accent">Target</p>
            <p className="mt-2 font-display text-2xl text-aura-primary">30 FPS</p>
          </div>
          <div className="rounded-3xl bg-aura-secondary/12 p-4">
            <p className="text-sm uppercase tracking-[0.2em] text-aura-accent">Processing</p>
            <p className="mt-2 font-display text-2xl text-aura-primary">Local Only</p>
          </div>
          <div className="rounded-3xl bg-aura-secondary/12 p-4">
            <p className="text-sm uppercase tracking-[0.2em] text-aura-accent">Current Mode</p>
            <p className="mt-2 font-display text-2xl text-aura-primary">Lobe Fit</p>
          </div>
        </div>
        {!cameraAllowed ? (
          <button
            type="button"
            onClick={() => setCameraAllowed(true)}
            className="mt-6 rounded-full bg-aura-primary px-6 py-3 font-semibold text-white"
          >
            I Understand, Start Camera
          </button>
        ) : null}
      </section>

      <section className="grid gap-8 xl:grid-cols-[minmax(0,1.6fr)_380px]">
        <div className="space-y-6">
          {cameraAllowed ? (
            <ARCanvas selectedAccessoryId={selectedAccessoryId} onStatsChange={setStats} />
          ) : (
            <div className="flex min-h-[540px] items-center justify-center rounded-[2rem] border border-dashed border-rose-200 bg-white p-8 text-center shadow-aura">
              <div>
                <h2 className="font-display text-2xl text-aura-primary">
                  Camera permission required
                </h2>
                <p className="mt-3 max-w-lg text-stone-600">
                  Accept the privacy notice to enable the live try-on view. The webcam
                  is only activated on this page.
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statCards.map((stat) => (
              <article
                key={stat.label}
                className="rounded-3xl border border-rose-100 bg-white p-5 shadow-aura"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-aura-accent">
                  {stat.label}
                </p>
                <p className="mt-3 font-display text-3xl text-aura-charcoal">
                  {stat.value}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {isSignedIn ? (
            <section className="rounded-3xl border border-rose-100 bg-white p-5 shadow-aura">
              <div className="flex items-start gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-aura-cream">
                  <img
                    src={selectedAccessory.thumbnailUrl}
                    alt={selectedAccessory.name}
                    className="h-16 w-16 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/products/earrings.png";
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-aura-accent">
                    {selectedAccessory.category}
                  </p>
                  <h2 className="mt-1 font-display text-2xl text-aura-charcoal">
                    {selectedAccessory.name}
                  </h2>
                  <p className="mt-2 text-xl font-semibold text-aura-primary">
                    NPR {selectedAccessory.price}
                  </p>
                </div>
              </div>

              {selectedAccessory.description ? (
                <p className="mt-4 max-h-48 overflow-y-auto whitespace-pre-line text-sm leading-6 text-stone-600">
                  {selectedAccessory.description}
                </p>
              ) : null}

              {cartMessage ? (
                <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                  {cartMessage}
                </div>
              ) : null}

              {saveMessage ? (
                <div className="mt-4 rounded-2xl bg-aura-secondary/12 px-4 py-2 text-sm text-aura-primary">
                  {saveMessage}
                </div>
              ) : null}

              <button
                type="button"
                onClick={handleAddSelectedToCart}
                className="mt-5 w-full rounded-full bg-aura-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Add to Cart
              </button>
            </section>
          ) : (
            <AccessorySelector
              accessories={visibleAccessories}
              selectedAccessoryId={selectedAccessoryId}
              onSelectAccessory={setSelectedAccessoryId}
            />
          )}
        </div>
      </section>
    </main>
  );
}
