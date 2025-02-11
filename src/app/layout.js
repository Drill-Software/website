import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://drill.so'),
  title: {
    default: 'Incident Management Platform - Drill',
    template: '%s - Drill'
  },
  description: 'Transform your incident management with Drill. Streamline response, foster collaboration, and turn incidents into opportunities for growth.',
  keywords: ['incident management', 'incident response', 'DevOps', 'SRE', 'site reliability', 'incident collaboration'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drill.so',
    title: 'Drill - Incident Management Platform',
    description: 'Transform your incident management with Drill. Streamline response, foster collaboration, and turn incidents into opportunities for growth.',
    siteName: 'Drill'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drill - Incident Management Platform',
    description: 'Transform your incident management with Drill. Streamline response, foster collaboration, and turn incidents into opportunities for growth.',
    creator: '@trydrill'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          src="https://cdn.seline.so/seline.js"
          data-token="84ad6d5318b1c7d"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} h-full bg-[#040404] text-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
