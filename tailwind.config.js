/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#565AC5',
        secondary: '#535B88',
        tertiary: '#3A389B',
        danger: '#E32525',
        warning: '#ECB62A',
        success: '#118238',
        info: '#3699E4',
        black: '#2B2B2B',
        white: '#FFFFFF',
        gray: '#808080',
        lightgray: '#DADADA',
        antiflashwhite: '#F0F0F0',
        lotion: '#FDFDFD',
        chineseSilver: '#CCCCCC',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}

