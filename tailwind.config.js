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
          navy: {
            DEFAULT: '#0B1B3D', // OCS / International enterprise primary dark navy
            dark: '#060F22',
            light: '#142854',
            surface: '#F4F7FB',
          },
          charcoal: {
            DEFAULT: '#1E293B',
            muted: '#475569',
            light: '#64748B',
          },
          orange: {
            DEFAULT: '#FF5722',
            gradientStart: '#FF5722',
            gradientEnd: '#E63946',
            hover: '#F4511E',
          },
          accent: {
            blue: '#0284C7',
            emerald: '#059669',
          },
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF5722 0%, #E63946 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #F4511E 0%, #D62828 100%)',
        'navy-gradient': 'linear-gradient(180deg, rgba(11,27,61,0.85) 0%, rgba(6,15,34,0.95) 100%)',
        'hero-overlay': 'linear-gradient(90deg, rgba(6,15,34,0.88) 0%, rgba(11,27,61,0.65) 50%, rgba(6,15,34,0.4) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
      },
      boxShadow: {
        'card-subtle': '0 4px 20px -2px rgba(11, 27, 61, 0.05)',
        'card-hover': '0 16px 32px -4px rgba(11, 27, 61, 0.12)',
        'dropdown': '0 12px 30px rgba(11, 27, 61, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}

