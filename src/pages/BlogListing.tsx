import React, { useEffect, useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { getPosts, type Post } from '../api/posts';

export function BlogListing() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard 
              key={post._id}
              id={post._id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.createdAt}
              author={post.author.name}
              category={post.category}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}