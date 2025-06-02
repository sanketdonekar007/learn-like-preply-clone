
import { ArrowRight, Building, Crown, Mountain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const languages = [
  { name: "English tutors", teachers: "33,602 teachers", icon: Building },
  { name: "Spanish tutors", teachers: "10,056 teachers", icon: Crown },
  { name: "French tutors", teachers: "3,714 teachers", icon: Mountain },
  { name: "German tutors", teachers: "1,518 teachers", icon: Building },
  { name: "Italian tutors", teachers: "2,542 teachers", icon: Building },
  { name: "Chinese tutors", teachers: "5,253 teachers", icon: Building },
  { name: "Arabic tutors", teachers: "3,651 teachers", icon: Building },
  { name: "Japanese tutors", teachers: "2,902 teachers", icon: Crown },
  { name: "Portuguese tutors", teachers: "1,635 teachers", icon: Building },
];

const LanguageCategories = () => {
  const navigate = useNavigate();

  const handleCardClick = (languageName: string) => {
    const language = languageName.split(' ')[0].toLowerCase();
    navigate(`/find-tutor/${language}`);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language, index) => {
            const Icon = language.icon;
            return (
              <div
                key={index}
                onClick={() => handleCardClick(language.name)}
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {language.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {language.teachers}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <button className="text-gray-700 hover:text-gray-900 font-medium text-base flex items-center">
            <span className="text-lg mr-2">+</span>
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default LanguageCategories;
