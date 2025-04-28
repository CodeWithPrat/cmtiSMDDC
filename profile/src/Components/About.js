import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Factory,
  Cog,
  BookOpen,
  Radio,
  Database,
  Settings,
  Wrench,
  Terminal,
  Network,
  Code,
  Laptop,
  Activity,
  ChevronRight
} from 'lucide-react';
import smddc from "../Images/About/smddc.png"

// Data constants
const ACTIVITIES = [
  { Icon: Factory, title: "Industry 4.0 Implementation", color: "blue" },
  { Icon: Cog, title: "Technology & Product Development", color: "purple" },
  { Icon: BookOpen, title: "Experimental Learning", color: "pink" },
  { Icon: Radio, title: "Awareness Programs", color: "blue" },
  { Icon: Database, title: "Industry Sponsored Projects", color: "purple" },
  { Icon: Settings, title: "Production based Smart Factory", color: "pink" }
];

const PRACTICES = [
  {
    Icon: Wrench,
    title: "Enabling localization & customization",
    description: "Tryout & evaluation facility for solution developers both Hardware and Software",
    color: "blue"
  },
  {
    Icon: Terminal,
    title: "Best Practices",
    description: "Develop / Acquire expertise on smart Implementations",
    color: "purple"
  },
  {
    Icon: Network,
    title: "Technology Transfer",
    description: "Support Industry for rolling out smart production systems",
    color: "pink"
  },
  {
    Icon: Code,
    title: "Technology Driver",
    description: "Pilot Implementation of SMART MANUFACTURING in INDIA",
    color: "blue"
  },
  {
    Icon: Laptop,
    title: "Showcase & Experience Centre",
    description: "Demonstration of I4.0 concepts, tools & solutions-capabilities",
    color: "purple"
  },
  {
    Icon: Activity,
    title: "Research & Development",
    description: "Explore limits of unmanned /automated smart production systems",
    color: "pink"
  }
];

const DEVELOPMENTAL_ACTIVITIES = [
  "Development of IIOT solutions for legacy machines",
  "Development of smart machines",
  "Development of smart machine tool aggregates",
  "Development of intelligent machining modules for CNC metal cutting applications",
  "Development of IIoT enabled comprehensive condition monitoring module for machines"
];

const TRAINING_COURSES = [
  {
    title: "Training Programs",
    description: "Regular & Exclusive Training Programmes on Smart Manufacturing and Industry 4.0",
    icon: "🎓",
    color: "blue"
  },
  {
    title: "Awareness Workshops",
    description: "Awareness Programmes on Industry 4.0 for different industry sectors",
    icon: "💡",
    color: "purple"
  },
  {
    title: "Conference Series",
    description: "International Conferences on Industry 4.0 and Smart Manufacturing",
    icon: "🌐",
    color: "pink"
  }
];

const About = () => {
  // Animation hooks for each section
  const controlsHero = useAnimation();
  const controlsActivities = useAnimation();
  const controlsPractices = useAnimation();
  const controlsDevelopment = useAnimation();
  const controlsTraining = useAnimation();

  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activitiesRef, activitiesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [practicesRef, practicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [developmentRef, developmentInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [trainingRef, trainingInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (heroInView) controlsHero.start('visible');
    if (activitiesInView) controlsActivities.start('visible');
    if (practicesInView) controlsPractices.start('visible');
    if (developmentInView) controlsDevelopment.start('visible');
    if (trainingInView) controlsTraining.start('visible');
  }, [
    controlsHero, controlsActivities, controlsPractices, controlsDevelopment, controlsTraining,
    heroInView, activitiesInView, practicesInView, developmentInView, trainingInView
  ]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="w-full overflow-hidden bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-blue-900/20" />
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(to_right,theme(colors.slate.800/70)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.800/70)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Animated orbs */}
          <motion.div
            className="absolute bottom-1/2 right-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
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
            className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"
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
        </div>

        {/* Content */}
        <div className="container mx-auto px-2 lg:px-8 relative z-10 mb-[-4rem]">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={controlsHero}
            className="min-h-[70vh] flex flex-col items-center justify-center py-20"
          >

            {/* Hero content */}
            <div className="w-full max-w-9xl mx-auto text-center mt-[-4rem]">

              <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                  variants={fadeInUp}
                  custom={0.6}
                >
                  <span className="block">About</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    SMDDC
                  </span>
                </motion.h1>

                <motion.div
                  className="relative max-w-5xl"
                  variants={fadeInUp}
                  custom={0.8}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-2xl blur-sm" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      The Smart Manufacturing Demo and Development Cell (SMDDC) is a Common Engineering Facility Centre (CEFC) established under the SAMARTH Udyog Bharat 4.0 Platform of the Ministry of Heavy Industries (MHI), Government of India, with the objective of developing, propagating, and supporting the adoption of smart manufacturing practices in the Indian manufacturing industry.
                      <br /><br />
                      SMDDC aims to bridge the gap between Industry 4.0 technologies and Indian manufacturing units, offering state-of-the-art tools and resources for process optimization, automation, and digital transformation. The center serves as a hub for testing, development, and showcasing smart manufacturing solutions tailored to meet the diverse needs of small, medium, and large-scale industries across the country.
                      <br /><br />
                      By fostering collaborations between industry experts, government agencies, and academia, SMDDC strives to create a robust ecosystem that accelerates the adoption of cutting-edge technologies. Through its comprehensive programs, training workshops, and hands-on demonstrations, it provides manufacturers with the knowledge and tools necessary to stay competitive in the rapidly evolving global market.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="relative py-16 w-full bg-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated diagonal lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[linear-gradient(45deg,theme(colors.slate.800/70)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Animated orb */}
          <motion.div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            ref={activitiesRef}
            initial="hidden"
            animate={controlsActivities}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-center"
              variants={fadeInUp}
              custom={0}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SMDDC Activities
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16"
              variants={fadeInUp}
              custom={0.2}
            >
              Our comprehensive range of activities designed to accelerate the adoption of Industry 4.0 technologies across the manufacturing sector
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerCards}
            >
              {ACTIVITIES.map((activity, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={cardVariant}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${activity.color === "blue" ? "from-blue-500/20 to-blue-700/20" :
                    activity.color === "purple" ? "from-purple-500/20 to-purple-700/20" :
                      "from-pink-500/20 to-pink-700/20"
                    } rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl relative z-10 overflow-hidden group-hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:translate-y-[-4px]">
                    {/* Background shimmer effect */}
                    <div className="absolute -inset-x-full -top-80 h-[600px] w-[600px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rotate-12 bg-gradient-to-b from-transparent via-white to-transparent group-hover:animate-shimmer" />

                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${activity.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                        activity.color === "purple" ? "bg-purple-500/20 text-purple-400" :
                          "bg-pink-500/20 text-pink-400"
                        }`}>
                        <activity.Icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold">
                        {activity.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          {/* Particle effects */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/20 blur-sm"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
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

        <div className="container mx-auto px-6 lg:px-8 relative z-10 mt-[-4rem]">
          <motion.div
            ref={practicesRef}
            initial="hidden"
            animate={controlsPractices}
            className="max-w-full mx-auto"
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-center"
              variants={fadeInUp}
              custom={0}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Propagation of Industry 4.0 Practices
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16"
              variants={fadeInUp}
              custom={0.2}
            >
              Establishing a foundation for the next generation of intelligent manufacturing across India
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerCards}
            >
              {PRACTICES.map((practice, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={cardVariant}
                >
                  <div className="h-full relative p-8 border border-white/10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 hover:border-white/20 shadow-lg transition-all duration-500 group-hover:transform group-hover:translate-y-[-4px] group-hover:shadow-xl">
                    <div className={`p-3 inline-flex rounded-lg ${practice.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                      practice.color === "purple" ? "bg-purple-500/20 text-purple-400" :
                        "bg-pink-500/20 text-pink-400"
                      } mb-5`}>
                      <practice.Icon size={24} />
                    </div>

                    <h3 className={`text-xl font-semibold mb-3 ${practice.color === "blue" ? "text-blue-400" :
                      practice.color === "purple" ? "text-purple-400" :
                        "text-pink-400"
                      }`}>
                      {practice.title}
                    </h3>

                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {practice.description}
                    </p>

                    {/* Radial gradient accent */}
                    <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-br-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${practice.color === "blue" ? "bg-blue-500" :
                      practice.color === "purple" ? "bg-purple-500" :
                        "bg-pink-500"
                      } blur-xl`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Development Section */}
      <section className="relative py-16 bg-slate-900 mt-[-4rem]">
        <div className="absolute inset-0">
          {/* Animated background accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-900/10 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            ref={developmentRef}
            initial="hidden"
            animate={controlsDevelopment}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-center"
              variants={fadeInUp}
              custom={0}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technology and Product Development
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16"
              variants={fadeInUp}
              custom={0.2}
            >
              Pioneering solutions tailored to meet the unique requirements of Indian manufacturing
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} custom={0.4}>
                <div className="relative rounded-xl overflow-hidden">
                  {/* Decorative border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-50 blur" />

                  {/* Image */}
                  <div className="relative aspect-w-16 aspect-h-9 md:aspect-w-21 md:aspect-h-9 bg-slate-800 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={smddc}
                      alt="Technology Development"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm text-blue-300 text-sm font-medium rounded-full mb-2">
                        R&D Excellence
                      </div>
                      <h3 className="text-2xl font-bold text-white">Innovation Hub</h3>
                    </div>
                  </div>
                </div>
              </motion.div>



              <motion.div variants={fadeInUp} custom={0.6}>
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <p className="text-lg text-gray-300 mb-8">
                    We develop technologies, products and solutions, related to smart manufacturing and Industry 4.0, in collaboration with industries, with focus to meet requirements of Indian manufacturing industries to implement the smart solution in their organisation.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-6">
                    Developmental Activities:
                  </h3>

                  <div className="space-y-4">
                    {DEVELOPMENTAL_ACTIVITIES.map((activity, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-200">{activity}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0">
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(90deg,theme(colors.white)_1px,transparent_1px),linear-gradient(0deg,theme(colors.white)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 mb-[-4rem] mt-[-4rem]">
          <motion.div
            ref={trainingRef}
            initial="hidden"
            animate={controlsTraining}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-center"
              variants={fadeInUp}
              custom={0}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Training & Awareness Programs
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16"
              variants={fadeInUp}
              custom={0.2}
            >
              Building expertise and spreading knowledge about Industry 4.0 technologies and implementations
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerCards}
            >
              {TRAINING_COURSES.map((course, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden"
                  variants={cardVariant}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color === "blue" ? "from-blue-600/20 to-blue-800/20" :
                    course.color === "purple" ? "from-purple-600/20 to-purple-800/20" :
                      "from-pink-600/20 to-pink-800/20"
                    } rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />

                  <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group-hover:border-white/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-900/10">
                    {/* Shimmer effect on hover */}
                    <div className="absolute -inset-x-full -top-80 h-[600px] w-[600px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rotate-12 bg-gradient-to-b from-transparent via-white to-transparent group-hover:animate-shimmer" />

                    <div className="flex flex-col items-center text-center">
                      <span className="text-4xl mb-4">{course.icon}</span>
                      <h3 className={`text-xl font-semibold mb-4 ${course.color === "blue" ? "text-blue-400" :
                        course.color === "purple" ? "text-purple-400" :
                          "text-pink-400"
                        }`}>
                        {course.title}
                      </h3>
                      <p className="text-gray-300">
                        {course.description}
                      </p>

                      <div className={`mt-6 inline-flex items-center text-sm font-medium ${course.color === "blue" ? "text-blue-400" :
                        course.color === "purple" ? "text-purple-400" :
                          "text-pink-400"
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        Explore programs
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default About;

