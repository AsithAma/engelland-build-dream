
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Engelland Construction",
    subtitle: "Your construction solution since 2006",
    description: "Building dreams with exceptional craftsmanship and quality",
  },
  {
    image: "https://images.unsplash.com/photo-1597047084897-51e81819e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Custom Homes",
    subtitle: "From ground up to move-in ready",
    description: "Creating beautiful, functional spaces for modern living",
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Quality Remodeling",
    subtitle: "Transform your existing space",
    description: "Expert renovations that exceed expectations",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-blue-100">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-300 px-4">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-[#041f99] hover:bg-[#041f99]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#041f99] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ArrowRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
