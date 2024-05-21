/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        'Gray': '#5A5959',
        'Red': '#D01C28',
        'Yellow-200': '#FFEAAE',
        'Purple': '#5F00D9',
        'White': '#FFFFFF',
        'Main': '#F3F3F7'
      }

    },
  },
  plugins: [],
};
