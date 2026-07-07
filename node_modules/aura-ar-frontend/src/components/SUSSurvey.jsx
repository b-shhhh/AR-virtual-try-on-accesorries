const questions = [
  "I think that I would like to use AuraAR frequently.",
  "I found AuraAR unnecessarily complex.",
  "I thought AuraAR was easy to use.",
  "I think that I would need technical support to use AuraAR.",
  "I found the AR try-on features well integrated.",
  "I thought there was too much inconsistency in the system.",
  "I would imagine that most users would learn to use AuraAR quickly.",
  "I found the system cumbersome to use.",
  "I felt confident using the AR try-on experience.",
  "I needed to learn a lot of things before I could get going with AuraAR."
];

export default function SUSSurvey() {
  return (
    <section className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-aura">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Evaluation</p>
        <h2 className="mt-3 font-display text-3xl text-aura-primary">
          SUS Survey Outline
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600">
          This section prepares the System Usability Scale for the evaluation phase of
          the thesis. Participants can rate each statement from 1 to 5 after using the
          live try-on flow.
        </p>
      </div>

      <div className="space-y-3">
        {questions.map((question, index) => (
          <div
            key={question}
            className="rounded-2xl border border-aura-secondary/30 bg-aura-secondary/8 p-4"
          >
            <p className="text-sm font-semibold text-aura-primary">
              Q{index + 1}. {question}
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Scale: 1 = Strongly disagree, 5 = Strongly agree
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
