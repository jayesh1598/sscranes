import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 70218 44804", "Emergency: 24/7"],
    description: "Call us for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@sscraneslifters.com", "sales@sscraneslifters.com"],
    description: "Send us your requirements"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["271, Rabale MIDC Rd, Gautam Nagar", "MIDC Industrial Area, Rabale", "Navi Mumbai, Maharashtra 400701"],
    description: "Visit our equipment yard"
  },
  {
    icon: Clock,
    title: "Operating Hours",
    details: ["Mon-Sat: 6:00 AM - 8:00 PM", "Emergency: 24/7 Available"],
    description: "We're here when you need us"
  }
];

export function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your lifting requirements? Contact us for a free consultation and quote
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <info.icon className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-900 font-medium">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-gray-600 mt-2">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <p className="text-gray-600">Tell us about your project and we'll provide a detailed quote</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Full Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone Number *</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Company Name</label>
                    <Input placeholder="Enter company name (optional)" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Service Type *</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Select service type</option>
                      <option>Mobile Crane Rental</option>
                      <option>Construction Support</option>
                      <option>Industrial Lifting</option>
                      <option>Emergency Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Project Date</label>
                    <Input type="date" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Project Details *</label>
                  <Textarea 
                    placeholder="Please describe your lifting requirements, location, weight specifications, and any special considerations..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Submit Quote Request
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll respond to your quote request within 2 hours during business hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}