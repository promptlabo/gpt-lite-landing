// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',   // 青系
        secondary: '#10b981', // 緑系
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    },
  },
  plugins: [],
}

