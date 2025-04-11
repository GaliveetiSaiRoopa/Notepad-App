/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoRegular: ["Nunito Regular"],
        nunitoMedium: ["Nunito Medium"],
        nunitoBold: ["Nunito Bold"],
        panchangRegular: ["Panchang Regular"],
        panchangMedium: ["Panchang Medium"],
        panchangSemibold: ["Panchang Semibold"],
        panchangBold: ["Panchang Bold"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        ld: "1024px",
        xl: "1280px",
        "2xl": "1546px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
