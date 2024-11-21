import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Calendar, Tag } from 'lucide-react';

export default function BlogPostPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      // TODO: Replace with actual API call
      return {
        title: 'Sample Blog Post',
        content: 'This is a sample blog post content.',
        date: new Date(),
        category: 'TECHNOLOGY',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
      };
    }
  });

  if (isLoading) {
    return <div className="container mx-auto px-8 py-12">Loading...</div>;
  }

  return (
    <article className="container mx-auto px-8 py-12">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
      />
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{format(post.date, 'dd/MM/yyyy')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{post.category}</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}