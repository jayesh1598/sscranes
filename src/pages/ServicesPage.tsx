import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Truck, Building, Wrench, Users, MapPin, Clock, 
  Settings, Shield, Cog, Phone, CheckCircle 
} from 'lucide-react';

const mainServices = [
  {
    icon: Truck,
    title: "Crane Sales",
    description: "New and certified used cranes for purchase with full warranty and support.",
    features: ["Mobile Cranes", "Tower Cranes", "Overhead Cranes", "Specialty Cranes"]
  },
  {
    icon: Building,
    title: "Crane Rentals",
    description: "Daily, weekly, and monthly crane rentals with certified operators.",
    features: ["Flexible Terms", "Operator Included", "Insurance Covered", "24/7 Support"]
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Comprehensive maintenance and repair services for all crane types.",
    features: ["Preventive Maintenance", "Emergency Repairs", "Parts Supply", "Safety Inspections"]
  },
  {
    icon: Users,
    title: "Operator Training",
    description: "Certified crane operator training programs and safety certification.",
    features: ["Basic Operations", "Safety Protocols", "Certification", "Refresher Courses"]
  }
];

const additionalServices = [
  {
    icon: Settings,
    title: "Installation Services",
    description: "Professional crane installation and commissioning services"
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive safety audits and compliance inspections"
  },
  {
    icon: Cog,
    title: "Parts & Accessories",
    description: "Genuine crane parts and accessories supply"
  },
  {
    icon: MapPin,
    title: "Site Assessment",
    description: "Professional site evaluation and crane selection consultation"
  },
  {
    icon: Clock,
    title: "Emergency Response",
    description: "24/7 emergency crane services and breakdown support"
  },
  {
    icon: Phone,
    title: "Technical Support",
    description: "Remote technical assistance and troubleshooting"
  }
];

const industries = [
  "Construction & Infrastructure",
  "Manufacturing & Industrial",
  "Ports & Shipping",
  "Power & Energy",
  "Oil & Gas",
  "Mining & Quarrying",
  "Petrochemicals",
  "Steel & Metal",
  "Transportation",
  "Warehousing"
];

export function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive crane solutions including sales, rentals, maintenance, and training services 
              across Navi Mumbai and Maharashtra
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call +91 70218 44804
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Main Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete crane solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('tel:+917021844804')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Supporting services to ensure complete customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Serving diverse industries across Maharashtra with specialized crane solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors">
                <span className="text-gray-800 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Based in Navi Mumbai, we provide crane services across Maharashtra with 
                quick response times and professional service.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Navi Mumbai", "Mumbai", "Thane", "Pune", 
                  "Nashik", "Aurangabad", "Nagpur", "Kolhapur"
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Request Service Quote
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select service type</option>
                    <option>Crane Sales</option>
                    <option>Crane Rentals</option>
                    <option>Maintenance Services</option>
                    <option>Operator Training</option>
                    <option>Emergency Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Location</label>
                  <input type="text" placeholder="Enter project location" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Free Quote
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}