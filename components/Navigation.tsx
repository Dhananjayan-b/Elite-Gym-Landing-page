import { Button } from "./ui/button";
import { Menu, X, Dumbbell } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
      scrolled ? 'bg-black shadow-lg' : 'bg-black/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Dumbbell className="h-6 w-6 text-red-600" />
            <span className="text-2xl">ELITE GYM</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              onClick={() => scrollToSection('home')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('classes')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Classes
            </a>
            <a 
              onClick={() => scrollToSection('pricing')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a 
              onClick={() => scrollToSection('trainers')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Trainers
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Contact
            </a>
            <Button 
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform"
              onClick={() => scrollToSection('pricing')}
            >
              Join Now
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              <a 
                onClick={() => scrollToSection('home')} 
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection('classes')} 
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                Classes
              </a>
              <a 
                onClick={() => scrollToSection('pricing')} 
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                Pricing
              </a>
              <a 
                onClick={() => scrollToSection('trainers')} 
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                Trainers
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                Contact
              </a>
              <Button 
                className="bg-red-600 hover:bg-red-700"
                onClick={() => scrollToSection('pricing')}
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
