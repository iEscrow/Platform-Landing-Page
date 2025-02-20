const isMobile = window.innerWidth <= 768;

export const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
export const keyBenefitsVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const roadmapItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: custom === 0 || isMobile ? 0 : custom === 1 ? 0.4 : 0.8,
    },
  }),
};
