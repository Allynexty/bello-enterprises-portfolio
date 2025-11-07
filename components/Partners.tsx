import React from 'react';
import { PARTNERS_DATA } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bello-blue">Our Trusted Partners</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to collaborate with industry leaders and key players.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {PARTNERS_DATA.map((partner) => (
            <div key={partner.name} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out" title={partner.name}>
                {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
