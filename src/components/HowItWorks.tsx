
import { Search, Calendar, Video } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find your perfect tutor",
    description: "Browse thousands of tutors from around the world and find the one that matches your learning style and budget.",
  },
  {
    icon: Calendar,
    title: "Book a lesson",
    description: "Schedule lessons that fit your schedule. Our flexible booking system makes it easy to learn at your own pace.",
  },
  {
    icon: Video,
    title: "Start learning",
    description: "Join your tutor for a personalized 1-on-1 lesson via video chat and start speaking confidently.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Preply works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start learning a new language in 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                  <step.icon className="h-10 w-10 text-green-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-200 rounded-full"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
