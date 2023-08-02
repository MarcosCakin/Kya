/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#13131A',
      'darkLight': '#1F1F29',
      'light': '#F9F4F4',
      'primary': '#fb5444',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

