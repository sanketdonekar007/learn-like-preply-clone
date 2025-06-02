
import { ArrowRight } from "lucide-react";

const languages = [
  { name: "English", tutors: "15,460", image: "/placeholder.svg", flag: "🇺🇸" },
  { name: "Spanish", tutors: "2,144", image: "/placeholder.svg", flag: "🇪🇸" },
  { name: "French", tutors: "1,694", image: "/placeholder.svg", flag: "🇫🇷" },
  { name: "German", tutors: "1,116", image: "/placeholder.svg", flag: "🇩🇪" },
  { name: "Italian", tutors: "896", image: "/placeholder.svg", flag: "🇮🇹" },
  { name: "Portuguese", tutors: "753", image: "/placeholder.svg", flag: "🇵🇹" },
  { name: "Chinese", tutors: "1,832", image: "/placeholder.svg", flag: "🇨🇳" },
  { name: "Japanese", tutors: "642", image: "/placeholder.svg", flag: "🇯🇵" },
];

const LanguageCategories = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Learn any language
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from over 50 languages and start speaking confidently with native speakers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {languages.map((language, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-green-200 transition-all cursor-pointer"
            >
              <div className="aspect-square mb-4 rounded-xl overflow-hidden">
                <img
                  src={language.image}
                  alt={language.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{language.flag}</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {language.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  {language.tutors} tutors available
                </p>
              </div>
              <div className="mt-4 flex items-center text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Find tutors</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-green-600 hover:text-green-700 font-semibold text-lg flex items-center mx-auto">
            View all languages
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LanguageCategories;
