import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
      { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+91 70218 44804</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>info@sscraneslifters.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>Navi Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-gray-900">SS Cranes & Lifters</h1>
            <p className="text-sm text-gray-600 mt-1">Pan-India Furunkang Manlift Distributor</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-lg px-8 py-4"
            onClick={() => window.open('tel:+917021844804')}
                      >
            <Phone className="mr-2 h-5 w-5" />
           Enquiry Now
          </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => onNavigate('products')}>
                  View Product Range
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
