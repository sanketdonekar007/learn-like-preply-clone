
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Users, BookOpen, Globe, DollarSign, Clock, Award } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BecomeTutor = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn up to $550/month",
      description: "Set your own rates and schedule"
    },
    {
      icon: Clock,
      title: "Flexible schedule",
      description: "Teach when it works for you"
    },
    {
      icon: Globe,
      title: "Global reach",
      description: "Connect with students worldwide"
    },
    {
      icon: Award,
      title: "Professional growth",
      description: "Develop your teaching skills"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Create your profile",
      description: "Tell us about your experience and set your rates"
    },
    {
      number: "2",
      title: "Get approved",
      description: "We'll review your application within 24 hours"
    },
    {
      number: "3",
      title: "Start teaching",
      description: "Connect with students and begin earning"
    }
  ];

  const stats = [
    { number: "94%", label: "of students say Preply tutors are excellent" },
    { number: "72%", label: "of students achieve their goals" },
    { number: "88%", label: "of students book more lessons" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Share your knowledge and earn money
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of tutors teaching on Preply. Create your own schedule, set your rates, and help students achieve their goals.
              </p>
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Become a tutor
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Tutor teaching online"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why teach on Preply?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Join successful tutors worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Teach what you love</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Math'].map((subject) => (
              <Card key={subject} className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <p className="font-medium">{subject}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start teaching?</h2>
          <p className="text-xl mb-8">Join thousands of tutors who are making a difference and earning money on Preply.</p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Apply to become a tutor
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeTutor;
