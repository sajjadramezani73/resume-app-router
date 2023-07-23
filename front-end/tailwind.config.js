/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors");
const customColors = {
  primary: '#0ba376',
  // primaryLight: '#D1AAFF',
  secondary: '#0b7180',

  caption: '#646464',
  captionLight: '#999999',
  captionDark: '#323232',

  bgDark: '#31313a',
  lightCaptionLight: '#ffffffd9',
  lightCaption: '#ffffff8c',
  // danger: '#FF3B3B',
  // light: '#F9F9F9',
  // body: '#181818',
  // titr: '#424242',
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '480px',
      'sm': '600px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    colors: {
      ...colors,
      ...customColors
    },
    fontSize: {
      'xxs': '.75rem',
      'xs': '.8125rem',
      'sm': '.875rem',
      'tiny': '.9375rem',
      'base': '1rem',
      'md': '1.0625rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      'title': '1.625rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4/3xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      boxShadow: {
        shadowRight: '14px 0 20px -20px rgba(0,0,0,0.1)',
        shadowLeft: '-14px 0 20px -20px rgba(0,0,0,0.1)',
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      'roboto': ['roboto'],
      'iranyekan': ['iranyekan']
    }
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme }) {
      addComponents({
        ':root': {
          ...mapColors(customColors)
        }
      });
    })
  ],
}

const mapColors = (colors) => {
  let object = {};
  for (let item in colors) {
    object[`--color-${item} `] = colors[item]
  }
  return object
}

