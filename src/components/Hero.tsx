import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, BookOpen, Award, Globe, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const isInView = useInView(heroRef, { once: true });

  const slides = [
    {
      title: "Engineering Excellence",
      subtitle: "Redefined",
      description: "Join Pakistan's premier engineering university where innovation meets tradition. Shape the future with cutting-edge technology and world-class education.",
      stats: { students: "8,000+", programs: "25+", faculty: "200+" }
    },
    {
      title: "Research & Innovation",
      subtitle: "At Its Peak",
      description: "Breakthrough discoveries in AI, renewable energy, and advanced engineering. Our research centers are pushing the boundaries of what's possible.",
      stats: { projects: "150+", publications: "500+", patents: "25+" }
    },
    {
      title: "Global Recognition",
      subtitle: "Local Impact",
      description: "PEC and HEC accredited programs with international partnerships. Building tomorrow's leaders in engineering and technology.",
      stats: { partners: "50+", countries: "15+", alumni: "5,000+" }
    }
  ];

  const features = [
    { icon: Award, label: "PEC Accredited", description: "Fully recognized programs" },
    { icon: Users, label: "Expert Faculty", description: "PhD qualified professors" },
    { icon: Globe, label: "Global Network", description: "International partnerships" },
    { icon: BookOpen, label: "Modern Curriculum", description: "Industry-aligned courses" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isInView && titleRef.current && statsRef.current && imageRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current.children, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
      .fromTo(statsRef.current.children,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(imageRef.current,
        { x: 100, opacity: 0, rotateY: 45 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" },
        "-=1"
      );

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });
    }
  }, [isInView]);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{ y }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="floating-element absolute top-20 left-10 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-element absolute top-40 right-20 w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="floating-element absolute bottom-40 left-20 w-4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div ref={titleRef} className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span className="text-gray-900 dark:text-white block">
                  {slides[currentSlide].title}
                </span>
                <span className="text-gradient block">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div 
              ref={statsRef}
              className="grid grid-cols-3 gap-8 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
                <motion.div 
                  key={key} 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: 0.7 + (index * 0.1) 
                    }}
                  >
                    {value}
                  </motion.div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="btn btn-primary btn-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Programs</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#1f2937"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {feature.label}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div 
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div 
                className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://www.uetmardan.edu.pk/uetm/assets/homeimages/02-min.jpg"
                  alt="UET Mardan Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Award size={20} className="text-green-600 dark:text-green-400" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">PEC Accredited</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">All Programs</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0, scale: 0, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Users size={20} className="text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">8,000+ Students</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Active Enrollment</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <motion.div 
              className="absolute -z-10 top-8 left-8 w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl"
              animate={{ 
                rotate: [0, 1, -1, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <motion.div 
          className="flex justify-center space-x-2 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gray-900 dark:bg-white w-8' 
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-600">
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;