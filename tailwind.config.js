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
      colors: {
        lightSwitch: '#87ceeb',  // Light blue color
        darkSwitch: '#1e293b',   // Dark blue/black color
      },
      boxShadow: {
        'custom': '0 2px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
