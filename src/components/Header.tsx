import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon,
  User,
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
import { motion, AnimatePresence } from 'framer-motion';

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
        { name: 'University Overview', href: '/about', icon: Award },
        { name: 'Vision & Mission', href: '/about', icon: Award },
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
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  const handleNavigation = (item: any) => {
    if (item.href === '/about') {
      // Scroll to about section or navigate to about page
      const aboutSection = document.getElementById('about-page');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.href === '/contact') {
      // Scroll to contact section or navigate to contact page
      const contactSection = document.getElementById('contact-page');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-gray-800' 
          : 'bg-white dark:bg-gray-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white dark:text-gray-900 font-bold text-sm">UET</span>
              </motion.div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                UET Mardan
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Excellence</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <motion.button 
                    onClick={() => handleNavigation(item)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.name}</span>
                  </motion.button>
                ) : (
                  <motion.button 
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.name}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </motion.button>
                )}

                {/* Dropdown */}
                {item.items && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-xl border border-gray-200 dark:border-gray-800"
                      >
                        <div className="p-2">
                          {item.items.map((subItem, subIndex) => (
                            <motion.a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(subItem);
                              }}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <subItem.icon size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                              <span>{subItem.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

            <motion.button 
              className="btn btn-primary btn-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <button
                        onClick={() => {
                          handleNavigation(item);
                          setIsMenuOpen(false);
                        }}
                        className="font-medium text-gray-900 dark:text-white text-sm w-full text-left"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <>
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm">{item.name}</h3>
                        <div className="pl-4 space-y-1">
                          {item.items?.map((subItem, subIndex) => (
                            <motion.a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(subItem);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-center space-x-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                            >
                              <subItem.icon size={14} />
                              <span>{subItem.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;