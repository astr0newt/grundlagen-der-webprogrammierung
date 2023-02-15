/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    borderWidth: {
      1: "1px",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = { ".bg-aqua": { background: "aqua" } };
      addUtilities(myUtilities);
    }),
  ],
};
