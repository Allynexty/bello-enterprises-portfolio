import React from 'react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-bello-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-bello-blue">Featured Projects</h2>
          <p className="mt-4 text-lg text-bello-dark-gray max-w-3xl mx-auto">
            A look at some of the successful partnerships and projects we've delivered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={`Project for ${project.partner}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-bello-blue bg-opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-bello-blue mb-2">{project.partner}</h3>
                <p className="text-bello-dark-gray leading-relaxed">{project.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;