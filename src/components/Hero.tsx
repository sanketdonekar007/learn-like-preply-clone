
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-gradient-to-r from-pink-400 to-pink-500 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Learn faster with your best language tutor.
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Find perfect language tutors for 1-on-1 lessons in any language.
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              Get started →
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50,000+</div>
                <div className="text-sm text-white/80">Experienced tutors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">300,000+</div>
                <div className="text-sm text-white/80">5-star tutor reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">120+</div>
                <div className="text-sm text-white/80">Subjects taught</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">180+</div>
                <div className="text-sm text-white/80">Tutor nationalities</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="aspect-video bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <img 
                src="/lovable-uploads/7540e241-eb34-4140-babf-1aa19de0856b.png" 
                alt="Language learning session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
