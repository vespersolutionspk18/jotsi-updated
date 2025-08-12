"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const mobileMenu = (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50" 
          style={{ zIndex: 999998 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-black/95 backdrop-blur-lg w-64 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 999999 }}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          <Link href="/" onClick={closeMenu} className="text-lg text-white hover:text-gray-400">Home</Link>
          <Link href="/about" onClick={closeMenu} className="text-lg text-white hover:text-gray-400">About</Link>
          <Link href="/#services" onClick={closeMenu} className="text-lg text-white hover:text-gray-400">Services</Link>
          <Link href="/contact" onClick={closeMenu}>
            <Button className="text-lg" variant="secondary">Get In Touch</Button>
          </Link>
        </nav>
      </div>
    </>
  );

  return (
    <>
      <header className="border-[1px] border-white/12 flex items-center justify-between p-3 bg-white/7 backdrop-blur-xs rounded-md shadow-lg">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/jotsi.svg" alt="Logo" width={96} height={24} className="h-auto w-24 mr-4 cursor-pointer" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center text-white space-x-8">
          <Link href="/" className="text-md hover:text-gray-400">Home</Link>
          <Link href="/about" className="text-md hover:text-gray-400">About</Link>
          <Link href="/#services" className="text-md hover:text-gray-400">Services</Link>
          <Link href="/contact">
            <Button className="text-md" variant="secondary">Get In Touch</Button>
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white relative z-20">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Portal for mobile menu */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Header;
