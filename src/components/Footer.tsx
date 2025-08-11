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
  Download,
  Send
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About UET Mardan', href: '#', icon: Award },
    { name: 'Academic Calendar', href: '#', icon: Calendar },
    { name: 'Admissions', href: '#', icon: GraduationCap },
    { name: 'Faculty Directory', href: '#', icon: Users },
    { name: 'Research Centers', href: '#', icon: BookOpen },
    { name: 'Alumni Network', href: '#', icon: Globe }
  ];

  const academicLinks = [
    { name: 'Undergraduate Programs', href: '#', icon: GraduationCap },
    { name: 'Graduate Programs', href: '#', icon: BookOpen },
    { name: 'PhD Programs', href: '#', icon: Award },
    { name: 'Online Learning', href: '#', icon: Globe },
    { name: 'Library Services', href: '#', icon: BookOpen },
    { name: 'Academic Regulations', href: '#', icon: FileText }
  ];

  const studentLinks = [
    { name: 'Student Portal', href: '#', icon: Users },
    { name: 'Course Registration', href: '#', icon: BookOpen },
    { name: 'Fee Structure', href: '#', icon: FileText },
    { name: 'Scholarships', href: '#', icon: Award },
    { name: 'Campus Life', href: '#', icon: Users },
    { name: 'Career Services', href: '#', icon: Globe }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gray-900 dark:bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white dark:text-gray-900">Stay Connected with UET Mardan</h3>
            <p className="text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Subscribe to our newsletter to receive the latest news, updates, announcements, 
              and important information from University of Engineering & Technology Mardan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input flex-1"
              />
              <button className="btn btn-primary group">
                <Send size={16} className="mr-2" />
                <span>Subscribe</span>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center">
                <span className="text-white dark:text-gray-900 font-bold text-sm">UET</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">UET Mardan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Excellence in Engineering Education</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              University of Engineering & Technology Mardan was established on 7th March, 2018 
              by the Government of Khyber Pakhtunkhwa. We are committed to providing world-class 
              education and fostering innovation in engineering and technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={16} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    University of Engineering & Technology<br />
                    Charsadda Road, 23200 Mardan<br />
                    Khyber Pakhtunkhwa, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone size={16} className="text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">+92-937-9230295</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">info@uetmardan.edu.pk</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm group"
                  >
                    <link.icon size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Academics</h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm group"
                  >
                    <link.icon size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Students</h4>
            <ul className="space-y-3">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm group"
                  >
                    <link.icon size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-100 dark:bg-gray-800 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                © 2025 University of Engineering & Technology, Mardan. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs">
                Designed & Developed By Abuzar Khan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;