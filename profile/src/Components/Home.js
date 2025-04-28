import React, { useEffect, useState } from 'react';
import { Activity, Box, Code, Database, Factory, ArrowRight } from 'lucide-react';

// Separate activities data
const ACTIVITIES = [
  { 
    icon: Activity,
    title: "Technology & Product Development", 
    description: "Collaboration with industry partners and MSMEs" 
  },
  { 
    icon: Box,
    title: "Industry Sponsored Projects", 
    description: "Custom solutions for manufacturing needs" 
  },
  { 
    icon: Code,
    title: "Experimental Learning", 
    description: "Hands-on training programs and workshops" 
  },
  { 
    icon: Database,
    title: "Awareness Programs", 
    description: "Webinars, seminars, and conferences" 
  },
  { 
    icon: Factory,
    title: "Industry 4.0 Implementation", 
    description: "Smart factory and production solutions" 
  }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateOpacity = () => {
    return Math.max(0, Math.min(1, 1 - (scrollY / 200)));
  };

  const calculateScale = () => {
    return Math.max(0.8, Math.min(1, 1 - (scrollY / 200) * 0.2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-dark-primary dark:to-dark-secondary">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ 
          opacity: calculateOpacity(),
          transform: `scale(${calculateScale()})`
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-600/10 dark:bg-dark-primary/40 backdrop-blur-sm"></div>
        </div>
        
        <div 
          className={`container mx-auto px-4 z-10 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-garamond text-blue-800 dark:text-dark-light text-center mb-6">
            Smart Manufacturing Demo and Development Cell
          </h1>
          <p className="text-xl md:text-2xl font-tinos text-blue-600 dark:text-dark-accent text-center max-w-3xl mx-auto">
            A Common Engineering Facility Centre under SAMARTH Udyog Bharat 4.0
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white/80 dark:bg-dark-primary/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className={`grid md:grid-cols-2 gap-8 items-center transition-opacity duration-800 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div>
              <h2 className="text-3xl font-garamond text-blue-700 dark:text-dark-light mb-6">
                About SMDDC
              </h2>
              <p className="text-lg font-tinos text-blue-600 dark:text-dark-accent mb-4">
                A production oriented IIoT enabled smart factory connecting Design, production, quality assurance and maintenance functions.
              </p>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className={`bg-blue-50 dark:bg-dark-muted p-6 rounded-xl shadow-lg transition-all duration-800 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-100 opacity-0'
            }`}>
              <h3 className="text-xl font-garamond text-blue-800 dark:text-dark-light mb-4">
                Our Capabilities
              </h3>
              <ul className="space-y-3 text-blue-600 dark:text-dark-accent">
                <li>✓ Smart Manufacturing Solutions</li>
                <li>✓ IIoT Implementation</li>
                <li>✓ Industry 4.0 Adoption</li>
                <li>✓ Technology Transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-garamond text-blue-700 dark:text-dark-light text-center mb-12">
            Our Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-dark-secondary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-dark-muted rounded-lg">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-garamond text-blue-700 dark:text-dark-light">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-blue-600 dark:text-dark-accent">
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50 dark:bg-dark-primary">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-3xl font-garamond text-blue-700 dark:text-dark-light mb-6">
              Get In Touch
            </h2>
            <p className="text-lg font-tinos text-blue-600 dark:text-dark-accent mb-8">
              Central Manufacturing Technology Institute<br />
              Tumkur Road, Bangalore-560022
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;