import { HeroSlider } from '../components/HeroSlider';
import { About } from '../components/About';
//import { Services } from '../components/Services';
import { ScrollingBanner } from '../components/ScrollingBanner';
import { Equipment } from '../components/Equipment';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSlider />
      <About />
    <ScrollingBanner />
      <Equipment />
      
      {/* Quick Contact Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for crane sales, rentals, or professional lifting services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
