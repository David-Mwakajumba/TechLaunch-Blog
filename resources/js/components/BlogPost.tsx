import { format } from 'date-fns';
import { ArrowRight, Book, Bell, Users, Beaker } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import IconRenderer from './IconRenderer';

const categoryIcons = {
  LAUNCHPAD: Book,
  NOTICE: Bell,
  'TEAM BUILD': Users,
  BEARDATORIUM: Beaker
};

interface BlogPostProps {
  id: string;
  category: keyof typeof categoryIcons;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  size?: 'normal' | 'large' | 'small';
}

export default function BlogPost({ post }: any) {
  // const Icon = categoryIcons[category];
  const sizeClasses = {
    normal: 'col-span-1',
    large: 'col-span-full md:col-span-2',
    small: 'col-span-1'
  };

  const { imagePath } = usePage().props;

  return (
    <article className={`group ${sizeClasses['normal']} bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300`}>
      <Link href={`/post/${post.slug}`} className="block h-full">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={imagePath + post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-8 space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <IconRenderer iconName={post.category.icon} className="w-5 h-5" />
              <span className="uppercase tracking-wider">{post.category.name}</span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">{format(post.created_at,'dd-MM-yyyy')}</span>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-500 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.description }} ></p>
          
          <div className="pt-4">
            <button className="inline-flex items-center px-6 py-3 bg-[#FF4D4D] text-white rounded-full group-hover:bg-[#FF3333] transition-all">
              Read more 
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}