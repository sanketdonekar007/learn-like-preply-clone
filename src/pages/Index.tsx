
import Header from "../components/Header";
import Hero from "../components/Hero";
import LanguageCategories from "../components/LanguageCategories";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LanguageCategories />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
