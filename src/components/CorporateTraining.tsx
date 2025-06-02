
import { Button } from "@/components/ui/button";

const CorporateTraining = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Corporate language training for business
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Train your team in any of 50+ languages. Access the largest network of tutors in the world, for private or group lessons.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                Start a team
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3">
                Book a demo meeting
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Corporate training"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;
