'use client'

import { useState } from 'react'
import Link from 'next/link'
import { OAuthButton } from '@/components/OAuthButton'


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [joinDiscord, setJoinDiscord] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    setSubmitting(false)
    setDone(true)
    setTimeout(() => setDone(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-[-15%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] crt-overlay" />
      </div>

      <Link href="/" className="absolute top-6 right-6 z-10 font-mono text-text-muted hover:text-primary transition-colors cursor-pointer text-sm" aria-label="Close">
        [X]
      </Link>

      <div className="relative w-full max-w-md mx-4">
        <div className="border border-border bg-background-surface p-8 sm:p-10 shadow-neon-cyan">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 cursor-pointer mb-6">
              <span className="font-heading text-lg text-primary neon-cyan">IT</span>
              <span className="font-heading text-lg text-text-primary">Learn</span>
            </Link>
            <h1 className="font-heading text-xl text-text-primary mb-1">LOGIN</h1>
            <p className="font-mono text-text-muted text-xs">Start the fun</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block font-mono text-xs text-text-secondary mb-2 uppercase tracking-wider">
                EMAIL
              </label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required
                className="w-full px-4 py-3 font-mono text-sm bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all" />
            </div>

            <div>
              <label htmlFor="password" className="block font-mono text-xs text-text-secondary mb-2 uppercase tracking-wider">
                PASSWORD
              </label>
              <div className="relative">
                <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required
                  className="w-full px-4 py-3 pr-12 font-mono text-sm bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-text-muted hover:text-primary transition-colors cursor-pointer">
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" disabled={submitting || done} className="btn btn-primary w-full">
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  LOGGING IN...
                </span>
              ) : done ? (
                <span className="inline-flex items-center gap-2 text-success">✓ LOGGED IN</span>
              ) : (
                'LOGIN ▸'
              )}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-xs text-text-muted">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-3">
            <OAuthButton label="Continue with Google" onClick={() => {}}>
              <img src="https://files.itlearn.be/images/branding/icons/Google.png" alt="" className="w-5 h-5" aria-hidden="true" />
            </OAuthButton>
            <OAuthButton label="Continue with GitHub" onClick={() => {}}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </OAuthButton>
            <OAuthButton label="Continue with Discord" onClick={() => {}}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
            </OAuthButton>
          </div>

          <div className="mt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={joinDiscord} onChange={e => setJoinDiscord(e.target.checked)} className="w-4 h-4 border-border bg-background text-primary focus:ring-primary cursor-pointer" />
              <span className="font-mono text-text-muted text-xs group-hover:text-text-secondary transition-colors select-none">
                Join our official Discord server
              </span>
            </label>
          </div>

          <p className="text-center font-mono text-text-muted text-xs mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-primary hover:text-warning transition-colors cursor-pointer">
              Sign Up ▸
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
