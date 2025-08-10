import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, BookOpen, Award, ArrowRight, Star, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Excellence in Engineering Education",
      subtitle: "Leading Innovation in Pakistan",
      description: "University of Engineering & Technology Mardan is an emerging public sector university recognized by PEC & HEC, committed to fostering innovation and academic excellence.",
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Explore Programs",
      features: ["PEC Recognized", "HEC Approved", "World-Class Faculty"]
    },
    {
      title: "State-of-the-Art Research Facilities",
      subtitle: "Advancing Knowledge Through Innovation",
      description: "Our cutting-edge laboratories and research centers provide students and faculty with advanced tools for breakthrough discoveries in engineering and technology.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Research Centers",
      features: ["Modern Labs", "Research Excellence", "Industry Partnerships"]
    },
    {
      title: "Vibrant Campus Life",
      subtitle: "Where Learning Meets Innovation",
      description: "Experience dynamic campus life with modern facilities, diverse student activities, sports, societies, and a supportive academic environment that nurtures holistic development.",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Campus Life",
      features: ["Modern Campus", "Student Societies", "Sports Facilities"]
    }
  ];

  const stats = [
    { icon: Users, value: "8,000+", label: "Students", color: "text-blue-400" },
    { icon: BookOpen, value: "25+", label: "Programs", color: "text-green-400" },
    { icon: Award, value: "20+", label: "Years Excellence", color: "text-purple-400" },
    { icon: Globe, value: "500+", label: "Alumni Worldwide", color: "text-orange-400" }
  ];

  const departments = [
    "Computer Science Department",
    "Electrical Engineering Department", 
    "Mechanical Engineering Department",
    "Civil Engineering Department",
    "Telecommunication Engineering Department",
    "Computer Software Engineering Department",
    "Natural Sciences & Humanities Department",
    "Center of Artificial Intelligence"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/80 to-primary-900/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-accent-500 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-accent-400">
                <Star size={20} className="animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {slides[currentSlide].subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display">
                <span className="block">{slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="block text-gradient bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {slides[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Zap size={16} className="text-accent-400" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>{slides[currentSlide].cta}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center space-x-2 glass text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/20">
                <Play size={20} />
                <span>Watch Video</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-3 group-hover:scale-110 transition-transform ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold font-display">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Departments Showcase */}
          <div className="hidden lg:block space-y-4 animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6 font-display">Our Departments</h3>
            <div className="grid gap-3">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium text-sm group-hover:text-accent-400 transition-colors">
                      {dept}
                    </span>
                    <ArrowRight size={16} className="text-white/60 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-6">
          <button
            onClick={prevSlide}
            className="p-3 glass hover:bg-white/30 rounded-full text-white transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent-400 w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 glass hover:bg-white/30 rounded-full text-white transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-8 z-30">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-medium rotate-90 origin-center">Scroll</span>
          <div className="w-px h-8 bg-white/40 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;