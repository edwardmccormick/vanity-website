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
        },
    });
});

module.exports = {
  content: [
      "*.html",
      "src/Blog/app/src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [CardFlipFunctionality],
}
