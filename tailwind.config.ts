import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050510',
          surface: '#0a0a1a',
          elevated: '#0f0f24',
        },
        border: {
          DEFAULT: '#1a1a3e',
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        primary: {
          DEFAULT: '#00f0ff',
          dark: '#00c4d6',
          50: '#e6fdff',
          100: '#b3f9ff',
          200: '#80f5ff',
          300: '#4df2ff',
          400: '#1aeeff',
          500: '#00e0f0',
          600: '#00b3c0',
          700: '#008690',
          800: '#005960',
          900: '#002c30',
        },
        accent: {
          DEFAULT: '#ff00ff',
          400: '#ff66ff',
          500: '#ff00ff',
          600: '#cc00cc',
        },
        warning: '#ffff00',
        'text-primary': '#f0f0ff',
        'text-secondary': '#8888aa',
        'text-muted': '#555577',
        success: '#00ff41',
        error: '#ff3344',
      },
      fontFamily: {
        heading: ['"Press Start 2P"', 'monospace'],
        sub: ['"VT323"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0',
        pixel: '2px',
        sm: '0',
        md: '0',
        lg: '0',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.15), inset 0 0 10px rgba(0, 240, 255, 0.05)',
        'neon-magenta': '0 0 10px rgba(255, 0, 255, 0.4), 0 0 40px rgba(255, 0, 255, 0.15), inset 0 0 10px rgba(255, 0, 255, 0.05)',
        'neon-yellow': '0 0 10px rgba(255, 255, 0, 0.3), 0 0 30px rgba(255, 255, 0, 0.1)',
        'neon-green': '0 0 10px rgba(0, 255, 65, 0.3), 0 0 30px rgba(0, 255, 65, 0.1)',
        'btn-primary': '0 0 12px rgba(0, 240, 255, 0.3)',
        'btn-primary-hover': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 50px rgba(0, 240, 255, 0.2)',
        pixel: '3px 3px 0 rgba(0, 240, 255, 0.3)',
      },
      animation: {
        'glitch-1': 'glitch1 0.3s infinite',
        'glitch-2': 'glitch2 0.3s infinite 0.1s',
        'scanline': 'scanline 8s linear infinite',
        'neon-flicker': 'neonFlicker 2s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(30) forwards',
        'blink': 'blink 0.8s step-end infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        glitch1: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, 2px)' },
          '80%': { transform: 'translate(1px, -2px)' },
        },
        glitch2: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(2px, -1px)' },
          '40%': { transform: 'translate(-1px, 2px)' },
          '60%': { transform: 'translate(1px, -2px)' },
          '80%': { transform: 'translate(-2px, 1px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.7' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
export default config
