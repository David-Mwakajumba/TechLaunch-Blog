import React from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../assets/logo-white.svg";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-6">
          <Link
            to="/"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <img src={whiteLogo} alt="Lucky Beard" className="h-12 w-auto" />
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
