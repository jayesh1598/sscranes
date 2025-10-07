import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Headphones } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+91 70218 44804"],
    description: "Call us for immediate assistance and emergency services",
    action: "Call Now",
    primary: true
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["info@sscraneslifters.com", "sales@sscraneslifters.com"],
    description: "Send detailed requirements and get comprehensive quotes",
    action: "Send Email"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 70218 44804"],
    description: "Quick responses via WhatsApp for urgent inquiries",
    action: "WhatsApp Us"
  }
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: [
      "SS Cranes & Lifters",
      "271, Rabale MIDC Rd",
      "Gautam Nagar, MIDC Industrial Area",
      "Rabale, Navi Mumbai",
      "Maharashtra 400701"
    ],
    description: "Visit our modern facility and equipment yard"
  },
  {
    icon: Clock,
    title: "Operating Hours",
    details: [
      "Monday - Saturday: 6:00 AM - 8:00 PM",
      "Sunday: 8:00 AM - 6:00 PM",
      "Emergency Services: 24/7"
    ],
    description: "We're available when you need us most"
  }
];

const departments = [
  {
    icon: Users,
    title: "Sales Department",
    email: "sales@sscraneslifters.com",
    phone: "+91 70218 44804",
    description: "New crane sales, quotations, and product information"
  },
  {
    icon: Headphones,
    title: "Service Department",
    email: "service@sscraneslifters.com",
    phone: "+91 70218 44804",
    description: "Maintenance, repairs, and technical support"
  },
  {
    icon: Phone,
    title: "Emergency Support",
    email: "emergency@sscraneslifters.com",
    phone: "+91 70218 44804",
    description: "24/7 emergency crane services and breakdown support"
  }
];

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact SS Cranes & Lifters
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get in touch with our expert team for crane sales, rentals, services, and support. 
              We're here to help with all your lifting requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                +91 70218 44804
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                info@sscraneslifters.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for all your crane and lifting needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow ${method.primary ? 'ring-2 ring-blue-200 bg-blue-50' : ''}`}>
                <CardHeader className="text-center">
                  <method.icon className={`h-12 w-12 mx-auto mb-4 ${method.primary ? 'text-blue-600' : 'text-gray-600'}`} />
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-lg font-semibold text-gray-900 mb-2">
                      {detail}
                    </p>
                  ))}
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <Button className={`w-full ${method.primary ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {officeInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <info.icon className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-900">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-600">{info.description}</p>
                  {info.icon === MapPin && (
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                      Get Directions
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600">
              Reach the right department for faster assistance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <dept.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Send Us a Message</CardTitle>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 2 hours during business hours
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2">Full Name *</label>
                    <Input placeholder="Enter your full name" className="h-12" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Phone Number *</label>
                    <Input placeholder="Enter your phone number" className="h-12" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email" className="h-12" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Company Name</label>
                    <Input placeholder="Enter company name (optional)" className="h-12" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2">Inquiry Type *</label>
                    <select className="w-full h-12 p-3 border border-gray-300 rounded-md">
                      <option>Select inquiry type</option>
                      <option>Crane Sales</option>
                      <option>Crane Rentals</option>
                      <option>Maintenance Services</option>
                      <option>Parts & Accessories</option>
                      <option>Emergency Service</option>
                      <option>Training Programs</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Project Location</label>
                    <Input placeholder="Enter project location" className="h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="block font-medium mb-2">Message *</label>
                  <Textarea 
                    placeholder="Please provide details about your requirements, timeline, specifications, or any questions you may have..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                    Send Message
                  </Button>
                  <Button variant="outline" className="flex-1 h-12 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Instead
                  </Button>
                </div>
                
                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Facility
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Navi Mumbai's industrial area
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p>271, Rabale MIDC Rd, Gautam Nagar</p>
              <p>MIDC Industrial Area, Rabale</p>
              <p>Navi Mumbai, Maharashtra 400701</p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                Open in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}