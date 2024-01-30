/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        projects: {
          blue: "#82AAFF",
          purple: "#C792E9",
          red: "#FF5370",
          orange: "#F88C6B",
          green: "#80CBC3",
          black: "#12111F",
          gray: "#4B4A55",
        },
      },
    },
  },
  plugins: [],
};
