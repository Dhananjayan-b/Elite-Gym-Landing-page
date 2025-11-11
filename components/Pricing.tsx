import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for getting started",
    features: [
      "Gym access (5am - 10pm)",
      "Basic equipment access",
      "Locker room access",
      "1 guest pass per month"
    ]
  },
  {
    name: "Premium",
    price: "59",
    description: "Most popular choice",
    features: [
      "24/7 gym access",
      "All equipment access",
      "Unlimited group classes",
      "Free fitness assessment",
      "5 guest passes per month",
      "Discount on personal training"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "99",
    description: "Complete fitness experience",
    features: [
      "All Premium features",
      "4 personal training sessions/month",
      "Nutrition consultation",
      "Unlimited guest passes",
      "Priority class booking",
      "Access to VIP lounge"
    ]
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handleSignup = (planName: string, price: number) => {
    const period = isYearly ? 'year' : 'month';
    toast.success(`Welcome to Elite Gym!`, {
      description: `You've selected the ${planName} plan at $${price}/${period}`
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Membership Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. All memberships include no commitment - cancel anytime.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <Label htmlFor="pricing-toggle" className={!isYearly ? '' : 'text-gray-400'}>
              Monthly
            </Label>
            <Switch 
              id="pricing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <Label htmlFor="pricing-toggle" className={isYearly ? '' : 'text-gray-400'}>
              Yearly
              <span className="ml-2 text-red-600">(Save 20%)</span>
            </Label>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const price = parseInt(plan.price);
            const displayPrice = isYearly ? Math.floor(price * 12 * 0.8) : price;
            const period = isYearly ? 'year' : 'month';
            
            return (
              <Card 
                key={index} 
                className={`relative hover:scale-105 transition-transform duration-300 ${
                  plan.popular ? 'border-red-600 border-2 shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl">${displayPrice}</span>
                    <span className="text-gray-600">/{period}</span>
                    {isYearly && (
                      <p className="text-sm text-green-600 mt-2">
                        Save ${price * 12 - displayPrice} per year
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => handleSignup(plan.name, displayPrice)}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
