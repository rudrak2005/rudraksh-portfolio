import Button from "../components/Button";
import Badge from "../components/Badge";
import { motion } from "motion/react";

import {
  fadeUp,
  fadeIn,
  staggerContainer,
} from "../lib/motion";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen
        overflow-hidden
        px-6
        pt-32
        md:px-10
        lg:px-16
      "
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--accent)]
          opacity-[0.08]
          blur-[120px]
        "
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-8rem)]
          max-w-7xl
        "
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ================= LEFT ================= */}
          <div>

            {/* Badge */}
            <motion.div variants={fadeUp}>
              <Badge>
                CSE STUDENT • DEVELOPER • BUILDER
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="
                mt-7
                max-w-5xl
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                text-[var(--text-primary)]
                sm:text-6xl
                md:text-7xl
                lg:text-[clamp(4.5rem,7vw,7rem)]
              "
            >
              BUILDING DIGITAL
              <br />

              <span className="text-[var(--text-secondary)]">
                EXPERIENCES
              </span>

              <br />

              WITH CODE & AI.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mt-8
                max-w-xl
                text-base
                leading-7
                text-[var(--text-secondary)]
                md:text-lg
                md:leading-8
              "
            >
              I build web applications, experiment with AI-powered
              products, and solve problems with C++.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button href="#work">
                View My Work →
              </Button>

              <Button
                href="https://github.com/rudrak2005"
                variant="secondary"
              >
                GitHub ↗
              </Button>
            </motion.div>

            {/* Technologies */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-5"
            >
              <span className="font-mono text-xs text-[var(--text-secondary)]">
                WEB
              </span>

              <span className="h-px w-8 bg-[var(--border)]" />

              <span className="font-mono text-xs text-[var(--text-secondary)]">
                AI
              </span>

              <span className="h-px w-8 bg-[var(--border)]" />

              <span className="font-mono text-xs text-[var(--text-secondary)]">
                C++ / DSA
              </span>
            </motion.div>

          </div>

          {/* ================= RIGHT — SPATIAL VISUAL ================= */}

          <motion.div
            variants={fadeIn}
            className="
              relative
              hidden
              min-h-[480px]
              items-center
              justify-center
              lg:flex
            "
          >

            {/* Outer Orbit */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-72
                w-72
                rounded-full
                border
                border-[rgba(91,140,255,0.18)]
              "
            />

            {/* Inner Orbit */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-56
                w-56
                rounded-full
                border
                border-[rgba(91,140,255,0.22)]
              "
            />

            {/* Glow Core */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.16, 0.24, 0.16],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-40
                w-40
                rounded-full
                bg-[var(--accent)]
                blur-3xl
              "
            />

            {/* Main Floating Object */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                relative
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-[2rem]
                border
                border-[rgba(255,255,255,0.12)]
                bg-[rgba(255,255,255,0.04)]
                shadow-[0_0_80px_rgba(91,140,255,0.12)]
                backdrop-blur-xl
              "
            >
              <span className="font-mono text-2xl text-[var(--accent)]">
                {"</>"}
              </span>
            </motion.div>

            {/* Floating Label — BUILD */}
            <motion.span
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[12%]
                top-[22%]
                font-mono
                text-xs
                text-[var(--text-secondary)]
              "
            >
              BUILD
            </motion.span>

            {/* Floating Label — AI */}
            <motion.span
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[10%]
                top-[30%]
                font-mono
                text-xs
                text-[var(--text-secondary)]
              "
            >
              AI
            </motion.span>

            {/* Floating Label — C++ */}
            <motion.span
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[23%]
                left-[20%]
                font-mono
                text-xs
                text-[var(--text-secondary)]
              "
            >
              C++
            </motion.span>

            {/* Floating Label — SHIP */}
            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[18%]
                right-[15%]
                font-mono
                text-xs
                text-[var(--text-secondary)]
              "
            >
              SHIP
            </motion.span>

          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          left-6
          hidden
          items-center
          gap-3
          md:flex
          lg:left-16
        "
      >
        <motion.span
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[var(--accent)]
          "
        />

        <span
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[var(--text-secondary)]
          "
        >
          Scroll to explore
        </span>
      </motion.div>

    </section>
  );
}