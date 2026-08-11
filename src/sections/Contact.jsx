import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = form.subject || "Portfolio Contact";

    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    const mailtoUrl =
      `mailto:rudrakk2005@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="
        border-t
        border-[var(--border)]
        px-6
        py-28
        md:px-10
        md:py-36
        lg:px-16
      "
    >
      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.22em]
              text-[var(--accent)]
            "
          >
            07 — CONTACT
          </p>

          <h2
            className="
              mx-auto
              mt-5
              inline-block
              border
              border-[var(--text-primary)]
              px-7
              py-4
              text-3xl
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[var(--text-primary)]
              md:px-10
              md:py-5
              md:text-4xl
            "
          >
            Contact
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-sm
              leading-7
              text-[var(--text-secondary)]
              md:text-base
            "
          >
            Have an idea, opportunity, collaboration, or just want
            to connect? Send me a message.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--border)]" />

            <span className="font-mono text-xs text-[var(--accent)]">
              /// 
            </span>

            <span className="h-px w-10 bg-[var(--border)]" />
          </div>
        </motion.div>

        {/* ================= FORM ================= */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-16 space-y-10 md:mt-20"
        >

          {/* Name */}
          <div className="group relative">
            <label
              htmlFor="name"
              className="
                mb-3
                block
                font-mono
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[var(--text-secondary)]
              "
            >
              Your Name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="
                w-full
                border-b
                border-[var(--border)]
                bg-transparent
                px-0
                pb-4
                text-base
                text-[var(--text-primary)]
                outline-none
                placeholder:text-[var(--text-secondary)]
                focus:border-[var(--accent)]
                transition-colors
                duration-300
              "
            />
          </div>

          {/* Email */}
          <div className="group relative">
            <label
              htmlFor="email"
              className="
                mb-3
                block
                font-mono
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[var(--text-secondary)]
              "
            >
              Your Email *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="
                w-full
                border-b
                border-[var(--border)]
                bg-transparent
                px-0
                pb-4
                text-base
                text-[var(--text-primary)]
                outline-none
                placeholder:text-[var(--text-secondary)]
                focus:border-[var(--accent)]
                transition-colors
                duration-300
              "
            />
          </div>

          {/* Subject */}
          <div className="group relative">
            <label
              htmlFor="subject"
              className="
                mb-3
                block
                font-mono
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[var(--text-secondary)]
              "
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
              className="
                w-full
                border-b
                border-[var(--border)]
                bg-transparent
                px-0
                pb-4
                text-base
                text-[var(--text-primary)]
                outline-none
                placeholder:text-[var(--text-secondary)]
                focus:border-[var(--accent)]
                transition-colors
                duration-300
              "
            />
          </div>

          {/* Message */}
          <div className="group relative">
            <label
              htmlFor="message"
              className="
                mb-3
                block
                font-mono
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[var(--text-secondary)]
              "
            >
              Your Message *
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="
                w-full
                resize-none
                border-b
                border-[var(--border)]
                bg-transparent
                px-0
                pb-4
                text-base
                leading-7
                text-[var(--text-primary)]
                outline-none
                placeholder:text-[var(--text-secondary)]
                focus:border-[var(--accent)]
                transition-colors
                duration-300
              "
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <motion.button
              type="submit"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                border
                border-[var(--text-primary)]
                px-10
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[var(--text-primary)]
                transition-all
                duration-300
                hover:bg-[var(--text-primary)]
                hover:text-black
              "
            >
              Send Message →
            </motion.button>
          </div>

        </motion.form>

        {/* ================= SOCIAL LINKS ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-20
            border-t
            border-[var(--border)]
            pt-8
          "
        >
          <p
            className="
              mb-5
              text-center
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--text-secondary)]
            "
          >
            Find me online
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">

            <a
              href="https://github.com/rudrak2005"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/rudraksh-kumar-8b2a88413"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://www.instagram.com/rudraksh__kumar__01"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              Instagram ↗
            </a>

            <a
              href="https://x.com/Rudrakk2005"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              X / Twitter ↗
            </a>

            <a
              href="https://www.reddit.com/u/rudrak2005/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              Reddit ↗
            </a>

            <a
              href="https://www.facebook.com/share/1DTBhGD6WU/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              Facebook ↗
            </a>

            <a
              href="mailto:rudrakk2005@gmail.com"
              className="social-link"
            >
              Email
            </a>

          </div>
        </motion.div>

        {/* Direct Email */}
        <p className="mt-8 text-center text-xs text-[var(--text-secondary)]">
          Or email directly at{" "}
          <a
            href="mailto:rudrakk2005@gmail.com"
            className="text-[var(--text-primary)] underline underline-offset-4"
          >
            rudrakk2005@gmail.com
          </a>
        </p>

      </div>
    </section>
  );
}
