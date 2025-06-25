import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-gray-900">
            Wassim Ben Ismail
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('offers')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book a Discovery Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('offers')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mx-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold text-center"
              >
                Book a Discovery Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;