import React, { useState, useEffect } from 'react';
import { 
  Factory, 
  Cog, 
  BookOpen, 
  Radio, 
  Database,
  Laptop,
  Terminal,
  Settings,
  Wrench,
  Code,
  Network,
  Activity
} from 'lucide-react';

// Separate data constants
const ACTIVITIES = [
  { Icon: Factory, title: "Industry 4.0 Implementation" },
  { Icon: Cog, title: "Technology & Product Development" },
  { Icon: BookOpen, title: "Experimental Learning" },
  { Icon: Radio, title: "Awareness Programs" },
  { Icon: Database, title: "Industry Sponsored Projects" },
  { Icon: Settings, title: "Production based Smart Factory" }
];

const PRACTICES = [
  {
    Icon: Wrench,
    title: "Enabling localization & customization",
    description: "Tryout & evaluation facility for solution developers both Hardware and Software"
  },
  {
    Icon: Terminal,
    title: "Best Practices",
    description: "Develop / Acquire expertise on smart Implementations"
  },
  {
    Icon: Network,
    title: "Technology Transfer",
    description: "Support Industry for rolling out smart production systems"
  },
  {
    Icon: Code,
    title: "Technology Driver",
    description: "Pilot Implementation of SMART MANUFACTURING in INDIA"
  },
  {
    Icon: Laptop,
    title: "Showcase & Experience Centre",
    description: "Demonstration of I4.0 concepts, tools & solutions-capabilities"
  },
  {
    Icon: Activity,
    title: "Research & Development",
    description: "Explore limits of unmanned /automated smart production systems"
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-dark-primary dark:to-dark-secondary">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-garamond text-blue-800 dark:text-dark-light mb-8 text-center">
              About SMDDC
            </h1>
            <div className="bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-lg font-tinos text-blue-700 dark:text-dark-accent leading-relaxed">
                The Smart Manufacturing Demo and Development Cell (SMDDC) is a Common Engineering Facility Centre (CEFC) established under the SAMARTH Udyog Bharat 4.0 Platform of the Ministry of Heavy Industries (MHI), Government of India, with the objective of developing, propagating, and supporting the adoption of smart manufacturing practices in the Indian manufacturing industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4 bg-blue-100/50 dark:bg-dark-primary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-garamond text-blue-800 dark:text-dark-light mb-12 text-center">
            SMDDC Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((activity, index) => {
              const { Icon, title } = activity;
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-dark-secondary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-dark-accent" />
                    <h3 className="text-xl font-garamond text-blue-700 dark:text-dark-light">
                      {title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-garamond text-blue-800 dark:text-dark-light mb-12 text-center">
            Propagation of Industry 4.0 practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICES.map((practice, index) => {
              const { Icon, title, description } = practice;
              return (
                <div
                  key={index}
                  className={`bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-blue-600 dark:text-dark-accent mb-4" />
                  <h3 className="text-xl font-garamond text-blue-700 dark:text-dark-light mb-3">
                    {title}
                  </h3>
                  <p className="text-blue-600 dark:text-dark-accent font-tinos">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-16 px-4 bg-blue-100/50 dark:bg-dark-primary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-garamond text-blue-800 dark:text-dark-light mb-8 text-center">
            Technology and Product Development
          </h2>
          <div className={`bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg font-tinos text-blue-700 dark:text-dark-accent mb-6">
              We develop technologies, products and solutions, related to smart manufacturing and Industry 4.0, in collaboration with industries, with focus to meet requirements of Indian manufacturing industries to implement the smart solution in their organisation.
            </p>
            <h3 className="text-xl font-garamond text-blue-800 dark:text-dark-light mb-4">
              Developmental Activities:
            </h3>
            <ul className="space-y-3 text-blue-600 dark:text-dark-accent font-tinos">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-dark-accent rounded-full"></div>
                Development of IIOT solutions for legacy machines
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-dark-accent rounded-full"></div>
                Development of smart machines
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-dark-accent rounded-full"></div>
                Development of smart machine tool aggregates
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-dark-accent rounded-full"></div>
                Development of intelligent machining modules for CNC metal cutting applications
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-dark-accent rounded-full"></div>
                Development of IIoT enabled comprehensive condition monitoring module for machines
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-garamond text-blue-800 dark:text-dark-light mb-8 text-center">
            Training & Awareness Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Regular & Exclusive Training Programmes on Smart Manufacturing and Industry 4.0",
              "Awareness Programmes on Industry 4.0",
              "Conferences on Industry 4.0 and Smart Manufacturing"
            ].map((course, index) => (
              <div
                key={index}
                className={`bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-lg font-tinos text-blue-600 dark:text-dark-accent text-center">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;