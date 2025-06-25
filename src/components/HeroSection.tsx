import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const companies = [
    { name: "Bel Groupe", logo: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=120&h=60" },
    { name: "Raisesense", logo: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=120&h=60" },
    { name: "Jorni", logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=120&h=60" },
    { name: "Schlumberger", logo: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=120&h=60" },
    { name: "Metron", logo: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=120&h=60" },
    { name: "Elements", logo: "https://images.pexels.com/photos/3184437/pexels-photo-3184437.jpeg?auto=compress&cs=tinysrgb&w=120&h=60" }
  ];

  return (
    <section className="min-h-screen bg-gray-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wassim Ben Ismail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From business opportunity to{' '}
              <span className="text-blue-600 relative">
                revenue
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></div>
              </span>{' '}
              — fast.
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              You don't need another strategy doc. You need a hands-on product partner who ships fast, validates early, and builds products people pay for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10">Let's Build Together</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-6">Trusted by startups and enterprises</p>
              
              {/* Company Logo Carousel */}
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll gap-8 items-center">
                  {[...companies, ...companies].map((company, index) => (
                    <div
                      key={`${company.name}-${index}`}
                      className="flex-shrink-0 flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <span className="font-medium text-gray-700 whitespace-nowrap">
                        {company.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;