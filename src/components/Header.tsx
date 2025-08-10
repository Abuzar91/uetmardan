import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Sun, 
  Moon,
  Globe,
  User,
  Bell,
  GraduationCap,
  Calendar,
  FileText,
  Users,
  BookOpen,
  Award,
  Download,
  MessageCircle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'About UETM',
      icon: Award,
      items: [
        { name: 'University Overview', icon: Award },
        { name: 'Vision & Mission', icon: Award },
        { name: 'Vice Chancellor Message', icon: User },
        { name: 'History & Establishment', icon: BookOpen },
        { name: 'Campus Tour', icon: MapPin },
        { name: 'Accreditation & Recognition', icon: Award },
        { name: 'Organizational Structure', icon: Users },
        { name: 'Annual Reports', icon: FileText }
      ]
    },
    {
      name: 'Admissions',
      icon: GraduationCap,
      items: [
        { name: 'Undergraduate Admission', icon: GraduationCap },
        { name: 'Graduate Admission', icon: GraduationCap },
        { name: 'PhD Admission', icon: GraduationCap },
        { name: 'International Students', icon: Globe },
        { name: 'Merit Lists', icon: FileText },
        { name: 'Fee Structure', icon: FileText },
        { name: 'Scholarships', icon: Award },
        { name: 'Admission Guidelines', icon: BookOpen }
      ]
    },
    {
      name: 'Academics',
      icon: BookOpen,
      items: [
        { name: 'Faculties', icon: Users },
        { name: 'Departments', icon: BookOpen },
        { name: 'Undergraduate Programs', icon: GraduationCap },
        { name: 'Graduate Programs', icon: GraduationCap },
        { name: 'PhD Programs', icon: GraduationCap },
        { name: 'Academic Calendar', icon: Calendar },
        { name: 'Examination Section', icon: FileText },
        { name: 'Academic Regulations', icon: BookOpen }
      ]
    },
    {
      name: 'QEC',
      icon: Award,
      items: [
        { name: 'Quality Enhancement Cell', icon: Award },
        { name: 'Academic Audit', icon: FileText },
        { name: 'Self Assessment Reports', icon: FileText },
        { name: 'Quality Assurance', icon: Award },
        { name: 'Accreditation Status', icon: Award },
        { name: 'QEC Policies', icon: BookOpen },
        { name: 'Faculty Development', icon: Users },
        { name: 'Student Feedback', icon: MessageCircle }
      ]
    },
    {
      name: 'Students',
      icon: Users,
      items: [
        { name: 'Student Portal', icon: User },
        { name: 'Course Registration', icon: BookOpen },
        { name: 'Academic Records', icon: FileText },
        { name: 'Student Services', icon: Users },
        { name: 'Campus Life', icon: Users },
        { name: 'Student Societies', icon: Users },
        { name: 'Sports & Recreation', icon: Award },
        { name: 'Hostels & Accommodation', icon: MapPin }
      ]
    },
    {
      name: 'Downloads',
      icon: Download,
      items: [
        { name: 'Academic Forms', icon: FileText },
        { name: 'Admission Forms', icon: FileText },
        { name: 'Fee Challan', icon: FileText },
        { name: 'Academic Calendar', icon: Calendar },
        { name: 'Prospectus', icon: BookOpen },
        { name: 'Rules & Regulations', icon: BookOpen },
        { name: 'Tender Documents', icon: FileText },
        { name: 'Press Releases', icon: FileText }
      ]
    },
    {
      name: 'Contacts',
      icon: MessageCircle,
      items: [
        { name: 'University Directory', icon: Phone },
        { name: 'Faculty Contacts', icon: Users },
        { name: 'Department Contacts', icon: Phone },
        { name: 'Administrative Offices', icon: MapPin },
        { name: 'Emergency Contacts', icon: Phone },
        { name: 'Location & Map', icon: MapPin },
        { name: 'Feedback & Complaints', icon: MessageCircle },
        { name: 'Media Contacts', icon: Phone }
      ]
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 dark:bg-gray-900 text-white text-sm py-3 hidden lg:block border-b border-primary-800 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
              <Phone size={14} />
              <span>+92-937-9230295</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
              <Mail size={14} />
              <span>info@uetmardan.edu.pk</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
              <MapPin size={14} />
              <span>Charsadda Road, 23200 Mardan, KPK, Pakistan</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-primary-200 transition-colors font-medium">Student Portal</a>
            <a href="#" className="hover:text-primary-200 transition-colors font-medium">Faculty Portal</a>
            <a href="#" className="hover:text-primary-200 transition-colors font-medium">Alumni</a>
            <div className="flex items-center space-x-2">
              <Globe size={14} />
              <select className="bg-transparent text-white text-sm border-none outline-none cursor-pointer">
                <option value="en" className="text-gray-900">English</option>
                <option value="ur" className="text-gray-900">اردو</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-large border-b border-gray-200 dark:border-gray-700' 
          : 'bg-white dark:bg-gray-900 shadow-soft'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-large transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">UET</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white font-display">
                  University of Engineering & Technology
                </h1>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">Mardan, Pakistan</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-800 group">
                    <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-sm">{item.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Mega Menu */}
                  <div className={`absolute top-full left-0 w-80 bg-white dark:bg-gray-800 shadow-large rounded-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform ${
                    activeDropdown === item.name ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'
                  }`}>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                          <item.icon size={20} className="text-primary-600" />
                          <span>{item.name}</span>
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mt-2"></div>
                      </div>
                      <div className="grid gap-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href="#"
                            className="flex items-center space-x-3 py-3 px-4 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 group"
                          >
                            <subItem.icon size={16} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
                            <span className="group-hover:translate-x-1 transition-transform">{subItem.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <button className="p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-800 transform hover:scale-110">
                <Search size={20} />
              </button>
              
              <button className="p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-800 transform hover:scale-110 relative">
                <Bell size={20} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </button>

              <button className="p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-800 transform hover:scale-110">
                <User size={20} />
              </button>

              <button
                onClick={toggleTheme}
                className="p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-800 transform hover:scale-110"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {navigation.map((item) => (
                <div key={item.name} className="mb-6">
                  <h3 className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                    <item.icon size={20} className="text-primary-600" />
                    <span>{item.name}</span>
                  </h3>
                  <div className="pl-6 space-y-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href="#"
                        className="flex items-center space-x-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <subItem.icon size={14} />
                        <span>{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;