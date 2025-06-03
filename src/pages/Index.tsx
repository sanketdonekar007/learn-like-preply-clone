
import Header from "../components/Header";
import Hero from "../components/Hero";
import LanguageCategories from "../components/LanguageCategories";
import TutorFinder from "../components/TutorFinder";
import HowItWorks from "../components/HowItWorks";
import GuaranteedLessons from "../components/GuaranteedLessons";
import BecomeTutor from "../components/BecomeTutor";
import CorporateTraining from "../components/CorporateTraining";
import Testimonials from "../components/Testimonials";
import LanguageCoursesSection from "../components/LanguageCoursesSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LanguageCategories />
      <TutorFinder />
      <HowItWorks />
      <GuaranteedLessons />
      <BecomeTutor />
      <CorporateTraining />
      <Testimonials />
      <LanguageCoursesSection />
      <Footer />
    </div>
  );
};

export default Index;
