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

const mobilecranes = [
  {
    id: 1,
    name: "Hydraulic Mobile Crane - 25T",
    image: crane1,
    capacity: "25 Tons",
    boom: "30m",
    status: "In Stock",
    features: ["Hydraulic Extension", "All-Terrain", "Quick Setup", "Safety Systems"],
    description: "Versatile 25-ton mobile crane perfect for construction and industrial applications."
  },
  {
    id: 2,
    name: "Truck Mounted Crane - 40T",
    image: crane2,
    capacity: "40 Tons",
    boom: "45m",
    status: "Available",
    features: ["Advanced Control", "City Operation", "Outrigger Support", "Load Monitoring"],
    description: "Heavy-duty truck mounted crane for demanding lifting operations in urban environments."
  },
  {
    id: 3,
    name: "Compact Mobile Crane - 15T",
    image: crane3,
    capacity: "15 Tons",
    boom: "25m",
    status: "Pre-Order",
    features: ["Compact Design", "Precision Control", "Easy Transport", "Quick Assembly"],
    description: "Compact crane ideal for tight spaces and precision lifting requirements."
  }
];

const towerCranes = [
  {
    name: "Self-Erecting Tower Crane",
    capacity: "8 Tons",
    boom: "50m",
    status: "In Stock",
    features: ["Self-Erecting", "Remote Control", "Weather Protection", "High Precision"]
  },
  {
    name: "Luffing Jib Tower Crane",
    capacity: "12 Tons",
    boom: "60m",
    status: "Available",
    features: ["Luffing Jib", "High Capacity", "Weather Resistant", "Advanced Safety"]
  }
];

const accessories = [
  { name: "Hook Blocks", description: "Various capacity hook blocks and rigging equipment" },
  { name: "Wire Ropes", description: "High-strength wire ropes for all crane types" },
  { name: "Safety Systems", description: "Load monitoring and safety control systems" },
  { name: "Spare Parts", description: "Genuine spare parts for all major crane brands" }
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
              Crane Products & Sales
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Premium quality cranes and lifting equipment for sale. New and certified used 
              cranes with warranty and full support from SS Cranes & Lifters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
                onClick={() => window.open('tel:+917021844804')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +91 70218 44804
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => openEnquiry('General Product Inquiry')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="mobile" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Product Range
              </h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="tower">Tower</TabsTrigger>
                <TabsTrigger value="overhead">Overhead</TabsTrigger>
                <TabsTrigger value="parts">Parts</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mobile" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Cranes</h3>
                <p className="text-gray-600">Truck-mounted and all-terrain mobile cranes for versatile lifting operations</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {mobilecranes.map((crane) => (
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
                        <span>Capacity: {crane.capacity}</span>
                        <span>Boom: {crane.boom}</span>
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

            <TabsContent value="tower" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tower Cranes</h3>
                <p className="text-gray-600">Self-erecting and luffing jib tower cranes for construction projects</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {towerCranes.map((crane, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{crane.name}</CardTitle>
                        <Badge variant="default">{crane.status}</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Capacity: {crane.capacity}</span>
                        <span>Boom: {crane.boom}</span>
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
                          onClick={() => openEnquiry(crane.name)}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="overhead" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Overhead Cranes</h3>
                <p className="text-gray-600">Industrial overhead and gantry cranes for heavy-duty applications</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Single Girder Overhead Crane", capacity: "5-20 Tons", span: "10-25m" },
                  { name: "Double Girder Overhead Crane", capacity: "20-100 Tons", span: "15-35m" },
                  { name: "Gantry Crane", capacity: "10-50 Tons", span: "12-30m" }
                ].map((crane, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{crane.name}</CardTitle>
                      <div className="text-sm text-gray-600">
                        <p>Capacity: {crane.capacity}</p>
                        <p>Span: {crane.span}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => openEnquiry(crane.name)}
                      >
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="parts" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Parts & Accessories</h3>
                <p className="text-gray-600">Genuine crane parts, accessories, and safety equipment</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {accessories.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <p className="text-gray-600">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => openEnquiry(item.name)}
                      >
                        Contact Us
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
              { icon: Shield, title: "Warranty", description: "Comprehensive warranty on all new equipment" },
              { icon: Settings, title: "Installation", description: "Professional installation and commissioning" },
              { icon: Truck, title: "Delivery", description: "Safe transportation and delivery across Maharashtra" },
              { icon: Star, title: "Support", description: "24/7 technical support and maintenance services" }
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
            Ready to Purchase a Crane?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our sales team for detailed specifications, pricing, and financing options.
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
              Email: sales@sscraneslifters.com
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