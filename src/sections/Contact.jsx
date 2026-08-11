export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-4xl">

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            07 — CONTACT
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              md:text-7xl
            "
          >
            Let's build something
            <span className="text-[var(--text-secondary)]">
              {" "}useful.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Open to internship opportunities, collaborations,
            interesting projects and learning opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <a
              href="mailto:rudrakk2005@gmail.com"
              className="
                rounded-xl
                bg-[var(--text-primary)]
                px-5 py-3
                text-sm
                font-medium
                text-black
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              Email Me →
            </a>

            <a
              href="https://www.linkedin.com/in/rudraksh-kumar-8b2a88413"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                border
                border-[var(--border)]
                px-5 py-3
                text-sm
                font-medium
                transition-colors
                duration-300
                hover:bg-[var(--surface)]
              "
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/rudrak2005"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                border
                border-[var(--border)]
                px-5 py-3
                text-sm
                font-medium
                transition-colors
                duration-300
                hover:bg-[var(--surface)]
              "
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}