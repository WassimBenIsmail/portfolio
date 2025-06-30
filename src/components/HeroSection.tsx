import Wassim from "../images/Wassim3.jpg";
import jorni from "../images/jorni.jpg";
import { useState } from "react";
import Raise from "../images/raise.png";
import EL from "../images/EL.jpeg";
import SLB from "../images/SLB.jpeg";
import Metron from "../images/Metron.jpeg";
import Amadeus from "../images/Amadeus.jpeg";
import CFT from "../images/CFT.png";
import BEL from "../images/Bel.png";
const companies = [
  {
    name: "Bel Groupe",
    logo: BEL,
  },
  {
    name: "Schlumberger",
    logo: SLB,
  },
  {
    name: "Amadeus",
    logo: Amadeus,
  },

  {
    name: "Jorni",
    logo: jorni,
  },
  {
    name: "Elements",
    logo: EL,
  },
  {
    name: "CoreFortech",
    logo: CFT,
  },

  {
    name: "Metron",
    logo: Metron,
  },

  {
    name: "Raisesense",
    logo: Raise,
  },
];

const HeroSection = () => {
  const companies = [
    {
      name: "Bel Groupe",
      logo: BEL,
    },
    {
      name: "Schlumberger",
      logo: SLB,
    },
    {
      name: "Amadeus",
      logo: Amadeus,
    },

    {
      name: "Jorni",
      logo: jorni,
    },
    {
      name: "Elements",
      logo: EL,
    },
    {
      name: "CoreFortech",
      logo: CFT,
    },

    {
      name: "Metron",
      logo: Metron,
    },

    {
      name: "Raisesense",
      logo: Raise,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo - Larger space allocation */}
          <div className="order-1 lg:order-1 lg:col-span-7 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={Wassim}
                  alt="Wassim Ben Ismail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-15 blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 lg:col-span-5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              From business opportunity to{" "}
              <span className="text-blue-600 relative">
                revenue
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></div>
              </span>{" "}
              — fast.
            </h1>

            {/* Enhanced timeline highlight */}
            <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your idea{" "}
              <span className="text-blue-600 font-bold">
                validated in 1 month
              </span>{" "}
              and{" "}
              <span className="text-purple-600 font-bold">monetized in 3</span>.
              All you need is a hands-on product partner who ships fast,
              validates early, and builds products people pay for.
            </p>

            <div className="flex flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() =>
                  window.open(
                    "https://calendar.app.google/xaSUr7WGvovwzAFF9",
                    "_blank"
                  )
                }
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10">Book a Discovery Call</span>
              </button>
            </div>

            {/* Enhanced trust section */}
            <div className="pt-8">
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Trusted by startups and enterprises
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Company Logo Carousel - Enhanced visibility */}
              <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <div className="flex animate-scroll gap-6 lg:gap-8 items-center">
                  {[...companies, ...companies].map((company, index) => (
                    <div
                      key={`${company.name}-${index}`}
                      className="flex-shrink-0 flex items-center gap-3 lg:gap-4 bg-white px-5 py-3 lg:px-6 lg:py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded object-cover"
                      />
                      <span className="font-semibold text-gray-700 whitespace-nowrap text-sm lg:text-base">
                        {company.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Gradient overlays for smooth scroll effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/60 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/60 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
