export const mockPosts = [
  {
    title: "Getting Started with React and TypeScript",
    content: "<p>React and TypeScript are powerful tools that, when combined, provide an excellent development experience...</p>",
    excerpt: "Learn how to set up and use React with TypeScript for better development experience",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070",
    author: {
      name: "John Doe",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readTime: "5 min",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    title: "Modern Web Design Principles",
    content: "<p>Understanding modern web design principles is crucial for creating effective user interfaces...</p>",
    excerpt: "Explore the key principles of modern web design and how to apply them",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=2070",
    author: {
      name: "Jane Smith",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readTime: "4 min",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString()
  }
];