const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        'color-primary': '#486FFD',
        'color-secondary': '#496DF2',
        'color-tertiary': '#375DE5',
        'bg-primary': '#1B1E1F',
        'bg-secondary': '#363839',
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
      fontSize: {
        xm: ['10px', '12px'],
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '3.5xl': '32px',
        '4xl': '36px',
        '4.5xl': '40px',
        '5xl': '48px',
        '5.5xl': '52px',
        '6xl': '56px',
        '7xl': '64px',
        '11xl': '86px',
        '12xl': '120px',
      },
      lineHeight: {
        3: '12px',
        3.5: '14px',
        4: '16px',
        4.5: '18px',
        5: '20px',
        5.5: '22px',
        6: '24px',
        7: '28px',
        9: '36px',
        10: '40px',
        11: '48px',
        11.5: '52px',
        12: '64px',
      },
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
