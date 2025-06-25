import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Julien Peyrade",
      title: "Head of Product, Elements",
      content: "Wassim brought high-level product thinking and execution to our team. He led a critical client project with care and delivered real value. His ability to drive Discovery, lead development teams, and surface strategic insights made a big difference. He's hands-on, smart, and a strong asset to any product team.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 5
    },
    {
      name: "Nicolas Vera",
      title: "Deep Tech & Mobility Entrepreneur",
      content: "Wassim doesn't just manage — he owns the product. At Core for Tech and Jorni, he took charge of complex initiatives, translated user needs into sharp product decisions, and delivered results. His combination of strategic thinking and hands-on execution makes him a top-tier PM.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 5
    },
    {
      name: "Sarah Chen",
      title: "CTO, TechFlow Solutions",
      content: "Working with Wassim was transformative for our product development process. He helped us shift from feature-driven to outcome-driven development, resulting in 40% faster delivery cycles and significantly better user satisfaction. His technical depth combined with business acumen is rare.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, GreenTech Innovations",
      content: "Wassim joined us at a critical growth phase and immediately made an impact. He redesigned our user onboarding, implemented data-driven decision making, and helped us secure Series A funding. His ability to balance user needs with business objectives is exceptional.",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const visibleTestimonials = [
    testimonials[currentTestimonial],
    testimonials[(currentTestimonial + 1) % testimonials.length]
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Leaders Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what industry leaders and entrepreneurs say about working with me.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentTestimonial}-${index}`}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-300 opacity-50" />
                  <p className="text-gray-700 text-lg leading-relaxed pl-6 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 font-medium">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Join the companies that trust me with their product success</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <span className="font-semibold text-gray-400">Elements</span>
            <span className="font-semibold text-gray-400">Core for Tech</span>
            <span className="font-semibold text-gray-400">Jorni</span>
            <span className="font-semibold text-gray-400">+ 15 more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;