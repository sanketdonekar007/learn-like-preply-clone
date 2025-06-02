
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn a language with
                <span className="text-green-600"> personalized</span> 1-on-1 classes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Speak a new language confidently. Take online language lessons with professional teachers on Preply. 1-on-1 classes from $5 per hour.
              </p>
            </div>

            {/* Search bar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="What do you want to learn?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg border-gray-200 focus:border-green-600"
                  />
                </div>
                <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl">
                  Start learning
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 out of 5 based on 70,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right side - Image/Video placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Online tutoring session" 
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
