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
        bg: '#FAFAF8',
        'main-text': '#1A1A1A',
        'point-green': '#2D5016',
        'light-green': '#E8F0DF',
        border: '#E5E5E5',
        'sub-text': '#888888',
      },
      fontFamily: {
        pretendard: ['Pretendard', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
