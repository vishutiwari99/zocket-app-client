module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myblue: {
          light: "#E3EEFD",
          DEFAULT: "#5c6ac4",
          dark: "#0F6EFF",
          indigoDark: "#093E8E",
        },
        myorange: {
          dark: "#FF9449",
          light: "#FFDFB5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
