import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

  const teachingBenefits = [
    "Steady stream of new students",
    "Smart calendar",
    "Interactive classroom",
    "Convenient payment methods",
    "Professional development webinars",
    "Supportive tutor community"
  ];

  const faqData = [
    {
      question: "What kind of tutors does Preply look for?",
      answer: "Preply looks for passionate, qualified tutors who are native speakers or have advanced proficiency in their teaching language. We value teaching experience, but it's not always required - enthusiasm and the ability to connect with students are equally important."
    },
    {
      question: "What subject can I teach?",
      answer: "You can teach languages, academic subjects like math and science, test preparation (IELTS, TOEFL, SAT), business skills, music, art, and many other subjects. The most popular subjects are language learning, but we welcome tutors from all educational backgrounds."
    },
    {
      question: "How do I become an online tutor at Preply?",
      answer: "Simply create your tutor profile by filling out the application form, upload a video introduction, set your rates and availability, and wait for approval. Once approved, you can start receiving student requests and booking lessons."
    },
    {
      question: "How can I get my profile approved quickly?",
      answer: "To get approved quickly, make sure your profile is complete with a professional photo, detailed description of your teaching experience, a clear video introduction, and competitive rates. Respond promptly to any feedback from our team."
    },
    {
      question: "Why should I teach on Preply?",
      answer: "Preply offers flexible scheduling, competitive earnings, a global student base, professional development opportunities, and a supportive community. You'll have access to teaching tools, marketing support, and the freedom to teach from anywhere."
    }
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

      {/* New section: Teach students from over 180 countries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Teach students from over 180 countries
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preply tutors teach 800,000+ students globally. Join us and you'll have everything you need to teach successfully.
              </p>
              
              <ul className="space-y-4 mb-8">
                {teachingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 mr-3 text-green-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold">
                Create a tutor profile now
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Tutors teaching students globally"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Krista A. - English tutor"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <blockquote className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                "Preply allowed me to make a living without leaving home!"
              </blockquote>
              <div className="mb-8">
                <p className="text-lg text-gray-600 mb-2">Krista A.</p>
                <p className="text-gray-500">English tutor</p>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold">
                Create a tutor profile now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
