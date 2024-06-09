/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['var(--font-grotesk)'],
        poppins: ['var(--font-poppins)'],

      },
      boxShadow: {
        'custom': '0 2px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
