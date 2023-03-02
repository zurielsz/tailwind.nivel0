/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'paleBlue': 'hsl(221, 100%, 96%)',
        'lightLavender': 'hsl(241, 100%, 89%)',
        'darkGrayBlue': 'hsl(224, 30%, 27%)',
        'lightRed': 'hsl(0, 100%, 67%)',
        'orangeyYellow': 'hsl(39, 100%, 56%)',
        'greenTeal': 'hsl(166, 100%, 37%)',
        'cobaltBlue': 'hsl(234, 85%, 45%)',
        'lightSlate': 'hsl(252, 100%, 67%)',
        'lightroyal': 'hsl(241, 81%, 54%)',
        'violetBlue': 'hsla(256, 72%, 46%, 1)',
        'persianBlue': 'hsla(241, 72%, 46%, 0)'
      }),
      textColor: {
        'paleBlue': 'hsl(221, 100%, 96%)',
        'lightLavender': 'hsl(241, 100%, 89%)',
        'darkGrayBlue': 'hsl(224, 30%, 27%)',
        'lightRed': 'hsl(0, 100%, 67%)',
        'orangeyYellow': 'hsl(39, 100%, 56%)',
        'greenTeal': 'hsl(166, 100%, 37%)',
        'cobaltBlue': 'hsl(234, 85%, 45%)',
        'lightSlate': 'hsl(252, 100%, 67%)',
        'lightroyal': 'hsl(241, 81%, 54%)',
        'violetBlue': 'hsla(256, 72%, 46%, 1)',
        'persianBlue': 'hsla(241, 72%, 46%, 0)'
      },
      gradientColorStops: {
        'paleBlue': 'hsl(221, 100%, 96%)',
        'lightLavender': 'hsl(241, 100%, 89%)',
        'darkGrayBlue': 'hsl(224, 30%, 27%)',
        'lightRed': 'hsl(0, 100%, 67%)',
        'orangeyYellow': 'hsl(39, 100%, 56%)',
        'greenTeal': 'hsl(166, 100%, 37%)',
        'cobaltBlue': 'hsl(234, 85%, 45%)',
        'lightSlate': 'hsl(252, 100%, 67%)',
        'lightroyal': 'hsl(241, 81%, 54%)',
        'violetBlue': 'hsla(256, 72%, 46%, 1)',
        'persianBlue': 'hsla(241, 72%, 46%, 0)'
      },
      boxShadowColor: {
        'paleBlue': 'hsl(221, 100%, 96%)',
        'lightLavender': 'hsl(241, 100%, 89%)',
        'darkGrayBlue': 'hsl(224, 30%, 27%)',
        'lightRed': 'hsl(0, 100%, 67%)',
        'orangeyYellow': 'hsl(39, 100%, 56%)',
        'greenTeal': 'hsl(166, 100%, 37%)',
        'cobaltBlue': 'hsl(234, 85%, 45%)',
        'lightSlate': 'hsl(252, 100%, 67%)',
        'lightroyal': 'hsl(241, 81%, 54%)',
        'violetBlue': 'hsla(256, 72%, 46%, 1)',
        'persianBlue': 'hsla(241, 72%, 46%, 0)'
      },
      fontFamily: {
        "Hanken": "Hanken Grotesk",
      }
    },
  },
  plugins: [],
}
