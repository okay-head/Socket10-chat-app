/** @type {import('tailwindcss').Config} */
import tailwindForms from '@tailwindcss/forms'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '470px',
      },
    },
    colors: {
      light: {
        gray: {
          100: 'hsl(0, 0%, 85%)',
          200: 'hsl(0, 0%, 78%)',
          300: 'hsl(0, 0%, 70%)',
          600: 'hsl(0, 0%, 53%)',
        },
        'text-black': {
          900: 'hsl(204, 9%, 11%)',
          600: 'hsl(203, 8%, 30%)',
        },
      },
      dark: {
        blue: {
          900: '#1f2128',
          600: '#242731',
          100: '#2b2f3d',
        },
        'text-white': {
          900: 'hsl(0, 0%, 94%)',
          600: 'hsl(0, 0%, 70%)',
        },
      },
      accent: {
        lavender: 'hsl(266, 100%, 64%)',
        'lavender-darker': 'hsl(266, 100%, 60%)',
      },
    },
    plugins: [tailwindForms],
  },
}
