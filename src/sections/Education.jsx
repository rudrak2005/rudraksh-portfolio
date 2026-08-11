import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-[var(--border)] px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="05 — EDUCATION"
          title="Learning the fundamentals behind the work."
        />

        <div className="mt-14 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                B.TECH
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Computer Science & Engineering
              </h3>

              <p className="mt-3 text-[var(--text-secondary)]">
                GL Bajaj Institute of Management
              </p>

              <p className="mt-1 text-[var(--text-secondary)]">
                Greater Noida
              </p>
            </div>

            <div className="md:text-right">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                CURRENT YEAR
              </p>

              <p className="mt-4 text-3xl font-semibold">
                2nd Year
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}