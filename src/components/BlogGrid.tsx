import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    id: '1',
    category: 'LAUNCHPAD',
    date: '14/11/2024',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    size: 'normal'
  },
  {
    id: '2',
    category: 'NOTICE',
    date: '14/11/2024',
    title: 'Daylight Savings Shift',
    excerpt: 'With the time change coming up next week, our South Africa team will be 2 hours behind Europe instead of the usual 1 hour.',
    image: 'https://images.unsplash.com/photo-1584208124888-3a20b9c799e4?auto=format&fit=crop&q=80',
    size: 'normal'
  },
  {
    id: '3',
    category: 'TEAM BUILD',
    date: '14/11/2024',
    title: 'Beardly beloved, we are gathered here today...',
    excerpt: 'Join us for our monthly team building session where we\'ll be focusing on creative collaboration and strengthening our bonds as a team.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80',
    size: 'normal'
  },
  {
    id: '4',
    category: 'BEARDATORIUM',
    date: '14/11/2024',
    title: "It's beard o'clock somewhere!",
    excerpt: 'Discover how our global team manages time zones effectively while maintaining a healthy work-life balance. Learn our best practices for asynchronous communication.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80',
    size: 'large'
  }
];

interface BlogGridProps {
  className?: string;
}

export default function BlogGrid({ className = '' }: BlogGridProps) {
  return (
    <section className={`container mx-auto px-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            {...post}
          />
        ))}
      </div>
      
      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No blog posts found.</p>
        </div>
      )}
    </section>
  );
}