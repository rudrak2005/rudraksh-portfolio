export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};