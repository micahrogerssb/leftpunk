/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'monospace'],
      },
      colors: {
        punk: {
          red: '#ff2e4c',
          black: '#0a0a0a',
          gray: '#1a1a1a',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            fontFamily: 'Inter Variable, sans-serif',
            h1: {
              color: '#fff',
              fontFamily: 'JetBrains Mono Variable, monospace',
            },
            h2: {
              color: '#fff',
              fontFamily: 'JetBrains Mono Variable, monospace',
            },
            h3: {
              color: '#fff',
              fontFamily: 'JetBrains Mono Variable, monospace',
            },
            strong: {
              color: '#fff',
            },
            a: {
              color: '#ff2e4c',
              '&:hover': {
                color: '#ff2e4c',
                opacity: 0.8,
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}