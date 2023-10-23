/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
      
    },
  },
  plugins: [require("flowbite/plugin")],
};
