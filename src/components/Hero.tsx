import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Users, BookOpen, Award, Globe, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce-subtle"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
              <Star size={16} className="text-yellow-500" />
              <span>Ranked #1 Engineering University in KPK</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white block">
                  {slides[currentSlide].title}
                </span>
                <span className="text-gradient block">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
                <div key={key} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary btn-lg group">
                <span>Explore Programs</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-secondary btn-lg group">
                <Play size={20} className="mr-2" />
                <span>Watch Video</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} className="text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {feature.label}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-fade-in-up">
            {/* Main Image Container */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="UET Mardan Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">PEC Accredited</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">All Programs</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 animate-bounce-subtle">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">8,000+ Students</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Active Enrollment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gray-900 dark:bg-white w-8' 
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-600">
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;