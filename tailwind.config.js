/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const CardFlipFunctionality = plugin(function ({ addUtilities }) {
    addUtilities({
        ".my-rotate-y-180": {
            transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
            transformStyle: "preserve-3d",
        },
        ".perspective": {
            perspective: "1000px",
        },
        ".backface-hidden": {
            backfaceVisibility: "hidden",
            -webkit-backfaceVisibility: "hidden",
        },
    });
});

module.exports = {
  content: [
      "index.html",
      "resume.html",
      "contact.html",
      "thankyou.html",
      "projects.html",
      "test.html",
      "error.html"

  ],
  theme: {
    extend: {},
  },
  plugins: [CardFlipFunctionality],
}