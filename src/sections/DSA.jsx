import SectionHeading from "../components/SectionHeading";

const platforms = [
  {
    name: "LeetCode",
    username: "Rudrak2005",
    description:
      "Algorithm and data-structure practice focused on improving problem-solving skills.",
    link: "https://leetcode.com/u/Rudrak2005/",
  },
  {
    name: "Codeforces",
    username: "rudrakk2005",
    description:
      "Competitive programming practice and algorithmic problem solving.",
    link: "https://codeforces.com/profile/rudrakk2005",
  },
  {
    name: "GeeksforGeeks",
    username: "rudrak667k",
    description:
      "DSA learning, practice and programming fundamentals.",
    link: "https://www.geeksforgeeks.org/profile/rudrak667k",
  },
];

const topics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Recursion",
  "Sorting",
  "Searching",
  "Trees",
  "Graphs",
  "Dynamic Programming",
];

export default function DSA() {
  return (
    <section
      id="dsa"
      className="border-t border-[var(--border)] px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="04 — PROBLEM SOLVING"
          title="I build with code. I think with algorithms."
          description="Regular problem solving is part of my development journey, helping me strengthen logic, algorithms and programming fundamentals."
        />

        {/* Stats */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              PROBLEMS
            </p>

            <p className="mt-5 text-4xl font-semibold">
              100+
            </p>

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Across multiple platforms
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              PRIMARY LANGUAGE
            </p>

            <p className="mt-5 text-4xl font-semibold">
              C++
            </p>

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Main language for DSA
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              FOCUS
            </p>

            <p className="mt-5 text-4xl font-semibold">
              DSA
            </p>

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Problem solving & algorithms
            </p>
          </div>

        </div>

        {/* Platforms */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3">

          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noreferrer"
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
              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                    PLATFORM
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {platform.name}
                  </h3>
                </div>

                <span className="text-[var(--text-secondary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>

              </div>

              <p className="mt-2 font-mono text-xs text-[var(--text-secondary)]">
                @{platform.username}
              </p>

              <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)]">
                {platform.description}
              </p>
            </a>
          ))}

        </div>

        {/* Topics */}
        <div className="mt-16">

          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            TOPICS
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-4 py-2.5
                  text-sm
                  text-[var(--text-secondary)]
                "
              >
                {topic}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}