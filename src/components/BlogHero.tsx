import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

export default function BlogHero() {
  return (
    <div className="relative">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 0L75 30L90 0H120L90 60L120 120H90L75 90L60 120H30L60 60L30 0H60Z" fill="currentColor"/>
              </svg>
              <span className="font-bold text-xl tracking-wider">LUCKY BEARD</span>
            </Link>
            <Link 
              to="/create" 
              className="px-6 py-2.5 bg-[#FF4D4D] text-white rounded-full hover:bg-[#FF3333] transition-colors"
            >
              Create new article
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-2xl relative z-10">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            The Bearded<br />Blogger
          </h1>
          <div className="flex items-center gap-4 text-gray-500 uppercase tracking-wider text-sm mb-6">
            <span>Creativity</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Culture</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Collaboration</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Get a behind-the-scenes look at the day-to-day life of our creative team! From inspiring projects and team-building moments to the latest company news, our blog shares the stories, insights, and fun that fuel our creative agency.
          </p>
        </div>

        {/* Floating Shapes */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
          <div className="relative w-full h-full">
            <div 
              className="absolute right-20 top-10 w-32 h-32 rounded-full bg-teal-300/80 blur-sm animate-float"
              style={{ animationDelay: '0s' }}
            />
            <div 
              className="absolute right-48 top-32 w-24 h-24 rounded-full bg-orange-300/80 blur-sm animate-float"
              style={{ animationDelay: '0.5s' }}
            />
            <div 
              className="absolute right-32 bottom-20 w-36 h-36 rounded-3xl bg-yellow-200/80 blur-sm rotate-12 animate-float"
              style={{ animationDelay: '1s' }}
            />
            <div 
              className="absolute right-96 bottom-40 w-28 h-28 rounded-full bg-purple-300/80 blur-sm animate-float"
              style={{ animationDelay: '1.5s' }}
            />
            <div 
              className="absolute right-64 top-64 w-40 h-40 rounded-[40%] bg-green-200/80 blur-sm rotate-45 animate-float"
              style={{ animationDelay: '2s' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}