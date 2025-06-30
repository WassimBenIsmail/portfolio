import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import julien from "../images/julien.jpeg";
import nicolas from "../images/nicolas.jpeg";
import stephane from "../images/stephane.jpeg";
import jorni from "../images/jorni.jpg";
import TLC from "../images/TLC.png";
import Raise from "../images/raise.png";
import EL from "../images/EL.jpeg";
import SLB from "../images/SLB.jpeg";
import Metron from "../images/Metron.jpeg";
import Amadeus from "../images/Amadeus.jpeg";
import CFT from "../images/CFT.png";
import BEL from "../images/Bel.png";
const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Julien Peyrade",
      title: "Head of Product, Elements",
      content:
        "Wassim brought high-level product thinking and execution to our team. He led a critical client project with care and delivered real value. His ability to drive Discovery, lead development teams, and surface strategic insights made a big difference. He's hands-on, smart, and a strong asset to any product team.",
      image: julien,
      rating: 5,
    },
    {
      name: "Nicolas Vera",
      title: "Deep Tech & Mobility Entrepreneur",
      content:
        "Wassim doesn't just manage — he owns the product. At Core for Tech and Jorni, he took charge of complex initiatives, translated user needs into sharp product decisions, and delivered results. His combination of strategic thinking and hands-on execution makes him a top-tier PM.",
      image: nicolas,
      rating: 5,
    },
    {
      name: "Stephane Rigaut",
      title: "CEO, CoreForTech",
      content:
        "Wassim is resourceful, curious, and attentive to user needs, with a constant focus on efficiency. One of his greatest strengths is consistently questioning the value of developing each feature from a business perspective: What's the gain? What new advantage will it bring? What additional revenue will this feature generate? I highly recommend him.",
      image: stephane,
      rating: 5,
    },
  ];
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Founders & Product Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what Founders & Product
            Leaders say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              {/* Quote Icon Background */}
              <div className="relative p-8 pb-6 flex-1 flex flex-col">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 mb-8">
                  <p className="text-gray-700 text-base leading-relaxed font-medium relative z-10">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>

              {/* Author Info - Always at bottom */}
              <div className="p-8 pt-0 mt-auto">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover shadow-md ring-2 ring-white"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base mb-1 truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 font-medium text-sm leading-tight">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Improved */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Join the companies that trust me with their product success
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From startups to enterprises, I've helped teams build better
              products and drive meaningful growth.
            </p>
          </div>

          {/* Company Logo Carousel - Enhanced */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8 items-center">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:bg-white transition-all duration-200 group"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-12 h-12 rounded object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <span className="font-semibold text-gray-800 whitespace-nowrap text-base group-hover:text-blue-600 transition-colors duration-200">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
