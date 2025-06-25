import React from 'react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © 2024 Wassim Ben Ismail. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-700 font-medium">Contact me:</span>
            <div className="flex items-center gap-4">
              <a
                href="mailto:wassim@example.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
              
              <a
                href="https://linkedin.com/in/wassim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;