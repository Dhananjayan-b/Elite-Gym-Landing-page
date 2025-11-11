import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { toast } from "sonner@2.0.3";

const classes = [
  {
    title: "Strength Training",
    description: "Build muscle and increase power with our comprehensive strength programs",
    image: "https://images.unsplash.com/photo-1741478551696-8e4ff7d6b468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyNDQ2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    schedule: "Mon, Wed, Fri - 6:00 AM & 6:00 PM",
    duration: "60 min",
    capacity: "15",
    instructor: "Marcus Johnson"
  },
  {
    title: "Yoga & Flexibility",
    description: "Improve balance, flexibility and mindfulness through guided yoga sessions",
    image: "https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBmaXRuZXNzfGVufDF8fHx8MTc2MjQyNzEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    schedule: "Tue, Thu - 7:00 AM & 5:00 PM",
    duration: "45 min",
    capacity: "20",
    instructor: "Sarah Mitchell"
  },
  {
    title: "Cardio Blast",
    description: "High-intensity cardio workouts to boost endurance and burn calories",
    image: "https://images.unsplash.com/photo-1702997831866-8c22e3d796f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjB3b3Jrb3V0JTIwcnVubmluZ3xlbnwxfHx8fDE3NjI1MDA5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    schedule: "Daily - 8:00 AM & 7:00 PM",
    duration: "45 min",
    capacity: "25",
    instructor: "David Chen"
  }
];

export function Classes() {
  const [selectedClass, setSelectedClass] = useState<typeof classes[0] | null>(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  const handleBooking = () => {
    if (bookingDate && bookingTime) {
      toast.success("Class booked successfully!", {
        description: `${selectedClass?.title} on ${bookingDate} at ${bookingTime}`
      });
      setSelectedClass(null);
      setBookingDate("");
      setBookingTime("");
    } else {
      toast.error("Please select a date and time");
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From high-intensity training to mindful yoga, we offer a variety of classes 
            to match your fitness goals and preferences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative group">
                <ImageWithFallback 
                  src={classItem.image} 
                  alt={classItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => setSelectedClass(classItem)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{classItem.title}</CardTitle>
                <CardDescription>{classItem.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{classItem.capacity} spots available</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-red-600 hover:text-white transition-colors"
                  onClick={() => setSelectedClass(classItem)}
                >
                  Book Class
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedClass} onOpenChange={() => setSelectedClass(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book {selectedClass?.title}</DialogTitle>
            <DialogDescription>
              Choose your preferred date and time for this class
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Instructor</Label>
              <p className="text-sm text-gray-600">{selectedClass?.instructor}</p>
            </div>
            <div className="space-y-2">
              <Label>Duration</Label>
              <p className="text-sm text-gray-600">{selectedClass?.duration}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Select Date</Label>
              <Select value={bookingDate} onValueChange={setBookingDate}>
                <SelectTrigger id="date">
                  <SelectValue placeholder="Choose a date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025-11-10">Monday, Nov 10</SelectItem>
                  <SelectItem value="2025-11-11">Tuesday, Nov 11</SelectItem>
                  <SelectItem value="2025-11-12">Wednesday, Nov 12</SelectItem>
                  <SelectItem value="2025-11-13">Thursday, Nov 13</SelectItem>
                  <SelectItem value="2025-11-14">Friday, Nov 14</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <Select value={bookingTime} onValueChange={setBookingTime}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Choose a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="06:00">6:00 AM</SelectItem>
                  <SelectItem value="07:00">7:00 AM</SelectItem>
                  <SelectItem value="08:00">8:00 AM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                  <SelectItem value="19:00">7:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full bg-red-600 hover:bg-red-700"
              onClick={handleBooking}
            >
              Confirm Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
