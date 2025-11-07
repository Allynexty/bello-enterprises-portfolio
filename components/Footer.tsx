
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bello-blue text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-1 md:w-1/3">
            <a href="#home" className="flex items-center space-x-2">
                <div className="bg-white rounded-full p-1">
                    <Logo />
                </div>
                <span className="text-xl font-bold font-heading">T. Bello Enterprises Int'l</span>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-2 md:w-1/3 text-center">
             <p className="text-gray-300">BN: 2033740</p>
             <p className="mt-2 text-gray-300">Imports, Exports & General Contracts</p>
          </div>
           <div className="mt-8 md:mt-0 md:order-3 md:w-1/3 text-center md:text-right">
              <p className="text-gray-300">21, Princess Street, Lagos Island</p>
              <a href="mailto:bellogbemisola181@yahoo.com" className="mt-2 text-gray-300 hover:text-bello-red transition-colors">bellogbemisola181@yahoo.com</a>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} T. Bello Enterprises International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;