const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      keyframes: {
        shrinkAndExpand: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        shrinkAndExpand: 'shrinkAndExpand 0.4s ease-in-out',
      },
      boxShadow: {
        shadowSm: 'var(--bg-shadow-sm)',
        shadowMd: 'var(--bg-shadow-md)',
        shadowLg: 'var(--bg-shadow-lg)'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': 'var(--font-size-3xl)',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        black: 'var(--color-black)',
        grey: 'var(--color-gray-800)',
        teal: 'var(--color-teal)',
        tealBright: 'var(--color-teal-bright)',
        titledCream: 'var(--color-tinted-cream)'
      }
    },
  },
  plugins: [
    typography()
  ],
}

