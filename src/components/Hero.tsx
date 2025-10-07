import { Button } from './ui/button';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

// Import the provided crane image for hero
import heroImage from 'figma:asset/0404d9e47455bdc0b536dab9952a209a2600c105.png';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional Crane & Lifting Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Providing safe, reliable, and efficient lifting solutions for construction, 
                industrial, and commercial projects across the region.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Safety First</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">24/7 Service</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Certified Operators</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Equipment
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="SS Cranes and Lifters - Professional crane service"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}