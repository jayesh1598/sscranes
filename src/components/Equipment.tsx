import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

// Import all provided crane images
import crane1 from 'figma:asset/0404d9e47455bdc0b536dab9952a209a2600c105.png';
import crane2 from 'figma:asset/88e5719b4227d99b970bd5d363499deadf29ff45.png';
import crane3 from 'figma:asset/4d33ef90bd2dca26d45c7c921a0acb89609be36f.png';

const equipment = [
  {
    image: crane1,
    title: "Mobile Truck Crane - 25T",
    specifications: ["25 Ton Capacity", "30m Boom Length", "Hydraulic Extension", "All-Terrain"],
    description: "Versatile truck-mounted crane ideal for construction and industrial applications"
  },
  {
    image: crane2,
    title: "Articulated Boom Lift",
    specifications: ["20m Working Height", "Hydraulic Platform", "360° Rotation", "Outrigger Support"],
    description: "Perfect for maintenance work, tree trimming, and elevated access requirements"
  },
  {
    image: crane3,
    title: "Heavy Duty Crane - 40T",
    specifications: ["40 Ton Capacity", "45m Boom Length", "Advanced Control", "City Operation"],
    description: "High-capacity crane for demanding lifting operations in urban environments"
  }
];

export function Equipment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Equipment Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, well-maintained cranes and lifting equipment ready for your project needs
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
                  {item.specifications.map((spec, specIndex) => (
                    <Badge key={specIndex} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need specific equipment specifications or have custom requirements?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Contact Our Equipment Specialists
          </button>
        </div>
      </div>
    </section>
  );
}