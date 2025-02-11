'use client';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Pricing() {
  return (
    <>
      <Header />
      <div className="py-24 sm:py-32 mt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Simple, transparent pricing
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              No per-user pricing. No hidden fees. Start managing incidents effectively with your whole team.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-indigo-500/20 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">Team Plan</h3>
              <p className="mt-6 text-base leading-7 text-gray-300">
                Everything you need to manage incidents effectively with your team. Simple, powerful, and affordable.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold leading-6 text-indigo-400">What's included</h4>
                <ul className="mt-2 space-y-4 text-sm leading-6 text-gray-300">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited incidents & services</span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Video and audio bridge</span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Email alerts</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-300">Early adopter pricing</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-white">$59</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">/month</span>
                  </p>
                  <Link
                    href="/"
                    className="mt-10 block w-full rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Join the waitlist
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-400">
                  Be the first to know when we launch to take advantage of the early adopter pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="mx-auto mt-24 max-w-7xl">
            <h3 className="text-xl font-semibold text-center text-indigo-400 mb-12">Coming Soon</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-2xl bg-gray-900/30 p-8 hover:bg-gray-900/50 transition">
                <h4 className="text-lg font-semibold text-white mb-4">On-call Scheduling</h4>
                <p className="text-gray-300 text-sm">Automated scheduling, rotation management, and escalation policies for your on-call teams.</p>
              </div>
              <div className="relative rounded-2xl bg-gray-900/30 p-8 hover:bg-gray-900/50 transition">
                <h4 className="text-lg font-semibold text-white mb-4">Incident Playbooks</h4>
                <p className="text-gray-300 text-sm">Create and manage standardized response procedures for different types of incidents.</p>
              </div>
              <div className="relative rounded-2xl bg-gray-900/30 p-8 hover:bg-gray-900/50 transition">
                <h4 className="text-lg font-semibold text-white mb-4">Incident Simulations</h4>
                <p className="text-gray-300 text-sm">Practice and improve your incident response with realistic scenario simulations.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mx-auto mt-24 max-w-4xl">
            <h3 className="text-2xl font-bold text-center text-white mb-12">Frequently Asked Questions</h3>
            <dl className="space-y-8">
              <div>
                <dt className="text-lg font-semibold leading-7 text-white">Is there a free trial?</dt>
                <dd className="mt-2 text-base text-gray-300">Yes, try Drill free for 14 days with full access to all features. No credit card required.</dd>
              </div>
              <div>
                <dt className="text-lg font-semibold leading-7 text-white">Can I cancel my subscription?</dt>
                <dd className="mt-2 text-base text-gray-300">Yes, you can cancel anytime. No contracts or strings attached. You'll retain access until the end of your billing period.</dd>
              </div>
              <div>
                <dt className="text-lg font-semibold leading-7 text-white">Where is my data hosted?</dt>
                <dd className="mt-2 text-base text-gray-300">We host all data exclusively in Europe, ensuring compliance with EU data protection regulations.</dd>
              </div>
              <div>
                <dt className="text-lg font-semibold leading-7 text-white">Do you offer refunds?</dt>
                <dd className="mt-2 text-base text-gray-300">Yes, if you're not satisfied, we offer a full refund within the first 30 days of your paid subscription.</dd>
              </div>
              <div>
                <dt className="text-lg font-semibold leading-7 text-white">What payment methods do you accept?</dt>
                <dd className="mt-2 text-base text-gray-300">We accept all major payment methods through our secure payment partner, Stripe. We do not store any payment information.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
} 