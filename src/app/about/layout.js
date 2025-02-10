export const metadata = {
  title: 'Building Better Incident Management Culture',
  description: 'Learn how Drill is transforming incident management culture. Built by an SRE veteran to help teams turn incidents into opportunities for growth and learning.',
  openGraph: {
    title: 'About Drill - Building Better Incident Management Culture',
    description: 'Learn how Drill is transforming incident management culture. Built by an SRE veteran to help teams turn incidents into opportunities for growth and learning.',
  },
  twitter: {
    title: 'About Drill - Building Better Incident Management Culture',
    description: 'Learn how Drill is transforming incident management culture. Built by an SRE veteran to help teams turn incidents into opportunities for growth and learning.',
  }
};

export default function AboutLayout({ children }) {
  return (
    <div className="bg-[#040404] min-h-screen">
      {children}
    </div>
  );
} 