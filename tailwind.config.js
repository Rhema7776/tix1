/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) {...}
      xsa: '436px',
      // => @media (min-width: 436px) {...}
      xs1: '624px',
      // => @media (min-width: 624px) {...}
      sm: '640px',
      // => @media (min-width: 640px) {...}
      md: '768px',
      // => @media (min-width: 768px) {...}
      md1: '812px',
      // => @media (min-width: 812px) {...}
      md2: '960px',
      // => @media (min-width: 960px) {...}
      md3: '970px',
      // => @media (min-width: 960px) {...}
      lg: '1024px',
      // => @media (min-width: 1024px) {...}
      xl: '1280px',
      // => @media (min-width: 1280px) {...}
      '2xl': '1536px',
      // => @media (min-width: 1536px) {...}
      '3xl': '1775px',
      // => @media (min-width: 1775px) {...}
      '3mxl': '1956px',
      // => @media (min-width: 1956px) {...}
      '4xl': '2200px',
      // => @media (min-width: 2200px) {...}

    }
  },
  plugins: [],
};

