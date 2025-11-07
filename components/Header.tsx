import React, { useState } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#partners', label: 'Partners' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
    setIsOpen(false);
  };


  return (
    <header id="home" className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center space-x-2">
              <Logo />
              <span className="hidden sm:block text-xl font-bold font-heading text-bello-blue">T. Bello Enterprises</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="font-medium text-gray-600 hover:text-bello-red transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-bello-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bello-blue"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-bello-blue"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;