'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              TechFlow
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a
              href="#signup"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#team" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a
              href="#signup"
              className="block text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}