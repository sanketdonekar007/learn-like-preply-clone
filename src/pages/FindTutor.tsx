
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FindTutor = () => {
  const { language } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find {language ? language.charAt(0).toUpperCase() + language.slice(1) : ''} Tutors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with qualified {language} tutors for personalized lessons
          </p>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600">
            Tutor listings and search functionality would be implemented here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindTutor;
