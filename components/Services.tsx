
import React from 'react';
import { ShipIcon, PlaneIcon, BoxIcon } from './icons/ServiceIcons';

const servicesData = [
  {
    icon: <PlaneIcon />,
    title: 'Expert Importing Services',
    description: 'We handle the entire import process, from sourcing high-quality goods to customs clearance and final delivery, ensuring a seamless and efficient supply chain for your business.'
  },
  {
    icon: <ShipIcon />,
    title: 'Global Exporting Solutions',
    description: 'Connecting local products to the global market. We manage logistics, documentation, and international shipping to expand your reach and maximize your export potential.'
  },
  {
    icon: <BoxIcon />,
    title: 'General Contracts & Supply',
    description: 'Your reliable partner for sourcing and supplying a vast range of materials, industrial spare parts, and general goods for projects of any scale. Quality and timeliness guaranteed.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-bello-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-bello-blue">Our Core Services</h2>
          <p className="mt-4 text-lg text-bello-dark-gray max-w-3xl mx-auto">
            We provide comprehensive solutions to meet your business needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-bello-blue text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold font-heading text-bello-blue mb-4">{service.title}</h3>
              <p className="text-bello-dark-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;