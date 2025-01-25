export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeInLeftToRight = {
  hidden: { opacity: 0, x: -350 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInRightToLeft = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInTopToBottom = {
  hidden: { opacity: 0, y: -150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInBottomToTop = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
