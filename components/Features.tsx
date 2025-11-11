import { Dumbbell, Clock, Users, Award } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "State-of-the-art machines and free weights for all fitness levels",
    details: "Over 100 pieces of top-tier equipment including cardio machines, strength equipment, and functional training tools"
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock gym access",
    details: "Secure keycard access available 24/7 for Premium and Elite members, with staffed hours from 6am-10pm"
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your fitness journey",
    details: "All trainers hold nationally recognized certifications and average 8+ years of experience"
  },
  {
    icon: Award,
    title: "Results Driven",
    description: "Proven programs designed to help you achieve your goals",
    details: "Customized workout plans, progress tracking, and regular assessments to keep you on track"
  }
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4 transition-all duration-300 ${
                hoveredIndex === index ? 'scale-110 shadow-lg' : ''
              }`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 transition-all duration-300">
                {hoveredIndex === index ? feature.details : feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
