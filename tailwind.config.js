const plugin = require('tailwindcss/plugin');
const { blackA, mauve, violet, indigo, purple, amber, yellow, lime } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        atkins: ['Atkinson Hyperlegible', 'sans-serif']
      },
      colors: {
        ...blackA,
        ...mauve,
        // ...violet,
        ...yellow,
        ...lime,
        ...purple,
        ...indigo,
        ...amber,
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
    animation: {
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 200ms ease',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 250ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease',
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
            'textDecoration': 'underline',
            'text-decoration-style': 'dotted',
            'text-decoration-thickness': '2px',
            'text-decoration-color': '#4d7c0f',
        },
        '.underline:hover': {
          'textDecoration': 'underline',
          'text-decoration-style': 'solid',
          'text-decoration-thickness': '2px',
          'text-decoration-color': '#a9b11b',
        },
        '.dark .underline': {
          'textDecoration': 'underline',
          'text-decoration-style': 'dotted',
          'text-decoration-thickness': '2px',
          'text-decoration-color': '#d9f99d',
          
        },
        '.dark .underline:hover': {
          'textDecoration': 'underline',
          'text-decoration-style': 'solid',
          'text-decoration-thickness': '2px',
          'text-decoration-color': '#84cc16',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}

// underline decoration-dotted text-lime-700 hover:text-[#a9b11b] dark:text-lime-200 dark:hover:text-lime-300
