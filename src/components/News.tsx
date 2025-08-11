import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock, Star, TrendingUp, Award, Users, Eye, MessageCircle } from 'lucide-react';

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
      views: "2.5k",
      comments: 24
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
      views: "1.8k",
      comments: 15
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
      views: "3.2k",
      comments: 42
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
      views: "4.1k",
      comments: 18
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
      views: "2.9k",
      comments: 31
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
      views: "1.7k",
      comments: 28
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
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full mb-6">
            <TrendingUp size={16} />
            <span className="text-sm font-medium">Latest Updates</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            News &
            <span className="text-gradient block">Announcements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest developments, achievements, and events 
            happening at UET Mardan.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                activeCategory === category.id
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon size={14} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Featured News */}
        {featuredNews && activeCategory === 'all' && (
          <div className="mb-20 animate-fade-in-up">
            <div className="card overflow-hidden card-hover">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-accent font-semibold flex items-center space-x-1">
                      <Star size={12} />
                      <span>Featured</span>
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(featuredNews.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{featuredNews.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{featuredNews.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={14} />
                      <span>{featuredNews.comments}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                    {featuredNews.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <Users size={16} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">
                          {featuredNews.author}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {featuredNews.category}
                        </div>
                      </div>
                    </div>
                    
                    <button className="btn btn-primary group">
                      <span>Read Article</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(activeCategory === 'all' ? regularNews : filteredNews).map((news, index) => (
            <article
              key={news.id}
              className="card overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-primary text-xs font-medium capitalize">
                    {news.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye size={12} />
                        <span>{news.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={12} />
                        <span>{news.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <Users size={12} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {news.author}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={12} />
                    <span>{news.readTime}</span>
                  </div>
                </div>

                <button className="w-full btn btn-secondary group">
                  <span>Read More</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="btn btn-ghost">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;