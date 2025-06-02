
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleFindTutorsClick = () => {
    navigate('/find-tutor/english');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src="/placeholder.svg" alt="Preply" className="h-8 w-auto" />
            <span className="ml-2 text-2xl font-bold text-green-600">Preply</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={handleFindTutorsClick}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Find tutors
            </button>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Enterprise
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Become a tutor
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </button>
            <Button variant="ghost" className="text-gray-700 hover:text-green-600">
              Log in
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <button onClick={handleFindTutorsClick} className="block text-gray-700 w-full text-left">Find tutors</button>
              <a href="#" className="block text-gray-700">Enterprise</a>
              <a href="#" className="block text-gray-700">Become a tutor</a>
              <a href="#" className="block text-gray-700">Pricing</a>
              <div className="pt-4 border-t border-gray-200">
                <Button variant="ghost" className="w-full mb-2">Log in</Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">Sign up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
