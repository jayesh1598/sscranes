import { Button } from './ui/button';
import { ArrowRight, Shield, Clock, Award, Phone } from 'lucide-react';
import { unsplash_tool } from '../tools/unsplash';

interface HeroBannerProps {
  onNavigate?: (page: string) => void;
}

export function HeroBanner({ onNavigate }: HeroBannerProps = {}) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                SS Cranes & Lifters
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-100 mb-6">
                Sales & Service Solutions
              </h2>
              <p className="text-xl text-blue-50 leading-relaxed">
                Your trusted partner for crane sales, rentals, and professional lifting services. 
                Providing safe, reliable, and efficient solutions for construction, industrial, 
                and commercial projects across Navi Mumbai and Maharashtra.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <p className="font-medium">Safety First</p>
                <p className="text-sm text-blue-100">Happy Customer</p>
              </div>
              <div className="text-center">
                <Clock className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <p className="font-medium">24/7 Service</p>
                <p className="text-sm text-blue-100">Emergency Support</p>
              </div>
              <div className="text-center">
                <Award className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <p className="font-medium">Expert Team</p>
                <p className="text-sm text-blue-100">15+ Years Experience</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
                onClick={() => window.open('tel:+917021844804')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +91 70218 44804
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black bg-white hover:bg-gray-100 hover:text-blue-600"
                onClick={() => onNavigate?.('products')}
              >
                View Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
              <div className="space-y-4 text-blue-50">
                <div>
                  <p className="font-medium text-white">SS Cranes & Lifters</p>
                  <p>271, Rabale MIDC Rd</p>
                  <p>Gautam Nagar, MIDC Industrial Area</p>
                  <p>Rabale, Navi Mumbai</p>
                  <p>Maharashtra 400701</p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="font-medium text-white mb-2">Contact Information</p>
                  <p>📞 +91 70218 44804</p>
                  <p>✉️ info@sscraneslifters.com</p>
                </div>
                <Button 
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30" 
                  variant="outline"
                  onClick={() => window.open('https://maps.google.com/?q=271,Rabale+MIDC+Rd,Gautam+Nagar,MIDC+Industrial+Area,Rabale,Navi+Mumbai,Maharashtra+400701')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
