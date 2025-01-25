export const slideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
