import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Instagram,
  ArrowRight,
  GraduationCap,
  Award,
  Globe,
  Calendar,
  FileText,
  Users,
  BookOpen,
  Download
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About UET Mardan', icon: Award },
    { name: 'Academic Calendar', icon: Calendar },
    { name: 'Admissions', icon: GraduationCap },
    { name: 'Faculty Directory', icon: Users },
    { name: 'Research Centers', icon: BookOpen },
    { name: 'Alumni Network', icon: Globe }
  ];

  const academicLinks = [
    { name: 'Undergraduate Programs', icon: GraduationCap },
    { name: 'Graduate Programs', icon: BookOpen },
    { name: 'PhD Programs', icon: Award },
    { name: 'Online Learning', icon: Globe },
    { name: 'Library Services', icon: BookOpen },
    { name: 'Academic Regulations', icon: FileText }
  ];

  const studentLinks = [
    { name: 'Student Portal', icon: Users },
    { name: 'Course Registration', icon: BookOpen },
    { name: 'Fee Structure', icon: FileText },
    { name: 'Scholarships', icon: Award },
    { name: 'Campus Life', icon: Users },
    { name: 'Career Services', icon: Globe }
  ];

  const importantLinks = [
    { name: 'Admission Section', icon: GraduationCap },
    { name: 'Examination Section', icon: FileText },
    { name: 'Rules & Regulations', icon: BookOpen },
    { name: 'Press Release Archive', icon: FileText },
    { name: 'Downloads', icon: Download },
    { name: 'QEC', icon: Award }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-600/90"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 font-display">Stay Connected with UET Mardan</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Subscribe to our newsletter to receive the latest news, updates, announcements, 
              and important information from University of Engineering & Technology Mardan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-medium"
              />
              <button className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* University Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-large">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">UET</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">UET Mardan</h3>
                <p className="text-sm text-gray-400">Excellence in Engineering Education</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              University of Engineering & Technology Mardan was established on 7th March, 2018 
              by the Government of Khyber Pakhtunkhwa. We are committed to providing world-class 
              education and fostering innovation in engineering and technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                  <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    University of Engineering & Technology<br />
                    Charsadda Road, 23200 Mardan<br />
                    Khyber Pakhtunkhwa, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                  <Phone size={18} className="text-primary-400 flex-shrink-0" />
                </div>
                <p className="text-gray-300 text-sm">+92-937-9230295</p>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                  <Mail size={18} className="text-primary-400 flex-shrink-0" />
                </div>
                <p className="text-gray-300 text-sm">info@uetmardan.edu.pk</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm group"
                  >
                    <link.icon size={14} className="text-primary-400 group-hover:text-primary-300" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Academics</h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm group"
                  >
                    <link.icon size={14} className="text-primary-400 group-hover:text-primary-300" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm group"
                  >
                    <link.icon size={14} className="text-primary-400 group-hover:text-primary-300" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 group transform hover:scale-110 shadow-medium hover:shadow-large`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © 2025 University of Engineering & Technology, Mardan. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Designed & Developed with ❤️ for Academic Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;