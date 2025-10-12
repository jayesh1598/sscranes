import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

// Import all provided crane images
import crane1 from 'figma:asset/0404d9e47455bdc0b536dab9952a209a2600c105.png';
import crane2 from 'figma:asset/88e5719b4227d99b970bd5d363499deadf29ff45.png';
import crane3 from 'figma:asset/4d33ef90bd2dca26d45c7c921a0acb89609be36f.png';

const equipment = [
  {
    image: crane1,
    title: "Furunkang FT-160 Truck Mounted Lift",
    workingHeight: "16 metres",
    platformCapacity: "230 kg insulated basket",
    compatibleChassis: "Ashok Leyland Ecomet, Tata LPK",
    description: "Compact aerial platform ideal for urban electrical maintenance and street lighting projects."
  },
  {
    image: crane2,
    title: "Furunkang FT-200 Aerial Work Platform",
    workingHeight: "20 metres",
    platformCapacity: "260 kg fiberglass basket",
    compatibleChassis: "Tata SIGNA, Bharat Benz 1217",
    description: "Mid-height solution offering 360° rotation with proportional controls for precision positioning."
  },
  {
    image: crane3,
    title: "Furunkang FT-320 High Reach Manlift",
    workingHeight: "32 metres",
    platformCapacity: "320 kg dual-entry basket",
    compatibleChassis: "Eicher Pro 3015, Ashok Leyland 2820",
    description: "Flagship high-reach model with advanced stability controls for transmission and metro projects."
  }
];

export function Equipment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Furunkang Truck Mounted Lift Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready-to-dispatch aerial work platforms supplied exclusively by SS Cranes & Lifters for projects across India.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Working Height: {item.workingHeight}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Platform Capacity: {item.platformCapacity}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Compatible Chassis: {item.compatibleChassis}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Request the complete Furunkang catalogue with technical drawings and mounting guidelines.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors" onClick={() => window.open('mailto:sales@sscraneslifters.com')}>
            Email Me the Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}
