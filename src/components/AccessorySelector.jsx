export default function AccessorySelector({
  accessories,
  selectedAccessoryId,
  onSelectAccessory
}) {
  return (
    <section className="rounded-3xl border border-rose-100 bg-white p-5 shadow-aura">
      <div className="mb-4">
        <h2 className="font-display text-2xl text-aura-charcoal">Jewelry</h2>
        <p className="text-sm text-stone-600">
          Select a piece to preview with the live try-on camera.
        </p>
      </div>

      <div className="space-y-3">
        {accessories.map((item) => {
          const isActive = item.id === selectedAccessoryId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectAccessory(item.id)}
              className={[
                "flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition",
                isActive
                  ? "border-aura-primary bg-rose-50"
                  : "border-rose-100 bg-white hover:border-rose-200 hover:bg-rose-50/50"
              ].join(" ")}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-aura-cream">
                <img
                  src={item.thumbnailUrl}
                  alt={item.name}
                  className="max-h-12 max-w-12 object-contain"
                />
              </div>

              <div>
                <p className="font-semibold text-aura-charcoal">{item.name}</p>
                <p className="text-sm text-stone-500">{item.category}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
