import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Truck, Building, Wrench, Users, MapPin, Clock } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: "Mobile Crane Services",
    description: "Professional mobile crane rentals with certified operators for construction and industrial lifting needs."
  },
  {
    icon: Building,
    title: "Construction Support",
    description: "Complete lifting solutions for building construction, including material handling and equipment positioning."
  },
  {
    icon: Wrench,
    title: "Industrial Lifting",
    description: "Specialized heavy machinery lifting and positioning for industrial installations and maintenance."
  },
  {
    icon: Users,
    title: "Certified Operators",
    description: "Experienced and certified crane operators ensuring safe and efficient operation for all projects."
  },
  {
    icon: MapPin,
    title: "On-Site Services",
    description: "Fast response on-site crane services with flexible scheduling to meet your project deadlines."
  },
  {
    icon: Clock,
    title: "Emergency Support",
    description: "24/7 emergency crane services for urgent lifting requirements and critical project support."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive crane and lifting solutions tailored to meet your specific project requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
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
  );
}