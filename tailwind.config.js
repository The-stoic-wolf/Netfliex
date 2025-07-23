/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./public/index.html",          // ✅ Add this line for the public folder HTML
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

