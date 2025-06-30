import React from "react";
import {
  Search,
  FlaskConical,
  Rocket,
  BarChart3,
  Hammer,
  Bot,
} from "lucide-react";

const OffersSection = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "User Research",
      description:
        "I personally lead user interviews, run surveys, and synthesize insights—so we're solving real problems, not guessing",
      bullets: [
        "I help you frame the right questions and extract what really matters",
        "The result: focused scoping that avoids waste and speeds up dev",
      ],
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Lean Experimentation",
      description:
        "Before writing a single line of code, I design and run experiments to validate demand",
      bullets: [
        "From ad tests to concierge MVPs, I apply proven lean tactics to test assumptions fast",
        "You get evidence—not opinions—to decide what to build next",
      ],
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "MVP Development",
      description:
        "I define, spec, and lead the build of MVPs that get to market fast",
      bullets: [
        "I work closely with dev teams (or build low-code MVPs myself if needed)",
        "My goal: help you ship something useful and testable in weeks, not months",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Product Analytics",
      description:
        "I set up product analytics—even with minimal tools—to track what really matters",
      bullets: [
        "From tracking key flows to building actionable dashboards, I make sure we know what's driving value",
        "I interpret the data, not just collect it, to guide next moves",
      ],
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Build & Delivery",
      description:
        "I don't just talk strategy—I get in the weeds with your team",
      bullets: [
        "I write stories, manage sprints, review work, test features, and ship",
        "I help align product, design, and engineering so progress feels real",
      ],
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Automation",
      description:
        "I build and maintain automations myself using n8n, making your team faster and more focused",
      bullets: [
        "From support workflows to competitive monitoring, I offload the repetitive work",
        "Every automation I ship frees your team to focus on what truly matters",
      ],
    },
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How I Help You Win
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're launching a new product, scaling adoption, or
            unblocking a stuck team, here's how I bring clarity, momentum, and
            results:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/50 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full relative"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-8 flex flex-col h-full relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-800 transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content with consistent height */}
                <div className="flex-1 flex flex-col">
                  <p className="text-gray-700 font-medium mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-start gap-3 group/bullet"
                      >
                        <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 group-hover/bullet:scale-125 group-hover/bullet:shadow-sm transition-all duration-200"></div>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium group-hover/bullet:text-gray-800 transition-colors duration-200">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Product Development?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how these services can accelerate your product
              success and deliver measurable results.
            </p>
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
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
