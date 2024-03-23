/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  mode: "jit",
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
