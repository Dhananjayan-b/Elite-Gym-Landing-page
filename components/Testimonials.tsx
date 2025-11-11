import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Jessica Williams",
    role: "Weight Loss Journey",
    content: "I've lost 30 pounds in 4 months! The trainers here are incredibly supportive and the community is amazing. Best decision I ever made!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    name: "Michael Torres",
    role: "Strength Training",
    content: "The equipment is top-notch and the variety of classes keeps me motivated. I've gained 15 lbs of muscle and feel stronger than ever.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    name: "Emily Chen",
    role: "Yoga Enthusiast",
    content: "The yoga classes transformed my life. I'm more flexible, peaceful, and centered. The instructors are world-class!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Robert Jackson",
    role: "Marathon Runner",
    content: "Training here helped me complete my first marathon! The cardio programs and expert guidance made all the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our members who have transformed their lives at Elite Gym
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonials[currentIndex].content}"</p>
                  <div>
                    <p className="text-gray-600">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-red-600" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
