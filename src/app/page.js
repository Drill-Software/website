'use client';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {

  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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

  return (
    <div className="bg-neutral-950">
       <header className="absolute inset-x-0 top-0 z-50 max-w-screen-xl mx-auto">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Drill</span>
                <Image
                src="/logo.png"
                alt="Drill logo"
                width={70}
                height={21}
                priority
              />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">

            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="https://app.drill.so/" className="text-base font-semibold text-neutral-900 bg-white py-2 px-4 rounded-sm hover:bg-neutral-200 transition ease-in-out">Sign in</Link>
            </div>
          </nav>
        </header>
        <div className="relative isolate pt-14">
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl text-center">
                <h1 className="text-pretty text-4xl font-semibold tracking-tight text-neutral-100 sm:text-6xl">Incidents happen, we've got this.</h1>
                <p className="mt-8 text-pretty text-lg text-neutral-300 sm:text-xl">Meet Drill, the incident management platform that helps teams prepare, respond, and recover with ease.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {formSubmitted ? (
                  <div className="rounded-md bg-green-50 p-4 drop-shadow-sm">
                    <div className="flex">
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">Thanks, watch your inbox for an invite.</h3>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="my@email.com"
                      name="email"
                      id="email"
                      className="w-96 flex-auto rounded-md bg-white/5 px-3.5 py-2 mr-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                      required
                    />
                    <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Stay Updated</button>
                    <p className="text-neutral-500 text-sm mt-4">No Spam, just updates on our launch.</p>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                  </form>
                )}
                </div>
              </div>
              <Image
                  className="mt-16 rounded-md ring-1 ring-neutral-800 sm:mt-24 vertical-perspective shadow-lg shadow-neutral-900/50"
                    src="/product_incident.png"
                    alt="Incident page"
                    width={2432}
                    height={1217}
                    priority
                  />
            </div>
          </div>
        </div>
        <footer className="bg-neutral-950">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </nav>
          <div className="mt-16 flex justify-center gap-x-10">
            <Link href="https://x.com/trydrill" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">X</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
              </svg>
            </Link>
            <Link href="https://github.com/organizations/Drill-Software" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-400"> &copy; {new Date().getFullYear()} Drill Software Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}