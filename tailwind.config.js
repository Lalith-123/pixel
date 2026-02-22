/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tail: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(2.8)",
            opacity: "0",
          },
        },
      },
      animation: {
        tail: "tail 1.5s ease-out infinite",
      },
    },
  },
  plugins: [],
};
