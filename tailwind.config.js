/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B2447',
        emerald: '#00D084',
        emerald3: '#00A368',
        slate: '#576CBC',
        gray100: '#f3f4f6',
        gray500: '#6b7280',
        amber: '#f59e0b',
        red: '#ef4444',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
