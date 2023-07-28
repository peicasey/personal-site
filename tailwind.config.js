const plugin = require('tailwindcss/plugin');
const { blackA, mauve, indigo, purple, amber, yellow, lime } = require('@radix-ui/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '340px',
      ...defaultTheme.screens,
    },
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
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        fadeUp : {
          '0%': 
          { 
            transform: 'translateY(10px)',
            opacity: '0' 
          },
          '50%': {
            transform: 'translateY(14px)',
            opacity: '0'
          },
          '100%': 
          { 
            transform: 'translateY(0px)',
            opacity: '1' 
          }
        },
        scaleUp : {
          '0%': 
          { 
            transform: 'translateY(10px)',
            transform: 'scale(0)'  
          },
          '50%': {
            transform: 'translateY(14px)',
            transform: 'scale(0)' 
          },
          '100%': 
          { 
            transform: 'translateY(0px)',
            transform: 'scale(1)' 
          }
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
      pulse: '0.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      // fadeUp25: 'fadeUp 0.25s ease-out',
      // fadeUp50: 'fadeUp 0.5s ease-out',
      // fadeUp75: 'fadeUp 0.75s ease-out',
      // fadeUp100: 'fadeUp 1s ease-out',
      // fadeUp125: 'fadeUp 1.25s ease-out',
      // fadeUp150: 'fadeUp 1.5s ease-out',
      // fadeUp175: 'fadeUp 1.75s ease-out',
      // fadeUp200: 'fadeUp 2s ease-out',
      // fadeUp225: 'fadeUp 2.25s ease-out',
      // fadeUp250: 'fadeUp 2.5s ease-out',
      // fadeUp275: 'fadeUp 2.75s ease-out',
      // fadeUp300: 'fadeUp 3s ease-out',
      // fadeUp325: 'fadeUp 3.25s ease-out',
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
