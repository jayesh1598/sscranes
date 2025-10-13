import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { EnquiryForm } from '../components/EnquiryForm';
import {
  Truck, Settings, Shield, Star,
  Phone, Mail, CheckCircle
} from 'lucide-react';

const truckMountedLifts = [
  {
    id: 1,
    name: "GK35 SS Furunkang",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4efaf843ddf142428e6c4ab5d416f549%2F8fd9c44942eb4e7d986b030e3e035bfc?format=webp&width=800",
    workingHeight: "35 m",
    platformCapacity: "320 kg",
    features: [
      "High-strength telescopic boom with insulated basket",
      "Auto-levelling outriggers for uneven terrain",
      "Proportional joystick with creep speed control",
      "Live-line maintenance ready with dielectric liners"
    ],
    description: "Premier GK series platform engineered for metropolitan utilities demanding rapid deployment and precise boom articulation."
  },
  {
    id: 2,
    name: "GK30 SS Furunkang",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4efaf843ddf142428e6c4ab5d416f549%2Fc310d28ca3aa4fd9a730b68c574fc273?format=webp&width=800",
    workingHeight: "30 m",
    platformCapacity: "300 kg",
    features: [
      "Compact wheelbase suited for narrow urban job sites",
      "Dual control stations with emergency override",
      "Hydraulic rotation delivering 360° turret sweep",
      "Integrated lighting for night maintenance operations"
    ],
    description: "Balanced reach and payload make the GK30 ideal for facility maintenance, smart city projects, and telecom rollouts."
  },
  {
    id: 3,
    name: "GK25 SS Furunkang",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4efaf843ddf142428e6c4ab5d416f549%2F0f8625bfbfd7431bb7eda6f2896e0a80?format=webp&width=800",
    workingHeight: "25 m",
    platformCapacity: "250 kg",
    features: [
      "Lightweight mounting for Ashok Leyland and Tata chassis",
      "Stabiliser spread designed for congested roads",
      "Anti-sway basket suspension for steady operations",
      "Smart diagnostics panel with service reminders"
    ],
    description: "Entry GK platform offering dependable working height for distribution companies and municipal contractors across India."
  },
  {
    id: 4,
    name: "GK45 SS Furunkang",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4efaf843ddf142428e6c4ab5d416f549%2F7ed5432d53574f8aaff0a33401f7e45d?format=webp&width=800",
    workingHeight: "45 m",
    platformCapacity: "350 kg",
    features: [
      "Articulated jib for obstacle clearance at height",
      "Full-time load monitoring with safe load indicators",
      "Auto-stow sequencing with cab notification",
      "Fleet telematics ready for remote tracking"
    ],
    description: "Flagship GK lift delivering high-reach access for transmission networks, metro infrastructure, and heavy industrial shutdowns."
  }
];

const chassisPackages = [
  {
    name: "Ashok Leyland Integration Kit",
    capacity: "FT-160 to FT-280",
    boom: "Factory-mounted",
   // status: "Ready Stock",
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
    //status: "Available",
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
