
import { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jane Langvardt",
    content: "I would recommend Matt Engelland Construction for any job that needs to be done. Matt created a wheelchair addition to my house that consisted of an entryway, bedroom, bathroom, separate closet, laundry room, and ramp. Matt and his crew were very professional, listened to my questions, and helped me with decision making. The subcontractors that came in were great to work with as well. Matt always kept me in the loop about the schedule. I am very happy with Matt and his company and I would hire them again if and when the need arises.",
    rating: 5,
    project: "Wheelchair Accessible Addition"
  },
  {
    id: 2,
    name: "Jeff Jackson",
    content: "Matt and crew built our house in 2018 and we could not be happier with the results. The attention to detail and focus on our satisfaction produced a very beautiful and comfortable home. We have and continue to strongly recommend Engelland Construction to all who ask. Keep up the wonderful work.",
    rating: 5,
    project: "Custom Home Build"
  },
  {
    id: 3,
    name: "Bobbie Garrison",
    content: "I would like to personally thank Matt and his team for their recent completed work at my home. With all the challenges my project seemed to entail, Matt was able to communicate with me every step of the way. Everything has been completed on time and always above and beyond my expectations. Matt has a great passion for doing the job correctly and very pleasing to the eye. I would always hire him to work on my remodeling projects or when the time comes, build my new house. I 100% recommend Matt and his team.",
    rating: 5,
    project: "Home Remodeling"
  }
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#041f99] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-blue-200">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about working with Engelland Construction.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                      <div className="flex items-center justify-center mb-6">
                        <Quote className="w-12 h-12 text-blue-200" />
                      </div>
                      
                      <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="border-t border-white/20 pt-6">
                          <h4 className="text-xl font-bold text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-200 font-medium">
                            {testimonial.project}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ArrowRight size={24} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
