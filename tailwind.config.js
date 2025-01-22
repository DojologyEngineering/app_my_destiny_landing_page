/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        background: { main: '#F8F9FA' },
        primary: {
          main: '#0057FF',
          light: '#669ef2',
          dark: '#0D6DFD',
          900: '#2B35CA',
        },
        gray: {
          main: '#6C7072',
          light: '#404446',
          dark: '#090A0A',
          10: '#F7F9FA',
          20: '#F2F4F5',
          50: '#979C9E',
          80: '#404446',
          70: '#6C7072',
          90: '#303437',
          100: '#202325',
        },
        success: {
          main: '#2ECE3E',
          light: '#37BA2280',
        },
        info: {
          text: '#FFFFFF',
        },
        dark: {
          main: '#090A0A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        quarto: ['Quarto', 'serif'],
        google: ['Google Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        // Custom sizes
        title: '40px', // For titles
        subtitle: '20px', // For subtitles
        typography: '58px',
        heading2: '32px',
      },

      animation: {
        'spin-slow': 'spin 10s linear infinite', // Custom spin animation
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
