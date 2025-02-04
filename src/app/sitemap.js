export default function sitemap() {
    return [
      {
        url: 'https://www.drill.so',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://www.drill.so/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://www.drill.so/terms-of-service',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      },
    ]
  }