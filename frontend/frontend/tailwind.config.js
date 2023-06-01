/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : { 
      maxHeight: {
        '550px': '550px',
      },
      zIndex: { 
        '-1': '-1', 
      } 
    },
  },
  plugins: [],
}

