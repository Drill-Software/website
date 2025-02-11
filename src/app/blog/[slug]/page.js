'use client';

import { use } from 'react';

const blogPosts = {
  'incident-management-best-practices-2024': {
    title: 'Incident Management Best Practices for 2024',
    date: 'March 15, 2024',
    readTime: '5 min read',
    content: `
      In today's fast-paced tech landscape, effective incident management is more crucial than ever. 
      As we navigate through 2024, organizations are facing increasingly complex challenges in maintaining 
      system reliability and responding to incidents efficiently.

      ## Key Trends in 2024

      1. **Automated Response Workflows**
      The automation of incident response workflows has become a game-changer. By implementing 
      automated systems, teams can reduce response times and maintain consistency in their 
      incident management processes.

      2. **Data-Driven Decision Making**
      Modern incident management relies heavily on data analytics to identify patterns, 
      predict potential issues, and optimize response strategies.

      3. **Collaborative Incident Response**
      Cross-functional collaboration has become essential in effective incident management. 
      Teams need to work together seamlessly to resolve issues quickly and effectively.

      ## Best Practices to Implement

      ### 1. Establish Clear Communication Channels
      Having well-defined communication protocols ensures that all stakeholders are kept 
      informed during incidents.

      ### 2. Regular Training and Simulation
      Conduct regular incident response drills to keep your team sharp and identify areas 
      for improvement.

      ### 3. Post-Incident Analysis
      Thorough post-incident reviews help teams learn from experiences and continuously 
      improve their response strategies.

      ## Conclusion
      
      As we continue through 2024, staying ahead of incident management trends and 
      implementing these best practices will be crucial for maintaining robust and 
      reliable systems.
    `,
  },
};

export default function BlogPost({ params }) {
  const resolvedParams = use(params);
  const post = blogPosts[resolvedParams.slug];

  if (!post) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white">Post not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 sm:py-32">
      <article className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-400">
              {post.date}
            </time>
            <span className="text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">{post.title}</h1>
          <div className="mt-10 prose prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
} 