export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">About</p>
        <h1 className="mt-3 font-display text-4xl text-aura-primary">Research Context</h1>
        <div className="mt-6 space-y-4 text-stone-600">
          <p>RQ1: Will AR increase confidence in online accessory purchasing?</p>
          <p>RQ2: How does AR realism influence buying decisions?</p>
          <p>RQ3: Will virtual fitting reduce hesitance and return rates?</p>
          <p>Researcher: Bishruti Koirala. Supervisor: Manoj Shrestha.</p>
        </div>
      </section>
    </main>
  );
}
