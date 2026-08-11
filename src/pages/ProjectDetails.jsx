import { Link, useParams } from "react-router-dom";
import CaseStudySection from "../components/CaseStudySection";
import { projectDetails } from "../data/projectDetails";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projectDetails[slug];

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-semibold">
            Project not found.
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block text-[var(--accent)]"
          >
            ← Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="px-6 pb-24 pt-36 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/"
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.15em]
              text-[var(--text-secondary)]
              transition-colors
              hover:text-[var(--text-primary)]
            "
          >
            ← Back to work
          </Link>

          <div className="mt-14 max-w-5xl">

            <div className="flex flex-wrap items-center gap-3">
              <span
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  px-3
                  py-1
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-[var(--text-secondary)]
                "
              >
                {project.status}
              </span>

              <span
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-[var(--accent)]
                "
              >
                {project.category}
              </span>
            </div>

            <h1
              className="
                mt-8
                text-6xl
                font-semibold
                leading-[0.9]
                tracking-[-0.05em]
                md:text-8xl
              "
            >
              {project.title}
            </h1>

            <p
              className="
                mt-8
                max-w-3xl
                text-xl
                leading-8
                text-[var(--text-secondary)]
                md:text-2xl
              "
            >
              {project.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  bg-[var(--text-primary)]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                View GitHub ↗
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    transition-colors
                    hover:bg-[var(--surface)]
                  "
                >
                  Live Demo ↗
                </a>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* CASE STUDY */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <CaseStudySection
            eyebrow="01 — OVERVIEW"
            title="What is it?"
          >
            <p>{project.overview}</p>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="02 — PROBLEM"
            title="Why build it?"
          >
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="03 — IDEA"
            title="The thinking behind it."
          >
            <p>{project.idea}</p>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="04 — SOLUTION"
            title="How I approach the problem."
          >
            <p>{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="05 — ARCHITECTURE"
            title="System direction."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {project.architecture.map((item, index) => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-5
                  "
                >
                  <span className="font-mono text-xs text-[var(--accent)]">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-sm text-[var(--text-primary)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="06 — TECHNOLOGY"
            title="Tools and technologies."
          >
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    px-4
                    py-2
                    text-sm
                    text-[var(--text-secondary)]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="07 — CHALLENGES"
            title="What I am solving."
          >
            <ul className="space-y-4">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />

                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="08 — CURRENT STATUS"
            title="Where the project is now."
          >
            <p>{project.currentStatus}</p>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="09 — LEARNING"
            title="What this project is teaching me."
          >
            <p>{project.learning}</p>
          </CaseStudySection>

          {/* FINAL CTA */}
          <section className="border-t border-[var(--border)] py-24">
            <div
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-8
                md:p-12
              "
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                PROJECT
              </p>

              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                Explore the project.
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl
                    bg-[var(--text-primary)]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-black
                  "
                >
                  GitHub ↗
                </a>

                <Link
                  to="/"
                  className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    px-5
                    py-3
                    text-sm
                  "
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>

    </main>
  );
}