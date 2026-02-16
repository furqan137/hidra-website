'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // smooth scroll handler
  const handleFeaturesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      const el = document.getElementById('features')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-background/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Hidra Vault"
                fill
                sizes="36px"
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="font-semibold text-lg hidden sm:inline">
              Hidra Vault
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              onClick={handleFeaturesClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>

            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>

            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>

            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/30"
            >
              Download
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-xl p-4 space-y-3">

              <Link
                href="/#features"
                onClick={handleFeaturesClick}
                className="block px-4 py-3 rounded-lg hover:bg-secondary transition font-medium"
              >
                Features
              </Link>

              <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-secondary transition font-medium">
                About
              </Link>

              <Link href="/privacy" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-secondary transition font-medium">
                Privacy
              </Link>

              <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-secondary transition font-medium">
                Support
              </Link>

              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-3 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
              >
                Download App
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}