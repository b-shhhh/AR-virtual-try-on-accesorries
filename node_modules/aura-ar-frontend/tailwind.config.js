/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          primary: "#1C1C1E",
          secondary: "#E8B4B8",
          accent: "#FF6F91",
          cream: "#F7F7F7",
          charcoal: "#1C1C1E"
        }
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"]
      },
      boxShadow: {
        aura: "0 20px 50px rgba(194, 24, 91, 0.12)"
      }
    }
  },
  plugins: []
};
