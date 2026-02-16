import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hidra Vault - Secure Password Manager for iOS',
  description: 'Keep your sensitive data safe with Hidra Vault, the ultimate password and vault manager for iPhone and iPad. Military-grade encryption. Download now.',
  generator: 'v0.app',
  metadataBase: new URL('https://hidravault.app'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#1e40af',
  },
  openGraph: {
    title: 'Hidra Vault - Secure Password Manager',
    description: 'Military-grade encryption for your passwords and sensitive data',
    url: 'https://hidravault.app',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
