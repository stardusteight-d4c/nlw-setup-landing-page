/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        marquee: 'marquee 90s linear infinite',
        marquee2: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      screens: {
        xsm: '500px',
      },
      backgroundImage: {
        hero: 'url(/hero-background.webp)',
        about: 'url(/about-background.jpg)',
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        jetBrainsMono: 'JetBrains Mono, monospace',
      },
    },
  },
  plugins: [],
}
