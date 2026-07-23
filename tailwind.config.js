/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B2D5B",
          "blue-dark": "#071D3C",
          "blue-light": "#134280",
          steel: "#556270",
          "steel-dark": "#3D4853",
          orange: "#F58220",
          "orange-hover": "#E07114",
          surface: "#F7F9FC",
          text: "#111827",
          muted: "#6B7280",
          border: "#E5E7EB",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      borderRadius: {
        'card': '22px',
        'xl-large': '28px',
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(11, 45, 91, 0.08)',
        'glass-hover': '0 30px 60px rgba(245, 130, 32, 0.15)',
        'premium': '0 10px 30px -5px rgba(11, 45, 91, 0.08), 0 4px 12px -2px rgba(11, 45, 91, 0.04)',
        'orange': '0 10px 25px -5px rgba(245, 130, 32, 0.4)',
      },
      maxWidth: {
        'container': '1400px',
      }
    },
  },
  plugins: [],
}
