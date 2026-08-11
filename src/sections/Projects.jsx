import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) =>
      project.status === "In Development" ||
      project.status === "Completed"
  );

  const buildingProjects = projects.filter(
    (project) =>
      project.status === "Research Complete" ||
      project.status === "Idea"
  );

  return (
    <section
      id="work"
      className="
        border-t
        border-[var(--border)]
        px-6
        py-28
        md:px-10
        lg:px-16
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="03 — SELECTED WORK"
          title="Things I am building."
          description="A selection of projects that represent what I am learning, building and exploring."
        />

        {/* Featured Projects */}
        <div className="mt-16 space-y-6">

          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[rgba(91,140,255,0.35)]
              "
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

                {/* Visual */}
                <div
                  className="
                    relative
                    min-h-[320px]
                    overflow-hidden
                    border-b
                    border-[var(--border)]
                    bg-[#0C0E13]
                    lg:border-b-0
                    lg:border-r
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(91,140,255,0.12), transparent 60%)",
                    }}
                  />

                  <div className="absolute left-6 top-6">
                    <span
                      className="
                        font-mono
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-[var(--text-secondary)]
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Project Visual Placeholder */}
                  <div className="flex h-full min-h-[320px] items-center justify-center">
                    <div
                      className="
                        flex
                        h-32
                        w-32
                        items-center
                        justify-center
                        rounded-[2rem]
                        border
                        border-[rgba(91,140,255,0.25)]
                        bg-[rgba(91,140,255,0.05)]
                        shadow-[0_0_80px_rgba(91,140,255,0.08)]
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    >
                      <span className="font-mono text-sm text-[var(--accent)]">
                        {project.id === "sync-code-ai"
                          ? "</>"
                          : "C++"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-7 md:p-10">

                  <div>
                    <div className="flex items-center justify-between gap-4">

                      <span
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-[var(--border)]
                          bg-[#0C0E13]
                          px-3
                          py-1
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.12em]
                          text-[var(--text-secondary)]
                        "
                      >
                        {project.status}
                      </span>

                      <span className="font-mono text-xs text-[var(--text-secondary)]">
                        {project.id === "sync-code-ai"
                          ? "WEB / AI"
                          : "C++ / SOFTWARE"}
                      </span>

                    </div>

                    <h3
                      className="
                        mt-8
                        text-3xl
                        font-semibold
                        tracking-tight
                        md:text-4xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-xl
                        text-base
                        leading-7
                        text-[var(--text-secondary)]
                      "
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-xl
                            border
                            border-[var(--border)]
                            px-3
                            py-2
                            text-xs
                            text-[var(--text-secondary)]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

{/* Bottom */}
<div className="mt-10 flex items-center justify-between">

  <span className="font-mono text-xs text-[var(--text-secondary)]">
    PROJECT
  </span>

  <div className="flex items-center gap-5">

    <Link
      to={`/project/${project.id}`}
      className="
        text-sm
        font-medium
        text-[var(--text-primary)]
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      Case Study →
    </Link>

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="
          text-sm
          text-[var(--text-secondary)]
          transition-colors
          hover:text-[var(--text-primary)]
        "
      >
        GitHub ↗
      </a>
    )}

  </div>

</div>
    
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Building Next */}
        <div className="mt-28">

          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                BUILDING NEXT
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Ideas becoming projects.
              </h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {buildingProjects.map((project) => (
              <article
                key={project.id}
                className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[rgba(91,140,255,0.3)]
                "
              >
                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-[var(--accent)]">
                    {project.status}
                  </span>

                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {project.id === "nutrivision-ai"
                      ? "RESEARCH"
                      : "CONCEPT"}
                  </span>

                </div>

                <h4 className="mt-7 text-2xl font-semibold">
                  {project.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-xl
                        border
                        border-[var(--border)]
                        px-3
                        py-2
                        text-xs
                        text-[var(--text-secondary)]
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}