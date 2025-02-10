export const metadata = {
  title: 'Terms of Service',
  description: 'Review Drill\'s terms of service. Clear and transparent terms outlining the usage of our incident management platform.',
  openGraph: {
    title: 'Terms of Service - Drill Incident Management',
    description: 'Review Drill\'s terms of service. Clear and transparent terms outlining the usage of our incident management platform.',
  },
  twitter: {
    title: 'Terms of Service - Drill Incident Management',
    description: 'Review Drill\'s terms of service. Clear and transparent terms outlining the usage of our incident management platform.',
  }
};

export default function TermsOfServiceLayout({ children }) {
  return (
    <div className="bg-[#040404] min-h-screen">
      {children}
    </div>
  );
} 