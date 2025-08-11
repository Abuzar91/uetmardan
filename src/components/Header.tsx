import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Sun, 
  Moon,
  User,
  Bell,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  FileText,
  Globe,
  Phone,
  MessageCircle,
  Download,
  Calendar,
  MapPin,
  ArrowRight
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
      name: 'About',
      items: [
        { name: 'University Overview', href: '#', icon: Award },
        { name: 'Vision & Mission', href: '#', icon: Award },
        { name: 'Leadership', href: '#', icon: User },
        { name: 'Campus Tour', href: '#', icon: MapPin },
        { name: 'Accreditation', href: '#', icon: Award },
      ]
    },
    {
      name: 'Admissions',
      items: [
        { name: 'Undergraduate', href: '#', icon: GraduationCap },
        { name: 'Graduate', href: '#', icon: GraduationCap },
        { name: 'PhD Programs', href: '#', icon: GraduationCap },
        { name: 'International Students', href: '#', icon: Globe },
        { name: 'Scholarships', href: '#', icon: Award },
      ]
    },
    {
      name: 'Academics',
      items: [
        { name: 'Departments', href: '#', icon: BookOpen },
        { name: 'Programs', href: '#', icon: GraduationCap },
        { name: 'Academic Calendar', href: '#', icon: Calendar },
        { name: 'Faculty', href: '#', icon: Users },
        { name: 'Research', href: '#', icon: BookOpen },
      ]
    },
    {
      name: 'Student Life',
      items: [
        { name: 'Campus Life', href: '#', icon: Users },
        { name: 'Student Services', href: '#', icon: Users },
        { name: 'Sports & Recreation', href: '#', icon: Award },
        { name: 'Student Portal', href: '#', icon: User },
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Library', href: '#', icon: BookOpen },
        { name: 'Downloads', href: '#', icon: Download },
        { name: 'Forms', href: '#', icon: FileText },
        { name: 'Contact', href: '#', icon: Phone },
      ]
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone size={14} />
                <span>+92-937-9230295</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin size={14} />
                <span>Charsadda Road, Mardan, KPK</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Student Portal
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Faculty Portal
              </a>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
              <select className="bg-transparent text-gray-600 dark:text-gray-400 text-sm border-none outline-none cursor-pointer">
                <option value="en">EN</option>
                <option value="ur">اردو</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-gray-800' 
          : 'bg-white dark:bg-gray-950'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                  <span className="text-white dark:text-gray-900 font-bold text-sm">UET</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  UET Mardan
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Excellence</p>
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
                  <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className={`absolute top-full left-0 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-200 ${
                    activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}>
                    <div className="p-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                        >
                          <subItem.icon size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                          <span>{subItem.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">
                <Search size={18} />
              </button>
              
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 relative">
                <Bell size={18} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

              <button className="btn btn-primary btn-sm">
                Apply Now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-2">
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">{item.name}</h3>
                  <div className="pl-4 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center space-x-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
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