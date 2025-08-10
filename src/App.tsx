import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Programs />
      <News />
      <Footer />
    </div>
  );
}

export default App;