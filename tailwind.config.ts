import { transform } from 'next/dist/build/swc';
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
        'main-bg': 'url(/bg.jpg)',
        'info-bg': 'url(/infobg.jpg)',
      },
      colors: {
        primary: '#FEF7F0',
        dark: '#121212',
        blackText: '#181818',
        silverText: '#F5F7FA',
        borderGrey: '#F2F2F2',
        inputGrey: '#383838',
        grey: '#868686',
        borderCircleSec: 'rgba(250, 132, 67, 0.06)',
        borderCircle: 'rgba(219, 219, 219, 0.20)',
        orange: '#F17C04',
        yellow: '#FDC700',
      },
      screens: {
        xl: '1300px',
        ...defaultTheme.screens,
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
        '66px': '66px',
      },
      width: {
        '180px': '180px',
        '65%': '65%',
        '80%': '80%',
        '66px': '66px',
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
        custom: '0px 0px 4px 0px rgba(255, 199, 39, 0.20)',
        customWhite: '0px 0px 8px 0px rgba(255, 255, 255, 0.12)',
      },
      borderRadius: {
        '4xl': '30px',
        '80px': '80px',
        custom: '228px 228px 0 0',
      },
      fontSize: {
        '40px': '40px',
        '16px': '16px',
        '36px': '36px',
      },
      spacing: {
        '29px': '29px',
        '30px': '30px',
        '45px': '45px',
        '72px': '72px',
        '84px': '84px',
        '68px': '68px',
        '124px': '124px',
        '90px': '90px',
        '94px': '94px',
      },
      borderWidth: {
        '1px': '1px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-6deg)' },
        },
        spin: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(200%) translateX(100%)' },
        },
        spinSec: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100%) translateX(200%)' },
        },
        spinThree: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-200%) translateX(-200%)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      flex: {
        '3': '2 2 0%',
      },
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [],
};
export default config;
