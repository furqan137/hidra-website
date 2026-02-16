'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Shield, Lock, Sparkles, Users, Heart } from 'lucide-react'

export default function About() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-24 px-4 bg-gradient-to-b from-background via-background to-secondary">

        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Hidra Vault
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Security built for humans
            </h1>

            <p className="text-lg text-muted-foreground">
              We created Hidra Vault to make privacy simple. No tracking,
              no hidden data collection — just strong protection for your
              digital life.
            </p>
          </div>

          {/* MISSION */}
          <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Passwords are the keys to your identity. Our mission is to give
                everyone access to powerful encryption without complexity.
                Security should be effortless — not technical.
              </p>
            </div>

            <div className="bg-primary/10 rounded-3xl p-12 flex justify-center">
              <Shield className="w-24 h-24 text-primary/60" />
            </div>
          </section>

          {/* VALUES */}
          <section className="mb-24">
            <h2 className="text-3xl font-semibold text-center mb-12">
              What We Believe
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: 'Privacy First',
                  desc: 'We never see or store your vault data. Everything stays encrypted on your device.'
                },
                {
                  icon: Heart,
                  title: 'User Respect',
                  desc: 'No ads, no tracking, no selling personal data — ever.'
                },
                {
                  icon: Sparkles,
                  title: 'Simple Security',
                  desc: 'Advanced encryption presented in a clean and friendly interface.'
                },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-border bg-background/70 backdrop-blur text-center">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* STORY */}
          <section className="mb-24 bg-background/70 border border-border rounded-3xl p-5">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most people reuse passwords or store them insecurely.
                We built Hidra Vault to remove that risk completely.
              </p>
              <p>
                Instead of cloud-dependent storage and data collection,
                Hidra Vault encrypts everything locally and gives full control
                to the user.
              </p>
              <p>
                Today, thousands trust Hidra Vault to protect their private
                files, accounts and identity — and we continue improving
                security with every update.
              </p>
            </div>
          </section>


          {/* TECHNOLOGY */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-12">Security Technology</h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                'AES-256 Encryption',
                'Zero-Knowledge Architecture',
                'Biometric Authentication',
                'Offline Storage',
                'Secure Backup',
                'Regular Updates',
              ].map((tech, i) => (
                <div key={i} className="p-6 border border-border rounded-xl bg-background/70">
                  {tech}
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}