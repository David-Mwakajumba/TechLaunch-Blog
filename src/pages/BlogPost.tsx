import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorCard } from '../components/AuthorCard';
import { CategoryBadge } from '../components/CategoryBadge';
import { getPost, type Post } from '../api/posts';

export function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (err) {
        setError('Failed to fetch post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading post...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-red-600">{error || 'Post not found'}</div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-12">
          <CategoryBadge category={post.category} />
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <AuthorCard
            author={post.author.name}
            date={post.createdAt}
            readTime={post.readTime}
            avatarUrl={post.author.avatarUrl}
          />
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button className="btn-primary">
              Share on Twitter
            </button>
            <button className="btn-primary">
              Share on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}