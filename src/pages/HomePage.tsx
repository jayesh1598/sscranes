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
     
    <ScrollingBanner />
      <Equipment />
 <About />
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pan-India Furunkang Manlift Distribution</h2>
              <p className="text-lg text-gray-700 mb-6">
                SS Cranes & Lifters are one of the best distributors of truck mounted lift (AWP) solutions. We are the
                pan India sole distributor of Furunkang company manlifts, delivering certified aerial work platforms to
                every state with rapid installation support.
              </p>
              <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Chassis Integration Coverage</h3>
                <p className="text-gray-700">
                  We mount on all types of different company chassis available in India including:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-gray-800 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    ASHOK LEYLAND
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    TATA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    EICHER
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    BHARAT BENZ
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Sales Support Snapshot</h3>
              <ul className="space-y-4 text-blue-50">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400"></span>
                  <span>Working height options from 16m to 32m with insulated and non-insulated platforms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400"></span>
                  <span>Factory stock availability for immediate dispatch and on-site commissioning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400"></span>
                  <span>Dedicated sales engineers to support specification finalisation and chassis preparation.</span>
                </li>
              </ul>
              <button
                className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition-colors"
                onClick={() => onNavigate('products')}
              >
                Explore Furunkang Range
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
