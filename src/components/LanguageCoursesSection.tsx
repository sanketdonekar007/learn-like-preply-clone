import { Button } from "@/components/ui/button";

const LanguageCoursesSection = () => {
  const popularCourses = [
    { title: "Online English classes", href: "#" },
    { title: "Online Spanish classes", href: "#" },
    { title: "Online German classes", href: "#" },
    { title: "Online French classes", href: "#" },
    { title: "Online Business English courses", href: "#" },
  ];

  const learnLanguage = [
    { title: "Learn English online", href: "#" },
    { title: "Learn Spanish online", href: "#" },
    { title: "Learn French online", href: "#" },
    { title: "Learn Japanese online", href: "#" },
    { title: "Learn German online", href: "#" },
  ];

  const tutorsForNeeds = [
    { title: "English classes for kids", href: "#" },
    { title: "IELTS tutors", href: "#" },
    { title: "Native english speakers online", href: "#" },
    { title: "Online English courses for adults", href: "#" },
    { title: "Spanish tutors for high school students", href: "#" },
    { title: "Online Spanish courses for adults", href: "#" },
  ];

  const otherCourses = [
    { title: "English conversational classes", href: "#" },
    { title: "English classes for Spanish speakers", href: "#" },
    { title: "Business English lessons", href: "#" },
    { title: "Canadian English tutors", href: "#" },
    { title: "Intensive Spanish classes", href: "#" },
  ];

  const cityCourses = [
    { title: "English classes in NYC", href: "#" },
    { title: "Spanish classes in NYC", href: "#" },
    { title: "English classes in Los Angeles", href: "#" },
    { title: "Spanish classes in Los Angeles", href: "#" },
    { title: "English classes in Miami", href: "#" },
    { title: "English classes in Toronto", href: "#" },
    { title: "French classes in Toronto", href: "#" },
    { title: "English classes in London", href: "#" },
    { title: "Spanish classes in London", href: "#" },
    { title: "English classes in Sydney", href: "#" },
    { title: "Chinese tutors in Singapore", href: "#" },
    { title: "Chinese tutors in Hong Kong", href: "#" },
  ];

  const countryCourses = [
    { title: "Spanish tutors near me in the USA", href: "#" },
    { title: "Spanish tutors near me in the United Kingdom", href: "#" },
    { title: "French tutors near me in Canada", href: "#" },
    { title: "Spanish tutors near me in Australia", href: "#" },
  ];

  const globalLanguages = [
    { title: "Español", href: "#" },
    { title: "Français", href: "#" },
    { title: "Deutsch", href: "#" },
    { title: "Italiano", href: "#" },
    { title: "Русский", href: "#" },
    { title: "Português", href: "#" },
    { title: "Polski", href: "#" },
    { title: "Nederlands", href: "#" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Online tutoring & Language lessons and classes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Popular online language courses */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular online language courses
              </h3>
              <ul className="space-y-2">
                {popularCourses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn a language online */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Learn a language online
              </h3>
              <ul className="space-y-2">
                {learnLanguage.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tutors for different learning needs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tutors for different learning needs
              </h3>
              <ul className="space-y-2">
                {tutorsForNeeds.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other popular courses */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Other popular courses
              </h3>
              <ul className="space-y-2">
                {otherCourses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="text-gray-600 border-gray-300">
              Show more
            </Button>
          </div>
        </div>

        {/* Find a language tutor near you */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Find a language tutor near you
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tutors from top cities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tutors from top cities around the globe
              </h3>
              <ul className="space-y-2">
                {cityCourses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tutors from English speaking countries */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tutors from English speaking countries around the globe
              </h3>
              <ul className="space-y-2">
                {countryCourses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preply global */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Preply global
              </h3>
              <ul className="space-y-2">
                {globalLanguages.map((language, index) => (
                  <li key={index}>
                    <a
                      href={language.href}
                      className="text-blue-600 hover:text-blue-800 underline text-sm"
                    >
                      {language.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageCoursesSection;
