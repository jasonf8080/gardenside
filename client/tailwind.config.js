/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8E8E1',  
        secondary: '#111',  
        accent: '#838562',  
        underline: '#231F20',  
        
      },

       screens: {
        'xs': '500px', // Extra small screen (custom)
        'sm': '640px', // Small screen (default Tailwind)
        'md': '768px', // Medium screen (default Tailwind)
        'lg': '976px', // Large screen (custom)
        'xl': '1200px', // Extra large screen (custom)
      },
    },
  },
  plugins: [],
}

