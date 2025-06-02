
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "I've been learning Spanish with Preply for 6 months now and I can already have conversations with native speakers. My tutor is amazing!",
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "The flexibility of scheduling lessons around my work schedule is perfect. My German has improved dramatically.",
  },
  {
    name: "Maria Garcia",
    role: "Student",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Learning French on Preply has been an incredible experience. The personalized approach really works for me.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What our learners say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join millions of learners who trust Preply for their language learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
