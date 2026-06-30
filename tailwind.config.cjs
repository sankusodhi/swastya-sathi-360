module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 45px rgba(15, 118, 110, 0.18)',
      },
      colors: {
        health: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#042f2e',
        },
      },
    },
  },
  plugins: [],
}