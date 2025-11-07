import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;