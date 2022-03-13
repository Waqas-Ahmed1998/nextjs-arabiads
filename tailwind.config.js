module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'animate-pulse': 'animatepulse 10s  ease-in-out infinite',
        width: 'width 10s ease-out  infinite',
      },
      screens: {
        '2xl': '1600px',
        '3xl': '2000px',
      },
      keyframes: {
        animatepulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        width: {
          // '0%, 100%': { opacity: '0' },
          // '50%': { opacity: '.9' },
          '0%, 100%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
};
