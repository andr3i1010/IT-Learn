import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a0a0a0',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      backdropBlur: {
        sm: '4px',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
