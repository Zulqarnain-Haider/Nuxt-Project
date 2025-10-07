
/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
            colors: {
        bgLight: "#2C3137",       //  main top left background color
        bgDark: "#17191D", 
        onGoNext: "#FF5733",       //  main bottom right background color
        primary: "#FF6A16",       // main primary color
        secondary: "#FFCC00",     // secondary accent color
        outline: "#FF6916",       // outline buttons / borders
        onOutline: "#FFFFFF",     // text/icons on outline
        mainText: "#FFFFFF",      // main text color
        onMainText: "#9CA3AF",   // secondary text / subtitles
        onFooter: "#888888",      // footer text
        error: "#D91B1B",         // error messages
        onError: "#FFFFFF",       // text on error

      },
      backgroundImage: {
       "page-gradient": "linear-gradient(to bottom right, #2C3137, #17191D)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        vazirmatn: ["Vazirmatn", "sans-serif"],
        sans: ["Inter", "sans-serif"], // Figma font
      },

    },
  },
  plugins: [],
} 

