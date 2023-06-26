const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-45": {
      transform: "rotate3d(0, 1, 0, 45deg)",
    },
    ".rotate-x-45": {
      transform: "rotate3d(0, 1, 0, -45deg)",
    },
  });
});

const perspective = plugin(function ({ addUtilities }) {
  addUtilities({
    ".perspective": {
      perspective: "800px",
    },
  });
});

export default {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts}"],
  darkMode: "class",
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
  plugins: [perspective, rotateY],
};
