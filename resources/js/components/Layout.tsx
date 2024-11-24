import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@/types';

export default function Layout({ children }: LayoutProps) {
  const showHeader = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* {showHeader && <Header />} */}
      <Header/>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}