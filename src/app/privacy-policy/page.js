'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#040404] min-h-screen">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
            <p className="mt-6 text-base text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="mt-10 space-y-12 text-base leading-7 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Introduction</h2>
                <p>
                  At Drill, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our incident management platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Information We Collect</h2>
                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email, company details)</li>
                  <li>Incident data and communications</li>
                  <li>Usage information and platform analytics</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Improving and personalizing user experience</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Communicating with you about service updates</li>
                  <li>Ensuring platform security and preventing abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to maintain the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Data Retention</h2>
                <p>
                  We retain your information for as long as your account is active or as needed to provide you services. We may also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Your Rights</h2>
                <p className="mb-4">You have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your information</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@drill.so" className="text-indigo-400 hover:text-indigo-300">
                    privacy@drill.so
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