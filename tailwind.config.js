/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ebold: ["ClashDisplay-Bold", "sans-serif"],
        enormal: ["ClashDisplay-Regular", "sans-serif"],
        eregular: ["ClashDisplay-Regular", "sans-serif"],
        esemibold: ["ClashDisplay-SemiBold", "sans-serif"],
        elight: ["ClashDisplay-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
