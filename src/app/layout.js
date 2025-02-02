import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drill: Incident Management Platform",
  description: "Drill is an incident management platform that helps teams prepare, respond, and recover from disruptions with confidence. Simplify incident response and minimize downtime with our intuitive platform.",
  keywords: "incident management, incident response, disruption management, crisis management, emergency response, team collaboration, project management, DevOps, IT operations, incident management software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script
          src="https://cdn.seline.so/seline.js"
          data-token="84ad6d5318b1c7d"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
