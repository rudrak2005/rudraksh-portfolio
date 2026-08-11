export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-[var(--text-primary)]">
              RUDRAKSH
            </p>

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Building with code, AI and curiosity.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-5 gap-y-3">

            {/* GitHub */}
            <a
              href="https://github.com/rudrak2005"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              GitHub ↗
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rudraksh-kumar-8b2a88413"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LinkedIn ↗
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rudraksh__kumar__01"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              Instagram ↗
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/Rudrakk2005"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              X / Twitter ↗
            </a>

            {/* Reddit */}
            <a
              href="https://www.reddit.com/u/rudrak2005/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              Reddit ↗
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1DTBhGD6WU/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              Facebook ↗
            </a>

            {/* Email */}
            <a
              href="mailto:rudrakk2005@gmail.com"
              className="social-link"
            >
              Email
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Rudraksh Kumar
          </p>

          <p className="font-mono">
            BUILT WITH REACT
          </p>

        </div>

      </div>
    </footer>
  );
}