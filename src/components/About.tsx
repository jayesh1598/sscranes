import { Card, CardContent } from './ui/card';
import { CheckCircle, Calendar, Users, Trophy } from 'lucide-react';

const stats = [
  { icon: Calendar, label: "Years as Distributor", value: "15+" },
  { icon: Users, label: "Furunkang Models", value: "6" },
  { icon: Trophy, label: "AWP Deliveries", value: "750+" },
  { icon: CheckCircle, label: "Certified Installs", value: "100%" }
];

const features = [
  "Exclusive pan-India distributor for Furunkang truck mounted lifts",
  "AWP kits engineered for Indian road and climate conditions",
  "Rapid chassis integration on Ashok Leyland, Tata, Eicher, Bharat Benz",
  "Factory-backed warranty with spare parts availability",
  "High-reach platforms with insulated and non-insulated variants",
  "Nationwide delivery and commissioning support"
];

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Furunkang Manlift Distribution Excellence
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                SS Cranes & Lifters is the exclusive pan-India distributor for Furunkang truck mounted aerial work
                platforms. We specialise in supplying ready-to-mount kits that deliver European-grade reach,
                stability, and safety for utilities, infrastructure, and industrial maintenance teams.
              </p>
              <p>
                Each unit is supplied with factory certifications, full technical documentation, and on-ground
                commissioning support. Our inventory covers multiple working heights, ensuring every client receives
                the optimal platform for their application.
              </p>
              <p>
                With logistics hubs across India and a dedicated sales engineering team, we provide rapid deliveries,
                chassis integration guidance, and long-term parts availability for every Furunkang installation.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Procurement Teams Choose Us</h3>
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
