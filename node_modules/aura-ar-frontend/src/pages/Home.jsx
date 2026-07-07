import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-10 shadow-aura">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-aura-accent">
          Kathmandu-ready AR accessories
        </p>
        <h1 className="max-w-3xl font-display text-5xl text-aura-primary">
          Try earrings and other accessories on your face before you buy.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-stone-600">
          AuraAR is an academic prototype focused on confidence, realism, and better
          online accessory decisions for young women in Kathmandu.
        </p>
        <Link
          to="/tryon"
          className="mt-8 inline-flex rounded-full bg-aura-primary px-6 py-3 font-semibold text-white"
        >
          Start AR Try-On
        </Link>
      </section>
    </main>
  );
}
