import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  large?: boolean;
}

export default function BlogCard({ category, date, title, excerpt, image, large = false }: BlogCardProps) {
  return (
    <div className={`group ${large ? 'col-span-2 md:col-span-3' : ''}`}>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="uppercase">{category}</span>
          <span>|</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-red-500 transition-colors">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="flex items-center text-red-500 hover:text-red-600 transition-colors">
          Read more <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}