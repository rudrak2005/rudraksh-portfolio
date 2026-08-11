import SectionHeading from "../components/SectionHeading";

export default function GitHub() {
  return (
    <section
      id="github"
      className="border-t border-[var(--border)] px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="06 — GITHUB"
          title="More code, experiments and progress."
          description="My GitHub contains projects, experiments and programming work as I continue building and learning."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-[1fr_auto]">

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">

            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              PROFILE
            </p>

            <h3 className="mt-5 text-3xl font-semibold">
              @rudrak2005
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              Explore my repositories, programming projects and
              ongoing development work.
            </p>

          </div>

          <a
            href="https://github.com/rudrak2005"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              min-h-[160px]
              items-center
              justify-center
              rounded-3xl
              bg-[var(--text-primary)]
              px-8
              text-center
              font-medium
              text-black
              transition-transform
              duration-300
              hover:-translate-y-1
            "
          >
            Visit GitHub ↗
          </a>

        </div>

      </div>
    </section>
  );
}