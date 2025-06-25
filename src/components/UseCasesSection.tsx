import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X, TrendingUp, DollarSign, Users, Award, Globe, Sparkles } from 'lucide-react';

const UseCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const useCases = [
    {
      company: "The Laughing Cow (Bel Groupe)",
      logo: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      outcome: "Built internal AI tools → cut costs €100K/year & enabled autonomous R&D ops",
      context: "Bel Groupe needed to modernize their R&D operations and reduce operational costs while maintaining quality standards. The challenge was to implement AI-driven solutions that could automate repetitive tasks without disrupting existing workflows.",
      bulletPoints: [
        "Analyzed existing R&D workflows and identified automation opportunities",
        "Designed and developed custom AI tools for data processing and analysis",
        "Implemented machine learning models for predictive quality control",
        "Created automated reporting systems for management dashboards",
        "Trained internal teams on new AI-powered processes",
        "Established monitoring systems to track cost savings and efficiency gains"
      ],
      tags: ["Cost Reduction", "AI Implementation", "Process Automation"],
      images: [
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      company: "Raisesense",
      logo: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      outcome: "Delivered investor-aligned MVP → secured pre-seed funding",
      context: "Raisesense was an early-stage startup with a promising concept but needed to create a compelling MVP that would resonate with investors and demonstrate clear market potential.",
      bulletPoints: [
        "Conducted market research to validate the core value proposition",
        "Designed user-centric wireframes and interactive prototypes",
        "Built a functional MVP with core features that investors could test",
        "Created compelling pitch materials showcasing product-market fit",
        "Implemented analytics to track user engagement and conversion metrics",
        "Prepared technical documentation and roadmap for investor presentations"
      ],
      tags: ["Raised Funds", "MVP Development", "Investor Ready"],
      images: [
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      company: "Jorni",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      outcome: "Scaled from zero to 60K+ users → monetized through partnerships",
      context: "Jorni needed to build a user base from scratch and establish sustainable revenue streams. The challenge was creating a platform that would attract users while developing profitable partnership opportunities.",
      bulletPoints: [
        "Developed comprehensive user acquisition strategy and growth funnel",
        "Built scalable platform architecture to handle rapid user growth",
        "Implemented user engagement features to increase retention and activity",
        "Identified and negotiated strategic partnerships for monetization",
        "Created analytics dashboard to track user behavior and business metrics",
        "Optimized conversion funnels to maximize partnership revenue"
      ],
      tags: ["User Growth", "Monetization", "Partnerships"],
      images: [
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      company: "Metron",
      logo: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      outcome: "Improved energy dashboards → increased conversions and stickiness",
      context: "Metron's existing energy management dashboards were complex and difficult for users to navigate, resulting in low engagement and poor conversion rates. The goal was to redesign the user experience to be more intuitive and actionable.",
      bulletPoints: [
        "Conducted user research to understand pain points in existing dashboards",
        "Redesigned information architecture for better data visualization",
        "Implemented intuitive navigation and simplified user workflows",
        "Created actionable insights and recommendations within the interface",
        "A/B tested new designs to optimize for conversion and engagement",
        "Developed onboarding flows to improve user adoption and retention"
      ],
      tags: ["UX Improvement", "Conversion Lift", "User Retention"],
      images: [
        "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184310/pexels-photo-3184310.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      company: "Schlumberger",
      logo: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      outcome: "Launched global tool → saved $470K/year",
      context: "Schlumberger required a global enterprise solution to optimize operational workflows across multiple regions and business units. The challenge was creating a tool that could scale internationally while delivering significant cost savings.",
      bulletPoints: [
        "Analyzed global operational workflows to identify inefficiencies",
        "Designed enterprise-grade solution architecture for international deployment",
        "Developed automated workflows to reduce manual processing time",
        "Implemented multi-language support and regional customizations",
        "Created comprehensive training programs for global rollout",
        "Established monitoring and reporting systems to track cost savings"
      ],
      tags: ["Global Launch", "Enterprise Scale", "Cost Savings"],
      images: [
        "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const getTagIcon = (tag: string) => {
    if (tag.includes('Funds') || tag.includes('Cost')) return <DollarSign className="w-3 h-3" />;
    if (tag.includes('Growth') || tag.includes('Users')) return <Users className="w-3 h-3" />;
    if (tag.includes('Conversion') || tag.includes('Lift')) return <TrendingUp className="w-3 h-3" />;
    if (tag.includes('Global') || tag.includes('Enterprise')) return <Globe className="w-3 h-3" />;
    return <Award className="w-3 h-3" />;
  };

  const nextImage = () => {
    if (selectedCase !== null) {
      setCurrentImage((prev) => 
        (prev + 1) % useCases[selectedCase].images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedCase !== null) {
      setCurrentImage((prev) => 
        prev === 0 ? useCases[selectedCase].images.length - 1 : prev - 1
      );
    }
  };

  const openCase = (index: number) => {
    setSelectedCase(index);
    setCurrentImage(0);
  };

  const closeCase = () => {
    setSelectedCase(null);
    setCurrentImage(0);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCase();
    }
  };

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's how I've helped companies transform their product development and achieve measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              onClick={() => openCase(index)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden group border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={useCase.logo}
                    alt={`${useCase.company} logo`}
                    className="w-12 h-12 rounded-lg object-cover shadow-md"
                  />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {useCase.company}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                    >
                      {getTagIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {useCase.outcome}
                </p>
                
                <div className="group/button relative inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-all duration-300 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 group-hover/button:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                  <Sparkles className="w-4 h-4 mr-2 group-hover/button:rotate-12 transition-transform relative z-10" />
                  <span className="relative z-10 group-hover/button:translate-x-1 transition-transform">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform relative z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCase !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-xl max-w-6xl w-full h-[85vh] flex overflow-hidden relative">
              <button
                onClick={closeCase}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side - Content */}
              <div className="w-1/2 flex flex-col">
                {/* Fixed Header */}
                <div className="p-8 border-b border-gray-100 flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={useCases[selectedCase].logo}
                      alt={`${useCases[selectedCase].company} logo`}
                      className="w-16 h-16 rounded-lg object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {useCases[selectedCase].company}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {useCases[selectedCase].tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                          >
                            {getTagIcon(tag)}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-blue-600">
                    {useCases[selectedCase].outcome}
                  </h4>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 pb-12">
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Context</h5>
                    <p className="text-gray-700 leading-relaxed">
                      {useCases[selectedCase].context}
                    </p>
                  </div>
                  
                  <div className="pb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">What I Did</h5>
                    <ul className="space-y-4">
                      {useCases[selectedCase].bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Side - Image Carousel */}
              <div className="w-1/2 bg-gray-50 flex flex-col relative">
                {/* Navigation Arrows - Positioned in the middle */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex-1 relative">
                  <img
                    src={useCases[selectedCase].images[currentImage]}
                    alt={`${useCases[selectedCase].company} screenshot ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4 bg-white border-t">
                  <div className="flex justify-center">
                    <div className="flex gap-2">
                      {useCases[selectedCase].images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImage(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImage ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCasesSection;