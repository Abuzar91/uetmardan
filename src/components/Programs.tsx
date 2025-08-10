import React, { useState } from 'react';
import { GraduationCap, Clock, Users, ArrowRight, Star, Award, BookOpen } from 'lucide-react';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  const programs = {
    undergraduate: [
      {
        title: "Computer Science",
        duration: "4 Years",
        seats: "120",
        description: "Comprehensive program covering software engineering, artificial intelligence, cybersecurity, data science, and modern computing technologies.",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["AI & Machine Learning", "Software Engineering", "Cybersecurity"],
        accreditation: "PEC Accredited"
      },
      {
        title: "Electrical Engineering",
        duration: "4 Years",
        seats: "100",
        description: "Power systems, electronics, telecommunications, control systems, and renewable energy technologies with hands-on laboratory experience.",
        image: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Power Systems", "Electronics", "Telecommunications"],
        accreditation: "PEC Accredited"
      },
      {
        title: "Mechanical Engineering",
        duration: "4 Years",
        seats: "80",
        description: "Manufacturing processes, thermal systems, robotics, automotive engineering, and advanced materials with industry partnerships.",
        image: "https://images.pexels.com/photos/163726/belgium-antwerp-port-163726.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Manufacturing", "Robotics", "Thermal Systems"],
        accreditation: "PEC Accredited"
      },
      {
        title: "Civil Engineering",
        duration: "4 Years",
        seats: "60",
        description: "Structural engineering, transportation systems, water resources, environmental engineering, and construction management.",
        image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Structural Design", "Transportation", "Water Resources"],
        accreditation: "PEC Accredited"
      },
      {
        title: "Telecommunication Engineering",
        duration: "4 Years",
        seats: "60",
        description: "Modern communication systems, wireless technologies, network engineering, and digital signal processing with cutting-edge labs.",
        image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Wireless Systems", "Network Engineering", "Signal Processing"],
        accreditation: "PEC Accredited"
      },
      {
        title: "Computer Software Engineering",
        duration: "4 Years",
        seats: "80",
        description: "Software development methodologies, web technologies, mobile app development, and software project management.",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Web Development", "Mobile Apps", "Software Architecture"],
        accreditation: "PEC Accredited"
      }
    ],
    graduate: [
      {
        title: "MS Computer Science",
        duration: "2 Years",
        seats: "30",
        description: "Advanced research in artificial intelligence, machine learning, data science, cybersecurity, and software engineering.",
        image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Research Focus", "AI Specialization", "Industry Projects"],
        accreditation: "HEC Recognized"
      },
      {
        title: "MS Electrical Engineering",
        duration: "2 Years",
        seats: "25",
        description: "Specialization in power systems, renewable energy, electronics, control systems, and telecommunications.",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Power Systems", "Renewable Energy", "Advanced Electronics"],
        accreditation: "HEC Recognized"
      },
      {
        title: "MS Mechanical Engineering",
        duration: "2 Years",
        seats: "20",
        description: "Advanced manufacturing, thermal engineering, mechatronics, and materials science with research opportunities.",
        image: "https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Advanced Manufacturing", "Mechatronics", "Materials Science"],
        accreditation: "HEC Recognized"
      },
      {
        title: "MS Telecommunication Engineering",
        duration: "2 Years",
        seats: "20",
        description: "Advanced communication systems, 5G technologies, IoT, and wireless network optimization.",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["5G Technology", "IoT Systems", "Network Optimization"],
        accreditation: "HEC Recognized"
      }
    ],
    phd: [
      {
        title: "PhD Computer Science",
        duration: "3-5 Years",
        seats: "15",
        description: "Original research in AI, machine learning, cybersecurity, data science, and emerging computing technologies.",
        image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Original Research", "International Collaboration", "Publications"],
        accreditation: "HEC Approved"
      },
      {
        title: "PhD Engineering",
        duration: "3-5 Years",
        seats: "20",
        description: "Advanced research across all engineering disciplines with industry collaboration and international partnerships.",
        image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Multidisciplinary Research", "Industry Partnership", "Global Exposure"],
        accreditation: "HEC Approved"
      }
    ]
  };

  const tabs = [
    { id: 'undergraduate', label: 'Undergraduate', icon: GraduationCap, count: programs.undergraduate.length },
    { id: 'graduate', label: 'Graduate', icon: BookOpen, count: programs.graduate.length },
    { id: 'phd', label: 'PhD Programs', icon: Award, count: programs.phd.length }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full mb-4">
            <GraduationCap size={16} />
            <span className="text-sm font-semibold">Academic Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of PEC and HEC recognized programs designed to prepare 
            you for success in today's competitive global marketplace.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl shadow-soft">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all font-medium relative ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-medium transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs[activeTab as keyof typeof programs].map((program, index) => (
            <div
              key={index}
              className="card overflow-hidden hover:shadow-large transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {program.accreditation}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1 font-display">{program.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{program.seats} seats</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full btn-primary group flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-600/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="text-accent-400" size={24} />
              <h3 className="text-3xl lg:text-4xl font-bold font-display">Ready to Start Your Journey?</h3>
              <Star className="text-accent-400" size={24} />
            </div>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join thousands of successful graduates who have launched their careers with a degree from UET Mardan. 
              Applications for the next semester are now open with early bird discounts available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-large">
                Apply Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;