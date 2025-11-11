import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const phrases = [
  "TRANSFORM YOUR BODY",
  "UNLEASH YOUR POTENTIAL",
  "ACHIEVE YOUR GOALS",
];

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1671970922029-0430d2ae122c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI0NzM4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="h-20 mb-6 flex items-center justify-center">
          <h1
            key={currentPhrase}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            {phrases[currentPhrase]}
          </h1>
        </div>
        <p className="mb-8 text-xl max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Join the ultimate fitness community where dedication
          meets results. State of the art equipment, expert
          trainers, and unlimited motivation.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform"
            onClick={() => scrollToSection("pricing")}
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className=" text-white hover:text-black bg-black hover:bg-white hover:scale-105 transition-transform"
            onClick={() => scrollToSection("classes")}
          >
            View Classes
          </Button>
          
        </div>
      </div>

      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Virtual Gym Tour</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">
              Video player would be embedded here
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}