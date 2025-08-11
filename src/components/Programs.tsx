import React, { useState } from 'react';
import { GraduationCap, Clock, Users, ArrowRight, Star, Award, BookOpen, CheckCircle } from 'lucide-react';

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
        features: ["AI & Machine Learning", "Software Engineering", "Cybersecurity", "Data Science"],
        accreditation: "PEC Accredited",
        level: "Bachelor's"
      },
      {
        title: "Electrical Engineering",
        duration: "4 Years",
        seats: "100",
        description: "Power systems, electronics, telecommunications, control systems, and renewable energy technologies with hands-on laboratory experience.",
        image: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Power Systems", "Electronics", "Telecommunications", "Control Systems"],
        accreditation: "PEC Accredited",
        level: "Bachelor's"
      },
      {
        title: "Mechanical Engineering",
        duration: "4 Years",
        seats: "80",
        description: "Manufacturing processes, thermal systems, robotics, automotive engineering, and advanced materials with industry partnerships.",
        image: "https://images.pexels.com/photos/163726/belgium-antwerp-port-163726.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Manufacturing", "Robotics", "Thermal Systems", "Automotive"],
        accreditation: "PEC Accredited",
        level: "Bachelor's"
      },
      {
        title: "Civil Engineering",
        duration: "4 Years",
        seats: "60",
        description: "Structural engineering, transportation systems, water resources, environmental engineering, and construction management.",
        image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Structural Design", "Transportation", "Water Resources", "Construction"],
        accreditation: "PEC Accredited",
        level: "Bachelor's"
      },
      {
        title: "Telecommunication Engineering",
        duration: "4 Years",
        seats: "60",
        description: "Modern communication systems, wireless technologies, network engineering, and digital signal processing.",
        image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Wireless Systems", "Network Engineering", "Signal Processing", "5G Technology"],
        accreditation: "PEC Accredited",
        level: "Bachelor's"
      },
      {
        title: "Computer Software Engineering",
        duration: "4 Years",
        seats: "80",
        description: "Software development methodologies, web technologies, mobile app development, and software project management.",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Web Development", "Mobile Apps", "Software Architecture", "DevOps"],
        accreditation: "PEC Accredited",
        level: "Bachelor's"
      }
    ],
    graduate: [
      {
        title: "MS Computer Science",
        duration: "2 Years",
        seats: "30",
        description: "Advanced research in artificial intelligence, machine learning, data science, cybersecurity, and software engineering.",
        image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Research Focus", "AI Specialization", "Industry Projects", "Publications"],
        accreditation: "HEC Recognized",
        level: "Master's"
      },
      {
        title: "MS Electrical Engineering",
        duration: "2 Years",
        seats: "25",
        description: "Specialization in power systems, renewable energy, electronics, control systems, and telecommunications.",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Power Systems", "Renewable Energy", "Advanced Electronics", "Smart Grids"],
        accreditation: "HEC Recognized",
        level: "Master's"
      },
      {
        title: "MS Mechanical Engineering",
        duration: "2 Years",
        seats: "20",
        description: "Advanced manufacturing, thermal engineering, mechatronics, and materials science with research opportunities.",
        image: "https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Advanced Manufacturing", "Mechatronics", "Materials Science", "CAD/CAM"],
        accreditation: "HEC Recognized",
        level: "Master's"
      }
    ],
    phd: [
      {
        title: "PhD Computer Science",
        duration: "3-5 Years",
        seats: "15",
        description: "Original research in AI, machine learning, cybersecurity, data science, and emerging computing technologies.",
        image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Original Research", "International Collaboration", "Publications", "Conferences"],
        accreditation: "HEC Approved",
        level: "Doctoral"
      },
      {
        title: "PhD Engineering",
        duration: "3-5 Years",
        seats: "20",
        description: "Advanced research across all engineering disciplines with industry collaboration and international partnerships.",
        image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400",
        features: ["Multidisciplinary Research", "Industry Partnership", "Global Exposure", "Innovation"],
        accreditation: "HEC Approved",
        level: "Doctoral"
      }
    ]
  };

  const tabs = [
    { id: 'undergraduate', label: 'Undergraduate', icon: GraduationCap, count: programs.undergraduate.length },
    { id: 'graduate', label: 'Graduate', icon: BookOpen, count: programs.graduate.length },
    { id: 'phd', label: 'PhD Programs', icon: Award, count: programs.phd.length }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full mb-6 shadow-sm">
            <GraduationCap size={16} />
            <span className="text-sm font-medium">Academic Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Academic
            <span className="text-gradient block">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of PEC and HEC recognized programs designed to prepare 
            you for success in today's competitive global marketplace.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all font-medium relative ${
                  activeTab === tab.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === tab.id 
                    ? 'bg-white/20 dark:bg-gray-900/20' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs[activeTab as keyof typeof programs].map((program, index) => (
            <div
              key={index}
              className="card overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-accent text-xs font-semibold">
                    {program.accreditation}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
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
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-primary text-xs">
                    {program.level}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                  {program.features.length > 3 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                      +{program.features.length - 3} more specializations
                    </div>
                  )}
                </div>

                <button className="w-full btn btn-primary group">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 dark:bg-white rounded-3xl p-12 text-center text-white dark:text-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="text-yellow-400" size={24} />
              <h3 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Journey?</h3>
              <Star className="text-yellow-400" size={24} />
            </div>
            <p className="text-white/80 dark:text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join thousands of successful graduates who have launched their careers with a degree from UET Mardan. 
              Applications for the next semester are now open.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now
              </button>
              <button className="border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 hover:bg-white dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
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