/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xsm': '500px',
      },
      backgroundImage: {
        app: 'url(/background.webp)'
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        jetBrainsMono: 'JetBrains Mono, monospace',
      },
    },
  },
  plugins: [],
}
