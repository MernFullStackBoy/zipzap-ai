/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "phone": {
        "max": "440px"
      }
    },
    extend: {
      backgroundImage: {
        "header": "url(./components/images/header.png)",
        "about": "url(./components/images/about.png)",
        "gameplay": "url(./components/images/gameplay.png)",
        "linear": "linear-gradient(to right top,rgba(255, 0, 179, 0.321) 50%, rgba(0, 0, 255, 0.232))",
        "person1": "url(./components/images/person1.png)",
        "person2": "url(./components/images/person2.png)",
        "person3": "url(./components/images/person3.png)",
        "person4": "url(./components/images/person4.png)",
        "person5": "url(./components/images/person5.png)",
        "person6": "url(./components/images/person6.png)",
        "person7": "url(./components/images/person7.png)",
        "person8": "url(./components/images/person8.png)",
        "btn-linear": "linear-gradient(to top, purple, blue)",
        "person-1": "url(./components/images/person-1.png)",
        "person-2": "url(./components/images/person-2.png)",
        "person-3": "url(./components/images/person-3.png)",
        "person-4": "url(./components/images/person-4.png)",
        "person-5": "url(./components/images/person-5.png)",
        "person-6": "url(./components/images/person-6.png)",
      }
    },
  },
  plugins: [],
}