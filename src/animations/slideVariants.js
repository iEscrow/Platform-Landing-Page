const isMobile = window.innerWidth <= 768;

export const slideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};
export const keyBenefitSlideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const roadmapSlideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0 : 0.8,
      delayChildren: isMobile ? 0 : 1,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
