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
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: { main: '#F8F9FA' },
        primary: {
          main: '#FCEFC7CC',
          light: '#FFF1C9',
          dark: '#CB942B',
          'orange-light': '#D7AA4E',
          brown: '#B28D43',
          yellow: '#FFF3DD',
          'yellow-dark': '#FFDA74',
          'orange-dark': '#8C5122',
          'orange-100': '#EDC125',
        },
        gray: {
          main: '#545454',
          light: '#404446',
          dark: '#090A0A',
        },
        colors: {
          red: {
            main: '#A1262B',
            light: '#F3DCC2',
          },
        },
        success: {
          main: '#2ECE3E',
          light: '#37BA2280',
        },
        info: {
          text: '#FFFFFF',
          light: '#CFF0FF',
        },
      },
      fontFamily: {
        khmer: ['Noto Sans Khmer', 'sans-serif'],
      },
      fontSize: {
        body: '10px',
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