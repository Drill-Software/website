'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="bg-[#040404] min-h-screen">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">About Drill</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Transforming incident management culture
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We believe that incidents are not failures, but opportunities for growth, learning, and team collaboration.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-y-12">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Our Philosophy</h2>
                  <p className="mt-6 text-base leading-7 text-gray-300">
                    Incidents are inevitable in any system. Instead of viewing them as failures, we see them as valuable opportunities to learn, improve, and bring teams closer together. This perspective shift is crucial for building resilient systems and stronger teams.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Cultural Transformation</h2>
                  <p className="mt-6 text-base leading-7 text-gray-300">
                    Great incident management isn't just about tools—it's about culture. When teams embrace incidents as learning opportunities, they communicate more openly, collaborate more effectively, and build better systems together.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Learning Through Experience</h2>
                  <p className="mt-6 text-base leading-7 text-gray-300">
                    Each incident is a story that contains valuable lessons. By approaching incidents with curiosity rather than blame, teams can uncover insights that lead to meaningful improvements in their systems and processes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-12">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Building Together</h2>
                  <p className="mt-6 text-base leading-7 text-gray-300">
                    Drill is designed to foster collaboration during incidents. Our tools help teams work together seamlessly, share knowledge effectively, and build collective expertise that makes everyone stronger.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Meet the Founder</h2>
                  <div className="mt-6 flex items-start gap-x-6">
                    <Image
                      src="/nic.jpg"
                      alt="Nic"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-base leading-7 text-gray-300">
                        Hi, I'm Nic! I'm building Drill to help teams transform how they handle incidents. With over a decade of service management and SRE experience, I've seen firsthand how proper incident management can strengthen teams and improve systems.
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

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">Join the Journey</h3>
              <p className="mt-6 text-base leading-7 text-gray-300">
                We're building Drill to help teams embrace a better way of handling incidents. Join us in transforming incident management from a source of stress into an opportunity for growth.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <Link
                  href="/"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Join the waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 