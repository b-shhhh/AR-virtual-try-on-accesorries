import { useMemo, useState } from "react";
import AccessorySelector from "../components/AccessorySelector";
import ARCanvas from "../components/ARCanvas";
import { accessories, getAccessoryById } from "../data/accessories";

export default function TryOn() {
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [selectedAccessoryId, setSelectedAccessoryId] = useState(accessories[0].id);
  const [stats, setStats] = useState({
    fps: 0,
    landmarkCount: 0,
    faceRatio: null,
    trackingStatus: "Idle"
  });
  const selectedAccessory = getAccessoryById(selectedAccessoryId);

  const statCards = useMemo(
    () => [
      { label: "FPS", value: stats.fps },
      { label: "Landmarks", value: stats.landmarkCount || 0 },
      { label: "Face Ratio", value: stats.faceRatio ? `${stats.faceRatio}` : "--" },
      { label: "Tracking", value: stats.trackingStatus },
      { label: "Accessory", value: selectedAccessory.name }
    ],
    [selectedAccessory.name, stats]
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
          Privacy notice: AuraAR processes facial landmarks only on your device. No
          images, videos, or landmark points are stored or sent to any server.
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
            <p className="mt-2 font-display text-2xl text-aura-primary">Product Try-On</p>
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

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
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
          <AccessorySelector
            accessories={accessories}
            selectedAccessoryId={selectedAccessoryId}
            onSelectAccessory={setSelectedAccessoryId}
          />

          <section className="rounded-3xl border border-rose-100 bg-white p-5 shadow-aura">
            <h2 className="font-display text-2xl text-aura-charcoal">Current scope</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              <li>Webcam access with front and rear camera toggle</li>
              <li>468 MediaPipe face landmarks drawn on top of the video</li>
              <li>Three.js 3D earrings anchored to ear-side face landmarks</li>
              <li>Head roll, yaw, and pitch estimates mapped to the earring model</li>
              <li>Product photo fallback for glasses and necklace placements</li>
              <li>Live FPS counter for quick performance feedback</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-rose-100 bg-white p-5 shadow-aura">
            <h2 className="font-display text-2xl text-aura-charcoal">Why this matters</h2>
            <p className="mt-4 text-sm leading-6 text-stone-600">
              This page is the core experimental artifact of the thesis. It demonstrates
              how responsive AR feedback, accessory fit visualization, and local privacy
              handling can influence confidence and purchase intention in online
              accessory shopping.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
