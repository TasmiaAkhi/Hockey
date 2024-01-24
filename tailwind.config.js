/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }



  /** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {" primary-color": '#FF4240',

    }
  }
}


module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'Grid-1': "url('images/2.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}