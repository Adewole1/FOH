/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C53EE",
        secondary: "#1392F3",
        red: "#D81159",
        black: "#0C0C0C",
        green: "#357266",
      },
      backgroundImage: {
        doctorsBG: `url('./src/assets/images/doctors.png')`,
        panelBG: `url('./src/assets/images/panel.png')`,
        expertsBG: `url('./src/assets/images/expert.png')`,
        speakersBG: `url('./src/assets/images/speaker.jpg')`,
      },
    },
  },
  plugins: [],
};
