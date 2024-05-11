import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'services-bg': 'url(services.png)',
      },
      colors: {
        primary: '#FEF7F0',
        dark: '#121212',
        blackText: '#181818',
        silverText: '#F5F7FA',
        borderGrey: '#F2F2F2',
        grey: '#868686',
        orange: '#F17C04',
        yellow: '#FDC700',
      },
      screen: {
        sm: { min: '375px', max: '767px' },

        md: { min: '768px', max: '1023px' },

        lg: { min: '1024px', max: '1279px' },

        xl: { min: '1280px', max: '1535px' },

        '2xl': { min: '1536px' },
      },
      margin: {
        '122px': '122px',
      },
      lineHeight: {
        '70px': '70px',
        '44px': '44px',
        '38px': '38px',
        '48px': '48px',
        '36px': '36px',
        '28px': '28px',
      },
      height: {
        '370px': '370px',
      },
      width: {
        '180px': '180px',
        '65%': '65%',
        '80%': '80%',
      },
      inset: {
        '20%': '20%',
        '50%': '50%',
      },
      translate: {
        '50%': '50%',
      },
      boxShadow: {
        button: '0px 0px 12px 0px rgba(18, 18, 18, 0.40)',
      },
      borderRadius: {
        '4xl': '30px',
      },
      fontSize: {
        '40px': '40px',
        '16px': '16px',
        '36px': '36px',
      },
      spacing: {
        '29px': '29px',
        '30px': '30px',
        '128px': '128px',
        '72px': '72px',
        '84px': '84px',
        '68px': '68px',
        '124px': '128px',
        '90px': '90px',
        '94px': '94px',
      },
      borderWidth: {
        '1px': '1px',
      },
    },
  },
  plugins: [],
};
export default config;
