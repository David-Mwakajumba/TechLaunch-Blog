import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export function BlogCard({ id, title, excerpt, date, author, category, imageUrl }: BlogCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blog/${id}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-gray-600">
              {format(new Date(date), 'MMM dd, yyyy')}
            </span>
            <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-700">
              {category}
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">By {author}</span>
            <ArrowUpRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </Link>
    </article>
  );
}