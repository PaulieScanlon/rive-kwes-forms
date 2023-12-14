/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        custom: {
          'ice-1': '#e7f2f7',
          'ice-2': '#d6e2ea',
          'ice-3': '#c1d7e0',
          'ice-4': '#b5b3c0',
          'ice-5': '#b7a9b6',
          'claret-1': '#b04863',
          'claret-2': '#a02d62',
          'claret-3': '#802d53',
          'claret-4': '#716273',
          'claret-5': '#544359',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {},
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
