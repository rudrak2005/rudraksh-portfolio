import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="01 — ABOUT"
          title="Building with curiosity, learning by doing."
          description="I am a Computer Science & Engineering student focused on building useful software and continuously improving my problem-solving skills."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Main Story */}
          <div
            className="
              rounded-3xl
              border border-[var(--border)]
              bg-[var(--surface)]
              p-7
              md:p-10
            "
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              WHO I AM
            </p>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              <p>
                I am a B.Tech Computer Science & Engineering student
                interested in web development, AI-powered products,
                C++ and problem solving.
              </p>

              <p>
                I enjoy turning ideas into practical projects and
                learning through the process of designing, building,
                debugging and improving software.
              </p>

              <p>
                Alongside development, I practice DSA and competitive
                programming to strengthen my programming fundamentals
                and algorithmic thinking.
              </p>
            </div>
          </div>

          {/* Focus */}
          <div className="grid gap-6">

            <div
              className="
                rounded-3xl
                border border-[var(--border)]
                bg-[var(--surface)]
                p-7
              "
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                CURRENT FOCUS
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Web Development
                </li>

                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  AI-based Projects
                </li>

                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  C++ & DSA
                </li>

                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Competitive Programming
                </li>
              </ul>
            </div>

            <div
              className="
                rounded-3xl
                border border-[var(--border)]
                bg-[var(--surface)]
                p-7
              "
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                EXPLORING NEXT
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                Game Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Exploring game development as a future creative
                engineering direction.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}