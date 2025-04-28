import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronRight, Home, Briefcase, Users, Info, Mail, ArrowRight, Phone, MapPin, ArrowRightCircle } from 'lucide-react';
import { companyInfo, navigationLinks, socialMedia, contactInfo } from './data';
import HomePg from './Components/Home';
import AboutPg from './Components/About';
import Clientspg from "./Components/Clients"
import Projectpg from "./Components/Projects"
import heroimg from './Images/heroImg.jpg'

// Enhanced HomePage with beautiful gradient and animations
const HomePage = () => (
  <div className="min-h-[90vh] min-w-full flex items-center justify-center p-6 lg:p-10 relative overflow-hidden">
    {/* Background gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_700px_at_50%_50%,#4f46e5,transparent)]" />
    
    {/* Main content container */}
    <div className="relative z-10 w-full max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left side - Text content */}
        <div className="space-y-8 text-left">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Smart Manufacturing Demo and Development Cell
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Transforming India's manufacturing landscape through innovation and cutting-edge technology
            </p>
          </div>
          
          {/* Buttons with enhanced styling */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700">
              Get Started
            </button>
            <button className="px-8 py-3.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full font-medium transform hover:scale-105 transition-all duration-200 group">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text group-hover:text-transparent transition-all duration-200">
                Learn More
              </span>
            </button>
          </div>
          
          {/* Additional feature highlights */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="space-y-2">
              <div className="text-blue-600 dark:text-blue-400 font-semibold">Innovation Hub</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Advanced manufacturing solutions and prototypes</p>
            </div>
            <div className="space-y-2">
              <div className="text-blue-600 dark:text-blue-400 font-semibold">Industry 4.0</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Smart factory technologies and automation</p>
            </div>
          </div>
        </div>
        
        {/* Right side - Image with enhanced styling */}
        <div className="relative group">
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
          
          {/* Main image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-300">
            <img 
              src={heroimg} 
              alt="Smart Manufacturing Technology" 
              className="w-full h-[500px] object-cover rounded-xl"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
          
          {/* Decorative dots */}
          <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-blue-600/10 rounded-full blur-xl" />
          <div className="absolute -left-12 -top-12 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  </div>
);

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
      <div className="min-h-screen min-w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Enhanced Navbar with glass effect */}
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-blue-900/5' 
            : 'bg-transparent'
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
          <Clientspg />
        </main>
 
        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl mt-20 border-t border-gray-200 dark:border-gray-700/40">
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
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
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
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Contact Us
              </span>
              <div className="absolute -bottom-3 left-0 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 pt-2">
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
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700/40 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
      </div>
    </Router>
  );
};

export default App;