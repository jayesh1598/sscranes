import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

// Import the provided crane images
import crane1 from 'figma:asset/0386169131a1e6a013711d1fcbaba60f9c39db48.png';
import crane2 from 'figma:asset/5cda7b58a727fe228a4121bc4d798ecba6af353a.png';
import crane3 from 'figma:asset/d98526e253b6f0ce24feda67d0e5da9864f497e4.png';

const slides = [
  {
    image: crane1,
    title: "Professional Crane Sales & Services",
    subtitle: "SS Cranes & Lifters",
    description: "Your trusted partner for crane sales, rentals, and professional lifting services across Navi Mumbai and Maharashtra.",
    cta: "Get Free Quote",
    highlight: "15+ Years Experience"
  },
  {
    image: crane2,
    title: "Heavy Duty Lifting Solutions",
    subtitle: "Industrial Grade Equipment",
    description: "State-of-the-art cranes for construction, industrial, and commercial projects with certified operators and 24/7 support.",
    cta: "View Products",
    highlight: "24/7 Emergency Service"
  },
  {
    image: crane3,
    title: "Precision & Safety First",
    subtitle: "Certified Operations",
    description: "Safe, reliable, and efficient crane operations with fully certified equipment and experienced operators.",
    cta: "Contact Us",
    highlight: "100% Safety Compliant"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full">
                        <span className="text-sm font-semibold">{slide.highlight}</span>
                      </div>
                      <div className="text-gray-300">
                        📞 +91 70218 44804
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-lg px-8 py-4">
                        <Phone className="mr-2 h-5 w-5" />
                        {slide.cta}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Company Info Overlay */}
      <div className="absolute bottom-8 right-8 z-20 bg-black/30 backdrop-blur-sm text-white p-6 rounded-lg border border-white/20 max-w-sm hidden lg:block">
        <h3 className="font-semibold text-lg mb-2">SS Cranes & Lifters</h3>
        <p className="text-sm text-gray-300 mb-3">
          271, Rabale MIDC Rd, Gautam Nagar<br />
          Navi Mumbai, Maharashtra 400701
        </p>
        <div className="space-y-1 text-sm">
          <p>📞 +91 70218 44804</p>
          <p>✉️ info@sscraneslifters.com</p>
        </div>
      </div>

      {/* Pause/Play indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-red-400'}`}></div>
      </div>
    </section>
  );
}