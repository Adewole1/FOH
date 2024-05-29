/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
      },
      colors: {
        primary: "#1C53EE",
        secondary: "#1392F3",
        red: "#D81159",
        black: "#0C0C0C",
        green: "#357266",
      },
      backgroundImage: {
        doctorsBG: `url('/images/doctors.png')`,
        panelBG: `url('/images/panel.png')`,
        expertsBG: `url('/images/expert.png')`,
        speakersBG: `url('/images/speaker.jpg')`,
      },
    },
  },
  plugins: [],
};
