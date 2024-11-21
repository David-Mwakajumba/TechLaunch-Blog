import React from 'react';
import BlogHero from '../components/BlogHero';
import BlogGrid from '../components/BlogGrid';

export default function BlogListPage() {
  return (
    <div className="space-y-16">
      <BlogHero />
      <BlogGrid />
    </div>
  );
}