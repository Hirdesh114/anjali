/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          50: '#fff5f7',
          100: '#ffe4e8',
          200: '#fecdd6',
          300: '#fea3b4',
          400: '#f9708b',
          500: '#f04369',
          600: '#db2756',
          rose: '#fff1f2',
          blush: '#ffd1dc',
          cream: '#fffdfa',
          lavender: '#f6f0ff',
          champagne: '#fdf6ee',
        },
        roseGold: '#b76e79',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(220, 100, 130, 0.15), 0 8px 10px -6px rgba(220, 100, 130, 0.1)',
        'glow-pink': '0 0 25px rgba(244, 114, 182, 0.45)',
        'soft': '0 4px 20px -2px rgba(240, 140, 160, 0.15)',
        'floating': '0 20px 30px -10px rgba(230, 120, 150, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.85' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      }
    },
  },
  plugins: [],
}
