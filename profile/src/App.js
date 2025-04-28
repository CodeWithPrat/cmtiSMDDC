import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronRight, Home, Briefcase, Users, Info, Mail, ArrowRight, Phone, MapPin, ArrowRightCircle } from 'lucide-react';
import { companyInfo, navigationLinks, socialMedia, contactInfo } from './data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomePg from './Components/Home';
import AboutPg from './Components/About';
import Clientspg from "./Components/Clients"
import Projectpg from "./Components/Projects"
import Team from './Components/Team';
import heroimg from './Images/heroImg.jpg'

// Enhanced HomePage with beautiful gradient and animations
const HomePage = () => {
  // Animations for scroll reveal effects
  const controlsHero = useAnimation();
  const controlsFeatures = useAnimation();
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (heroInView) controlsHero.start('visible');
    if (featuresInView) controlsFeatures.start('visible');
  }, [controlsHero, controlsFeatures, heroInView, featuresInView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <div className="w-full overflow-hidden bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full mt-[-4rem] lg:mt-0">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-blue-900/20" />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full bg-[linear-gradient(to_right,theme(colors.slate.800/70)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.800/70)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>
            
            {/* Animated orbs */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
              animate={{
                x: [0, -30, 30, 0],
                y: [0, 30, -30, 0],
                scale: [1, 0.9, 1.1, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute top-2/3 left-2/3 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl"
              animate={{
                x: [0, 40, -40, 0],
                y: [0, -40, 40, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            ref={heroRef}
            initial="hidden"
            animate={controlsHero}
            className="min-h-screen flex flex-col items-center justify-center py-12"
          >
            {/* Hero content */}
            <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-6 items-center mt-16">
              <div>
                <motion.div 
                  className="mb-6"
                  variants={fadeInUp}
                  custom={0.4}
                >
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    Industry 4.0 Pioneer
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                  variants={fadeInUp}
                  custom={0.6}
                >
                  <span className="block">Smart</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Manufacturing
                  </span>
                  <span className="block">Demo and Development Cell</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl"
                  variants={fadeInUp}
                  custom={0.8}
                >
                  Revolutionizing India's manufacturing ecosystem with advanced 
                  technology solutions, digital integration, and future-ready infrastructure.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={fadeInUp}
                  custom={1}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:translate-y-[-2px] transition-all duration-300">
                    Explore Solutions
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-medium hover:bg-white/20 transform hover:translate-y-[-2px] transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
                
                <motion.div 
                  className="mt-12 grid grid-cols-3 gap-4"
                  variants={fadeInUp}
                  custom={1.2}
                >
                  <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="font-bold text-2xl text-blue-400">50+</span>
                    <span className="text-sm text-slate-400">Use Cases</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="font-bold text-2xl text-purple-400">12+</span>
                    <span className="text-sm text-slate-400">Technologies</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="font-bold text-2xl text-pink-400">24/7</span>
                    <span className="text-sm text-slate-400">Support</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative"
                variants={fadeInUp}
                custom={0.8}
              >
                {/* Decorative elements */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl opacity-50" />
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-blue-900/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay" />
                  
                  <motion.img 
                    src={heroimg}
                    alt="Smart Manufacturing Technology" 
                    className="w-full object-cover rounded-2xl"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  {/* Floating badge */}
                  <motion.div 
                    className="absolute -right-6 -bottom-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity
                    }}
                  >
                    <div className="bg-slate-900 rounded-full p-4">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">4.0</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Decorative floating elements */}
                <motion.div 
                  className="absolute -left-12 top-1/4 w-24 h-24 rounded-full border border-purple-500/30 flex items-center justify-center"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 12,
                    repeat: Infinity
                  }}
                >
                  <div className="w-16 h-16 rounded-full border border-purple-500/50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500/30" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <p className="text-sm text-slate-400 mb-2">Scroll to explore</p>
              <motion.div 
                className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center p-1"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features section */}
      <section className="relative min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0">
          {/* Animated diagonal lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(45deg,theme(colors.slate.800/70)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>
          
          {/* Particle effects */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/30 blur-sm"
              style={{
                width: Math.random() * 8 + 2 + 'px',
                height: Math.random() * 8 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -(Math.random() * 100 + 50)],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24">
          <motion.div 
            ref={featuresRef}
            initial="hidden"
            animate={controlsFeatures}
            className="flex flex-col items-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              variants={fadeInUp}
              custom={0}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Next-Gen Manufacturing Solutions
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-300 text-center max-w-2xl mb-16"
              variants={fadeInUp}
              custom={0.2}
            >
              Our cutting-edge capabilities integrate seamlessly to transform traditional manufacturing into intelligent, data-driven operations.
            </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {[
                {
                  title: "Digital Twin Technology",
                  description: "Create virtual replicas of physical assets to simulate, monitor and optimize manufacturing processes in real-time.",
                  icon: "🔄",
                  color: "blue"
                },
                {
                  title: "AI-Powered Analytics",
                  description: "Leverage machine learning algorithms to predict maintenance needs, optimize production schedules, and enhance quality control.",
                  icon: "🧠",
                  color: "purple"
                },
                {
                  title: "IoT Integration",
                  description: "Connect machines, sensors and systems to create a unified data ecosystem for enhanced visibility and control.",
                  icon: "📡",
                  color: "pink"
                },
                {
                  title: "Robotic Process Automation",
                  description: "Deploy collaborative robots and automated systems to handle repetitive tasks with precision and consistency.",
                  icon: "🤖",
                  color: "blue"
                },
                {
                  title: "Augmented Reality Workflows",
                  description: "Enhance worker capabilities with AR-guided assembly, maintenance procedures and quality inspections.",
                  icon: "👓",
                  color: "purple"
                },
                {
                  title: "Sustainable Manufacturing",
                  description: "Implement energy-efficient processes and waste reduction strategies through smart resource management.",
                  icon: "🌱",
                  color: "pink"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                  custom={0.4 + index * 0.2}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    feature.color === "blue" ? "from-blue-500/20 to-blue-700/20" :
                    feature.color === "purple" ? "from-purple-500/20 to-purple-700/20" :
                    "from-pink-500/20 to-pink-700/20"
                  } rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="h-full relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:translate-y-[-4px]">
                    <div className={`inline-flex items-center justify-center p-3 mb-6 rounded-xl ${
                      feature.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                      feature.color === "purple" ? "bg-purple-500/20 text-purple-400" :
                      "bg-pink-500/20 text-pink-400"
                    }`}>
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                    
                    <div className={`mt-6 inline-flex items-center text-sm font-medium ${
                      feature.color === "blue" ? "text-blue-400" :
                      feature.color === "purple" ? "text-purple-400" :
                      "text-pink-400"
                    } group-hover:underline`}>
                      Learn more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-16 flex justify-center"
              variants={fadeInUp}
              custom={2}
            >
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-medium hover:bg-white/20 transform hover:translate-y-[-2px] transition-all duration-300">
                View All Solutions
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Enhanced NavLink with hover effects
const NavLink = ({ to, children, icon: Icon, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-2.5 rounded-full transition-all duration-300 group ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'hover:bg-blue-50 dark:hover:bg-blue-900/30'
      }`}
    >
      <Icon size={20} className={`${isActive ? '' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'}`} />
      <span className="font-medium">{children}</span>
    </Link>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const icons = {
    Home,
    Projects: Briefcase,
    About: Info,
    Team: Users,
    Contact: Mail
  };

  return (
    <Router>
      <div className="min-h-screen min-w-full bg-slate-900 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Enhanced Navbar with glass effect */}
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-blue-900/5' 
            : 'bg-white/80'
        }`}>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Enhanced Logo */}
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="absolute  group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative group-hover:scale-105 transition duration-300">
                    <img 
                      src={companyInfo.logo} 
                      alt="Company Logo" 
                      className="h-14 w-24"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {companyInfo.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {companyInfo.department}
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-3">
                {navigationLinks.map(link => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    icon={icons[link.name]}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors ml-2"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}>
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl px-4 py-5 space-y-2">
              {navigationLinks.map(link => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  icon={icons[link.name]}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center space-x-2 px-6 py-2.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                <span className="font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePg />} />
            <Route path="/projects" element={<Projectpg />} />
            <Route path="/about" element={<AboutPg />} />
            <Route path="/clients" element={<Clientspg />} />
            {/* <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} /> */}

          </Routes>
          <AboutPg />
          <Projectpg />
          <Team />
          <Clientspg />
        </main>
 
        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-[#1F1C2C] to-[#928DAB] backdrop-blur-xl  dark:border-gray-700/40 mt-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="relative overflow-hidden rounded-lg p-1 bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg transition-all duration-300 group-hover:shadow-blue-500/20 group-hover:scale-105">
                <div className="bg-white dark:bg-gray-900 rounded-md p-2">
                  <img 
                    src={companyInfo.logo} 
                    alt="Company Logo" 
                    className="h-12 w-20 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {companyInfo.name}
                </span>
                <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent tracking-wide">
                  {companyInfo.department}
                </span>
              </div>
            </div>
            <p className="text-gray-200 dark:text-gray-300 leading-relaxed font-light text-lg">
              {companyInfo.description}
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Connect With Us
              </span>
              <div className="absolute -bottom-3 left-0 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 pt-2">
              {socialMedia.map(platform => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-200 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                    <ArrowRightCircle size={18} className="transform group-hover:translate-x-1 transition-transform text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </div>
                  <span className="font-medium">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent">
                Contact Us
              </span>
              <div className="absolute -bottom-3 left-0 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </h3>
            <div className="space-y-6 text-gray-200 dark:text-gray-300 pt-2">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-4 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  <Mail size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
                <span className="font-medium">{contactInfo.email}</span>
              </a>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-4 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  <Phone size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
                <span className="font-medium">{contactInfo.phone}</span>
              </a>
              <div className="flex items-start space-x-4 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 mt-1">
                  <MapPin size={18} className="text-gray-500 dark:text-gray-400" />
                </div>
                <span className="font-medium leading-relaxed">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-10 pt-2  text-center text-gray-500 dark:text-gray-400 text-sm mb-[-2rem]">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
      </div>
    </Router>
  );
};

export default App;