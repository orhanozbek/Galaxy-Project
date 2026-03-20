/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          dark: '#050a18',
          purple: '#6d28d9',
          blue: '#1e40af',
          star: '#ffffff'
        }
      },
      backgroundImage: {
        'galaxy-gradient': 'radial-gradient(circle at center, #1e40af 0%, #050a18 100%)',
      }
    },
  },
  plugins: [],
}
