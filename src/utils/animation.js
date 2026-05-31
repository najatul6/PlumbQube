export const fadeUp = {
  initial: {
    opacity: 0,
    y: 80,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -80,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 80,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
  },
};

export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
  },
};