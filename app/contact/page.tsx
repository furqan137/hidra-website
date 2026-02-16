'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Hidra Vault? We&apos;re here to help. Reach out to our support team for any inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="p-8 bg-secondary rounded-lg border border-border text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">For general inquiries and support</p>
              <a
                href="mailto:hidra.supp@gmail.com"
                className="text-primary font-semibold hover:underline"
              >
                hidra.supp@gmail.com
              </a>
            </div>

            <div className="p-8 bg-secondary rounded-lg border border-border text-center">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Contact Form</h3>
              <p className="text-muted-foreground mb-4">Fill out our form below and we&apos;ll reply promptly</p>
              <p className="text-primary font-semibold">24-48 hour response time</p>
            </div>

            <div className="p-8 bg-secondary rounded-lg border border-border text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Support</h3>
              <p className="text-muted-foreground mb-4">In-app support available anytime</p>
              <p className="text-primary font-semibold">7 days a week</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white border border-border rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-800 font-semibold text-lg">
                  ✓ Thank you! Your message has been sent successfully.
                </p>
                <p className="text-green-700 mt-2">
                  We&apos;ll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="bug">Report a Bug</option>
                    <option value="feature">Feature Request</option>
                    <option value="support">Technical Support</option>
                    <option value="account">Account Help</option>
                    <option value="security">Security Concern</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
                </p>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Is Hidra Vault free to use?',
                  a: 'Hidra Vault offers both free and premium versions. The free version includes essential password management features, while the premium version unlocks advanced features like cloud sync and priority support.',
                },
                {
                  q: 'How secure is Hidra Vault?',
                  a: 'We use AES-256 encryption, the same standard used by banks and governments. All data is encrypted locally on your device, and we never store your master password or passwords on our servers.',
                },
                {
                  q: 'Can I sync my passwords across devices?',
                  a: 'Yes, with our premium plan, you can securely sync your passwords across all your Apple devices using iCloud encryption.',
                },
                {
                  q: 'What if I forget my master password?',
                  a: 'If you forget your master password, you will need to reset the app and create a new vault. We cannot recover forgotten master passwords as we don\'t store them.',
                },
                {
                  q: 'How do I report a security vulnerability?',
                  a: 'Please email us at hidra.supp@gmail.com with details about the vulnerability. We take security seriously and will respond promptly.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-secondary rounded-lg border border-border"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
