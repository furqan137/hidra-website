'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-gradient-to-b from-secondary to-background mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Hidra Vault"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg">Hidra Vault</span>
            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              Secure your passwords, private files and digital identity
              with strong encryption and complete privacy.
            </p>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:scale-105 transition-transform"
            >
               Download App
            </a>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/#showcase" className="hover:text-foreground transition">Preview</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition">About</Link></li>
              <li><a href="https://apps.apple.com" target="_blank" className="hover:text-foreground transition">Download</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition">Support</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hidra.supp@gmail.com" className="hover:text-foreground transition">
                  hidra.supp@gmail.com
                </a>
              </li>
              <li>Response time: 24–48 hours</li>
              <li>Worldwide support</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {year} Hidra Vault. All rights reserved.</p>
          <p>Built with privacy in mind.</p>
        </div>

      </div>
    </footer>
  )
}