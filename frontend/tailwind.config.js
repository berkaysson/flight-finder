import { lightTheme } from "./src/utils/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...lightTheme.colors,
      },
    },
  },
  plugins: [],
};
