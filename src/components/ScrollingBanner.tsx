import { useEffect, useState } from 'react';

// Import the provided crane images
import crane1 from 'figma:asset/0386169131a1e6a013711d1fcbaba60f9c39db48.png';
import crane2 from 'figma:asset/5cda7b58a727fe228a4121bc4d798ecba6af353a.png';
import crane3 from 'figma:asset/d98526e253b6f0ce24feda67d0e5da9864f497e4.png';

const craneImages = [
  { src: crane1, alt: "Mobile Crane - Street Operation", title: "Urban Lifting Solutions" },
  { src: crane2, alt: "Truck Mounted Crane - Heavy Duty", title: "Heavy Duty Operations" },
  { src: crane3, alt: "Compact Crane - Precision Work", title: "Precision Lifting" },
  // Duplicate for seamless loop
  { src: crane1, alt: "Mobile Crane - Street Operation", title: "Urban Lifting Solutions" },
  { src: crane2, alt: "Truck Mounted Crane - Heavy Duty", title: "Heavy Duty Operations" },
  { src: crane3, alt: "Compact Crane - Precision Work", title: "Precision Lifting" },
];

export function ScrollingBanner() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Ensure animation starts after component mount
    const timer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-900 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Equipment in Action
          </h2>
          <p className="text-xl text-gray-300">
            Professional crane services across various project sites
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <div 
            className={`flex gap-8 ${isAnimating ? 'animate-scroll' : ''}`}
            style={{
              width: 'fit-content',
            }}
          >
            {craneImages.map((crane, index) => (
              <div 
                key={index}
                className="flex-shrink-0 group relative"
              >
                <div className="w-80 h-60 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={crane.src}
                    alt={crane.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{crane.title}</h3>
                      <p className="text-sm text-gray-200">{crane.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <p className="text-gray-300 mb-6">
          Need crane services for your next project?
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
          Get Free Quote Today
        </button>
      </div>
    </section>
  );
}