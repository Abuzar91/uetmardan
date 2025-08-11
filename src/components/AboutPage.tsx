import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Target, Eye, Users, Calendar, MapPin, CheckCircle, Lightbulb, Globe, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && headerRef.current && contentRef.current) {
      const tl = gsap.timeline();
      
      // Header animation
      tl.fromTo(headerRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      // Content animation
      tl.fromTo(contentRef.current.children,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      // Image animation
      if (imageRef.current) {
        tl.fromTo(imageRef.current,
          { scale: 0.8, opacity: 0, rotateY: 20 },
          { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" },
          "-=1"
        );
      }

      // Vision and Mission cards
      if (visionRef.current && missionRef.current) {
        tl.fromTo([visionRef.current, missionRef.current],
          { y: 100, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
          "-=0.8"
        );
      }
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlights = [
    "Established on 7th March, 2018",
    "Campus spread over 172 Kanals",
    "Previously operational since 2002",
    "HEC approved Rs. 1.336 billion grant",
    "About 1000 enrolled students",
    "Multiple undergraduate and postgraduate programs"
  ];

  const missionObjectives = [
    "To impart quality engineering knowledge to the masses, specially to the local population.",
    "To provide industry, academia and research organizations with top class graduates who are technically sound with great leadership and management skills, who can contribute to societal and economic growth.",
    "To keep abreast of the latest trends by liaising with regulatory bodies as well as with the customers, and to improve academic processes accordingly."
  ];

  return (
    <section id="about-page" ref={containerRef} className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Award size={16} />
            <span className="text-sm font-medium">About UET Mardan</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            University of Engineering &
            <span className="text-gradient block">Technology Mardan</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Established in 2018, UET Mardan stands as a beacon of engineering excellence, 
            committed to fostering innovation and academic distinction.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Content */}
          <motion.div 
            ref={contentRef}
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Our Journey Since 2018
              </motion.h3>
              
              <motion.div 
                className="prose prose-lg text-gray-600 dark:text-gray-400 space-y-6"
                variants={itemVariants}
              >
                <p>
                  University of Engineering & Technology Mardan (UET Mardan) was established on 7th March, 2018 
                  by the Government of Khyber Pakhtunkhwa under the KP Universities Act. The University Campus is 
                  situated on main Charsada Road, Mardan spreading over an area of 172 Kanals.
                </p>
                
                <p>
                  Previously, the Campus had been operational since 2002 as one of the satellite campuses of UET Peshawar. 
                  Initially, two teaching departments, i.e., Telecommunication Engineering and Computer Software Engineering 
                  were established with BSc programs.
                </p>
                
                <p>
                  On the basis of public interest due to its location and available facilities, the campus showed fast pace 
                  growth in all aspects including infrastructure, laboratories, and faculty. In addition to MSc and PhD programs 
                  in the afore mentioned two departments, Department of Electrical Engineering was established in 2012 offering 
                  BSc Electrical Engineering in Power as well as Communication streams.
                </p>
                
                <p>
                  Presently, about 1000 students, studying at Undergraduate and Postgraduate levels, are enrolled at UET Mardan. 
                  In 2016, Higher Education Commission (HEC), Pakistan approved a grant of Rs. 1.336 billion for the establishment 
                  of Civil, Electrical and Mechanical Engineering Departments and to enhance facilities for the students and faculty 
                  members in the campus. This approval acts as an endorsement by the HEC on viability of the campus to function as 
                  full-fledged engineering university.
                </p>
              </motion.div>
            </motion.div>

            {/* Highlights */}
            <motion.div 
              className="space-y-3"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Highlights</h4>
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.div 
              className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://www.uetmardan.edu.pk/uetm/assets/homeimages/04-min.jpg"
                alt="UET Mardan Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating Info Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: -5 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Calendar size={24} className="text-white dark:text-gray-900" />
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Established 2018</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">7th March</div>
                </div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <motion.div 
              className="absolute -z-10 top-8 left-8 w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl"
              animate={{ 
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            ref={visionRef}
            className="card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex items-center mb-6 relative z-10">
              <motion.div 
                className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Eye className="text-blue-600 dark:text-blue-400" size={24} />
              </motion.div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Vision Statement</h4>
            </div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              The UET Mardan aims to evolve as a distinguished seat of higher education and research 
              and to contribute to local and global socioeconomic and technological development.
            </motion.p>
          </motion.div>
          
          <motion.div 
            ref={missionRef}
            className="card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex items-center mb-6 relative z-10">
              <motion.div 
                className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4"
                whileHover={{ scale: 1.1, rotate: -360 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="text-green-600 dark:text-green-400" size={24} />
              </motion.div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Mission Objectives</h4>
            </div>
            
            <motion.div 
              className="space-y-4 relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
            >
              {missionObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 1.6 + (index * 0.2) }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-green-600 dark:text-green-400 text-xs font-bold">{index + 1}</span>
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {objective}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 rounded-3xl p-12 text-center text-white dark:text-gray-900 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="relative z-10">
            <motion.div 
              className="flex items-center justify-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Lightbulb className="text-yellow-400" size={24} />
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold">Join Our Legacy of Excellence</h3>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="text-blue-400" size={24} />
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-white/80 dark:text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.2 }}
            >
              Be part of UET Mardan's continuing journey towards engineering excellence and innovation. 
              Shape your future with us and contribute to technological advancement.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.4 }}
            >
              <motion.button 
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.button>
              <motion.button 
                className="border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 hover:bg-white dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;