/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'Roboto': ['Roboto'],
        'body': ['"Open Sans"'],
        'poppins': ['"Poppins"'],
      },
      colors: {
        primaryRed: "#FF2E2E",
        secondaryRed: "#FFB7B7",
        darkRed: "#AD0000",
        fadeRed: "#FF5C5C",
        link: "#FF0000",
        primaryDark:"#5D5D5D",
        secondaryDark: "#484848",
        secondary:"#64748b",
        light: "#FFFFFF",
        secondaryLight: "#ECECEC",
      },
      aspectRatio: {
        '8/6': '8 / 6',
      }
    },
  },
  plugins: [],
}
