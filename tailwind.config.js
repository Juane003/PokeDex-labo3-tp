/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      keyframes: {
        textGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "text-gradient": "textGradient 3s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
