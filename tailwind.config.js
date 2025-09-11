/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
module.exports = {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-outfit)', 'system-ui', 'sans-serif'],
        grotesk: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      gridTemplateColumns: {
        cartTemplate: '40% 20% 20% 20%',
        ordersTemplate: '25% 18% 18% 19% 20%'
      },
      colors: {
        lightSwitch: '#87ceeb',  
        darkSwitch: '#1e293b', 
      },
      boxShadow: {
        'custom': '0 2px 5px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0px 3px 15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [nextui()],
};
