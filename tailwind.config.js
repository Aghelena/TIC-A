/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',   // Extra small devices (personalizado)
        sm: '640px',   // Small devices (tablets)
        md: '768px',   // Medium devices (desktops)
        lg: '1024px',  // Large devices
        xl: '1280px',  // Extra large devices
        '2xl': '1536px', // Double extra large devices
      },
    },
  },
  plugins: [],
};
