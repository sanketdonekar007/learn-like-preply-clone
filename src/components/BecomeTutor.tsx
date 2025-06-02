
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BecomeTutor = () => {
  const benefits = [
    "Flexible schedule",
    "Competitive rates", 
    "Global access"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Become a tutor"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="bg-green-400 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Become a tutor
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Earn money sharing your expert knowledge with students. Sign up to start tutoring online with Preply.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-white">
                  <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-semibold rounded-lg">
              Become a tutor →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeTutor;
