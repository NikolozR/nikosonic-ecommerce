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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'neutral-7': '#141718',
        'neutral-6': '#232627',
        'neutral-5': '#343839',
        'neutral-4': '#6C7275',
        'neutral-3': '#E8ECEF',
        'neutral-2': '#F3F5F7',
        'neutral-1': '#FEFEFE'
      },
      boxShadow: {
        'custom': '0 2px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
