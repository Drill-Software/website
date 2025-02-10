'use client';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {

  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setFormSubmitted(true);
        setEmail(''); // Clear the form
        setErrorMessage(null);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'An error occurred.');
      }
    } catch (error) {
      setErrorMessage('Network error or server not responding.');
    }
  };

  const navigationItems = [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
  ];

  return (
    <div className="bg-[#040404] min-h-screen">
      <Header />
      <div className="relative isolate">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8">
                <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30">
                  Coming Soon
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Incident response that works for your team
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Streamline your incident management process with automated workflows, real-time collaboration, and actionable insights.
              </p>
              <div className="mt-10 flex flex-col items-center gap-y-6">
                {formSubmitted ? (
                  <div className="rounded-md bg-green-50 p-4 w-full max-w-md">
                    <div className="flex">
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">Thanks! We'll keep you updated on our launch.</h3>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="flex gap-x-3">
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Join Waitlist
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-3">
                      Be the first to know when we launch. No spam, just updates.
                    </p>
                    {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
                  </form>
                )}
              </div>
            </div>

            <div className="mt-16 flow-root sm:mt-24">
              <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/product_incident.png"
                  alt="Drill incident management dashboard"
                  width={2432}
                  height={1217}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  priority
                />
              </div>
            </div>

            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-400">Better incident management</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to handle incidents effectively</p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  From detection to resolution, Drill provides the tools your team needs to manage incidents efficiently and prevent future disruptions.
                </p>
              </div>

              {/* Rapid Response Section */}
              <div className="mt-16 sm:mt-20 lg:mt-24">
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                    <div className="relative lg:order-last">
                      <Image
                        src="/rapid-response.png"
                        alt="Rapid response interface"
                        width={1200}
                        height={800}
                        className="relative rounded-xl shadow-xl ring-1 ring-gray-900/10"
                        priority
                      />
                    </div>
                    <div className="pt-6">
                      <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-indigo-500/10 p-2 ring-1 ring-indigo-500/20">
                          <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold leading-7 text-white">Rapid Response</h3>
                      </div>
                      <p className="mt-6 text-lg leading-8 text-gray-300">
                        Streamline your incident response with a structured workflow that ensures consistency and clarity. Create, track, and resolve incidents efficiently with our proven methodology.
                      </p>
                      <ul className="mt-8 space-y-4 text-base leading-7 text-gray-300">
                        <li className="flex gap-x-3 items-center">
                          <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Create incidents automatically or manually
                        </li>
                        <li className="flex gap-x-3 items-center">
                          <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Pre-defined four pillar workflow
                        </li>
                        <li className="flex gap-x-3 items-center">
                          <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Track affected services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seamless Collaboration Section */}
              <div className="mt-16 sm:mt-20 lg:mt-24">
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                    <div className="relative">
                      <Image
                        src="/collaboration.png"
                        alt="Team collaboration interface"
                        width={1200}
                        height={800}
                        className="relative rounded-xl shadow-xl ring-1 ring-gray-900/10"
                        priority
                      />
                    </div>
                    <div className="pt-6">
                      <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-indigo-500/10 p-2 ring-1 ring-indigo-500/20">
                          <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold leading-7 text-white">Seamless Collaboration</h3>
                      </div>
                      <p className="mt-6 text-lg leading-8 text-gray-300">
                        Keep your entire team aligned with real-time updates, centralized communication, and clear ownership tracking throughout the incident lifecycle.
                      </p>
                      <ul className="mt-8 space-y-4 text-base leading-7 text-gray-300">
                        <li className="flex gap-x-3 items-center">
                          <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Real-time incident status dashboard
                        </li>
                        <li className="flex gap-x-3 items-center">
                          <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Integrated video and audio bridge with real-time comments
                        </li>
                        <li className="flex gap-x-3 items-center">
                          <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Automated stakeholder updates
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrations Section */}
              <div className="mt-16 sm:mt-20 lg:mt-24">
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                    <div className="pt-6">
                      <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-indigo-500/10 p-2 ring-1 ring-indigo-500/20">
                          <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold leading-7 text-white">Powerful Integrations</h3>
                      </div>
                      <p className="mt-6 text-lg leading-8 text-gray-300">
                        Connect Drill with your existing tools and workflows. Seamlessly integrate with the services you already use to streamline your incident management process.
                      </p>
                      <p className="mt-6 text-base leading-7 text-gray-300">
                        From communication tools like Slack and Microsoft Teams, to monitoring services like Datadog and PagerDuty, to development platforms like GitHub and Jira - Drill works with the tools your team already loves.
                      </p>
                    </div>
                    <div className="relative lg:order-last">
                      <Image
                        src="/integrations.png"
                        alt="Integration ecosystem"
                        width={1200}
                        height={800}
                        className="relative rounded-xl shadow-xl ring-1 ring-gray-900/10"
                        priority
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#040404] via-transparent to-transparent opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}