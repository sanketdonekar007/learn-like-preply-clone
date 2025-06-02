
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TutorFinder = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find the right tutor for you.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 49,000 tutors and 1M+ lessons taught, we'll help you meet your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Tutor cards stack */}
          <div className="relative">
            <div className="space-y-4">
              {/* Main tutor card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transform rotate-2">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Tutor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah M.</h3>
                    <p className="text-sm text-gray-500">English tutor</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">4.9 (127)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Speaks: English (Native), French (C1)
                </p>
              </div>

              {/* Background cards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transform -rotate-1 absolute top-4 left-4 z-[-1]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200"></div>
                  <div className="space-y-2">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Testimonial */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "She adapts the things to each lesson to amazing."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Luca</div>
                  <div className="text-sm text-gray-500">Student for 2 years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorFinder;
