import { Card, CardContent } from './ui/card';
import { CheckCircle, Calendar, Users, Trophy } from 'lucide-react';

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "15+" },
  { icon: Users, label: "Customer Satisfied", value: "500+" },
  { icon: Trophy, label: "Product Delivered", value: "500+" },
  { icon: CheckCircle, label: "Safety Record", value: "100%" }
];

const features = [
  "Licensed and insured operations",
  "Modern, well-maintained equipment fleet",
  "Certified and experienced operators",
  "24/7 emergency service availability",
  "Competitive pricing and flexible contracts",
  "Comprehensive safety protocols"
];

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About SS Cranes & Lifters
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                With over 15 years of experience in the crane and lifting industry, SS Cranes & Lifters 
                has established itself as a trusted partner for construction, industrial, and commercial projects.
              </p>
              <p>
                Our commitment to safety, reliability, and customer satisfaction has made us the preferred 
                choice for complex lifting operations across the region. We maintain a modern fleet of 
                well-serviced equipment operated by certified professionals.
              </p>
              <p>
                From small residential projects to large industrial installations, we provide tailored 
                solutions that meet the unique requirements of each project while maintaining the highest 
                safety standards.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
