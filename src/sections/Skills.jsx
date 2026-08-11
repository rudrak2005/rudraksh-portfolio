import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--border)] px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="02 — TOOLKIT"
          title="Technologies I use to build."
          description="A practical stack focused on development, problem solving and experimentation."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="
                group
                rounded-3xl
                border border-[var(--border)]
                bg-[var(--surface)]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[rgba(91,140,255,0.35)]
              "
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                  {group.category}
                </p>

                <span className="text-xs text-[var(--text-secondary)]">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border border-[var(--border)]
                      px-3 py-2
                      text-sm
                      text-[var(--text-secondary)]
                      transition-colors
                      duration-300
                      group-hover:text-[var(--text-primary)]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}