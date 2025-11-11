import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const trainers = [
  {
    name: "Marcus Johnson",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBmaXRuZXNzfGVufDF8fHx8MTc2MjQ4MTkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    certifications: "NASM-CPT, CSCS"
  },
  {
    name: "Sarah Mitchell",
    specialty: "Yoga & Wellness",
    image: "https://images.unsplash.com/photo-1761258772183-6a905c8b95fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjBhdGhsZXRpY3xlbnwxfHx8fDE3NjI1MDA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    certifications: "RYT-500, ACE-CPT"
  },
  {
    name: "David Chen",
    specialty: "HIIT & Cardio",
    image: "https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBmaXRuZXNzfGVufDF8fHx8MTc2MjQ4MTkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    certifications: "ACE-CPT, TRX"
  }
];

export function Trainers() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Meet Our Trainers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified trainers are here to guide, motivate, and help you achieve your fitness goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <Card key={index} className="overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{trainer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-2">{trainer.specialty}</p>
                <p className="text-sm text-gray-600">{trainer.certifications}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
