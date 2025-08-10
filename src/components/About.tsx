import React from 'react';
import { Target, Eye, Award, Users, BookOpen, Globe, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "PEC & HEC Recognition",
      description: "Officially recognized by Pakistan Engineering Council and Higher Education Commission with full accreditation.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified faculty members with extensive research experience and industry expertise from top universities.",
      color: "bg-green-500"
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Cutting-edge research in engineering, technology, artificial intelligence, and applied sciences.",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      title: "Industry Partnerships",
      description: "Strong collaborations with leading industries and international universities for practical exposure.",
      color: "bg-orange-500"
    }
  ];

  const achievements = [
    { number: "2018", label: "Established" },
    { number: "8,000+", label: "Students" },
    { number: "200+", label: "Faculty Members" },
    { number: "25+", label: "Academic Programs" }
  ];

  const quickInfo = [
    { icon: Calendar, label: "Established", value: "March 7, 2018" },
    { icon: MapPin, label: "Location", value: "Charsadda Road, Mardan" },
    { icon: Phone, label: "Phone", value: "+92-937-9230295" },
    { icon: Mail, label: "Email", value: "info@uetmardan.edu.pk" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full mb-4">
            <Award size={16} />
            <span className="text-sm font-semibold">About UET Mardan</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            Excellence in Engineering Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            University of Engineering & Technology Mardan is an emerging public sector university 
            recognized by PEC & HEC, committed to providing world-class engineering education and fostering innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Pioneering Engineering Education Since 2018
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                The University of Engineering and Technology, Mardan was established on 7th March, 2018 
                by the Government of Khyber Pakhtunkhwa under the KP Universities Act. Located on main 
                Charsadda Road, our university stands as a beacon of educational excellence and innovation in the region.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We offer comprehensive undergraduate, graduate, and doctoral programs designed to meet 
                the evolving needs of industry and society. Our state-of-the-art facilities, research 
                centers, and collaborative environment ensure that our graduates are well-prepared to 
                tackle global challenges.
              </p>
              
              {/* Quick Info */}
              <div className="grid md:grid-cols-2 gap-4">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <info.icon size={20} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Eye className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-display">Our Vision</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be a leading center of excellence in engineering education and research, 
                  contributing to national development and global knowledge advancement.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Target className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-display">Our Mission</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To provide quality education, conduct innovative research, and foster 
                  entrepreneurship to produce competent engineers and leaders for society.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-large group">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="UET Mardan Campus"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2 font-display">Modern Campus</h4>
                <p className="text-blue-100">State-of-the-art facilities for learning and research</p>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-500 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 hover:shadow-medium transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} className="text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-display">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="gradient-primary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-display">Our Achievements</h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Milestones that reflect our commitment to excellence in engineering education
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-accent-400 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </div>
                  <div className="text-blue-100 text-lg font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;