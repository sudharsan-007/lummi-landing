/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      colors: {
        brand: {
          yellow: '#ffc72c',
          blue: '#1e3a8a',
          orange: '#f97316',
          dark: '#1f2937',
        },
        primary: {
          DEFAULT: '#ffc72c',
          foreground: '#1f2937',
        },
        secondary: {
          DEFAULT: '#1e3a8a',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f97316',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      },
    },
  },
  plugins: [],
}