import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { EnquiryForm } from '../components/EnquiryForm';
import { 
  Truck, Building, Settings, Shield, Star, 
  Phone, Mail, CheckCircle, AlertCircle 
} from 'lucide-react';

// Import crane images
import crane1 from 'figma:asset/0404d9e47455bdc0b536dab9952a209a2600c105.png';
import crane2 from 'figma:asset/88e5719b4227d99b970bd5d363499deadf29ff45.png';
import crane3 from 'figma:asset/4d33ef90bd2dca26d45c7c921a0acb89609be36f.png';

const truckMountedLifts = [
  {
    id: 1,
    name: "Furunkang FT-160 Truck Mounted Lift",
    image: crane1,
    workingHeight: "16 m",
    platformCapacity: "230 kg",
    status: "In Stock",
    features: [
      "Insulated fibreglass basket",
      "Proportional joystick controls",
      "Auto-level outriggers",
      "Compact footprint for urban jobs"
    ],
    description: "Optimised for city utilities and street lighting maintenance with seamless mounting on Ashok Leyland and Tata chassis."
  },
  {
    id: 2,
    name: "Furunkang FT-200 Aerial Work Platform",
    image: crane2,
    workingHeight: "20 m",
    platformCapacity: "260 kg",
    status: "Available",
    features: [
      "360° turret rotation",
      "Dual entry safety basket",
      "Live-line insulation option",
      "CAN-bus diagnostics"
    ],
    description: "Versatile mid-height platform delivering precise outreach for utility, telecom, and facility maintenance teams."
  },
  {
    id: 3,
    name: "Furunkang FT-320 High Reach Manlift",
    image: crane3,
    workingHeight: "32 m",
    platformCapacity: "320 kg",
    status: "Pre-Order",
    features: [
      "Telescopic + articulated boom",
      "Auto stow programming",
      "Wind speed monitoring",
      "Compatible with Bharat Benz and Eicher chassis"
    ],
    description: "Flagship high-reach solution supplied with advanced stability control for metro, transmission, and industrial shutdown projects."
  }
];

const chassisPackages = [
  {
    name: "Ashok Leyland Integration Kit",
    capacity: "FT-160 to FT-280",
    boom: "Factory-mounted",
    status: "Ready Stock",
    features: [
      "Pre-engineered sub-frame",
      "Electrical harness integration",
      "Load distribution certification",
      "On-site commissioning support"
    ]
  },
  {
    name: "Tata & Bharat Benz Mounting Kit",
    capacity: "FT-200 to FT-320",
    boom: "Factory-mounted",
    status: "Available",
    features: [
      "Hydraulic PTO configuration",
      "Stability validation reports",
      "Operator safety interlocks",
      "Chassis reinforcement guidelines"
    ]
  }
];

const accessories = [
  { name: "Insulated Basket Options", description: "Class A and Class C insulation packages with dielectric testing" },
  { name: "Stabiliser Pads", description: "High-density outrigger pads sized for Furunkang FT series" },
  { name: "Remote Diagnostics", description: "Telemetry kits for monitoring usage and maintenance schedules" },
  { name: "Genuine Spare Parts", description: "Hydraulic, electrical, and structural components stocked in India" }
];

export function ProductsPage() {
  const [enquiryForm, setEnquiryForm] = useState({ isOpen: false, productName: '' });

  const openEnquiry = (productName: string) => {
    setEnquiryForm({ isOpen: true, productName });
  };

  const closeEnquiry = () => {
    setEnquiryForm({ isOpen: false, productName: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Furunkang Truck Mounted Lifts for Sale
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              SS Cranes & Lifters is the pan-India sole distributor of Furunkang aerial work platforms. Choose from the
              complete FT series with certified installation support and rapid delivery nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
                onClick={() => window.open('tel:+917021844804')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Speak to Sales
              </Button>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600"
                onClick={() => openEnquiry('Furunkang Product Catalogue')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Catalogue
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="truck-mounted" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Product Range
              </h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="truck-mounted">Truck Mounted Lifts</TabsTrigger>
            
              </TabsList>
            </div>

            <TabsContent value="truck-mounted" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Furunkang Truck Mounted Lifts</h3>
                <p className="text-gray-600">Certified aerial work platforms available exclusively through SS Cranes & Lifters.</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {truckMountedLifts.map((crane) => (
                  <Card key={crane.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={crane.image} 
                        alt={crane.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{crane.name}</CardTitle>
                        <Badge variant={crane.status === 'In Stock' ? 'default' : crane.status === 'Available' ? 'secondary' : 'outline'}>
                          {crane.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Working Height: {crane.workingHeight}</span>
                        <span>Platform Capacity: {crane.platformCapacity}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{crane.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {crane.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-center pt-4 border-t">
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 w-full"
                          onClick={() => openEnquiry(crane.name)}
                        >
                          Inquire Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chassis-packages" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chassis Mounting Kits</h3>
                <p className="text-gray-600">Pre-engineered integration kits to mount Furunkang AWPs on leading Indian chassis.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {chassisPackages.map((crane, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{crane.name}</CardTitle>
                        <Badge variant="default">{crane.status}</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Model Range: {crane.capacity}</span>
                        <span>Installation: {crane.boom}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {crane.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-center pt-4 border-t">
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 w-full"
                          onClick={() => openEnquiry(`${crane.name} Kit`)}
                        >
                          Reserve Kit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="spares" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accessories & Spares</h3>
                <p className="text-gray-600">Enhance uptime with genuine Furunkang options supplied from our Indian inventory.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accessories.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => openEnquiry(item.name)}
                      >
                        Check Availability
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Buy From SS Cranes & Lifters?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Factory Warranty", description: "Official Furunkang coverage with extended options" },
              { icon: Settings, title: "Chassis Engineering", description: "Mounting kits and PTO configuration for Indian fleets" },
              { icon: Truck, title: "Pan-India Delivery", description: "Doorstep delivery with dispatch updates across India" },
              { icon: Star, title: "Operator Training", description: "Commissioning walkthrough and safety orientation" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Deploy a Furunkang Manlift?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Speak with our product specialists for specifications, chassis preparation guidance, and delivery timelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
              onClick={() => window.open('tel:+917021844804')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Sales: +91 70218 44804
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open('mailto:sales@sscraneslifters.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      <EnquiryForm 
        isOpen={enquiryForm.isOpen}
        onClose={closeEnquiry}
        productName={enquiryForm.productName}
      />
    </div>
  );
}
