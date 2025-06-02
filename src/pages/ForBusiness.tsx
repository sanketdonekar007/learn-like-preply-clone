
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Users, TrendingUp, Shield, Globe, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ForBusiness = () => {
  const features = [
    {
      icon: Users,
      title: "Team management",
      description: "Manage your team's learning progress in one place"
    },
    {
      icon: TrendingUp,
      title: "Progress tracking",
      description: "Track your team's language learning progress with detailed analytics"
    },
    {
      icon: Shield,
      title: "Enterprise security",
      description: "Bank-level security to keep your company data safe"
    },
    {
      icon: Globe,
      title: "Global tutors",
      description: "Access to 32,000+ certified tutors worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Corporate language training for companies
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Give your team the language skills they need to succeed in a global marketplace with Preply Business.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get started
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Business team learning"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Everything your business needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
