export const zoomItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8, // Comienza más pequeño (80% de su tamaño)
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
