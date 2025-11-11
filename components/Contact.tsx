import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours"
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input 
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message *" 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-6">Contact Information</h3>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <p>123 Fitness Street</p>
                <p className="text-gray-600">velachery,chennai.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <p>(555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri 6am - 10pm</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <p>info@elitegym.com</p>
                <p className="text-gray-600">We'll reply within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <p>Opening Hours</p>
                <p className="text-gray-600">24/7 for Premium & Elite members</p>
                <p className="text-gray-600">5am - 10pm for Basic members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
