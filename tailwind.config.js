/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend:
    {
      fontFamily: {
        atkins: ['Atkinson Hyperlegible', 'sans-serif']
      },
    },
  },
  plugins: [
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
          'text-decoration-color': '#d9f99d',
        },
        '.dark .underline': {
          'textDecoration': 'underline',
          'text-decoration-style': 'dotted',
          'text-decoration-thickness': '2px',
          // 'text-decoration-color': '#d9f99d',
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

