'use client';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'incident-management-best-practices-2024',
    title: 'Incident Management Best Practices for 2024',
    excerpt: 'Learn about the latest trends and best practices in incident management that will help your team succeed in 2024.',
    date: 'March 15, 2024',
    readTime: '5 min read',
  },
  // More posts will be added here
];

export default function Blog() {
  return (
    <div className="py-24 sm:py-32 mt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-300">
            Insights, guides, and updates about incident management and Drill.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {blogPosts.map((post) => (
              <article key={post.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gray-800 object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-400">
                      {post.date}
                    </time>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-300">{post.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 