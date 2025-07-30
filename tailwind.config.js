// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mali: {
          green: '#14B8A6',
          yellow: '#FCD34D',
          red: '#EF4444',
        },
        china: {
          red: '#DC2626',
          gold: '#F59E0B',
        }
      },
    },
  },
  plugins: [],
}