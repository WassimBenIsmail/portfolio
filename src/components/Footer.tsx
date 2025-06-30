import React from "react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          <div className="text-center lg:text-left">
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              © 2025 Wassim Ben Ismail. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
            <span className="text-gray-700 font-semibold text-base sm:text-lg">
              Let's connect:
            </span>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="mailto:ben.ismail.wassim@gmail.com"
                className="group flex items-center gap-2 text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-105"
              >
                <div className="p-2 rounded-full bg-white shadow-md group-hover:shadow-lg border border-gray-200 group-hover:border-red-200 transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-medium text-sm sm:text-base hidden sm:inline">
                  Email
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/wassim-product-manager/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <div className="p-2 rounded-full bg-white shadow-md group-hover:shadow-lg border border-gray-200 group-hover:border-blue-200 transition-all duration-300">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-medium text-sm sm:text-base hidden sm:inline">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://wa.me/33749488692"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105"
              >
                <div className="p-2 rounded-full bg-white shadow-md group-hover:shadow-lg border border-gray-200 group-hover:border-green-200 transition-all duration-300">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-medium text-sm sm:text-base hidden sm:inline">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
