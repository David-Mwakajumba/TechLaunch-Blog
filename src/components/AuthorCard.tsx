import React from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface AuthorCardProps {
  author: string;
  date: string;
  readTime: string;
  avatarUrl: string;
}

export function AuthorCard({ author, date, readTime, avatarUrl }: AuthorCardProps) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={avatarUrl}
        alt={author}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-gray-900">{author}</h3>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {format(new Date(date), 'MMM dd, yyyy')}
          </div>
          <span>·</span>
          <span>{readTime} read</span>
        </div>
      </div>
    </div>
  );
}