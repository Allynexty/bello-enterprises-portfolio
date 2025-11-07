
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-bello-blue text-white">
       <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/cargo/1600/900"
          alt="Cargo and logistics background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-bello-blue opacity-70"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight leading-tight mb-4">
          Global Trade & Supply Chain Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          T. Bello Enterprises International: Your trusted partner in imports, exports, and general contracts. Delivering excellence and reliability across borders.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-bello-red hover:bg-red-700 text-white font-bold font-heading py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;