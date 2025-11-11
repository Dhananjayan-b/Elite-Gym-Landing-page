import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">ELITE GYM</h3>
            <p className="text-gray-400">
              Your journey to a healthier, stronger you starts here.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Classes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trainers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Elite Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
