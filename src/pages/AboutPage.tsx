import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Calendar, Users, Trophy, Target, Heart, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "15+" },
  { icon: Users, label: "Satisfied Customers", value: "500+" },
  { icon: Trophy, label: "Projects Completed", value: "1000+" },
  { icon: CheckCircle, label: "Safety Record", value: "100%" }
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide safe, reliable, and cost-effective crane solutions that exceed customer expectations while maintaining the highest safety standards."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Safety first, customer satisfaction, integrity in business, continuous improvement, and building long-term partnerships with our clients."
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To be the leading crane sales and service provider in Maharashtra, known for innovation, reliability, and exceptional customer service."
  }
];

// const timeline = [
//   { year: "2009", event: "Company founded in Navi Mumbai" },
//   { year: "2012", event: "Expanded to crane sales and rentals" },
//   { year: "2015", event: "Achieved ISO safety certification" },
//   { year: "2018", event: "Reached 500+ completed projects" },
//   { year: "2021", event: "Launched 24/7 emergency services" },
//   { year: "2024", event: "Serving across Maharashtra" }
// ];

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About SS Cranes & Lifters
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience, we are Navi Mumbai's trusted partner for 
              crane sales, rentals, and professional lifting services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Founded in 2009 in the heart of Navi Mumbai's industrial area, SS Cranes & Lifters 
                  began as a small crane rental service with a vision to provide reliable lifting solutions 
                  to the growing construction and industrial sectors.
                </p>
                <p>
                  Over the years, we have evolved into a comprehensive crane solutions provider, offering 
                  both sales and services. Our commitment to safety, quality, and customer satisfaction 
                  has made us the preferred choice for businesses across Maharashtra.
                </p>
                <p>
                  Today, we operate from our modern facility at 271, Rabale MIDC Rd, equipped with 
                  state-of-the-art equipment and staffed by certified professionals who share our 
                  commitment to excellence.
                </p>
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

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Values & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
    {/*   <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that define our growth and commitment to excellence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SS Cranes & Lifters?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Licensed and fully insured operations",
              "Modern, well-maintained equipment fleet",
              "Certified and experienced operators",
              "24/7 emergency service availability",
              "Competitive pricing and flexible terms",
              "Comprehensive safety protocols",
              "Quality crane sales and rentals",
              "Professional maintenance services",
              "Local expertise in Navi Mumbai area"
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
