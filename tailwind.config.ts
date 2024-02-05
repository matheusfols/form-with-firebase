import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer'), require('flowbite/plugin')],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        general: {
          bgBase: "#FFF",
          txtBase: "#7d7e8a",
          cta: {
            DEFAULT: '#1a73e8',
            action: '#1a73e8'
          },
          secundary: {
            DEFAULT: '#C7C9C7',
          },
          title: {
            DEFAULT: '#101820',
          },
        },
      }
    },
  },
  fontFamily: {
    body: ['var(--font-poppins)'],
    sans: ['var(--font-poppins)'],
  },
}

export default config
