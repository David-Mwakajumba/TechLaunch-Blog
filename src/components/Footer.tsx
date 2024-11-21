import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A2D30] text-white py-12">
      <div className="container mx-auto px-8">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <svg width="48" height="48" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M60 0L75 30L90 0H120L90 60L120 120H90L75 90L60 120H30L60 60L30 0H60Z" fill="currentColor"/>
            </svg>
            <span className="font-bold text-2xl tracking-wider">LUCKY BEARD</span>
          </div>
          
          {/* Navigation Links and Social Media */}
          <div className="flex items-center gap-8">
            {/* Policy Links */}
            <nav className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie policy</a>
            </nav>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Cookie Notice */}
        <div className="border-t border-[#3D4044] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400 md:pr-8">
              By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
            </p>
            <button className="px-6 py-2 bg-[#FF4D4D] rounded-full text-sm font-medium hover:bg-[#FF3333] transition-colors whitespace-nowrap">
              Accept
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}