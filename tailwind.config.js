/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {},
      screens: {
        sm: '280px',
        lg: '1024px',
      },
    },
    plugins: [],
  }
  