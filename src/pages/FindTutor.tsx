
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin, Calendar, Clock, DollarSign, Filter, Search } from "lucide-react";

const tutors = [
  {
    id: 1,
    name: "Maria S.",
    country: "Venezuela",
    languages: ["Spanish", "English"],
    rating: 4.97,
    reviews: 2847,
    price: 15,
    avatar: "/placeholder.svg",
    specialties: ["Business", "Conversational", "Grammar"],
    experience: "5+ years",
    availability: "Available now",
    description: "¡Hola! I'm Maria, a passionate Spanish teacher from Venezuela. I help students achieve fluency through engaging conversations and practical exercises."
  },
  {
    id: 2,
    name: "Carlos M.",
    country: "Spain",
    languages: ["Spanish", "English"],
    rating: 4.95,
    reviews: 1834,
    price: 20,
    avatar: "/placeholder.svg",
    specialties: ["DELE", "Business", "Literature"],
    experience: "8+ years",
    availability: "Available today",
    description: "Native Spanish speaker from Madrid with 8 years of teaching experience. Specialized in DELE preparation and business Spanish."
  },
  {
    id: 3,
    name: "Ana R.",
    country: "Mexico",
    languages: ["Spanish", "English"],
    rating: 4.98,
    reviews: 3241,
    price: 18,
    avatar: "/placeholder.svg",
    specialties: ["Conversational", "Grammar", "Pronunciation"],
    experience: "6+ years",
    availability: "Available tomorrow",
    description: "¡Hola! I'm Ana from Mexico City. I love helping students discover the beauty of Spanish through fun and interactive lessons."
  },
  {
    id: 4,
    name: "Luis G.",
    country: "Colombia",
    languages: ["Spanish", "English", "Portuguese"],
    rating: 4.94,
    reviews: 1567,
    price: 16,
    avatar: "/placeholder.svg",
    specialties: ["Business", "Travel", "Culture"],
    experience: "4+ years",
    availability: "Available now",
    description: "Colombian teacher with expertise in business Spanish and Latin American culture. Let's explore Spanish together!"
  }
];

const FindTutor = () => {
  const { language } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [availability, setAvailability] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Online {language ? language.charAt(0).toUpperCase() + language.slice(1) : 'English'} tutors & teachers for private lessons
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Looking for an online {language} tutor? Preply is the leading online language learning platform worldwide. You can choose from 32,602 {language} teachers with an average rating of 4.9 out of 5 stars given by 114,462 customers.
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3">
                Book a lesson today
              </Button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
              <img 
                src="/placeholder.svg" 
                alt="Online tutoring" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All prices</option>
                <option value="0-15">$0 - $15</option>
                <option value="15-25">$15 - $25</option>
                <option value="25+">$25+</option>
              </select>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All availability</option>
                <option value="now">Available now</option>
                <option value="today">Available today</option>
                <option value="tomorrow">Available tomorrow</option>
              </select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                More filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tutor Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            {tutors.length} {language} tutors available
          </p>
        </div>

        <div className="space-y-6">
          {tutors.map((tutor) => (
            <Card key={tutor.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Avatar and Basic Info */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={tutor.avatar}
                      alt={tutor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{tutor.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      {tutor.country}
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tutor.rating}</span>
                      <span className="text-sm text-gray-600">({tutor.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {tutor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description and Details */}
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {tutor.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tutor.experience}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {tutor.availability}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Speaks:</span>
                    {tutor.languages.map((lang, index) => (
                      <Badge key={lang} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="lg:text-right">
                  <div className="flex items-center justify-end gap-1 mb-4">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">{tutor.price}</span>
                    <span className="text-sm text-gray-600">/ hour</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                      Book trial lesson
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center gap-2">
                      <Heart className="h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="ghost" className="text-green-600 hover:text-green-700">
                      Send message
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8">
            Load more tutors
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindTutor;
