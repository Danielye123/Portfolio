import type { Config } from 'tailwindcss'

//still need to fully setup

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          Default: "#F6F6F6",
          light: "#FFFFFF",
          darkDefault: "#151E2C",
          highlight: "#FFBE62",
          carddark: "#222330",
          darkmodeblue: "#428DFF",
          accentBlue: "#0252CD",
          project1: "#5F9FFE",
          project2: "#56B0B9",
          project3: "#1F1D2B",
          formdefault: "#312E81",
          inputdark: "#2E2F3E",
          inputdefault: "#F0E7F9",
        },
        text: {
          projectdarkblue: "#1E9AFF",
          title: "#151E2C",
          accentBlue: "#0252CD",
          default: "#9D9D9D",
          body: "#6F74A7",
          dark: "#BEC1D5",
        },
        fontFamily: {
          'poppins': ['Poppins'],
       },
       letterSpacing: {
        '30': '30%',
      },
      boxShadow: {
        custom: '0px 5px 20px 0px #0000001A',
      },
      scale: {
        '200': '2',
      },
      screens: {
        '3xl': '1921px',
      },
    },
  },
},
  plugins: [],
};