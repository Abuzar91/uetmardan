import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin, Clock, User, Building, Fax, Globe } from 'lucide-react';

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && headerRef.current && contactsRef.current) {
      const tl = gsap.timeline();
      
      // Header animation
      tl.fromTo(headerRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      // Contacts animation
      tl.fromTo(contactsRef.current.children,
        { x: -50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // Map animation
      if (mapRef.current) {
        tl.fromTo(mapRef.current,
          { scale: 0.8, opacity: 0, rotateY: 20 },
          { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" },
          "-=1"
        );
      }
    }
  }, [isInView]);

  const contacts = [
    {
      office: "Vice Chancellor",
      email: "vc@uetmardan.edu.pk",
      phone: "",
      fax: "",
      icon: User,
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    {
      office: "Pro Vice Chancellor",
      email: "provc@uetmardan.edu.pk",
      phone: "",
      fax: "",
      icon: User,
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    },
    {
      office: "Registrar",
      email: "Registrar@uetmardan.edu.pk",
      phone: "+92-937-9230295",
      fax: "+92-937-9230296",
      icon: Building,
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    },
    {
      office: "Dean",
      email: "dean@uetmardan.edu.pk",
      phone: "+92-937-9230449",
      fax: "",
      icon: User,
      color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
    },
    {
      office: "Director Planning & Development",
      email: "dir.pnd@uetmardan.edu.pk",
      phone: "+92-937-920450",
      fax: "",
      icon: Building,
      color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
    },
    {
      office: "Director Admissions",
      email: "admissions@uetmardan.edu.pk",
      phone: "+92-937-9230141",
      fax: "",
      icon: Building,
      color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
    },
    {
      office: "Directorate Works",
      email: "",
      phone: "+92-937-9230069",
      fax: "",
      icon: Building,
      color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
    },
    {
      office: "Controller of Examinations",
      email: "controller@uetmardan.edu.pk",
      phone: "+92-937-9230249",
      fax: "",
      icon: Building,
      color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400"
    },
    {
      office: "Chairman, Department of Computer Software Engineering",
      email: "chair.se@uetmardan.edu.pk",
      phone: "+92-937-9230452",
      fax: "",
      icon: User,
      color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400"
    },
    {
      office: "Chairman, Department of Electrical Engineering",
      email: "chair.ee@uetmardan.edu.pk",
      phone: "+92-937-9230482",
      fax: "",
      icon: User,
      color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
    },
    {
      office: "Chairman, Department of Telecommunication Engineering",
      email: "chair.te@uetmardan.edu.pk",
      phone: "+92-937-9230454",
      fax: "",
      icon: User,
      color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
    },
    {
      office: "Chairman, Department of Computer Science",
      email: "chair.cs@uetmardan.edu.pk",
      phone: "+92-937-9230452",
      fax: "",
      icon: User,
      color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400"
    },
    {
      office: "Warden, Ahmad Shah Abdali Boys Hostel",
      email: "",
      phone: "+92-937-",
      fax: "",
      icon: Building,
      color: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"
    },
    {
      office: "Warden, Ayesha Girls Hostel",
      email: "",
      phone: "+92-937-9230236",
      fax: "",
      icon: Building,
      color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
    },
    {
      office: "Directorate of Sports",
      email: "sports@uetmardan.edu.pk",
      phone: "",
      fax: "",
      icon: Building,
      color: "bg-lime-50 dark:bg-lime-900/20 text-lime-600 dark:text-lime-400"
    }
  ];

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

  return (
    <section id="contact-page" ref={containerRef} className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full mb-6 shadow-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={16} />
            <span className="text-sm font-medium">Contact Information</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            University
            <span className="text-gradient block">Contacts</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Get in touch with our various departments and offices. We're here to assist you 
            with all your queries and requirements.
          </motion.p>
        </motion.div>

        {/* General Contact Info */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={16} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">General Inquiry</span>
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              For General Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Please feel free to contact via email
            </p>
            <motion.a 
              href="mailto:info@uetmardan.edu.pk"
              className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              <span>info@uetmardan.edu.pk</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Contacts Grid */}
        <motion.div 
          ref={contactsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="card p-6 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Animation */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full -translate-y-10 translate-x-10 opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <motion.div 
                    className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <contact.icon size={20} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                      {contact.office}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {contact.email && (
                    <motion.div 
                      className="flex items-center space-x-3 group/item"
                      whileHover={{ x: 5 }}
                    >
                      <Mail size={16} className="text-gray-400 flex-shrink-0" />
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors truncate"
                      >
                        {contact.email}
                      </a>
                    </motion.div>
                  )}
                  
                  {contact.phone && (
                    <motion.div 
                      className="flex items-center space-x-3 group/item"
                      whileHover={{ x: 5 }}
                    >
                      <Phone size={16} className="text-gray-400 flex-shrink-0" />
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </motion.div>
                  )}
                  
                  {contact.fax && (
                    <motion.div 
                      className="flex items-center space-x-3 group/item"
                      whileHover={{ x: 5 }}
                    >
                      <Fax size={16} className="text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.fax}
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Section */}
        <motion.div 
          ref={mapRef}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={16} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</span>
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Find Us Here
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              University of Engineering & Technology Mardan, Charsadda Road, Mardan, KPK
            </p>
          </div>

          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52799.03399067446!2d72.019799!3d34.199019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deca60405586c5%3A0x27625a4ab428abe5!2sMeervas%20Mardan%2C%2023200%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1754912417163!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            
            {/* Overlay for better interaction */}
            <motion.div 
              className="absolute inset-0 bg-transparent"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={20} />
            <span>Visit Our Website</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;