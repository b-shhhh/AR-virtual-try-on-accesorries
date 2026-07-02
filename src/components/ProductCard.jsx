import { Link } from "react-router-dom";
import { getAccessoryById } from "../data/accessories";

export default function ProductCard({ product }) {
  const tryOnAccessoryId = product.accessoryId ?? product.id;
  const tryOnAccessory = getAccessoryById(tryOnAccessoryId);
  const thumbnailUrl = tryOnAccessory?.thumbnailUrl ?? product.thumbnailUrl;

  return (
    <article className="rounded-3xl border border-rose-100 bg-white p-5 shadow-aura">
      <div className="mb-4 rounded-2xl bg-aura-secondary/14 p-4">
        <img
          src={thumbnailUrl}
          alt={product.name}
          className="mx-auto h-32 w-32 rounded-xl object-cover"
        />
      </div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-aura-accent">{product.category}</p>
        <span
          className={[
            "rounded-full px-3 py-1 text-xs font-semibold",
            product.arSupported && tryOnAccessory?.modelUrl
              ? "bg-emerald-50 text-emerald-700"
              : "bg-stone-100 text-stone-500"
          ].join(" ")}
        >
          {product.arSupported && tryOnAccessory?.modelUrl ? "3D Try-On" : "Planned"}
        </span>
      </div>
      <h3 className="font-display text-xl text-aura-charcoal">{product.name}</h3>
      <p className="mt-2 text-stone-600">NPR {product.price}</p>
      <p className="mt-2 text-sm text-stone-500">
        Designed for a mobile-friendly try-on journey with local landmark processing.
      </p>
      <div className="mt-4 flex gap-3">
        <Link
          to={`/tryon?accessory=${encodeURIComponent(tryOnAccessoryId)}`}
          className="rounded-full bg-aura-primary px-4 py-2 text-sm font-semibold text-white"
        >
          Try in AR
        </Link>
        <button className="rounded-full border border-aura-secondary/50 px-4 py-2 text-sm font-semibold text-aura-primary">
          Save
        </button>
      </div>
    </article>
  );
}
