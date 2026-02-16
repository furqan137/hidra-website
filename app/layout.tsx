import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

/* Google Font (Next 14 compatible) */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Viewport (separated for Next 14) */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1e40af',
}

/* SEO Metadata */
export const metadata: Metadata = {
  title: 'Hidra Vault - Secure Password Manager for iOS',
  description:
    'Keep your sensitive data safe with Hidra Vault, the ultimate password and vault manager for iPhone and iPad. Military-grade encryption.',
  metadataBase: new URL('https://hidravault.app'),

  openGraph: {
    title: 'Hidra Vault - Secure Password Manager',
    description: 'Military-grade encryption for your passwords and sensitive data',
    url: 'https://hidravault.app',
    siteName: 'Hidra Vault',
    type: 'website',
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

/* Root Layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}