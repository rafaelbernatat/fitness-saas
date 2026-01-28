/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern vibrant palette
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Dark theme (escuro melhor)
        dark: {
          background: '#0f172a',
          surface: '#1e293b',
          elevated: '#0f172a',
          'elevated-hover': '#1e293b',
          text: {
            primary: '#f8fafc',
            secondary: '#cbd5e1',
            tertiary: '#94a3b8',
            muted: '#64748b',
          },
          border: {
            DEFAULT: '#1e293b',
            subtle: '#0f172a',
          },
        },
        // Light theme (claro melhor)
        light: {
          background: '#f8fafc',
          surface: '#ffffff',
          elevated: '#ffffff',
          'elevated-hover': '#f1f5f9',
          text: {
            primary: '#0f172a',
            secondary: '#334155',
            tertiary: '#64748b',
            muted: '#94a3b8',
          },
          border: {
            DEFAULT: '#e2e8f0',
            subtle: '#f1f5f9',
          },
        },
        // Vibrant accent colors
        accent: {
          blue: '#3b82f6',
          red: '#ef4444',
          yellow: '#eab308',
          green: '#22c55e',
          purple: '#a855f7',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.7rem', { lineHeight: '1rem' }],
        'sm': ['0.8rem', { lineHeight: '1.2rem' }],
        'base': ['0.9rem', { lineHeight: '1.4rem' }],
        'lg': ['1rem', { lineHeight: '1.6rem' }],
        'xl': ['1.1rem', { lineHeight: '1.6rem' }],
        '2xl': ['1.3rem', { lineHeight: '1.8rem' }],
        '3xl': ['1.6rem', { lineHeight: '2rem' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0, 0, 0, 0.25)',
        'medium': '0 16px 48px rgba(0, 0, 0, 0.35)',
        'glow': '0 0 40px rgba(20, 184, 166, 0.5)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.2)',
        'float': '0 16px 48px rgba(0, 0, 0, 0.3)',
        'float-strong': '0 24px 64px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
