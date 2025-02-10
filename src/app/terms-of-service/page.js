'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="bg-[#040404] min-h-screen">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Terms of Service</h1>
            <p className="mt-6 text-base text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="mt-10 space-y-12 text-base leading-7 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using Drill's incident management platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Use License</h2>
                <p className="mb-4">
                  Subject to your compliance with these Terms of Service, Drill grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the platform for your internal business purposes.
                </p>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Modify or copy the materials without explicit permission</li>
                  <li>Use the materials for any commercial purpose outside your organization</li>
                  <li>Attempt to decompile or reverse engineer any software contained in the platform</li>
                  <li>Remove any copyright or other proprietary notations</li>
                  <li>Transfer the materials to another person or organization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Service Availability and Support</h2>
                <p>
                  While we strive to ensure high availability of our platform, we do not guarantee that the service will be uninterrupted or error-free. We provide support through our standard support channels during business hours.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Data Privacy and Security</h2>
                <p>
                  We take data privacy and security seriously. Our handling of your data is governed by our Privacy Policy. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Payment Terms</h2>
                <p>
                  Subscription fees are billed in advance on a monthly basis. All fees are non-refundable except as required by law or as explicitly stated in these terms. Failure to maintain an active subscription will result in service suspension.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the platform will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Limitation of Liability</h2>
                <p>
                  In no event shall Drill, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Contact Information</h2>
                <p>
                  Questions about the Terms of Service should be sent to us at{' '}
                  <a href="mailto:legal@drill.so" className="text-indigo-400 hover:text-indigo-300">
                    legal@drill.so
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}