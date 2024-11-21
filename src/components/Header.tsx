import React from 'react';
import { Link } from 'react-router-dom';
import { PenLine } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Lucky Beard Blog
          </Link>
          <Link 
            to="/create" 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PenLine className="h-4 w-4 mr-2" />
            Write Article
          </Link>
        </div>
      </div>
    </header>
  );
}