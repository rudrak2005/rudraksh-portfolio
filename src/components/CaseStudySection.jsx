export default function CaseStudySection({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="border-t border-[var(--border)] py-20">
      <div className="grid gap-8 md:grid-cols-[0.3fr_0.7fr]">

        <div>
          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.18em]
              text-[var(--accent)]
            "
          >
            {eyebrow}
          </p>
        </div>

        <div>
          <h2
            className="
              text-3xl
              font-semibold
              tracking-tight
              md:text-5xl
            "
          >
            {title}
          </h2>

          <div className="mt-7 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            {children}
          </div>
        </div>

      </div>
    </section>
  );
}