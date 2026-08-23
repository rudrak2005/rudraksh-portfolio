import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "DSA", href: "#dsa" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className="
          relative
          mx-auto
          max-w-7xl
          rounded-2xl
          border border-[var(--border)]
          bg-[rgba(8,9,11,0.78)]
          px-5
          backdrop-blur-xl
        "
      >
        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="
              text-sm
              font-semibold
              tracking-[0.12em]
              text-[var(--text-primary)]
            "
          >
            RUDRAKSH
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}

            <a href="/Rudraksh Kumar.pdf" target="_blank" rel="noreferrer" className="social-link">
              Resume ↓
            </a>
          </div>

          {/* Desktop Contact */}
          <a
            href="mailto:rudrakk2005@gmail.com"
            className="
              hidden
              rounded-xl
              bg-[var(--text-primary)]
              px-4
              py-2
              text-sm
              font-medium
              text-black
              transition-transform
              duration-300
              hover:-translate-y-0.5
              md:block
            "
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--border)]
              text-[var(--text-primary)]
              md:hidden
            "
          >
            <span className="text-lg">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-[var(--border)] py-4">

                <div className="flex flex-col">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        text-[var(--text-secondary)]
                        transition-colors
                        hover:bg-[var(--surface)]
                        hover:text-[var(--text-primary)]
                      "
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  <motion.a
                    href="/Rudraksh_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: links.length * 0.04 }}
                    className="rounded-xl px-3 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
                  >
                    Resume
                  </motion.a>

                  <a
                    href="mailto:rudrakk2005@gmail.com"
                    onClick={closeMenu}
                    className="
                      mt-2
                      rounded-xl
                      bg-[var(--text-primary)]
                      px-4
                      py-3
                      text-center
                      text-sm
                      font-medium
                      text-black
                    "
                  >
                    Contact Me
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
