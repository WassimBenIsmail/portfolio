import React from 'react';
import { Rocket, TrendingUp, Building2, CheckCircle, Sparkles } from 'lucide-react';

const OffersSection = () => {
  const offers = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "For Early-Stage Startups",
      subtitle: "Go from idea to investor-ready MVP.",
      features: [
        "Clarify the problem & define personas",
        "Build a fully clickable and immersive prototype",
        "Run lean user research to iterate",
        "Ship a core-functionality MVP users will pay for",
        "Set up your lean team for future growth"
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "For Startups With Traction",
      subtitle: "Turn early traction into real growth.",
      features: [
        "Validate your assumptions before coding",
        "Test interest with pre-MVP landing tests",
        "Co-create the experience with early believers",
        "Run intensive design + tech sprints",
        "Iterate through launch → feedback → improvement cycles",
        "Build community & explore monetization strategies"
      ]
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "For Corporates",
      subtitle: "Escape the build trap — start delivering value.",
      features: [
        "Audit your current product development practices",
        "Begin releasing immediately while reworking the foundation",
        "Reconnect with internal/external users for insights",
        "Shift from build-first to validate-first processes",
        "Train your team to deliver with agility every 2 weeks",
        "Promote a product mindset: frugal validation, lean execution"
      ]
    }
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How I Help You Win
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're starting from scratch, scaling traction, or transforming corporate processes, 
            I deliver results that matter to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                    {offer.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {offer.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  {offer.subtitle}
                </p>
                
                <ul className="space-y-3 flex-grow mb-8">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 mt-auto overflow-hidden shadow-lg hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>Get Started</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;