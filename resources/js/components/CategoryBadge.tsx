import React from 'react';

const categoryColors = {
  NOTICE: 'bg-pink-100 text-pink-800',
  LAUNCHPAD: 'bg-blue-100 text-blue-800',
  'TEAM BUILD': 'bg-green-100 text-green-800',
  BEARDATORIUM: 'bg-purple-100 text-purple-800'
};

interface CategoryBadgeProps {
  category: string;
  size?: 'small' | 'normal';
}

export function CategoryBadge({ category, size = 'normal' }: CategoryBadgeProps) {
  const colorClass = categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800';
  const sizeClass = size === 'small' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';
  
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colorClass} ${sizeClass}`}>
      {category}
    </span>
  );
}