"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header className="border-[1px] border-white/12 flex items-center justify-between p-3 bg-white/7 backdrop-blur-xs rounded-md shadow-lg">
        <div className="flex items-center">
          <Image src="/assets/jotsi.svg" alt="Logo" width={96} height={24} className="h-auto w-24 mr-4" />
        </div>
        <nav className="hidden md:flex items-center text-white space-x-8">
          <a href="#" className="text-md hover:text-gray-400">Home</a>
          <a href="#" className="text-md hover:text-gray-400">About</a>
          <a href="#" className="text-md hover:text-gray-400">Services</a>
          <Button className="text-md" variant="secondary">Get In Touch</Button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-black/80 backdrop-blur-lg w-64 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          <a href="#" className="text-lg text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-lg text-white hover:text-gray-400">About</a>
          <a href="#" className="text-lg text-white hover:text-gray-400">Services</a>
          <Button className="text-lg" variant="secondary">Get In Touch</Button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
