import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

import SF0 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF0.png"
import SF1 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF1.png"
import SF2 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF2.png"
import SF3 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF3.png"
import SF4 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF4.png"
import SF5 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF5.png"
import SF6 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF6.png"
import SF7 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF7.png"
import SF8 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF8.png"
import SF9 from "../Images/ProjectGallery/Dashboard/SmartFoundry/SF9.png"

import MTCM0 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM0.jpg"
import MTCM1 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM1.png"
import MTCM2 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM2.png"
import MTCM3 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM3.png"
import MTCM4 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM4.png"
import MTCM5 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM5.png"
import MTCM6 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM6.png"
import MTCM7 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM7.png"
import MTCM8 from "../Images/ProjectGallery/Dashboard/MTCM/MTCM8.png"

import SS0 from "../Images/ProjectGallery/Dashboard/SmartSpindle/SS0.png"
import SS1 from "../Images/ProjectGallery/Dashboard/SmartSpindle/SS1.png"
import SS2 from "../Images/ProjectGallery/Dashboard/SmartSpindle/SS2.png"
import SS3 from "../Images/ProjectGallery/Dashboard/SmartSpindle/SS3.png"
import SS4 from "../Images/ProjectGallery/Dashboard/SmartSpindle/SS4.png"
import SS5 from "../Images/ProjectGallery/Dashboard/SmartSpindle/SS5.png"
import SS6 from "../Images/ProjectGallery/Dashboard/SmartSpindle/SS6.png"

import INT0 from "../Images/ProjectGallery/Dashboard/Intellipod/INT0.jpg"
import INT1 from "../Images/ProjectGallery/Dashboard/Intellipod/INT1.png"
import INT2 from "../Images/ProjectGallery/Dashboard/Intellipod/INT2.png"
import INT3 from "../Images/ProjectGallery/Dashboard/Intellipod/INT3.png"
import INT4 from "../Images/ProjectGallery/Dashboard/Intellipod/INT4.png"
import INT5 from "../Images/ProjectGallery/Dashboard/Intellipod/INT5.png"
import INT6 from "../Images/ProjectGallery/Dashboard/Intellipod/INT6.png"
import INT7 from "../Images/ProjectGallery/Dashboard/Intellipod/INT7.png"

import M2C0 from "../Images/ProjectGallery/Dashboard/M2C/M2C0.png"
import M2C1 from "../Images/ProjectGallery/Dashboard/M2C/M2C1.png"
import M2C2 from "../Images/ProjectGallery/Dashboard/M2C/M2C2.png"
import M2C3 from "../Images/ProjectGallery/Dashboard/M2C/M2C3.png"
import M2C4 from "../Images/ProjectGallery/Dashboard/M2C/M2C4.png"

import DT0 from "../Images/ProjectGallery/Dashboard/DigitalTwin/DT0.png"
import DT1 from "../Images/ProjectGallery/Dashboard/DigitalTwin/DT1.png"
import DT2 from "../Images/ProjectGallery/Dashboard/DigitalTwin/DT2.png"

import C0 from "../Images/ProjectGallery/Dashboard/Cobots/C0.jpg"
import C1 from "../Images/ProjectGallery/Dashboard/Cobots/C1.jpg"
import C3 from "../Images/ProjectGallery/Dashboard/Cobots/C3.jpg"
import C4 from "../Images/ProjectGallery/Dashboard/Cobots/C4.jpg"
import C5 from "../Images/ProjectGallery/Dashboard/Cobots/C5.png"
import C6 from "../Images/ProjectGallery/Dashboard/Cobots/C6.png"
import C7 from "../Images/ProjectGallery/Dashboard/Cobots/C7.jpeg"
import Cv1 from "../Images/ProjectGallery/Dashboard/Cobots/Cv1.mp4"
import Cv2 from "../Images/ProjectGallery/Dashboard/Cobots/Cv2.mp4"
import Cv3 from "../Images/ProjectGallery/Dashboard/Cobots/Cv3.mp4"
import Cv4 from "../Images/ProjectGallery/Dashboard/Cobots/Cv4.mp4"

import WI0 from "../Images/ProjectGallery/Dashboard/WaxInjection/WI0.jpg"
import WI1 from "../Images/ProjectGallery/Dashboard/WaxInjection/WI1.png"
import WI2 from "../Images/ProjectGallery/Dashboard/WaxInjection/WI2.png"
import WI3 from "../Images/ProjectGallery/Dashboard/WaxInjection/WI3.png"

import MR1 from "../Images/ProjectGallery/Dashboard/MR/MR1.png"

// Sample data structure - replace with your actual data
const galleryData = {
    "Dashboard": [
        {
            id: 1,
            title: "Integrated Smart Foundry 4.0",
            description: "Integrated Smart Foundry 4.0 is an advanced foundry system that utilizes Industry 4.0 technologies like IIoT, AI, automation, and real-time data analytics to enhance efficiency, quality, and sustainability in metal casting",
            thumbnail: SF0,
            media: [
                { type: "image", url: SF1, caption: "Foundry Floor – Real-time Monitoring" },
                { type: "image", url: SF2, caption: "Smart Pouring Station" },
                { type: "image", url: SF3, caption: "Edge Device Monitoring Setup" },
                { type: "image", url: SF4, caption: "Sensor Integration in Moulding" },
                { type: "image", url: SF5, caption: "Data Acquisition Dashboard" },
                { type: "image", url: SF6, caption: "Energy Efficiency Metrics" },
                { type: "image", url: SF7, caption: "Real-Time Process Analytics" },
                { type: "image", url: SF8, caption: "iFoundry Smart Interface" },
                { type: "image", url: SF9, caption: "Operator Interface Panel" },
                { type: "video", url: "https://ifoundry.online/", caption: "Live Project Walkthrough" }
            ]
        }
        ,
        {
            id: 2,
            title: "Machine Tool Condition Monitoring Edge Module",
            description: "The MTCM EDGE MODULE is a compact, high-performance edge computing solution powered by the Teensy 4.0 with an ARM Cortex-M7 processor, designed for lightweight automation and industrial data processing.",
            thumbnail: MTCM0,
            media: [
                { type: "image", url: MTCM1, caption: "MTCM Module Front View" },
                { type: "image", url: MTCM2, caption: "Internal Circuitry & Wiring" },
                { type: "image", url: MTCM3, caption: "Sensor Integration Board" },
                { type: "image", url: MTCM4, caption: "Live Machine Signal Acquisition" },
                { type: "image", url: MTCM5, caption: "Condition Monitoring Setup" },
                { type: "image", url: MTCM6, caption: "Edge Processing Unit Overview" },
                { type: "image", url: MTCM7, caption: "Real-time FFT Analysis" },
                { type: "image", url: MTCM8, caption: "Deployment at Shopfloor" },
                { type: "video", url: "https://mtcm-edge.online/dashboard", caption: "Dashboard Preview" }
            ]
        }
        ,
        {
            id: 3,
            title: "i Preci Spindle 18K",
            description: "The iPreciSpindle_18K is a high-speed, IIoT-enabled SMART spindle developed in collaboration with Acumac. Designed for machine tool applications, it offers superior precision, real-time condition monitoring, and predictive maintenance capabilities.",
            thumbnail: SS0,
            media: [
                { type: "image", url: SS1, caption: "Spindle Assembly Front View" },
                { type: "image", url: SS2, caption: "Live Dashboard Monitoring" },
                { type: "image", url: SS3, caption: "Sensor Embedded Spindle" },
                { type: "image", url: SS4, caption: "Real-time Vibration Analysis" },
                { type: "image", url: SS5, caption: "Spindle Control Interface" },
                { type: "image", url: SS6, caption: "IIoT Enabled Architecture" },
                { type: "video", url: "https://cmti-edge-tool.online/", caption: "Smart Spindle Demo" }
            ]
        },
        {
            id: 4,
            title: "Intellipod",
            description: "Intellipod is a high-performance signal acquisition and analysis device designed for real-time monitoring and AI-driven diagnostics of industrial machinery.",
            thumbnail: INT0,
            media: [
                { type: "image", url: INT1, caption: "Sensor & Signal Interface" },
                { type: "image", url: INT2, caption: "Hardware Configuration" },
                { type: "image", url: INT3, caption: "Real-Time Monitoring Interface" },
                { type: "image", url: INT4, caption: "Data Acquisition Module" },
                { type: "image", url: INT5, caption: "Compact Enclosure Design" },
                { type: "image", url: INT6, caption: "AI-Based Diagnostic Tools" },
                { type: "image", url: INT7, caption: "Field Installation View" },
                { type: "video", url: "https://intellipod.online/", caption: "Product Overview Video" }
            ]
        },
        {
            id: 5,
            title: "M2C-EDGE-LINK",
            description: "The M2C-EDGE-LINK is a universal digital cloud interpreter that provides direct connectivity between machines or process machinery and the cloud.",
            thumbnail: M2C0,
            media: [
                { type: "image", url: M2C1, caption: "Cloud Connectivity Architecture" },
                { type: "image", url: M2C2, caption: "Real-Time Data Flow Interface" },
                { type: "image", url: M2C3, caption: "Device Configuration UI" },
                { type: "image", url: M2C4, caption: "System Integration Setup" },
                { type: "video", url: "https://edge-device.netlify.app/", caption: "Live Demo" }
            ]
        }
        ,
        {
            id: 6,
            title: "Digital Twin for CNC Feed Drive and Spindle",
            description: "An advanced digital twin model for CNC machine’s feed drive and spindle subsystems, enabling real-time monitoring, predictive maintenance, and process optimization.",
            thumbnail: DT0,
            media: [
                { type: "image", url: DT1, caption: "Digital Twin Simulation" },
                { type: "image", url: DT2, caption: "Live Visualization Using Node-RED" },
                { type: "video", url: "https://cmti-edge-tool.online/", caption: "System Walkthrough" }
            ]
        }
        ,
        {
            id: 7,
            title: "Collaborative Robots (Cobots)",
            description: "Collaborative Robots (Cobots) are designed to safely work alongside humans in shared spaces, assisting with repetitive tasks, precision handling, and improving productivity in smart manufacturing environments.",
            thumbnail: C0,
            media: [
                { type: "image", url: C1, caption: "Cobot Arm in Assembly Line" },
                { type: "image", url: C3, caption: "Precision Task Handling" },
                { type: "image", url: C4, caption: "Human-Robot Collaboration" },
                { type: "image", url: C5, caption: "Real-time Monitoring Interface" },
                { type: "image", url: C6, caption: "Sensor Integration with Cobot" },
                { type: "image", url: C7, caption: "Cobot-Assisted Workstation" },
                { type: "video", url: Cv1, caption: "Pick and Place Task" },
                { type: "video", url: Cv2, caption: "Assembly Operation Demo" },
                { type: "video", url: Cv3, caption: "Precision Handling Demo" },
                { type: "video", url: Cv4, caption: "Live Cobot Deployment" }
            ]
        }
        ,
        {
            id: 8,
            title: "Mixed Reality (AR/VR) Applications",
            description: "Mixed Reality applications leverage augmented and virtual reality technologies to deliver immersive training, maintenance visualization, and digital twin interactions in advanced manufacturing systems.",
            thumbnail: MR1,
            media: [
                { type: "image", url: "/api/placeholder/1200/800", caption: "AR Guided Maintenance" },
                { type: "video", url: "https://mixedreality.online/", caption: "AR/VR System Showcase" }
            ]
        },
        {
            id: 9,
            title: "6 Ton Wax Injection Machine",
            description: "A heavy-duty 6 Ton Wax Injection Machine used for precision moulding in the investment casting industry, optimized for process control, consistency, and integrated with smart sensors for monitoring.",
            thumbnail: WI0,
            media: [
                { type: "image", url: WI1, caption: "Wax Injection Unit Overview" },
                { type: "image", url: WI2, caption: "Control Panel & Interface" },
                { type: "image", url: WI3, caption: "Smart Sensor Integration" },
                { type: "video", url: "https://waxmachine.online/", caption: "Machine in Operation" }
            ]
        }

    ],
    "Demo's": [
        {
            id: 4,
            title: "Product Demo 2025",
            description: "Live demonstration of our latest features",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/ink.mp4", caption: "Feature showcase" },
                { type: "image", url: "/api/placeholder/1200/800", caption: "Audience reaction" }
            ]
        },
        {
            id: 5,
            title: "Client Workshop",
            description: "Interactive workshop with key stakeholders",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "image", url: "/api/placeholder/1200/800", caption: "Workshop setup" },
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/liquid.mp4", caption: "Client participation" }
            ]
        }
    ],
    "Lectures": [
        {
            id: 6,
            title: "Tech Talk Series",
            description: "Expert lectures on emerging technologies",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/ink.mp4", caption: "AI and Machine Learning" },
                { type: "image", url: "/api/placeholder/1200/800", caption: "Speaker panel" }
            ]
        },
        {
            id: 7,
            title: "Industry Conference",
            description: "Annual conference presentation",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "image", url: "/api/placeholder/1200/800", caption: "Conference hall" },
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/liquid.mp4", caption: "Keynote speech" }
            ]
        }
    ],
    "Celebrations": [
        {
            id: 8,
            title: "Annual Gala",
            description: "Celebrating our achievements and milestones",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "image", url: "/api/placeholder/1200/800", caption: "Team awards" },
                { type: "image", url: "/api/placeholder/1200/800", caption: "Celebration dinner" },
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/ink.mp4", caption: "CEO speech" }
            ]
        },
        {
            id: 9,
            title: "Team Building Retreat",
            description: "Offsite event strengthening our team bonds",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/liquid.mp4", caption: "Team activities" },
                { type: "image", url: "/api/placeholder/1200/800", caption: "Group photo" }
            ]
        }
    ],
    "Videos": [
        {
            id: 10,
            title: "Corporate Film",
            description: "Our organizational journey and vision",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/ink.mp4", caption: "Our Story" }
            ]
        },
        {
            id: 11,
            title: "Product Launch",
            description: "Official unveiling of our flagship product",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/liquid.mp4", caption: "Launch event" }
            ]
        },
        {
            id: 12,
            title: "Customer Testimonials",
            description: "What our clients say about us",
            thumbnail: "/api/placeholder/400/300",
            media: [
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/ink.mp4", caption: "Client A" },
                { type: "video", url: "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/examples/videos/liquid.mp4", caption: "Client B" }
            ]
        }
    ]
};



const GalleryCard = ({ project, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)"
            }}
            className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => onClick(project)}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
            </div>
            <div className="px-6 py-4 bg-gradient-to-t from-gray-900 to-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
            <div className="absolute top-2 right-2 bg-purple-600 text-gray-100 text-xs px-2 py-1 rounded-full">
                {project.media.length} items
            </div>
        </motion.div>
    );
};

// New component for the gallery thumbnail grid
const MediaThumbnailGrid = ({ media, onSelect }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 bg-gray-900 rounded-lg">
            {media.map((item, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden rounded-lg cursor-pointer h-24 sm:h-32"
                    onClick={() => onSelect(index)}
                >
                    {item.type === 'image' ? (
                        <img
                            src={item.url}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="relative w-full h-full bg-black">
                            <img
                                src="/api/placeholder/400/300"
                                alt={item.caption}
                                className="w-full h-full object-cover opacity-70"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="text-white" size={36} />
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <div className="absolute bottom-1 left-1 right-1 text-xs text-white px-2 truncate">
                        {item.caption}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};


const MediaViewer = ({ media, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showThumbnails, setShowThumbnails] = useState(true);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const currentMedia = media[currentIndex];

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(e => console.error("Video play failed:", e));
            } else {
                videoRef.current.pause();
            }
            videoRef.current.muted = isMuted;
        }
    }, [isPlaying, isMuted, currentIndex, currentMedia]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen();
            } else if (containerRef.current.webkitRequestFullscreen) {
                containerRef.current.webkitRequestFullscreen();
            } else if (containerRef.current.msRequestFullscreen) {
                containerRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    const toggleThumbnails = () => {
        setShowThumbnails(!showThumbnails);
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement
            );
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleThumbnailSelect = (index) => {
        setCurrentIndex(index);
        if (currentMedia.type === 'video') {
            setIsPlaying(true);
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-95"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleOverlayClick}
            >
                <div
                    ref={containerRef}
                    className="relative w-full max-w-6xl max-h-full p-2 md:p-6 flex flex-col"
                >
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-70 rounded-full text-white hover:bg-red-700 transition-colors"
                        onClick={onClose}
                    >
                        <X size={24} />
                    </motion.button>

                    <div className="relative overflow-hidden rounded-xl shadow-2xl bg-black mb-4">
                        {currentMedia.type === 'image' ? (
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                src={currentMedia.url}
                                alt={currentMedia.caption}
                                className="w-full object-contain max-h-[60vh]"
                            />
                        ) : (
                            <div className="relative">
                                <motion.video
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    ref={videoRef}
                                    src={currentMedia.url}
                                    controls={false}
                                    autoPlay
                                    loop
                                    className="w-full max-h-[60vh]"
                                />
                                <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center justify-center space-x-6">
                                        <button
                                            className="text-white hover:text-purple-400 transition-colors"
                                            onClick={togglePlayPause}
                                        >
                                            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                                        </button>
                                        <button
                                            className="text-white hover:text-purple-400 transition-colors"
                                            onClick={toggleMute}
                                        >
                                            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                                        </button>
                                        <button
                                            className="text-white hover:text-purple-400 transition-colors"
                                            onClick={toggleFullscreen}
                                        >
                                            <Maximize size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-purple-800 bg-opacity-80 rounded-full text-white hover:bg-purple-600 transition-colors"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        <div className="text-center py-2 px-4 bg-black bg-opacity-70 rounded-full">
                            <p className="text-white font-medium">{currentMedia.caption}</p>
                            <p className="text-gray-400 text-sm">{currentIndex + 1} of {media.length}</p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-purple-800 bg-opacity-80 rounded-full text-white hover:bg-purple-600 transition-colors"
                            onClick={handleNext}
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>

                    <button
                        className="mb-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors self-center"
                        onClick={toggleThumbnails}
                    >
                        {showThumbnails ? "Hide Thumbnails" : "Show All Media"}
                    </button>

                    {showThumbnails && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MediaThumbnailGrid
                                media={media}
                                onSelect={handleThumbnailSelect}
                            />
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("Dashboard");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPageOpen, setIsPageOpen] = useState(false);
    const categories = Object.keys(galleryData);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseViewer = () => {
        setSelectedProject(null);
    };

    // For the Gallery page and HomePage section functionality
    const toggleFullGallery = () => {
        setIsPageOpen(!isPageOpen);
    };

    const GalleryContent = () => (
        <div className="w-full">
            {/* Animated Category Tabs */}
            <div className="w-full flex justify-center mb-8 overflow-x-auto pb-2">
                <div className="flex space-x-2 md:space-x-4">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-purple-700 text-white shadow-lg shadow-purple-700/40"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Project Grid with Animation */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2"
            >
                <AnimatePresence mode="wait">
                    {galleryData[activeCategory].map((project) => (
                        <GalleryCard
                            key={project.id}
                            project={project}
                            onClick={handleProjectClick}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Media Viewer Modal */}
            {selectedProject && (
                <MediaViewer
                    media={selectedProject.media}
                    onClose={handleCloseViewer}
                />
            )}
        </div>
    );

    // This is what we'll show on the home page as a preview section - now showing one card from each category
    const GalleryPreview = () => {
        // Get first item from each category
        const featuredProjects = categories.map(category => galleryData[category][0]);

        return (
            <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center mb-10 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Our <span className="text-purple-400">Gallery</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-purple-500 to-blue-600 mb-6"
                        ></motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-gray-300 max-w-2xl"
                        >
                            Explore highlights from our projects, events, and accomplishments
                        </motion.p>
                    </div>

                    {/* Preview Grid - Show first item from each category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="relative">
                                <GalleryCard
                                    project={project}
                                    onClick={handleProjectClick}
                                />
                                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                                    {categories.find(cat => galleryData[cat].some(p => p.id === project.id))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full shadow-lg shadow-purple-700/30 transition-all duration-300"
                            onClick={toggleFullGallery}
                        >
                            View Full Gallery
                        </motion.button>
                    </div>
                </div>

                {/* Media Viewer Modal with Gallery View */}
                {selectedProject && (
                    <MediaViewer
                        media={selectedProject.media}
                        onClose={handleCloseViewer}
                    />
                )}
            </section>
        );
    };

    // This is used for the full gallery page
    if (isPageOpen) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black p-4 sm:p-8"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-between items-center"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Our <span className="text-purple-400">Gallery</span>
                        </h1>
                        <button
                            onClick={toggleFullGallery}
                            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                        >
                            Back to Home
                        </button>
                    </motion.div>

                    <GalleryContent />
                </div>
            </motion.div>
        );
    }

    // Default: Return the preview section for home page
    return <GalleryPreview />;
};

export default Gallery;