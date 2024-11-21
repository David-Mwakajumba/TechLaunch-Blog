import React from "react";
import { Link } from "react-router-dom";
// import darkLogo from "../assets/logo-dark.svg";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-6">
          <Link
            to="/"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 0L75 30L90 0H120L90 60L120 120H90L75 90L60 120H30L60 60L30 0H60Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-bold text-xl tracking-wider">
              LUCKY BEARD
            </span>
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
  );
}
