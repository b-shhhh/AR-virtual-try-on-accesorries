import SUSSurvey from "../components/SUSSurvey";

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">About</p>
        <h1 className="mt-3 font-display text-4xl text-aura-primary">Research Context</h1>
        <p className="mt-4 max-w-4xl text-stone-600">
          AuraAR is a thesis-oriented augmented reality web application focused on
          improving confidence in online accessory shopping for females aged 18 to 25 in
          Kathmandu, Nepal. The system combines MediaPipe face tracking, a responsive
          shopping interface, and local-only facial processing to create a privacy-aware
          virtual try-on experience.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-aura-secondary/35 bg-aura-secondary/10 p-6">
            <h2 className="font-display text-2xl text-aura-primary">Research Questions</h2>
            <div className="mt-4 space-y-3 text-stone-600">
              <p>RQ1: Will AR increase confidence in online accessory purchasing?</p>
              <p>RQ2: How does AR realism influence buying decisions?</p>
              <p>RQ3: Will virtual fitting reduce hesitance and return rates?</p>
            </div>
          </article>

          <article className="rounded-3xl border border-aura-secondary/35 bg-aura-secondary/10 p-6">
            <h2 className="font-display text-2xl text-aura-primary">Hypotheses</h2>
            <div className="mt-4 space-y-3 text-stone-600">
              <p>H1: AR try-on increases user confidence before purchase.</p>
              <p>H2: Live tracking improves perceived realism over static previews.</p>
              <p>H3: Faster decision-making leads to greater purchase intent.</p>
            </div>
          </article>

          <article className="rounded-3xl border border-aura-secondary/35 bg-white p-6">
            <h2 className="font-display text-2xl text-aura-primary">Methodology</h2>
            <div className="mt-4 space-y-3 text-stone-600">
              <p>Approach: Desk-Based Agile development</p>
              <p>Sprints: Research -> Prototype -> Testing -> Refinement</p>
              <p>Evaluation: usability observation, SUS survey, and feature validation</p>
            </div>
          </article>

          <article className="rounded-3xl border border-aura-secondary/35 bg-white p-6">
            <h2 className="font-display text-2xl text-aura-primary">Project Team</h2>
            <div className="mt-4 space-y-3 text-stone-600">
              <p>Researcher: Bishruti Koirala</p>
              <p>Supervisor: Manoj Shrestha</p>
              <p>Institution: Coventry University / Softwarica College</p>
            </div>
          </article>
        </div>
      </section>

      <div className="mt-8">
        <SUSSurvey />
      </div>
    </main>
  );
}
