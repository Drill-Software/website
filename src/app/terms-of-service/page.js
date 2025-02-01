import Image from "next/image";
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <Link href="/pricing" className="text-base text-neutral-300 font-semibold hover:text-white transition ease-in-out">Pricing</Link>
              <Link href="/changelog" className="text-base text-neutral-300 font-semibold hover:text-white transition ease-in-out">Updates</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="https://app.drill.so/" className="text-base font-semibold text-neutral-900 bg-white py-2 px-4 rounded-sm hover:bg-neutral-200 transition ease-in-out">Sign in</Link>
            </div>
          </nav>
        </header>
        <div className="px-6 py-24 mt-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-neutral-300">
            <h1 className="mt-2 text-pretty text-3xl text-center font-semibold tracking-tight text-neutral-50 sm:text-4xl">Terms of Service</h1>
            <p className="mt-6">Welcome to Drill, an incident management platform designed to help you manage and run your services. These Terms of Service ("Terms") govern your use of our platform and services.</p>
            <h2 className="mt-6 text-pretty text-lg font-semibold tracking-tight text-neutral-50 sm:text-xl">Introduction</h2>
            <p className="mt-6">Drill is a web-based application that provides incident management tools and services to help you manage and respond to incidents. By using our platform, you agree to be bound by these Terms.</p>
            <h2 className="mt-6 text-pretty text-lg font-semibold tracking-tight text-neutral-50 sm:text-xl">Payment Terms</h2>
            <p className="mt-6">Our payment terms are as follows:</p>
            <ul className="list-disc list-inside ml-6 mt-4">
                <li>You can pay for our services on a monthly or annual basis</li>
                <li>All payments are non-refundable</li>
            </ul>
            <h2 className="mt-6 text-pretty text-lg font-semibold tracking-tight text-neutral-50 sm:text-xl">Free Trial</h2>
            <p className="mt-6">We offer a 7-day free trial to new customers. During this trial period, you will have access to our full range of services and features.</p>
        </div>
        </div>
        <footer className="bg-neutral-950">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
            <Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link>
            <Link href="/changelog" className="text-gray-400 hover:text-white">Updates</Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </nav>
          <div className="mt-16 flex justify-center gap-x-10">
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">X</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
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