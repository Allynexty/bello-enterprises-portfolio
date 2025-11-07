
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-bello-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-bello-blue">About T. Bello Enterprises</h2>
          <p className="mt-4 text-lg text-bello-dark-gray max-w-3xl mx-auto">
            A premier import, export, and general contracting firm dedicated to providing superior quality goods and materials.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/meeting/600/400"
              alt="Professional business meeting"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-heading text-bello-blue">Decades of Experience in Global Commerce</h3>
            <p className="text-bello-dark-gray leading-relaxed">
              Established with a vision to bridge markets, T. Bello Enterprises International has grown into a formidable name in the trade and supply sector. Our expertise spans across sourcing, logistics, and delivery of a wide range of products, ensuring our clients receive nothing but the best.
            </p>
            <p className="text-bello-dark-gray leading-relaxed">
              Similar to established conglomerates like John Holt PLC, we pride ourselves on a foundation of integrity, customer satisfaction, and a deep understanding of the complexities of international trade. We are committed to fostering long-term partnerships built on trust and mutual success.
            </p>
            <ul className="space-y-3">
                <li className="flex items-start">
                    <CheckIcon />
                    <span className="ml-2 text-bello-dark-gray"><strong>Our Mission:</strong> To be the most reliable and efficient partner for businesses seeking global sourcing and supply solutions.</span>
                </li>
                <li className="flex items-start">
                    <CheckIcon />
                    <span className="ml-2 text-bello-dark-gray"><strong>Our Vision:</strong> To be a leading force in the international trade landscape, connecting Nigeria to the world.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
    <svg className="flex-shrink-0 h-6 w-6 text-bello-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default About;