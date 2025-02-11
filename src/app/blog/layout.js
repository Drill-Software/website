import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'Blog | Drill',
  description: 'Latest insights, guides, and updates about incident management and Drill.',
  openGraph: {
    title: 'Blog | Drill',
    description: 'Latest insights, guides, and updates about incident management and Drill.',
  },
  twitter: {
    title: 'Blog | Drill',
    description: 'Latest insights, guides, and updates about incident management and Drill.',
  }
};

export default function BlogLayout({ children }) {
  return (
    <div className="bg-[#040404] min-h-screen">
      <ClientWrapper>
        {children}
      </ClientWrapper>
    </div>
  );
} 