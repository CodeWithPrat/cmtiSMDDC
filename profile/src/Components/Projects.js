import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartFoundry from "../Images/Projects/foundry.png"
import mtcm from "../Images/Projects/mtcm.jpg"
import intelipod from "../Images/Projects/intelipod.jpg"
import m2c from "../Images/Projects/M2CedgeLink.png"
import digitaltwin from "../Images/Projects/digitalTwin.png"
import thprinter from "../Images/Projects/3Dprinter.jpg"
import arvr from "../Images/Projects/ARVR.png"
import cobot from "../Images/Projects/Cobot.jpg"
import smartspindle from "../Images/Projects/smartSpindle.png"
import waxinjection from "../Images/Projects/waxinjection.jpg"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setIsModalOpen(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const nextImage = () => {
    if (selectedProject?.gallery?.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.gallery?.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Integrated Smart Foundry 4.0",
      image: SmartFoundry,
      shortDescription: "Integrated Smart Foundry 4.0 is an advanced foundry system that utilizes Industry 4.0 technologies like IIoT, AI, automation, and real-time data analytics to enhance efficiency, quality, and sustainability in metal casting",
      overview: "Automated material handling and pouring improve precision and reduce human intervention. Real-time monitoring ensures defect-free castings and reduces rework.  Smart sensors and connected systems monitor and control the entire casting process in real time. Virtual simulations optimize casting parameters and improve quality",
      keyFeatures: [
        "Real-Time Monitoring & IIoT Integration",
        "AI-Driven Predictive Maintenance",
        "Digital Twin & Simulation",
        "Automated Robotics & Smart Quality Control",
        "Admin dashboard with analytics"
      ],
      stack: ["React", "PHP", "MySQL", "Tailwindcss",],
      backend: "PHP with RESTFUL backend and MySQL database System",
      deployment: "Hostinger Cloud with CI/CD pipeline",
      liveUrl: "https://ifoundry.online/"
    },
    {
      id: 2,
      title: "Machine Tool Condition Monitoring Edge Module ",
      image: mtcm,
      shortDescription: "The MTCM EDGE MODULE is a compact, high-performance edge computing solution powered by the Teensy 4.0 with an ARM Cortex-M7 processor, designed for lightweight automation and industrial data processing.",
      overview: "The MTCM EDGE MODULE is a high-performance edge computing solution powered by a 600MHz ARM Cortex-M7 processor, ensuring efficient industrial data processing. With integrated Wi-Fi and BLE, it enables seamless cloud connectivity while collecting data from sensors like temperature gauges and energy meters. Housed in a durable aluminum casing, it withstands harsh environments. Its compatibility with the Arduino IDE makes it user-friendly and accessible for developers of all skill levels.",
      keyFeatures: [
        "Real-time collaboration",
        "Task dependencies",
        "Time tracking",
        "Custom workflows"
      ],
      stack: ["ReactJs", "PHP", "MYSQL", "JAVA-MVC", "Spring Boot", "Tailwindcss"],
      backend: "Java Spring Boot and PHP with MySQL database",
      deployment: "Hostinger Cloud with CI/CD pipeline",
      liveUrl: "https://mtcm-edge.online/dashboard"
    },
    {
      id: 3,
      title: "i Preci Spindle 18K",
      image: smartspindle,
      shortDescription: "The iPreciSpindle_18K is a high-speed, IIoT-enabled SMART spindle developed in collaboration with Acumac. Designed for machine tool applications, it offers superior precision, real-time condition monitoring, and predictive maintenance capabilities. Integrated with an edge device and IIoT gateway, it delivers advanced data analytics and visualization, empowering both OEMs and end-users for optimized performance.",
      overview: "The iPreciSpindle_18K system is powered by the MTCM EDGE MODULE, featuring a 600MHz ARM Cortex-M7 processor for robust edge computing. It seamlessly collects industrial data through built-in Wi-Fi and BLE connectivity, supporting real-time cloud integration. Designed with a rugged aluminum enclosure, it ensures reliability in harsh conditions. Developer-friendly with Arduino IDE compatibility, it accelerates the deployment of industrial IoT applications and advanced sensor-based monitoring.",
      keyFeatures: [
        "High-precision and high-speed spindle performance",
        "Real-time condition monitoring and data analytics",
        "Edge computing with integrated Wi-Fi and BLE",
        "Predictive maintenance and decision support",
        "Robust industrial design with aluminum casing",
        "Seamless cloud connectivity for remote monitoring",
        "Developer-friendly with Arduino IDE compatibility",
        "Supports integration with various industrial sensors"
      ],
      stack: ["ReactJs", "Machine-Learning", "PHP", "Python","MYSQL", "Tailwindcss"],
      backend: "PHP and Python with MySQL database",
      deployment: "Hostinger Cloud with CI/CD pipeline",
      liveUrl: "https://cmti-edge-tool.online/"
    },
    {
      id: 4,
      title: "Intellipod",
      image: intelipod,
      shortDescription: "Intellipod is a high-performance signal acquisition and analysis device designed for real-time monitoring and AI-driven diagnostics of industrial machinery. It captures data from vibration, temperature, analog, and digital sensors to detect and predict faults, ensuring seamless integration and intelligent decision-making.",
      overview: "Equipped with 16 analog inputs, 2 analog outputs, 32 programmable digital I/Os, and multiple DAQ cards, Intellipod delivers versatile sensor compatibility. With dual CAN Bus ports, it ensures robust data acquisition across sectors like automotive, aviation, and industrial navigation. Powered by advanced AI/ML algorithms, it enables predictive fault diagnostics, making it ideal for critical sector applications.",
      keyFeatures: [
        "Real-time signal acquisition and analysis",
        "Advanced AI/ML algorithms for fault prediction",
        "Support for vibration, temperature, analog, and digital sensors",
        "16 analog inputs and 2 analog outputs for broad compatibility",
        "32 programmable digital I/Os for flexible system integration",
        "Dual CAN Bus ports for reliable data acquisition",
        "Multiple DAQ cards supporting diverse applications",
        "Designed for automotive, aviation, navigation, and industrial sectors"
      ],
      stack: ["ReactJs", "Machine-Learning", "PHP", "MATLAB", "Python", "MYSQL", "Tailwindcss"],
      backend: "PHP and Python with MySQL database",
      deployment: "Hostinger Cloud with CI/CD pipeline",
      liveUrl: "https://intellipod.online/"
    },
    {
      id: 5,
      title: "M2C-EDGE-LINK",
      image: m2c,
      shortDescription: "The M2C-EDGE-LINK is a universal digital cloud interpreter that provides direct connectivity between machines or process machinery and the cloud. It supports multiple digital input protocols like OPCUA, Modbus TCP, RS485, and RS232, offering real-time data processing, analysis, and monitoring with remote user alerts for anomalies.",
      overview: "The M2C-EDGE-LINK features a CMTI custom-designed embedded Raspberry Pi CM5 controller powered by a Broadcom BCM2712 Quad-Core Cortex-A76 processor. With 8GB LPDDR4X RAM and 32GB eMMC storage, it ensures robust data handling. Integrated with dual-band Wi-Fi, Bluetooth 5.0, and multiple I/O ports including RS485/RS232, the device offers seamless connectivity and cloud integration. Housed with a 13.3-inch capacitive touch display (1920x1080 resolution) and running on Linux (Raspbian OS), it supports real-time cloud logging, remote monitoring, and multi-protocol communications.",
      keyFeatures: [
        "Universal machine-to-cloud connectivity",
        "Supports OPC UA, Modbus TCP/IP, RS485, RS232 protocols",
        "CMTI Custom Embedded Raspberry Pi CM5 controller",
        "Broadcom BCM2712 Quad-Core Cortex-A76 @ 2.4GHz",
        "8GB LPDDR4X RAM and 32GB eMMC storage",
        "Dual-band Wi-Fi (2.4GHz/5GHz) and Bluetooth 5.0",
        "Gigabit Ethernet and multiple USB ports",
        "1920x1080 high-resolution 13.3-inch capacitive touchscreen",
        "Linux OS (Raspbian) with cloud logging and remote analysis",
        "Multiple input/output interfaces including RS485/RS232 and antenna connector"
      ],
      stack: ["Linux OS", "Cloud Integration", "OPCUA", "Modbus TCP/IP", "RS485/RS232 Communication"],
      backend: "Custom Linux-based communication and cloud logging framework",
      deployment: "On-premises industrial deployment with cloud connectivity",
      liveUrl: "https://edge-device.netlify.app/"
    },
    {
      id: 6,
      title: "Digital Twin for CNC Feed Drive and Spindle",
      image: digitaltwin,
      shortDescription: "An advanced digital twin model for CNC machine’s feed drive and spindle subsystems, enabling real-time monitoring, predictive maintenance, and process optimization through data-driven simulation and analysis techniques.",
      overview: "This digital twin project integrates real-world load simulation using a dynamometer with MATLAB-based vibration analysis, combining motor, nut housing, bearing, spindle, and coupler behavior. It captures live data from the Numerical Control Unit (NCU) through OPC UA communication, processes it via Python scripts, and visualizes it using Node-RED. The setup enhances predictive maintenance, reduces downtime, and improves machining precision by leveraging extensive sensor data and advanced analytics.",
      keyFeatures: [
        "Real-time acquisition of motor and spindle parameters via OPC UA",
        "MATLAB-based vibration analysis for critical components",
        "Integration of dynamometer and torque transducer for load simulation",
        "Digital twin development for motor, ball screw, spindle, bearings, and couplers",
        "Python-based data extraction and MQTT-based data transmission",
        "Node-RED dashboard for live visualization of temperature, vibration, speed, and torque",
        "Database integration with PostgreSQL for historical data logging",
        "Support for predictive maintenance and operational optimization"
      ],
      stack: ["MATLAB", "Python", "Node-RED", "PostgreSQL", "OPC-UA Communication", "MQTT Protocol"],
      backend: "Python-based data acquisition and Node-RED flow-based programming",
      deployment: "On-premises setup with dashboard visualization and database logging",
      liveUrl: "https://cmti-edge-tool.online/"
    },
    {
      id: 7,
      title: "Collaborative Robots (Cobots)",
      image: cobot,
      shortDescription: "Cobots are intelligent robotic systems designed to work safely alongside humans, enhancing productivity and innovation in collaborative industrial environments through automation and smart interaction.",
      overview: "At CMTI, collaborative robots (Cobots) are used for industry-driven experimental training and automation use case development. Cobots perform tasks like pick and place, palletizing, stacking, destacking, vision-based gluing, PLC-controlled operations, and integration with mixed reality (MR) for enhanced automation. They ensure precision, flexibility, and human-robot synergy in sectors like packaging, welding, dispensing, and quality inspection.",
      keyFeatures: [
        "Safe collaboration with humans through advanced sensors and programming",
        "Pick and Place, Palletizing, Stacking, Destacking operations",
        "Vision-based automated gluing and quality inspection",
        "Integration with PLC systems for industrial control",
        "Support for mixed reality (MR) based automation",
        "Enhances fabrication processes and industrial assembly",
        "Precision automation in welding, dispensing, injection molding, and screw driving",
        "Boosts productivity, flexibility, and process efficiency in manufacturing"
      ],
      stack: ["Robotics", "PLC Integration", "Computer Vision", "Mixed Reality Applications"],
      backend: "Robot Operating System (ROS) with PLC and Vision System Interfaces",
      deployment: "Industrial shop floors, training labs, and automation cells",
      liveUrl: "https://cmti-edge-tool.online/"
    },
    {
      id: 8,
      title: "Mixed Reality (AR/VR) Applications",
      image: arvr,
      shortDescription: "Mixed Reality (MR) seamlessly blends virtual and physical environments, empowering industries with immersive training, design visualization, remote assistance, and simulation experiences for higher efficiency and innovation.",
      overview: "At CMTI, Mixed Reality (MR) solutions are developed for training modules and industrial simulations, including experiences for Mono-200, AMS, and Robot systems. MR enhances industrial operations by enabling real-time prototyping, assembly guidance, remote maintenance support, and immersive visualization. It plays a crucial role across industries like automotive, aerospace, healthcare, defense, business, and education, facilitating interactive simulations and data-driven innovations.",
      keyFeatures: [
        "Immersive training environments for industrial applications",
        "Design visualization and collaborative prototyping",
        "Real-time remote maintenance and assistance",
        "Enhanced worker efficiency through augmented guidance",
        "Mixed Reality experiences for Mono-200, AMS, and Robots",
        "Integration with Digital Twin models for real-world simulation",
        "Application across automotive, healthcare, defense, aerospace, and education",
        "Accelerates innovation cycles with interactive simulation tools"
      ],
      stack: ["Unity3D", "Microsoft HoloLens", "VR Headsets", "Mixed Reality Toolkit (MRTK)"],
      backend: "Custom MR applications integrated with Digital Twin and IoT platforms",
      deployment: "Industrial training, R&D labs, remote support, and simulation centers",
      liveUrl: "https://cmti-edge-tool.online/"
    },
    {
      id: 9,
      title: "6 Ton Wax Injection Machine",
      image: waxinjection,
      shortDescription: "PMP provides an advanced 6 Ton Wax Injection Machine designed to meet the modern demands of the investment casting industry with automatic operation, precision control, and efficient wax flow.",
      overview: "The 6 Ton Wax Injection Machine features a compact, innovative in-line injection system ensuring laminar flow from the wax tank to the mold. Built with a 4-pillar, vertical downstroke clamping system, it incorporates a modular design coupled with a PLC-based electro-hydraulic control package. Independent PID temperature controllers maintain precise wax conditioning, chamber, and nozzle temperatures, optimizing manual and semi-automatic pattern production.",
      keyFeatures: [
        "Automatic operation with 1 Phase, 220V electric power supply",
        "Innovative in-line wax injection system for smooth laminar flow",
        "4-Pillar structure with vertical downstroke clamping",
        "Independent PID controllers for tank, block, and nozzle temperature",
        "Adjustable nozzle in horizontal and vertical axis",
        "Hydraulic mould ejector with speed and pressure adjustability",
        "T-Slot plates for easy die mounting",
        "Optional platen cooling system available",
        "Push-to-start auto-sequence for full injection cycle",
        "Simple modular design for easy maintenance and operation"
      ],
      stack: ["PLC Automation", "Hydraulic Systems", "Temperature Control Systems"],
      backend: "PLC based electro-hydraulic system",
      deployment: "Investment casting foundries and pattern production industries",
      liveUrl: "https://cmti-edge-tool.online/"
    }
  ];
  

  return (
    <div className="min-h-screen  bg-slate-900 text-white p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-blue-900/20" />
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(to_right,theme(colors.slate.800/70)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.800/70)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded"></span>
          </h2>
          <p className="text-gray-100 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my expertise in web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="h-full bg-gradient-to-r from-[#1F1C2C] to-[#928DAB] dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="inline-flex items-center text-sm font-medium">
                        View details <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-cyan-400 dark:text-blue-400 mb-3 group-hover:text-blue-100 dark:group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 dark:text-gray-300 mb-5 flex-grow">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 modal-overlay"
            onClick={handleClickOutside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <div className="flex justify-end p-4 sticky top-0 z-10 bg-gray-800 dark:bg-gray-800/90 backdrop-blur-sm">
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-100 dark:text-gray-300" />
                </button>
              </div>
              
              <div className="overflow-y-auto max-h-[calc(90vh-4rem)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                  <div className="space-y-6">
                    {/* Image Gallery */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-800 dark:bg-gray-700">
                      <div className="aspect-w-16 aspect-h-9 relative">
                        <img
                          src={selectedProject.gallery?.[currentImageIndex] || selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {selectedProject.gallery?.length > 1 && (
                        <>
                          <button 
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/60 dark:bg-black/60 hover:bg-white/80 dark:hover:bg-black/80 transition-colors"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-white" />
                          </button>
                          <button 
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/60 dark:bg-black/60 hover:bg-white/80 dark:hover:bg-black/80 transition-colors"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-800 dark:text-white" />
                          </button>
                          
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                            {selectedProject.gallery.map((_, idx) => (
                              <button 
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-blue-500 w-4' : 'bg-white/60 dark:bg-gray-400'}`}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Tech Stack and Links */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                          Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                        >
                          View Live
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg transition-colors font-medium"
                          >
                            Source Code
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {selectedProject.title}
                      </h2>
                      
                      <div className="w-16 h-1 bg-blue-500 mb-4 rounded"></div>
                    </motion.div>
                    
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-gray-800 dark:bg-gray-700/40 p-5 rounded-xl shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-gray-200 dark:text-gray-200 mb-3">Overview</h3>
                      <p className="text-gray-200 dark:text-gray-300 leading-relaxed">{selectedProject.overview}</p>
                    </motion.section>

                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-200 dark:text-gray-200 mb-3">Key Features</h3>
                      <ul className="space-y-3">
                        {selectedProject.keyFeatures.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                            className="flex items-start"
                          >
                            <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </span>
                            <span className="text-gray-200 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.section>

                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-200 dark:text-gray-200 mb-3">Technical Implementation</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-[#1F1C2C] to-[#928DAB] dark:bg-gray-700/40 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-100 dark:text-gray-200 mb-2">Backend Architecture</h4>
                          <p className="text-gray-300 dark:text-gray-300">{selectedProject.backend}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#1F1C2C] to-[#928DAB] dark:bg-gray-700/40 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-100 dark:text-gray-200 mb-2">Deployment Strategy</h4>
                          <p className="text-gray-300 dark:text-gray-300">{selectedProject.deployment}</p>
                        </div>
                      </div>
                    </motion.section>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;