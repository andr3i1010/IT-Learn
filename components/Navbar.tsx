'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [communityDropdown, setCommunityDropdown] = useState(false)
  const [companyDropdown, setCompanyDropdown] = useState(false)
  const [languageDropdown, setLanguageDropdown] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div
        className="glass border-b border-border"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">IT</span>
              <span className="text-text-primary"> Learn</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Community Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface">
                  Community
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-glass border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="#"
                    className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg"
                  >
                    Forum
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg"
                  >
                    Events
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg"
                  >
                    Challenges
                  </Link>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface">
                  Company
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-glass border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="#"
                    className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg"
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <Link
                href="#"
                className="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface"
              >
                Pricing
              </Link>
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface">
                  <span>🌐</span>
                  <span>EN</span>
                </button>
                <div className="absolute top-full right-0 mt-0 w-32 bg-glass border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button className="block w-full text-left px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg">
                    English
                  </button>
                  <button className="block w-full text-left px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg">
                    Dutch
                  </button>
                  <button className="block w-full text-left px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface transition-all first:rounded-t-lg last:rounded-b-lg">
                    French
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Link
                href="/login"
                className="px-4 py-2 text-text-secondary hover:text-primary transition-colors border border-border rounded-lg hover:border-primary"
              >
                Login
              </Link>

              {/* Sign Up Button */}
              <Link
                href="/signup"
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="space-y-2">
                <div>
                  <button
                    onClick={() => setCommunityDropdown(!communityDropdown)}
                    className="w-full text-left px-4 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface flex justify-between items-center"
                  >
                    Community
                    <span className={`transition-transform ${communityDropdown ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {communityDropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg"
                      >
                        Forum
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg"
                      >
                        Events
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg"
                      >
                        Challenges
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setCompanyDropdown(!companyDropdown)}
                    className="w-full text-left px-4 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface flex justify-between items-center"
                  >
                    Company
                    <span className={`transition-transform ${companyDropdown ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {companyDropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg"
                      >
                        About Us
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg"
                      >
                        Careers
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg"
                      >
                        Contact
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="#"
                  className="block px-4 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface"
                >
                  Pricing
                </Link>

                <div className="border-t border-border pt-2 mt-2">
                  <button
                    onClick={() => setLanguageDropdown(!languageDropdown)}
                    className="w-full text-left px-4 py-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface flex justify-between items-center"
                  >
                    <span>🌐 EN</span>
                    <span className={`transition-transform ${languageDropdown ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {languageDropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      <button className="block w-full text-left px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg">
                        English
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg">
                        Dutch
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface transition-all rounded-lg">
                        French
                      </button>
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-2 mt-2 space-y-2">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-text-secondary hover:text-primary transition-colors border border-border rounded-lg hover:border-primary text-center"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
