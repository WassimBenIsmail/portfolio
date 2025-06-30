import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="font-bold text-xl lg:text-2xl text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            Wassim Ben Ismail
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <button
              onClick={() => scrollToSection("offers")}
              className="relative text-gray-700 hover:text-blue-600 font-semibold text-base transition-all duration-300 group"
            >
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="relative text-gray-700 hover:text-blue-600 font-semibold text-base transition-all duration-300 group"
            >
              Case Studies
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="relative text-gray-700 hover:text-blue-600 font-semibold text-base transition-all duration-300 group"
            >
              Testimonials
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>

            {/* CTA Button - Matching Portfolio Style */}
            <button
              onClick={() =>
                window.open(
                  "https://calendar.app.google/xaSUr7WGvovwzAFF9",
                  "_blank"
                )
              }
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative z-10">Book a Call</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-6 shadow-lg rounded-b-2xl">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection("offers")}
                className="text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-semibold transition-all duration-300 px-6 py-4 rounded-xl mx-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className="text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-semibold transition-all duration-300 px-6 py-4 rounded-xl mx-2"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-semibold transition-all duration-300 px-6 py-4 rounded-xl mx-2"
              >
                Testimonials
              </button>

              {/* Mobile CTA Button */}
              <div className="px-2 pt-4">
                <button
                  onClick={() => {
                    window.open(
                      "https://calendar.app.google/xaSUr7WGvovwzAFF9",
                      "_blank"
                    );
                    setIsOpen(false);
                  }}
                  className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Book a Discovery Call</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
