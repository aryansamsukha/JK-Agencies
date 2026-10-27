/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050505",
          secondary: "#0B0B0B",
        },
        surface: {
          card: "#111111",
          elevated: "#171717",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#A4A4A4",
        },
        brand: {
          red: "#C1121F",
          brightRed: "#E01B2E",
          amberGlow: "rgba(235, 175, 110, 0.15)",
          warmLight: "#FCE5C8",
          redGlow: "rgba(193, 18, 31, 0.15)",
          redGlowBright: "rgba(224, 27, 46, 0.25)",
        },
        luxuryBorder: "rgba(255, 255, 255, 0.08)",
        luxuryBorderHover: "rgba(255, 255, 255, 0.20)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"SF Mono"', '"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(193, 18, 31, 0.12) 0%, transparent 70%)',
        'gradient-dark': 'linear-gradient(to bottom, rgba(5, 5, 5, 0.8) 0%, #050505 100%)',
        'red-gradient': 'linear-gradient(135deg, #C1121F 0%, #E01B2E 100%)',
      },
      boxShadow: {
        'red-soft': '0 0 25px -5px rgba(193, 18, 31, 0.25)',
        'red-strong': '0 0 35px -2px rgba(224, 27, 46, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '16px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
