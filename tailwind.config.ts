import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
   './index.html', './client/**/*.tsx'
  ],
  theme: {
    daisyui: [
      'corporate', 'dark', 'synthwave', 'light', 'cupcake'
    ],
  },
  fontFamily: {
    sans: ['Lato', 'sans-serif'],
    manrope: ['Manrope', 'sans-serif'],
},
  plugins: [
    daisyui,
  ],
} satisfies Config;

