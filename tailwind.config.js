const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--inter-font)', ...fontFamily.sans],
        serif: ['var(--inter-font)', ...fontFamily.serif],
      },
      keyframes: {
        logoAnimation: {
          '0%': {
            transform: 'scale(1) rotate(0)',
          },
          '25%': {
            transform: 'scale(0.90) rotate(0)',
          },
          '50%': {
            transform: 'scale(1) rotate(360deg)',
          },
          '75%': {
            transform: 'scale(0.90) rotate(360deg)',
          },
          '100%': {
            transform: 'scale(1) rotate(0)',
          },
        },
        slideUpEnter: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        slideUpLeave: {
          '0%': {
            opacity: 0,
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(100%)',
          },
        },
        shineAnimation: {
          '10%': {
            opacity: 1,
            top: '-30%',
            left: '-30%',
            transitionProperty: 'left, top, opacity',
            transitionDuration: '0.7s, 0.7s, 0.15s',
            transitionTimingFunction: 'ease',
          },
          '100%': {
            opacity: 0,
            top: '-30%',
            left: '-30%',
            transitionProperty: 'left, top, opacity',
          },
        },
      },
      animation: {
        slideUpEnter: 'slideUpEnter .3s ease-in-out',
        slideUpLeave: 'slideUpLeave .3s ease-in-out',
        logoAnimation: 'logoAnimation 4s ease-in-out infinite',
        shine: 'shineAnimation 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    logs: true
  },
};
