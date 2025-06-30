import React, { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  TrendingUp,
  DollarSign,
  Mic,
  Route,
  Sparkles,
  Brain,
  Rocket,
} from "lucide-react";

import TLC from "../images/TLC.png";
import Bel from "../images/Bel.png";
import JorniLogo from "../images/jorni.jpg";
import Jorni1 from "../images/jorni1.png";
import Jorni2 from "../images/jorni2.png";
import Jorni3 from "../images/jorni3.png";
import Raise from "../images/raise.png";
import EL from "../images/EL.jpeg";
import EL1 from "../images/EL1.webp";
import EL2 from "../images/EL2.webp";
import EL3 from "../images/EL3.webp";
import EL4 from "../images/EL4.png";
import SLB from "../images/SLB.jpeg";
import SLB1 from "../images/slb1.png";
import SLB2 from "../images/slb2.png";
import Metron from "../images/Metron.jpeg";
import metron1 from "../images/metron1.png";
import metron2 from "../images/metron2.png";
import raise1 from "../images/raisesens1.png";
import raise2 from "../images/raisesens2.png";
import raise3 from "../images/raisesens3.png";
import raise4 from "../images/raisesens4.png";

const UseCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const useCases = [
    {
      company: "Bel Groupe",
      logo: Bel,
      outcome:
        "Saved €100K+ annually while empowering researchers with instant, self-serve autonomy",
      context:
        "Bel Groupe, the company behind The Laughing Cow, needed to modernize R&D workflows and cut operational costs without sacrificing quality. I was brought in to build and launch internal AI- and ML-powered products, along with BI dashboards, to help teams innovate faste, smarter, and more autonomously",
      bulletPoints: [
        "Launched a microbiology simulation tool in 2 months, ending years of stalled development by narrowing the scope through user research, saving €100K/year in licensing costs and stopping unnecessary spend",
        "Prototyped and iterated an ML-based ingredient recommendation solution through user research, reducing product risk and defining the right scope",
        "Led the development and launch of the ingredient recommendation tool, enabling R&D teams to autonomously replace ingredients in minutes instead of waiting days for experts input",
        "Developed automated Power BI dashboards that eliminated hours of manual data work each week, reduced risk of errors, and allowed faster, more accurate insights across teams",
        "Promoted an agile, product-first culture by championing short iterations, fast launches, and continuous learning using both user research and product analytics",
      ],
      tags: ["Cost Reduction", "AI & ML"],
      images: [],
    },
    {
      company: "Jorni",
      logo: JorniLogo,
      outcome:
        "Led fast pivot and B2C app launch, unlocking €300K ARR and 60K+ users within a year",
      context:
        "With only few months of runway, Corefortech urgently pivoted to a new market opportunity to ensure survival. Leveraging the founder’s insights, I led the rapid build of a B2C mobile app that rewarded safe driving and fostered a community around it",
      bulletPoints: [
        "Identified ideal customer profiles via ad tests, surveys, and interviews, improving acquisition efficiency",
        "Conducted discovery interviews to refine the app’s value proposition and designs, directly improving feature relevance and accelerating time-to-product-market fit",
        "Led agile cross-functional teams to ship features faster while minimizing delivery risk",
        "Scaled the user base to 60,000+ drivers through targeted acquisition strategies,  driving brand traction and €300K ARR via insurance and automotive manufacturers partnerships",
        "Integrated analytics and user feedback loops to shorten iteration cycles and improve feature impact",
        "Improved app communication, boosting retention and app ratings (4+ stars) while reducing churn",
      ],
      tags: ["Zero-to-One", "Growth", "AI & ML"],
      images: [Jorni1, Jorni2, Jorni3],
    },
    {
      company: "Schlumberger",
      logo: SLB,
      outcome:
        "Saved $470K annually by automating and digitizing key operational processes",
      context:
        "At Schlumberger, field engineers manually created drilling configuration files for 100+ daily operations worldwide—requiring expert review and repeated iterations",
      bulletPoints: [
        "Exposed critical inefficiencies in the process and built a strong business case for automation",
        "Secured executive buy-in and resources by aligning the initiative with cost-saving and scalability goals",
        "Led user research and iterative testing to validate different solutions",
        "Designed and built a PowerApp solution, centralizing configuration data to drive reuse and eliminate redundant effort",
        "Orchestrated global rollout across thousands of field engineers and experts, managing change and adoption at scale",
        "Continuously measured impact and improved the product through structured user feedback loops",
      ],
      tags: ["Zero-to-One", "Cost Reduction"],
      images: [SLB1, SLB2],
    },
    {
      company: "Raisesense",
      logo: Raise,
      outcome:
        "From concept to MVP, enabling early traction and securing pre-seed funding",
      context:
        "With powerful proprietary technology enabling secure, zero-exposure data collaboration, Raisesense’s founder needed to go from concept to live MVP — fast. The goal: prove market demand, showcase real-world value, and raise funding by turning deep tech into a usable product.",
      bulletPoints: [
        "Built a clickable mock-up to align the team and accelerate investor buy-in",
        "Led user research to validate assumptions and reduce product risk early",
        "Delivered a functional MVP with the tech team to test product-market fit faster and cheaper",
        "Contributed to early traction and investor readiness that helped secure pre-seed investment",
      ],
      tags: ["MVP Development", "Fundraising"],
      images: [raise1, raise2, raise3, raise4],
    },
    {
      company: "ElementsApps",
      logo: EL,
      outcome:
        "Mitigated platform risk and rising AI-driven competition by reshaping product strategy to unlock new growth",
      context:
        "Copy & Sync is a Jira app that automates issue duplication and syncing. Facing strategic shifts by Atlassian and emerging AI and automation alternatives, the product needed direction to protect revenue and identify growth beyond its core ecosystem",
      bulletPoints: [
        "Led 20+ user and vendor interviews to uncover product strengths, weaknesses, and market perception",
        "Exposed critical platform risks from Atlassian’s strategic shift, automation and AI, enabling proactive mitigation to secure revenue",
        "Identified and researched growth opportunities beyond the Atlassian ecosystem to expand market reach",
        "Contributed to a revised product strategy that mitigated risk and unlocked new revenue",
        "Built an n8n automation to standardize and streamline competitive watch",
      ],
      tags: ["Product Strategy", "User research"],
      images: [EL1, EL2, EL3, EL4],
    },

    {
      company: "Metron",
      logo: Metron,
      outcome:
        "Reduced time-to-activation from months to weeks and increased retention and renewals",
      context:
        "Metron is a SaaS platform that helps companies optimize energy use and reduce CO₂ emissions. I worked cross-functionally to improve activation and retention by enhancing usability, aligning development with client needs, and coaching the tech team to adopt agile practices that matched business pace",
      bulletPoints: [
        "Improved client dashboards to enhance energy usage visibility, enabling quicker cost-saving insights and reduced time-to-activation from months to weeks",
        "Collaborated with Data Science to build accurate energy models, helping clients cut energy waste and boosting product stickiness",
        "Tested clickable mockups early, speeding up validation and reducing misaligned development costs",
        "Turned complex product needs into prioritized epics and user stories, speeding up delivery and aligning with business objectives",
        "Managed technical debt with engineering to reduce long-term maintenance costs, improve release stability, and lower support overhead",
      ],
      tags: ["Activation & Retention", "AI & ML"],
      images: [metron1, metron2],
    },
  ];

  const getTagIcon = (tag: string) => {
    if (tag.includes("Cost")) return <DollarSign className="w-3 h-3" />;
    if (tag.includes("AI")) return <Brain className="w-3 h-3" />;
    if (tag.includes("Growth") || tag.includes("Retention"))
      return <TrendingUp className="w-3 h-3" />;
    if (tag.includes("Zero") || tag.includes("MVP"))
      return <Rocket className="w-3 h-3" />;
    if (tag.includes("Strategy")) return <Route className="w-3 h-3" />;
    if (tag.includes("User")) return <Mic className="w-3 h-3" />;
  };

  const nextImage = () => {
    if (selectedCase !== null) {
      setCurrentImage(
        (prev) => (prev + 1) % useCases[selectedCase].images.length
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
            Here's how I've helped companies transform their product development
            and achieve measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              onClick={() => openCase(index)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden group border border-gray-100 h-full"
            >
              <div className="p-8 flex flex-col h-full">
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

                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  {useCase.outcome}
                </p>

                <div className="group/button relative inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-all duration-300 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg w-fit">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 group-hover/button:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                  <Sparkles className="w-4 h-4 mr-2 group-hover/button:rotate-12 transition-transform relative z-10" />
                  <span className="relative z-10 group-hover/button:translate-x-1 transition-transform">
                    View Details
                  </span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform relative z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Modal Layout */}
        {selectedCase !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden relative">
              <button
                onClick={closeCase}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-20 bg-white shadow-md"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image Carousel Section - Only render if images exist - Fixed at top */}
              {useCases[selectedCase].images &&
                useCases[selectedCase].images.length > 0 && (
                  <div className="bg-gray-50 relative flex-shrink-0 h-64 sm:h-72 md:h-80 lg:h-96">
                    {/* Navigation Buttons */}
                    {useCases[selectedCase].images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10"
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10"
                        >
                          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                        </button>
                      </>
                    )}

                    {/* Image Container with Proper Aspect Ratio */}
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        src={useCases[selectedCase].images[currentImage]}
                        alt={`${useCases[selectedCase].company} screenshot ${
                          currentImage + 1
                        }`}
                        className="max-w-full max-h-full object-contain"
                        style={{ minHeight: "200px" }}
                      />
                    </div>

                    {/* Image Dots - Only show if multiple images */}
                    {useCases[selectedCase].images.length > 1 && (
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-1 sm:gap-2 bg-black/20 rounded-full px-2 py-1">
                          {useCases[selectedCase].images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImage(index)}
                              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                                index === currentImage
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              {/* Scrollable Content - Now includes header */}
              <div className="flex-1 overflow-y-auto">
                {/* Header Section - Now part of scrollable content */}
                <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
                    <img
                      src={useCases[selectedCase].logo}
                      alt={`${useCases[selectedCase].company} logo`}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover shadow-md flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">
                        {useCases[selectedCase].company}
                      </h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                        {useCases[selectedCase].tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-700"
                          >
                            {getTagIcon(tag)}
                            <span className="truncate">{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="space-y-6 sm:space-y-8">
                    {/* Outcome Section */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                        Outcome
                      </h5>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {useCases[selectedCase].outcome}
                      </p>
                    </div>

                    {/* Context Section */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-green-600 rounded-full"></div>
                        Context
                      </h5>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {useCases[selectedCase].context}
                      </p>
                    </div>

                    {/* What I Did Section - Removed bottom padding */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
                        What I did
                      </h5>
                      <ul className="space-y-3 sm:space-y-4">
                        {useCases[selectedCase].bulletPoints.map(
                          (point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                {point}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
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
