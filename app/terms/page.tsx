'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsOfService() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p className="text-foreground leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Hidra Vault
                (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding your use of the Hidra Vault
                iOS application (the &quot;Application&quot;). By downloading, installing, or using the Application, you agree
                to be bound by these Terms. If you do not agree to these Terms, do not use the Application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Use License
              </h2>
              <p className="text-foreground leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to use the Application for personal,
                non-commercial purposes, subject to these Terms. You may not:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mt-4">
                <li>Modify or alter the Application</li>
                <li>Reverse engineer, decompile, or disassemble the Application</li>
                <li>Remove any proprietary notices or labels</li>
                <li>Use the Application for commercial purposes</li>
                <li>Transfer or sublicense the Application</li>
                <li>Use the Application to develop competing applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Maintaining the confidentiality of your credentials and master password</li>
                <li>All activities that occur under your account</li>
                <li>Keeping your device secure</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using the Application for illegal or unauthorized purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Acceptable Use Policy
              </h2>
              <p className="text-foreground leading-relaxed">
                You agree not to use the Application in any manner that:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mt-4">
                <li>Violates any applicable law or regulation</li>
                <li>Infringes upon intellectual property rights</li>
                <li>Constitutes harassment, abuse, or threats</li>
                <li>Contains viruses, malware, or harmful code</li>
                <li>Disrupts the normal operation of the Application</li>
                <li>Attempts to gain unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Data Storage and Backup
              </h2>
              <p className="text-foreground leading-relaxed">
                Hidra Vault stores your passwords locally on your device using AES-256 encryption. We do not maintain backups
                of your password vault on our servers. You are responsible for creating your own backups. We are not liable
                for any loss of data due to device damage, loss, or theft.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Third-Party Content and Links
              </h2>
              <p className="text-foreground leading-relaxed">
                The Application may contain links to third-party websites and services. We are not responsible for the content,
                accuracy, or practices of these external sites. Your use of third-party services is governed by their terms
                and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-foreground leading-relaxed">
                THE APPLICATION IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT
                WARRANT THAT THE APPLICATION WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-foreground leading-relaxed">
                IN NO EVENT SHALL HIDRA VAULT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, OR ANY LOSS OF DATA, PRIVACY, OR PROFITS, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE
                APPLICATION, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Indemnification
              </h2>
              <p className="text-foreground leading-relaxed">
                You agree to indemnify and hold harmless Hidra Vault and its officers, directors, employees, and agents from
                any claims, damages, or losses arising out of your violation of these Terms or your use of the Application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Modification of Terms
              </h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to
                the Application. Your continued use of the Application following the posting of revised Terms means that you
                accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Termination
              </h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to terminate or suspend your access to the Application at any time, for any reason, without
                notice or liability. Upon termination, your right to use the Application will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Governing Law
              </h2>
              <p className="text-foreground leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Hidra Vault
                is located, without regard to its conflicts of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. Contact Information
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-foreground font-semibold">Hidra Vault Support</p>
                <a href="mailto:hidra.supp@gmail.com" className="text-primary hover:underline">
                  hidra.supp@gmail.com
                </a>
              </div>
            </section>

            <section className="p-6 bg-secondary border-l-4 border-primary rounded">
              <p className="text-sm text-muted-foreground">
                By using Hidra Vault, you acknowledge that you have read, understood, and agree to be bound by these Terms of
                Service.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
