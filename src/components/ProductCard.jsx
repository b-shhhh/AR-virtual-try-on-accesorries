export default function ProductCard({ product }) {
  return (
    <article className="rounded-3xl border border-rose-100 bg-white p-5 shadow-aura">
      <div className="mb-4 rounded-2xl bg-rose-50 p-4">
        <img
          src={product.thumbnailUrl}
          alt={product.name}
          className="mx-auto h-32 w-32 object-contain"
        />
      </div>
      <p className="mb-1 text-sm uppercase tracking-[0.2em] text-aura-accent">
        {product.category}
      </p>
      <h3 className="font-display text-xl text-aura-charcoal">{product.name}</h3>
      <p className="mt-2 text-stone-600">NPR {product.price}</p>
      <button className="mt-4 rounded-full bg-aura-primary px-4 py-2 text-sm font-semibold text-white">
        Try in AR
      </button>
    </article>
  );
}
