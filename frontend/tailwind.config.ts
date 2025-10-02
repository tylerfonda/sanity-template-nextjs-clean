import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#FF305A',
        'electric-blue': '#00B4FF',
        'acid-yellow': '#FFE600',
        'neon-green': '#39FF14',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontFamily: {
        futura: ['Futura PT', 'Futura', 'sans-serif'],
        avenir: ['Avenir Next', 'Avenir', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
