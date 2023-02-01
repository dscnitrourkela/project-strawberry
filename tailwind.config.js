const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        'color-primary' : '#486FFD',
        'color-secondary' : '#496DF2',
        'color-tertiary' : '#375DE5',
        'bg-primary' : '#1B1E1F',
        'bg-secondary' : '#363839'
      },
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [],
}
