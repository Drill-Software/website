'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function About() {
  return (
    <div className="bg-[#040404] min-h-screen">
      <Header />
      <div className="py-24 sm:py-32 mt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">The Drill Manifesto</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Incident management is broken.
              <br />
              We're here to fix it.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              The old way of handling incidents is failing teams. Blame cultures, reactive approaches, and siloed knowledge are holding organizations back. We're building a new way forward.
            </p>
          </div>

          {/* Core Beliefs Section */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <h3 className="text-xl font-semibold leading-7 text-white">The Status Quo is Failing</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  Today's incident management is stuck in the past. Teams waste precious time in chaotic war rooms, knowledge stays trapped in people's heads, and the same incidents keep happening. This creates stress, burnout, and missed opportunities for growth.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <h3 className="text-xl font-semibold leading-7 text-white">There's a Better Way</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  We envision a world where incidents strengthen teams instead of breaking them. Where each incident becomes a catalyst for improvement, and where learning is woven into the fabric of how teams work together.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <h3 className="text-xl font-semibold leading-7 text-white">Culture Over Tools</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  Real change starts with culture. We're building tools that promote psychological safety, encourage open communication, and turn incident response into a collaborative learning experience.
                </p>
              </div>
            </div>
          </div>

          {/* Our Principles Section */}
          <div className="mx-auto mt-24 max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-12 text-center">Our Core Principles</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  </div>
                  Psychological Safety First
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Create an environment where team members feel safe to speak up, ask questions, and share concerns without fear of blame or retribution.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  Learning Over Blame
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Focus on understanding what happened and why, not who to blame. Every incident is an opportunity to learn and improve.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
                    </svg>
                  </div>
                  Collective Growth
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Share knowledge openly and build collective expertise. When one team member learns, everyone grows stronger.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Proactive Prevention
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Use insights from past incidents to prevent future ones. Build resilience through continuous improvement.
                </dd>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="mx-auto mt-24 max-w-2xl rounded-3xl ring-1 ring-gray-800 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <div className="flex items-center gap-x-4">
                <Image
                  src="/nic.jpg"
                  alt="Nic"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">From the Founder</h3>
                  <p className="mt-6 text-base leading-7 text-gray-300">
                    Hi, I'm Nic! With over a decade of service management and SRE experience, I've seen firsthand how proper incident management can transform teams. I'm building Drill because I believe there's a better way to handle incidents - one that strengthens teams instead of breaking them.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Link
                      href="https://x.com/niccoatesuk"
                      className="text-sm text-gray-400 hover:text-white inline-flex items-center gap-x-2"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                      </svg>
                      Follow on X
                    </Link>
                    <Link
                      href="https://bsky.app/profile/niccoates.uk"
                      className="text-sm text-gray-400 hover:text-white inline-flex items-center gap-x-2"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.002 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333s3.738 8.333 8.333 8.333 8.333-3.738 8.333-8.333-3.738-8.333-8.333-8.333zm0 2.5c.92 0 1.667.746 1.667 1.666s-.746 1.667-1.667 1.667-1.667-.746-1.667-1.667.746-1.666 1.667-1.666zm-3.333 5h6.666c.46 0 .834.373.834.833s-.373.833-.834.833h-6.666c-.46 0-.834-.373-.834-.833s.373-.833.834-.833zm0 3.333h6.666c.46 0 .834.373.834.833s-.373.833-.834.833h-6.666c-.46 0-.834-.373-.834-.833s.373-.833.834-.833z" />
                      </svg>
                      Follow on BlueSky
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 