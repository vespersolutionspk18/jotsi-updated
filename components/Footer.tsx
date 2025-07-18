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
    { name: 'Technology', href: '/technology' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  const column1Links = navLinks.slice(0, Math.ceil(navLinks.length / 2));
  const column2Links = navLinks.slice(Math.ceil(navLinks.length / 2));

  return (
    <footer className="bg-black text-white px-16 pb-16 pt-8">
      <div className="flex justify-between items-start">
        {/* Top Left: Logo and Nav Links */}
        <div className="flex flex-col">
          <div className="mb-8">
            <Image src="/assets/jotsi.svg" alt="Jotsi Logo" width={120} height={40} />
          </div>
          <div className="flex space-x-16">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2">
              {column1Links.map((link) => (
                <Link key={link.name} href={link.href} className="text-base hover:underline">
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col space-y-2">
              {column2Links.map((link) => (
                <Link key={link.name} href={link.href} className="text-base hover:underline">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Right: Copyright Info */}
        <div className="text-right text-xs mt-auto">
          <p className="text-sm">&copy; 2025 Jotsi Inc. Registered in Canada.</p>
          <p className="text-sm">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;