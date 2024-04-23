/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'white',
        'secondary': '#1E293B',
        'accent': "#4c2882",
        'terciary': "#87CEFA"
      },
    }
  },

    theme: {
      extend: {
        maxWidth: {
          'lg': '74rem', // Modifica este valor según tus necesidades
        }
      }
    }, 
  plugins: [],
}

