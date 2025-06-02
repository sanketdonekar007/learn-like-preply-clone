
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "How it works", "Careers", "Privacy policy", "Terms & conditions"],
    },
    {
      title: "Teaching",
      links: ["Become a tutor", "Teaching English online", "Teach online", "Online tutoring", "Tutor application"],
    },
    {
      title: "Learning",
      links: ["Take lessons", "English classes", "Spanish classes", "French classes", "German classes"],
    },
    {
      title: "Support",
      links: ["Contact us", "FAQ", "Student help center", "Tutor help center", "Safety center"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Preply" className="h-8 w-auto" />
              <span className="ml-2 text-2xl font-bold text-green-400">Preply</span>
            </div>
            <p className="text-gray-400 mb-6">
              The leading online language learning platform connecting students with certified tutors for 1-on-1 lessons.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Preply Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <select className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
              </select>
              <select className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
