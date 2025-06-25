/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Crucial for the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS/TS/JSX/TSX files in the 'src' directory and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
