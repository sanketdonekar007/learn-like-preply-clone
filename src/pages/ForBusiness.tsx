
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const ForBusiness = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Our employees are really happy with Preply. Language learning takes time which is not easy to find in our busy work lives. With Preply's flexible booking and individual learning approach we can finally offer a language provider that works with everybody's schedule.",
      author: "Philip Schiele",
      position: "Specialist, Learning & Development at Delivery Hero",
      company: "Delivery Hero"
    }
  ];

  const articles = [
    {
      title: "Preply Business vs. Duolingo for Business: Ultimate comparison of features and more",
      description: "Are you looking for corporate language training for your team? Discover an ultimate comparison of the training on offer by Preply Business and Duolingo for Business language learning platforms.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "6 Best English language proficiency tests for companies",
      description: "Learn the language proficiency levels and the best English language proficiency tests available to measure your team's fluency in business English.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Comparison of the best business language training programs for companies [2025]",
      description: "Discover the top business language training programs in 2025. Compare features, pros, and cons to find the best fit for your business needs.",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <img src="/placeholder.svg" alt="Preply" className="h-8 w-auto mb-2" />
                <span className="text-2xl font-bold text-black">Business</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-black">
                The biggest 1-on-1 corporate language learning platform
              </h1>
              <p className="text-xl mb-8 text-gray-700 max-w-lg">
                We've built a team of professional tutors and methodology experts to train your employees to speak English, French, Spanish and other languages fluently
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Book a demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/77a91759-25b4-4dfd-b69a-4c5d29d82c6d.png"
                alt="Business team learning"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-gray-100 py-8 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-4xl font-bold mx-8 text-gray-800">50+ Languages</span>
          <span className="text-pink-500 text-2xl mx-4">●</span>
          <span className="text-4xl font-bold mx-8 text-gray-800">180 Countries</span>
          <span className="text-pink-500 text-2xl mx-4">■</span>
          <span className="text-4xl font-bold mx-8 text-gray-800">40,000+ Tutors</span>
          <span className="text-pink-500 text-2xl mx-4">▶</span>
          <span className="text-4xl font-bold mx-8 text-gray-800">50+ Languages</span>
          <span className="text-pink-500 text-2xl mx-4">●</span>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-gray-600 mb-2">Language training adapted to your needs: Businesses love Preply corporate training ♡</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-black">
            Why choose Preply language training for your employees?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Happy employee"
                className="w-full h-auto rounded-2xl bg-blue-100"
              />
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <blockquote className="text-xl lg:text-2xl font-medium text-black leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-black">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                <div className="flex items-center mt-2">
                  <img src="/placeholder.svg" alt={testimonials[currentTestimonial].company} className="h-6 w-auto" />
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg"
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-black">
                Find out more about Preply corporate language training
              </h2>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700">First name • Required</Label>
                  <Input id="firstName" type="text" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="text-gray-700">Last name • Required</Label>
                  <Input id="lastName" type="text" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700">Business email • Required</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="jobFunction" className="text-gray-700">Job function • Required</Label>
                  <select id="jobFunction" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                    <option value="">Select job function</option>
                    <option value="hr">Human Resources</option>
                    <option value="manager">Manager</option>
                    <option value="director">Director</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="companySize" className="text-gray-700">Company size • Required</Label>
                  <select id="companySize" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Phone number • Required</Label>
                  <div className="flex mt-1">
                    <select className="px-3 py-2 border border-gray-300 rounded-l-md border-r-0">
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>
                    <Input id="phone" type="tel" className="rounded-l-none" />
                  </div>
                </div>
                
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 text-lg font-semibold rounded-lg">
                  Book a demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-gray-600 mb-2">The Preply Business blog</p>
              <h2 className="text-4xl font-bold text-black">Featured articles for business</h2>
            </div>
            <button className="text-blue-600 hover:underline">View all articles</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.description}</p>
                  <button className="text-blue-600 hover:underline text-sm font-medium">Read more</button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForBusiness;
