'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-foreground leading-relaxed">
                Hidra Vault (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our iOS
                application Hidra Vault (the &quot;Application&quot;).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Personal Information
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    The Application is designed to work without collecting personal information. Your passwords and sensitive
                    data are stored locally on your device only. We do not collect, store, or have access to your passwords.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Automatically Collected Information
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    When you use our Application, we may automatically collect limited information such as:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-foreground space-y-2">
                    <li>Device information (model, OS version)</li>
                    <li>App crash reports</li>
                    <li>Usage analytics (features used)</li>
                    <li>IP address and approximate location</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Contact Information
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    If you contact us for support, we may collect your email address and any information you provide in your
                    message. This information is used only to respond to your inquiry.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>To provide, maintain, and improve our Application</li>
                <li>To understand how users interact with our Application</li>
                <li>To fix bugs and technical issues</li>
                <li>To respond to your inquiries and customer support requests</li>
                <li>To comply with legal obligations</li>
                <li>To detect and prevent fraudulent or unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Data Security
              </h2>
              <p className="text-foreground leading-relaxed">
                The security of your information is important to us. Hidra Vault uses AES-256 encryption to protect your
                passwords and sensitive data on your device. All data is encrypted locally on your device, and we do not
                store your passwords on our servers or in the cloud. We implement industry-standard security measures, but
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Sharing of Information
              </h2>
              <p className="text-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mt-4">
                <li>With service providers who assist us in operating our Application</li>
                <li>When required by law or to protect our rights</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Access the information we hold about you</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of certain data collection</li>
                <li>Disable location services through your device settings</li>
                <li>Disable analytics through the Application settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-foreground leading-relaxed">
                Our Application is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected personal information from a
                child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
                legal, or regulatory reasons. We will notify you of any material changes by updating the &quot;Last updated&quot;
                date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Contact Us
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="text-foreground font-semibold">Hidra Vault Support</p>
                <a href="mailto:hidra.supp@gmail.com" className="text-primary hover:underline">
                  hidra.supp@gmail.com
                </a>
              </div>
            </section>

            <section className="p-6 bg-secondary border-l-4 border-primary rounded">
              <p className="text-sm text-muted-foreground">
                By using Hidra Vault, you acknowledge that you have read and understood this Privacy Policy and agree to be
                bound by its terms.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
