'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type DropdownKey = 'community' | 'company' | 'language' | null

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const toggleDropdown = (key: DropdownKey) => {
    setActiveDropdown(prev => (prev === key ? null : key))
  }

  const closeAll = () => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer shrink-0"
              onClick={closeAll}
            >
              <span className="font-heading text-xl text-primary neon-cyan">IT</span>
              <span className="font-heading text-xl text-text-primary">Learn</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <Link href="/login" className="font-mono text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 cursor-pointer" onClick={closeAll}>
                Learn
              </Link>
              <Link href="/login" className="font-mono text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 cursor-pointer" onClick={closeAll}>
                Practice
              </Link>
              <Link href="/login" className="font-mono text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 cursor-pointer" onClick={closeAll}>
                Build
              </Link>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('community')}
                  aria-expanded={activeDropdown === 'community'}
                  aria-haspopup="true"
                  className="flex items-center gap-1 font-mono text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 cursor-pointer"
                >
                  Community
                  <span className="text-[0.5rem]">{activeDropdown === 'community' ? '▾' : '▸'}</span>
                </button>
                {activeDropdown === 'community' && (
                  <DropdownMenu>
                    <DropdownItem href="https://discord.itlearn.be/" onClick={closeAll} external>Discord</DropdownItem>
                    <DropdownItem href="/thanks" onClick={closeAll}>Thanks</DropdownItem>
                    <DropdownItem href="/roadmap" onClick={closeAll}>Roadmap</DropdownItem>
                  </DropdownMenu>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('company')}
                  aria-expanded={activeDropdown === 'company'}
                  aria-haspopup="true"
                  className="flex items-center gap-1 font-mono text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 cursor-pointer"
                >
                  Company
                  <span className="text-[0.5rem]">{activeDropdown === 'company' ? '▾' : '▸'}</span>
                </button>
                {activeDropdown === 'company' && (
                  <DropdownMenu>
                    <DropdownItem href="/about" onClick={closeAll}>About us</DropdownItem>
                    <DropdownItem href="/roadmap" onClick={closeAll}>Roadmap</DropdownItem>
                    <DropdownItem href="https://itlearn.beehiiv.com/" onClick={closeAll} external>Newsletter</DropdownItem>
                    <DropdownItem href="#" onClick={closeAll}>Help Center</DropdownItem>
                  </DropdownMenu>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('language')}
                  aria-expanded={activeDropdown === 'language'}
                  aria-haspopup="true"
                  aria-label="Select language"
                  className="flex items-center gap-1 font-mono text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 cursor-pointer"
                >
                  <GlobeIcon className="w-3.5 h-3.5" />
                  <span>EN</span>
                </button>
                {activeDropdown === 'language' && (
                  <DropdownMenu align="right">
                    <button onClick={closeAll} className="block w-full text-left font-mono text-xs text-text-secondary hover:text-primary hover:bg-background-elevated transition-colors cursor-pointer px-4 py-2">
                      English
                    </button>
                    <button onClick={closeAll} className="block w-full text-left font-mono text-xs text-text-secondary hover:text-primary hover:bg-background-elevated transition-colors cursor-pointer px-4 py-2">
                      Nederlands
                    </button>
                    <button onClick={closeAll} className="block w-full text-left font-mono text-xs text-text-secondary hover:text-primary hover:bg-background-elevated transition-colors cursor-pointer px-4 py-2">
                      Français
                    </button>
                  </DropdownMenu>
                )}
              </div>

              <Link href="/login" className="font-mono text-xs text-text-secondary hover:text-primary transition-colors border border-border px-4 py-2 cursor-pointer hover:border-primary/30" onClick={closeAll}>
                LOGIN
              </Link>
              <Link href="/signup" className="font-mono text-xs btn btn-primary" onClick={closeAll}>
                SIGN UP
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden font-mono text-text-secondary hover:text-primary transition-colors cursor-pointer p-2"
            >
              {mobileMenuOpen ? '[X]' : '[≡]'}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="space-y-1">
                <Link href="/login" className="block font-mono text-xs text-text-secondary hover:text-primary transition-colors px-4 py-2.5 cursor-pointer" onClick={closeAll}>Learn</Link>
                <Link href="/login" className="block font-mono text-xs text-text-secondary hover:text-primary transition-colors px-4 py-2.5 cursor-pointer" onClick={closeAll}>Practice</Link>
                <Link href="/login" className="block font-mono text-xs text-text-secondary hover:text-primary transition-colors px-4 py-2.5 cursor-pointer" onClick={closeAll}>Build</Link>
                <MobileDropdown label="Community" links={[{ href: 'https://discord.itlearn.be/', label: 'Discord' }, { href: '/thanks', label: 'Thanks' }, { href: '/roadmap', label: 'Roadmap' }]} onLinkClick={closeAll} />
                <MobileDropdown label="Company" links={[{ href: '/about', label: 'About us' }, { href: '/roadmap', label: 'Roadmap' }, { href: 'https://itlearn.beehiiv.com/', label: 'Newsletter' }, { href: '#', label: 'Help Center' }]} onLinkClick={closeAll} />
                <div className="border-t border-border pt-3 mt-3">
                  <MobileDropdown label="Language" links={[{ href: '#', label: 'English' }, { href: '#', label: 'Nederlands' }, { href: '#', label: 'Français' }]} onLinkClick={closeAll} />
                </div>
                <div className="border-t border-border pt-3 mt-3 space-y-2 px-2">
                  <Link href="/login" className="block w-full font-mono text-xs text-text-secondary hover:text-primary transition-colors border border-border px-4 py-2.5 text-center cursor-pointer hover:border-primary/30" onClick={closeAll}>LOGIN</Link>
                  <Link href="/signup" className="block w-full font-mono text-xs btn btn-primary text-center" onClick={closeAll}>SIGN UP</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

function DropdownMenu({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) {
  return (
    <div className={`absolute top-full mt-1 w-44 border border-border bg-background-surface shadow-neon-cyan z-50 ${align === 'right' ? 'right-0' : 'left-0'}`} role="menu">
      {children}
    </div>
  )
}

function DropdownItem({ href, onClick, children, external = false }: { href: string; onClick: () => void; children: React.ReactNode; external?: boolean }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      role="menuitem"
      className="block font-mono text-xs text-text-secondary hover:text-primary hover:bg-background-elevated transition-colors cursor-pointer px-4 py-2"
    >
      {children}
    </Link>
  )
}

function MobileDropdown({ label, links, onLinkClick }: { label: string; links: { href: string; label: string }[]; onLinkClick: () => void }) {
  const [open, setOpen] = useState(false)
  const isExternal = (href: string) => href.startsWith('http')

  return (
    <div>
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-center justify-between font-mono text-xs text-text-secondary hover:text-primary transition-colors px-4 py-2.5 cursor-pointer">
        {label}
        <span className="text-[0.5rem]">{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div className="pl-2 space-y-1 mt-1">
          {links.map(link =>
            isExternal(link.href) ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" onClick={onLinkClick} className="block font-mono text-xs text-text-secondary hover:text-primary transition-colors cursor-pointer px-4 py-2.5">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} onClick={onLinkClick} className="block font-mono text-xs text-text-secondary hover:text-primary transition-colors cursor-pointer px-4 py-2.5">
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}
