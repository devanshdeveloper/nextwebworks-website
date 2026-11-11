// site/lib/motion.js - Ultra Motion Tier Dual Tokens (GSAP + CSS)

export const motion = {
  duration: {
    instant: 0.15,
    fast: 0.25,
    normal: 0.45,
    slow: 0.75,
    deliberate: 1.2,
  },
  ease: {
    default: 'power3.out',
    smooth: 'power2.out',
    expressive: 'expo.out',
    elastic: 'elastic.out(1, 0.4)',
    inOut: 'power2.inOut',
  },
  css: {
    easeDefault: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeSmooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    easeExpressive: 'cubic-bezier(0.19, 1, 0.22, 1)',
    transitionDefault: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
    transitionTransform: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
    transitionColors: 'color 200ms ease, background-color 200ms ease, border-color 200ms ease',
  },
  hover: {
    liftY: -2,
    borderGlow: 'rgba(37, 99, 235, 0.4)',
  },
};
