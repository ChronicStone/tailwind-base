module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", '"Segoe UI"']
      }
    }
  },
  variants: {
    textColor: ["hover", "dark", "light"],
    backgroundColor: ["hover", "dark", "light"]
  },
  plugins: [
    require("tailwindcss-theming")({
      variants: {
        dark: true,
        light: true
      }
    })
  ]
};
