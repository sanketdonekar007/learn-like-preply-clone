import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Star, MapPin, Calendar, Clock, DollarSign, Search, ChevronDown } from "lucide-react";

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
  const [selectedLanguage, setSelectedLanguage] = useState(language || "English");
  const [priceRange, setPriceRange] = useState("₹200 - ₹3,400+");
  const [countryOfBirth, setCountryOfBirth] = useState("Any country");
  const [availability, setAvailability] = useState("Any time");
  const [specialties, setSpecialties] = useState("Specialties");
  const [alsoSpeaks, setAlsoSpeaks] = useState("Also speaks");
  const [nativeSpeaker, setNativeSpeaker] = useState("Native speaker");
  const [tutorCategories, setTutorCategories] = useState("Tutor categories");
  const [sortBy, setSortBy] = useState("Our top picks");

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

      {/* Advanced Filters Section */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Filter Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">I want to learn</label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price per lesson</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="₹200 - ₹3,400+">₹200 - ₹3,400+</SelectItem>
                  <SelectItem value="₹200 - ₹800">₹200 - ₹800</SelectItem>
                  <SelectItem value="₹800 - ₹1,600">₹800 - ₹1,600</SelectItem>
                  <SelectItem value="₹1,600 - ₹3,400">₹1,600 - ₹3,400</SelectItem>
                  <SelectItem value="₹3,400+">₹3,400+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country of birth</label>
              <Select value={countryOfBirth} onValueChange={setCountryOfBirth}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any country">Any country</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">I'm available</label>
              <Select value={availability} onValueChange={setAvailability}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any time">Any time</SelectItem>
                  <SelectItem value="Morning">Morning</SelectItem>
                  <SelectItem value="Afternoon">Afternoon</SelectItem>
                  <SelectItem value="Evening">Evening</SelectItem>
                  <SelectItem value="Weekend">Weekend</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Filters Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            <Select value={specialties} onValueChange={setSpecialties}>
              <SelectTrigger className="w-auto min-w-[120px]">
                <SelectValue />
                <ChevronDown className="h-4 w-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Specialties">Specialties</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Conversational">Conversational</SelectItem>
                <SelectItem value="Grammar">Grammar</SelectItem>
                <SelectItem value="IELTS">IELTS</SelectItem>
                <SelectItem value="TOEFL">TOEFL</SelectItem>
              </SelectContent>
            </Select>

            <Select value={alsoSpeaks} onValueChange={setAlsoSpeaks}>
              <SelectTrigger className="w-auto min-w-[120px]">
                <SelectValue />
                <ChevronDown className="h-4 w-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Also speaks">Also speaks</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="German">German</SelectItem>
                <SelectItem value="Italian">Italian</SelectItem>
              </SelectContent>
            </Select>

            <Select value={nativeSpeaker} onValueChange={setNativeSpeaker}>
              <SelectTrigger className="w-auto min-w-[120px]">
                <SelectValue />
                <ChevronDown className="h-4 w-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Native speaker">Native speaker</SelectItem>
                <SelectItem value="Yes">Native speaker only</SelectItem>
                <SelectItem value="No">Non-native speakers</SelectItem>
              </SelectContent>
            </Select>

            <Select value={tutorCategories} onValueChange={setTutorCategories}>
              <SelectTrigger className="w-auto min-w-[150px]">
                <SelectValue />
                <ChevronDown className="h-4 w-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tutor categories">Tutor categories</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Community">Community</SelectItem>
                <SelectItem value="Certified">Certified</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search and Sort Row */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name or keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-auto min-w-[150px]">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Our top picks">Our top picks</SelectItem>
                  <SelectItem value="Price: Low to High">Price: Low to High</SelectItem>
                  <SelectItem value="Price: High to Low">Price: High to Low</SelectItem>
                  <SelectItem value="Rating">Rating</SelectItem>
                  <SelectItem value="Most Reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Counter and Tutor Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          35,163 {selectedLanguage} teachers available
        </h2>

        {/* Tutor Listings */}
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
                  <div className="flex flex-wrap gap-1 mb-4">
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

      {/* How Preply Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            How Preply works
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                1. Find the best {selectedLanguage} tutor
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4 pb-6">
                Choose from over 33,602 {selectedLanguage} tutors. Use filters to narrow your search and find the perfect fit.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                2. Book your first lesson
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4 pb-6">
                Schedule a trial lesson at a time that works for you. Most tutors offer flexible scheduling to fit your lifestyle.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                3. Subscribe and learn regularly
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4 pb-6">
                Continue learning with regular lessons. Build a learning routine that helps you achieve your language goals faster.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Why Preply is the Best Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Preply is the best site to learn {selectedLanguage} online
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">5<span className="text-2xl">/5</span></div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                {selectedLanguage} tutors with an average rating of 5 and up to 156 reviews
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">3<span className="text-lg"> languages</span></div>
              </div>
              <p className="text-gray-600">
                Our {selectedLanguage} tutors speak on average 3 different languages
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">2<span className="text-lg">h</span></div>
              </div>
              <p className="text-gray-600">
                Our {selectedLanguage} tutors on average answer students in 2 hours
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Our {selectedLanguage} students love us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Evelyn"
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold">Evelyn</h4>
                  <p className="text-sm text-gray-600">with Tanya</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Tanya is amazing, she adapts everything 100 percent to my needs and my level.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Camila"
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold">Camila</h4>
                  <p className="text-sm text-gray-600">with Ishan</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                I highly recommend Ishan. He is a great teacher. He is very patient.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">H</span>
                </div>
                <div>
                  <h4 className="font-semibold">Hani</h4>
                  <p className="text-sm text-gray-600">with Jonathan</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Jonathon is an exceptional {selectedLanguage} teacher. He is very patient.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-semibold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mi</h4>
                  <p className="text-sm text-gray-600">with Jennifer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <Star className="h-4 w-4 text-gray-300" />
              </div>
              <p className="text-sm text-gray-600">
                Teacher Jennifer is very good. I really enjoy her classes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindTutor;
