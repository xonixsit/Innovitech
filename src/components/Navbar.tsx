import React from 'react';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">InnoviTech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            <button 
              onClick={handleGetStarted}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            <button 
              onClick={handleGetStarted}
              className="w-full text-left px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}