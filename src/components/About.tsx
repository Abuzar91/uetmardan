import React from 'react';
import { Target, Eye, Award, Users, BookOpen, Globe, Calendar, MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "PEC & HEC Recognition",
      description: "Officially recognized by Pakistan Engineering Council and Higher Education Commission with full accreditation.",
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified faculty members with extensive research experience and industry expertise from top universities.",
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Cutting-edge research in engineering, technology, artificial intelligence, and applied sciences.",
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Globe,
      title: "Industry Partnerships",
      description: "Strong collaborations with leading industries and international universities for practical exposure.",
      color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
    }
  ];

  const achievements = [
    { number: "2018", label: "Established", icon: Calendar },
    { number: "8,000+", label: "Students", icon: Users },
    { number: "200+", label: "Faculty Members", icon: Users },
    { number: "25+", label: "Academic Programs", icon: BookOpen }
  ];

  const quickInfo = [
    { icon: Calendar, label: "Established", value: "March 7, 2018" },
    { icon: MapPin, label: "Location", value: "Charsadda Road, Mardan" },
    { icon: Phone, label: "Phone", value: "+92-937-9230295" },
    { icon: Mail, label: "Email", value: "info@uetmardan.edu.pk" }
  ];

  const highlights = [
    "PEC Accredited Engineering Programs",
    "HEC Recognized University Status",
    "State-of-the-art Research Facilities",
    "Industry-Academia Partnerships",
    "International Collaboration Programs",
    "Modern Campus Infrastructure"
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full mb-6">
            <Award size={16} />
            <span className="text-sm font-medium">About UET Mardan</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Excellence in Engineering
            <span className="text-gradient block">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            University of Engineering & Technology Mardan is an emerging public sector university 
            recognized by PEC & HEC, committed to providing world-class engineering education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Pioneering Engineering Education Since 2018
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                The University of Engineering and Technology, Mardan was established on 7th March, 2018 
                by the Government of Khyber Pakhtunkhwa under the KP Universities Act. Located on main 
                Charsadda Road, our university stands as a beacon of educational excellence.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                We offer comprehensive undergraduate, graduate, and doctoral programs designed to meet 
                the evolving needs of industry and society with state-of-the-art facilities and research centers.
              </p>
              
              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary group">
                <span>Learn More About Us</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="UET Mardan Campus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-white dark:text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">PEC Accredited</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">All Engineering Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="card p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                <Eye className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              To be a leading center of excellence in engineering education and research, 
              contributing to national development and global knowledge advancement.
            </p>
          </div>
          
          <div className="card p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                <Target className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              To provide quality education, conduct innovative research, and foster 
              entrepreneurship to produce competent engineers and leaders for society.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 card-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {quickInfo.map((info, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon size={24} className="text-gray-600 dark:text-gray-400" />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</div>
              <div className="font-semibold text-gray-900 dark:text-white">{info.value}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Achievements</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Milestones that reflect our commitment to excellence in engineering education
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <achievement.icon size={28} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;