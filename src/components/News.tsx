import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock, Tag, Star, TrendingUp, Award, Users } from 'lucide-react';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All News', icon: Star },
    { id: 'academic', label: 'Academic', icon: Award },
    { id: 'research', label: 'Research', icon: TrendingUp },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  const newsItems = [
    {
      id: 1,
      title: "UET Mardan Launches Center of Artificial Intelligence",
      excerpt: "State-of-the-art AI research center inaugurated with cutting-edge facilities for machine learning, deep learning, and data science research initiatives.",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2025-01-15",
      category: "research",
      readTime: "3 min read",
      featured: true,
      author: "Dr. Muhammad Ali",
      tags: ["AI", "Research", "Technology"]
    },
    {
      id: 2,
      title: "Annual Engineering Symposium 2025",
      excerpt: "Join us for the largest engineering symposium in the region featuring industry experts, innovative research presentations, and networking opportunities.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2025-01-12",
      category: "events",
      readTime: "2 min read",
      featured: false,
      author: "Event Committee",
      tags: ["Symposium", "Engineering", "Networking"]
    },
    {
      id: 3,
      title: "Students Win International Robotics Competition",
      excerpt: "UET Mardan team secures first place in the Asia-Pacific Robotics Championship held in Singapore, showcasing exceptional engineering skills.",
      image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2025-01-10",
      category: "achievements",
      readTime: "4 min read",
      featured: false,
      author: "Sports Committee",
      tags: ["Robotics", "Competition", "Achievement"]
    },
    {
      id: 4,
      title: "Spring 2025 Admissions Now Open",
      excerpt: "Applications are now being accepted for undergraduate and graduate programs. Early bird discount available until February 15th, 2025.",
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2025-01-08",
      category: "academic",
      readTime: "2 min read",
      featured: false,
      author: "Admissions Office",
      tags: ["Admissions", "Spring 2025", "Applications"]
    },
    {
      id: 5,
      title: "Industry Partnership with Leading Tech Companies",
      excerpt: "UET Mardan announces strategic partnerships with major technology companies for internships, job placements, and collaborative research projects.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2025-01-05",
      category: "academic",
      readTime: "3 min read",
      featured: false,
      author: "Industry Relations",
      tags: ["Partnership", "Industry", "Collaboration"]
    },
    {
      id: 6,
      title: "Breakthrough in Renewable Energy Research",
      excerpt: "Faculty and students develop innovative solar panel technology that increases efficiency by 25%, contributing to sustainable energy solutions.",
      image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2025-01-03",
      category: "research",
      readTime: "5 min read",
      featured: false,
      author: "Research Department",
      tags: ["Renewable Energy", "Solar", "Innovation"]
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full mb-4">
            <TrendingUp size={16} />
            <span className="text-sm font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            News & Announcements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest developments, achievements, and events 
            happening at UET Mardan.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-medium transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-soft hover:shadow-medium'
              }`}
            >
              <category.icon size={16} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Featured News */}
        {featuredNews && activeCategory === 'all' && (
          <div className="mb-16 animate-slide-up">
            <div className="card overflow-hidden shadow-large hover:shadow-xl transition-all duration-500">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-500 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-1">
                      <Star size={14} />
                      <span>Featured</span>
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(featuredNews.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{featuredNews.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{featuredNews.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredNews.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNews.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="btn-primary group flex items-center space-x-2">
                    <span>Read Full Article</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {(activeCategory === 'all' ? regularNews : filteredNews).map((news, index) => (
            <article
              key={news.id}
              className="card overflow-hidden hover:shadow-large transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {news.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 font-display group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">By {news.author}</span>
                  <div className="flex flex-wrap gap-1">
                    {news.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-secondary group flex items-center justify-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="btn-outline">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;