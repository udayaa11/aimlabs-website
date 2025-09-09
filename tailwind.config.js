/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit'],
      },
        screens: { 
        xxs:  '360px',
        xs:   '428px',
        xsm:  '576px',
        sm:   '640px',
        md:   '768px',
        tab:  '834px',
        lg:   '1028px',
        xl:   '1280px',
      },
    },
  },
  plugins: [],
}

