import type { Config } from 'tailwindcss'
const colorsTW = require('tailwindcss/colors')
const colors = require('./src/styles/colors')

const config: Config = {
  content: [
    "./node_modules/@plaiceholder/ui/**/*.{ts,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      whiteRgba: colors.whiteRgba,
      ...colorsTW
    },
    extend: {
      fontFamily: {
        // 'dmserif': ['DM Serif', 'serif'],
        // 'com': ['Comfortaa', 'cursive'],
        // 'arsenal': ['Arsenal', 'sans-serif'],
        // 'arvo': ['Arvo', 'sans-serif'],
        // 'onest': ['Arsenal', 'Arvo', 'Onest'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: []
}
export default config
