/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Lemones luxury palette
        emerald: {
          dark: '#1B4D3E',
          DEFAULT: '#2D6A56',
          light: '#4A8F7E',
        },
        wine: {
          dark: '#5C1A1A',
          DEFAULT: '#8B2E2E',
          light: '#A84545',
        },
        beige: {
          light: '#E8DCC4',
          DEFAULT: '#D4C4B0',
          dark: '#B5A599',
        },
        gold: {
          light: '#F4D9A6',
          DEFAULT: '#D4AF37',
          dark: '#AA8C2C',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
