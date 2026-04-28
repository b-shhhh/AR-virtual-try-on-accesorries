export default function Profile() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Profile</p>
        <h1 className="mt-3 font-display text-4xl text-aura-primary">User Summary</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-rose-50 p-5">
            <p className="text-sm text-stone-500">Try-ons</p>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">0</p>
          </div>
          <div className="rounded-3xl bg-rose-50 p-5">
            <p className="text-sm text-stone-500">Wishlisted</p>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">0</p>
          </div>
          <div className="rounded-3xl bg-rose-50 p-5">
            <p className="text-sm text-stone-500">Purchased</p>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">0</p>
          </div>
        </div>
      </section>
    </main>
  );
}
