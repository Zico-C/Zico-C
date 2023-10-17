module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      navdark: "#042b57",
      navtext: "lightgray",
      "proscend-blue": "#002FA7",
      "proscend-orange": "#FF4500",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      navHoverbg: "#3252a2",
      "content-bg": "#f0f2f5",
      "proscend-blue": "#002FA7",
      "proscend-orange": "#FF4500",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
