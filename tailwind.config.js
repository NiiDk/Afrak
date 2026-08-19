/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#111111',
          800: '#161616',
          700: '#222222',
          600: '#333333',
        },
        alabaster: {
          50: '#FFFFFF',
          100: '#FAF9F5',
          200: '#F4F2EB',
          300: '#E8E5DC',
          400: '#D6D2C4',
        },
        gold: {
          300: '#F3E19B',
          400: '#E6C86E',
          500: '#D4AF37', // Primary Luxury Gold
          600: '#B89325',
          700: '#94741B',
          800: '#6B5212',
        },
        bronze: {
          400: '#C5A880',
          500: '#A98960',
          600: '#8A6D47',
        },
        champagne: {
          100: '#FAF5ED',
          200: '#F4E9D8',
          300: '#EAD7BC',
          400: '#DEC19B',
        },
        couture: {
          crimson: '#8B1527',
          burgundy: '#5B0E1B',
          emerald: '#0F382E',
          slate: '#1E252B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E19B 0%, #D4AF37 50%, #94741B 100%)',
        'luxury-dark': 'radial-gradient(ellipse at top, #1A1A1A 0%, #0A0A0A 60%, #050505 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
      }
    },
  },
  plugins: [],
}
