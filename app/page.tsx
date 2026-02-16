"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Lock,
  Smartphone,
  Shield,
  Eye,
  Check,
  ArrowRight,
  Clock,
  Settings,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-28 px-4 overflow-hidden bg-gradient-to-b from-background via-background to-secondary">
        {/* background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[140px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div>
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6 backdrop-blur">
              🔐 Privacy First Password Manager
            </div>

            {/* title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              The smarter way to
              <span className="text-primary block">
                {" "}
                protect your passwords
              </span>
            </h1>

            {/* description */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Hidra Vault keeps your logins, cards and private data safe using
              zero-knowledge encryption and biometric authentication — only you
              can unlock your vault.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
              >
                Download on App Store
                <ArrowRight size={20} />
              </a>

              <a
                href="#features"
                className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-secondary transition-colors"
              >
                Explore Features
              </a>
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                🔒 AES-256 Encryption
              </span>
              <span className="flex items-center gap-2">
                👆 Face ID / Touch ID
              </span>
              <span className="flex items-center gap-2">
                ☁️ No Cloud Storage
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* glow */}
            <div className="absolute w-[280px] h-[280px] bg-primary/20 blur-3xl opacity-40 rounded-full" />

            <Image
              src="/hero-image.png"
              alt="Hidra Vault iOS App Preview"
              width={260}
              height={520}
              priority
              className="relative object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] hover:scale-[1.04] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your passwords safe and organized
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "End-to-End Encryption",
                description:
                  "All your data is encrypted on your device. Only you can access your passwords.",
              },
              {
                icon: Smartphone,
                title: "iOS Optimized",
                description:
                  "Seamlessly integrated with iOS for the best user experience on iPhone and iPad.",
              },
              {
                icon: Eye,
                title: "Biometric Lock",
                description:
                  "Unlock with Face ID or Touch ID for quick and secure access to your vault.",
              },
              {
                icon: Shield,
                title: "Password Generator",
                description:
                  "Create strong, unique passwords automatically with customizable complexity.",
              },
              {
                icon: Clock,
                title: "Breach Monitoring",
                description:
                  "Get instant alerts if your passwords appear in known data breaches.",
              },
              {
                icon: Settings,
                title: "Auto-Fill Integration",
                description:
                  "Automatically fill login credentials in Safari and third-party apps.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section
        id="showcase"
        className="py-28 px-4 bg-gradient-to-b from-background to-secondary"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Experience Hidra Vault
            </h2>
            <p className="text-lg text-muted-foreground">
              A clean, private and powerful vault designed for simplicity and
              security. Everything you need — nothing you don’t.
            </p>
          </div>

          {/* ROW 1 — BIG IMAGE */}
          <div className="flex justify-center mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-30 scale-110 rounded-full" />
              <Image
                src="/mockups/vault.png"
                alt="Vault Screen"
                width={750}
                height={950}
                className="relative w-full max-w-2xl drop-shadow-[0_50px_120px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* ROW 2 — TWO IMAGES */}
          <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
            <div className="group text-center">
              <Image
                src="/mockups/setup.png"
                alt="Setup Screen"
                width={450}
                height={800}
                className="mx-auto rounded-3xl drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="text-xl font-semibold mt-6">Secure Setup</h3>
              <p className="text-muted-foreground text-sm">
                Create your master password and instantly protect files.
              </p>
            </div>

            <div className="group text-center">
              <Image
                src="/mockups/albums.png"
                alt="Albums Screen"
                width={450}
                height={800}
                className="mx-auto rounded-3xl drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="text-xl font-semibold mt-6">Organized Vault</h3>
              <p className="text-muted-foreground text-sm">
                Categorize private photos, documents and sensitive data.
              </p>
            </div>
          </div>

          {/* ROW 3 — LAST IMAGE */}
          <div className="flex justify-center">
            <div className="group text-center">
              <Image
                src="/mockups/settings.png"
                alt="Settings Screen"
                width={450}
                height={800}
                className="mx-auto rounded-3xl drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="text-xl font-semibold mt-6">Full Control</h3>
              <p className="text-muted-foreground text-sm">
                Backup, restore and manage privacy settings anytime.
              </p>
            </div>
          </div>
        </div>
      </section>


  {/* CTA Section */}
<section className="py-28 px-4 bg-gradient-to-b from-secondary to-background relative overflow-hidden">

  {/* glow background */}
  <div className="absolute inset-0 flex justify-center pointer-events-none">
    <div className="w-[700px] h-[300px] bg-primary/20 blur-[120px] opacity-40 rounded-full" />
  </div>

  <div className="max-w-4xl mx-auto text-center relative">

    {/* heading */}
    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
      Start protecting your digital life today
    </h2>

    {/* description */}
    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
      Hidra Vault keeps your passwords, private photos and sensitive files
      safe with powerful encryption and biometric security.
    </p>

    {/* buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

      {/* primary download */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/40"
      >
         Download on the App Store
      </a>

      {/* secondary */}
      <a
        href="#showcase"
        className="px-10 py-5 border border-border rounded-2xl font-semibold hover:bg-secondary transition"
      >
        View Screenshots
      </a>

    </div>

    {/* trust line */}
    <p className="text-sm text-muted-foreground mt-8">
      No account required • No tracking • Fully private
    </p>

  </div>
</section>

<Footer />
    </>
  );
}
