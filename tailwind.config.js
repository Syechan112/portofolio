/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121212',
          card: '#1A1A1A',
          border: '#2A2A2A',
          surface: '#222222',
        },
        light: {
          DEFAULT: '#F8F9FA',
          card: '#FFFFFF',
          border: '#EAEAEA',
        },
        accent: {
          DEFAULT: '#FF5722',
          hover: '#FF4500',
          glow: 'rgba(255, 87, 34, 0.25)',
        },
        custom: {
          dark: '#111111',
          muted: '#666666',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
