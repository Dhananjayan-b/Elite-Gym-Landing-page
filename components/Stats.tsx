import { useEffect, useRef, useState } from "react";
import { Users, Dumbbell, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Members", value: 2500, suffix: "+" },
  { icon: Dumbbell, label: "Training Programs", value: 50, suffix: "+" },
  { icon: Award, label: "Expert Trainers", value: 25, suffix: "+" },
  { icon: TrendingUp, label: "Success Stories", value: 1000, suffix: "+" }
];

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export function Stats() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
