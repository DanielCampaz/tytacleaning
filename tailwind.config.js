/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-one": "url('/public/homeimgs/1.jpg')",
      },
    },
  },
  plugins: [],
};
