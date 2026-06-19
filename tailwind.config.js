/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e58cb8",
        secondary: "#2a151b",
        highlight: "#e58cb8",
        base: "#0a0505",
        "text-main": "#f8f5f2",
        "text-muted": "#a89f95",
        details: "#3a101b",
        highlight2: "#dccfc3"
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
