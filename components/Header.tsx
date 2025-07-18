import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <div className="">
        <header className="border-[1px] border-white/12 flex items-center justify-between p-3 bg-white/7 backdrop-blur-xs rounded-md shadow-lg">
      <div className="flex items-center">
        <img src="/assets/jotsi.svg" alt="Logo" className="h-auto w-24 mr-4" />
      </div>
      <nav className="flex items-center text-white space-x-8">
        <a href="#" className="text-md  hover:text-gray-400">Home</a>
        <a href="#" className="text-md hover:text-gray-400">About</a>
        <a href="#" className="text-md hover:text-gray-400">Services</a>
        <Button className="text-md" variant="secondary">Get In Touch</Button>
      </nav>
    </header>
    </div>
  );
};

export default Header;