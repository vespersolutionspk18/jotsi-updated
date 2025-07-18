import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Accounting', href: '/accounting' },
    { name: 'Estimation', href: '/estimation' },
    { name: 'Offshoring', href: '/offshoring' },
    { name: 'Financial Advisory', href: '/financial-advisory' },
    { name: 'Technology', href: '/technology' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  return (
    <footer className="bg-black text-white p-8 md:p-12 lg:px-16 lg:pt-8 lg:pb-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section: Logo and Nav Links */}
        <div className="flex flex-col w-full md:w-auto">
          <div className="mb-8">
            <Image src="/assets/jotsi.svg" alt="Jotsi Logo" width={120} height={40} />
          </div>
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-base md:text-lg hover:underline whitespace-nowrap">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Copyright Info */}
        <div className="text-center md:text-right text-xs w-full md:w-auto mt-8 md:mt-auto">
          <p className="text-sm">&copy; 2025 Jotsi Inc. Registered in Canada.</p>
          <p className="text-sm">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;