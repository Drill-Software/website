export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn about how Drill protects your data and privacy. Our comprehensive privacy policy outlines our data collection, usage, and protection practices.',
  openGraph: {
    title: 'Privacy Policy - Drill Incident Management',
    description: 'Learn about how Drill protects your data and privacy. Our comprehensive privacy policy outlines our data collection, usage, and protection practices.',
  },
  twitter: {
    title: 'Privacy Policy - Drill Incident Management',
    description: 'Learn about how Drill protects your data and privacy. Our comprehensive privacy policy outlines our data collection, usage, and protection practices.',
  }
};

export default function PrivacyPolicyLayout({ children }) {
  return (
    <div className="bg-[#040404] min-h-screen">
      {children}
    </div>
  );
} 