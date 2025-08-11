import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Programs from './components/Programs';
import News from './components/News';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <AboutPage />
      <Programs />
      <News />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;