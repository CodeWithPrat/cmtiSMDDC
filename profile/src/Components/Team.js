import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, FileText, ChevronDown, ChevronUp, X, Download, Maximize, ArrowLeft, ArrowRight, User } from 'lucide-react';

import director from "../Images/Team/Nagahanumaiah.jpg"
import PV from "../Images/Team/PV.jpg"
import hari from "../Images/Team/harithota.jpg"
import Lavanya from "../Images/Team/lavanya.jpg"

import Uday1 from "../Images/Team/Uday/Uday1.jpeg"
import Uday2 from "../Images/Team/Uday/Uday2.JPG"
import Uday3 from "../Images/Team/Uday/Uday3.JPG"
import Uday4 from "../Images/Team/Uday/Uday4.JPG"

import Lavanya2 from "../Images/Team/LavanyaAC/Lavanya2.JPG"
import Lavanya3 from "../Images/Team/LavanyaAC/Lavanya3.JPG"
import Lavanya6 from "../Images/Team/LavanyaAC/Lavanya6.JPG"
import Lavanya7 from "../Images/Team/LavanyaAC/Lavanya7.JPG"

import Shalini1 from "../Images/Team/Shalini/Shalini1.JPG"
import Shalini2 from "../Images/Team/Shalini/Shalini2.JPG"
import Shalini3 from "../Images/Team/Shalini/Shalini3.JPG"
import Shalini4 from "../Images/Team/Shalini/SHalini4.JPG"

import Moulya1 from "../Images/Team/Moulya/Moulya1.JPG"
import Moulya2 from "../Images/Team/Moulya/Moulya2.JPG"
import Moulya3 from "../Images/Team/Moulya/Moulya3.JPG"
import Moulya4 from "../Images/Team/Moulya/Moulya4.JPG"
import Moulya5 from "../Images/Team/Moulya/Moulya5.JPG"

import Pratik from "../Images/Team/Pratik.jpeg"
import Pratik1 from "../Images/Team/Pratik2.JPG"
import Pratik2 from "../Images/Team/Pratik3.JPG"
import Pratik4 from "../Images/Team/Pratik4.JPG"

export default function Team() {
    // Sample data - replace with your actual team data
    const administrators = [
        {
            id: 1,
            name: "Dr. Nagahanumaiah",
            image: director,
            designation: "Director",
            expertise: "Manufacturing Research and Leadership",
            comment: "Driving innovation and technological excellence in manufacturing",
            email: "director@cmti.res.in",
            linkedin: "https://www.linkedin.com/in/dr-nagahanumaiah-17aa524/",
            profileLink: "https://cmti.res.in/director/",
            bio: "With over 28 years of experience, Dr. Nagahanumaiah is a distinguished leader in manufacturing technology research and development. As Director of CMTI, he has transformed the institute’s mission, fostering innovation, raising technology readiness levels, and achieving significant milestones in patents, technology licensing, and machine development. His expertise spans micro-nano manufacturing, modular machine tools, additive manufacturing, and more, inspiring a new era of technological self-reliance in India."
        },

        {
            id: 2,
            name: "Mr. Prakash Vinod",
            image: PV,
            designation: "Joint Director",
            expertise: " Smart Manufacturing, Ultra-Precision Machines, Industry 4.0",
            comment: "Championing smart manufacturing and precision technologies",
            email: "prakashv@cmti.res.in",
            linkedin: "https://www.linkedin.com/in/prakash-vinod-855546190/",
            profileLink: "https://cmti.res.in/cmtiemployee/prakash-vinod/",
            bio: "Mr. Prakash Vinod is a senior scientist and the Joint Director at CMTI with over 33 years of experience in advanced manufacturing. He leads the Centre for Smart Manufacturing, Precision Machine Tools & Aggregates (C-SMPM), focusing on technology development from TRL3 to TRL8. He has developed over 30 machines/products in domains like ultra-precision machines, Industry 4.0 solutions, SPMs, and micro/nano fabrication. He has been pivotal in establishing the Nano Manufacturing Centre and Industry 4.0 skill development hubs at CMTI. His work supports industrial and academic R&D, consultancy, testing, calibration, noise & vibration analysis, and software application development for manufacturing technologies."
        },

        {
            id: 3,
            name: "Mr. Harikrishna Satish Thota",
            image: hari,
            designation: "Scientist - D",
            expertise: " Smart Manufacturing, IIoT Systems, Digital Twin Development, Ultra-Precision Machines",
            comment: "Innovating in Smart Manufacturing, IIoT, and Digital Twins for the future of manufacturing",
            email: "harithota@cmti.res.in",
            linkedin: "https://www.linkedin.com/in/hari-thota-b022b610b/",
            profileLink: "https://cmti.res.in/cmtiemployee/harikrishna-satish-thota/",
            bio: "Mr. Harikrishna Satish Thota is a Scientist-D at the Central Manufacturing Technology Institute (CMTI), Bengaluru, with 11 years of experience in Electrical Engineering, Instrumentation, and Control. A Chartered Engineer (IEI) with a Master's degree from Jadavpur University, he has been instrumental in developing Digital Twins, IIoT systems for smart manufacturing, EDGE-AI modules, microfabrication systems, and ultra-precision machine controls. His contributions include technology transfers to MSMEs and award-winning innovations such as the NANOSHAPE-T250 ultra-precision machine. His work in Industry 4.0, predictive maintenance, mixed reality in manufacturing, and micro/nano fabrication continues to drive advancements in manufacturing technologies."
        }

    ];

    const teamMembers = [
        {
            id: 1,
            name: "Ms. Lavanya R",
            image: Lavanya,
            specialization: "Frontend Development",
            designation: "Senior Technical Assistant",
            comment: "Crafting beautiful user experiences",
            expertise: ["React", "JavaScript", "UI/UX"],
            email: "alex.thompson@example.com",
            linkedin: "https://linkedin.com/in/alexthompson",
            github: "https://github.com/alexthompson",
            resume: "https://example.com/resume/alexthompson",
            bio: "Alex is a creative frontend developer with a passion for building intuitive user interfaces. With over 7 years of experience in React and JavaScript, Alex consistently delivers elegant solutions to complex UI challenges.",
            projects: ["Company Website Redesign", "Customer Portal", "Mobile App UI"],
            gallery: [
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600"
            ]
        },
        {
            id: 2,
            name: "Mr. Uday Hiremath",
            image: Uday2,
            specialization: "AI/ML Development",
            designation: "Python AI-ML Developer",
            comment: "Creating intelligent and data-driven solutions",
            expertise: ["Machine Learning", "Deep Learning", "LabView", "Computer Vision", "Python", "Django", "IIoT", "Data Science", "NLP"],
            email: "udayhiremath02@gmail.com",
            linkedin: "https://www.linkedin.com/in/uday-hiremath-868375179/",
            github: "",
            resume: "https://drive.google.com/file/d/1_2T3ronDekINhzAifKoHliCONPXwSyLR/view",
            bio: "Uday Hiremath is an experienced AIML Developer specializing in designing, implementing, and optimizing AI and ML models for real-time industrial applications. His work spans digital twins, predictive maintenance, vision-based robotics, and smart manufacturing solutions, demonstrating a commitment to driving innovation in complex systems.",
            projects: [
                "Intellipod",
                "Vision-Based Contour Following Cobot",
                "TOF Camera-based 3D Model Development Scanner",
                "Digital Twin and Vibration Data Analysis for Predictive Maintenance",
                "i-preci-spindle-18K",
            ],
            gallery: [
                Uday3,
                Uday4,
                Uday1
            ]
        },

        {
            id: 3,
            name: " Mr. Pratik",
            image: Pratik,   // assuming you have imported your image at the top
            specialization: "Frontend and Backend Development, Data Management",
            designation: "Full Stack Developer",
            comment: "Innovative and detail-oriented full stack developer delivering efficient and scalable web applications.",
            expertise: ["Java", "Spring Boot", "React.js", "SQL", "Tailwind CSS", "Microservices"],
            email: "pratiktillekar57@gmail.com",
            linkedin: "https://www.linkedin.com/in/pratik-sde/",
            github: "https://github.com/CodeWithPrat",
            resume: "https://drive.google.com/file/d/1enOac1exWN4To4QOKLLB3CKhxWvzAbky/view",
            resumeEmbedUrl: "https://drive.google.com/file/d/1enOac1exWN4To4QOKLLB3CKhxWvzAbky/preview",
            bio: "Innovative Java Full Stack Developer with 1.8 years of experience specializing in scalable web applications. Expert in Java, Spring Boot, React.js, SQL, and cloud-based solutions. Proven ability to deliver high-performance software and collaborate across teams to exceed goals.",
            projects: [
                "Machine Tool Condition Monitoring Dashboard",
                "Integrated Smart Foundry 4.0 Dashboard",
                "Dashboard for Machine To Cloud Connecting EDGE Device",
                "Dashboard for Digital twin of induction motor and feed drive axis ",
                "Dashboard for i-Preci-spindle-18K",
                "Dashboard for Intellipod",
            ],
            gallery: [
                Pratik1,
                Pratik2
            ]
        },
        {
            id: 4,
            name: "Ms. Lavanya A C",
            image: Lavanya7,
            specialization: "Data Science",
            designation: "Data Analyst",
            comment: "Finding insights in data",
            expertise: ["Python", "Machine Learning", "Data Visualization"],
            email: "emily.rodriguez@example.com",
            linkedin: "https://linkedin.com/in/emilyrodriguez",
            github: "https://github.com/emilyrodriguez",
            resume: "https://example.com/resume/emilyrodriguez",
            bio: "Emily transforms complex data into actionable insights. Her data models have helped identify key business opportunities and optimize decision-making processes.",
            projects: ["Customer Segmentation Analysis", "Predictive Sales Model", "Interactive Dashboards"],
            gallery: [
                Lavanya2,
                Lavanya3
            ]
        },
        {
            id: 5,
            name: "Ms. Shalini M N",
            image: Shalini2,
            specialization: "UX Design",
            designation: "UI/UX Designer",
            comment: "Creating seamless user journeys",
            expertise: ["Figma", "User Research", "Prototyping"],
            email: "james.wilson@example.com",
            linkedin: "https://linkedin.com/in/jameswilson",
            github: "https://github.com/jameswilson",
            resume: "https://example.com/resume/jameswilson",
            bio: "James combines user research with creative design to craft engaging digital experiences. His user-centered approach has resulted in significant improvements in user satisfaction and engagement metrics.",
            projects: ["E-commerce UX Redesign", "Mobile App User Flow", "Design System Creation"],
            gallery: [
                Shalini1,
                Shalini4,
                Shalini2,
            ]
        },
        {
            id: 5,
            name: "Ms. Moulya",
            image: Moulya2,
            specialization: "UX Design",
            designation: "UI/UX Designer",
            comment: "Creating seamless user journeys",
            expertise: ["Figma", "User Research", "Prototyping"],
            email: "james.wilson@example.com",
            linkedin: "https://linkedin.com/in/jameswilson",
            github: "https://github.com/jameswilson",
            resume: "https://example.com/resume/jameswilson",
            bio: "James combines user research with creative design to craft engaging digital experiences. His user-centered approach has resulted in significant improvements in user satisfaction and engagement metrics.",
            projects: ["E-commerce UX Redesign", "Mobile App User Flow", "Design System Creation"],
            gallery: [
                Moulya5,
                Moulya3,
                Moulya4,
            ]
        }
    ];

    const getGoogleDriveEmbedUrl = (url) => {
        // Check if it's a Google Drive URL
        if (url.includes('drive.google.com/file/d/')) {
            // Extract the file ID from the URL
            const fileIdMatch = url.match(/\/d\/([^/]+)/);
            if (fileIdMatch && fileIdMatch[1]) {
                const fileId = fileIdMatch[1];
                // Return the embed URL format
                return `https://drive.google.com/file/d/${fileId}/preview`;
            }
        }
        // Return original URL if not a Google Drive URL or couldn't extract ID
        return url;
    };

    const getGoogleDriveDownloadUrl = (url) => {
        // Check if it's a Google Drive URL
        if (url.includes('drive.google.com/file/d/')) {
            // Extract the file ID from the URL
            const fileIdMatch = url.match(/\/d\/([^/]+)/);
            if (fileIdMatch && fileIdMatch[1]) {
                const fileId = fileIdMatch[1];
                // Return the direct download URL format
                return `https://drive.google.com/uc?export=download&id=${fileId}`;
            }
        }
        // Return original URL if not a Google Drive URL or couldn't extract ID
        return url;
    };



    // State for expanded card
    const [expandedId, setExpandedId] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showResumeOptions, setShowResumeOptions] = useState(false);
    const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);
    const [isResumeFullscreen, setIsResumeFullscreen] = useState(false);


    // Refs
    const modalRef = useRef(null);

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

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const openModal = (member) => {
        setSelectedProject(member);
        setCurrentImageIndex(0);
    };

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setShowResumeOptions(false);
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

    const toggleResumeOptions = () => {
        setShowResumeOptions(!showResumeOptions);
    };

    const openResumePreview = () => {
        setIsResumePreviewOpen(true);
        setShowResumeOptions(false);
    };

    const closeResumePreview = () => {
        setIsResumePreviewOpen(false);
        setIsResumeFullscreen(false);
    };

    const toggleResumeFullscreen = () => {
        setIsResumeFullscreen(!isResumeFullscreen);
    };

    const downloadResume = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const downloadUrl = getGoogleDriveDownloadUrl(selectedProject.resume);
        window.open(downloadUrl, '_blank');
    };

    return (
        <div className="bg-black text-white min-h-screen w-full p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Our Team</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Meet the talented individuals who make our vision a reality
                    </p>
                </div>

                {/* Administration Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {administrators.map((admin) => (
                            <div
                                key={admin.id}
                                className={`
                  bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer
                  ${admin.designation === "Director" ? "border-l-4 border-orange-600" : ""}
                  ${admin.designation === "Joint Director" ? "border-l-4 border-white" : ""}
                  ${admin.designation === "Scientist - D" ? "border-l-4 border-green-500" : ""}
                `}
                                onClick={() => openModal(admin)}
                            >
                                <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                                    {/* Blurred Background */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: `url(${admin.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'blur(20px) brightness(0.7)',
                                            opacity: 0.6,
                                        }}
                                    ></div>

                                    {/* Clear Foreground Image */}
                                    <img
                                        src={admin.image}
                                        alt={admin.name}
                                        className="relative z-10 w-full h-full object-contain object-center p-1"
                                    />

                                    {/* Name and Designation at Bottom */}
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 z-20">
                                        <h3 className="text-xl font-bold">{admin.name}</h3>
                                        <p className="text-purple-300">{admin.designation}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-300 mb-4">{admin.comment}</p>
                                    <p className="text-gray-400 mb-6"><span className="text-purple-300">Expertise:</span> {admin.expertise}</p>
                                    <div className="flex space-x-4">
                                        <a
                                            href={admin.profileLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-purple-300 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <User size={20} />
                                        </a>
                                        <a
                                            href={`mailto:${admin.email}`}
                                            className="text-gray-400 hover:text-purple-300 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Mail size={20} />
                                        </a>
                                        <a
                                            href={admin.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-purple-300 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Members Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-center">Team Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className={`
                  bg-gray-900 rounded-xl overflow-hidden shadow-lg
                  transition-all duration-300 hover:shadow-2xl cursor-pointer
                  ${expandedId === member.id ? 'ring-2 ring-purple-500' : ''}
                `}
                                onClick={() => openModal(member)}
                            >
                                <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                                    {/* Blurred Background */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: `url(${member.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'blur(20px) brightness(0.7)',
                                            opacity: 0.6,
                                        }}
                                    ></div>

                                    {/* Clear Foreground Image */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative z-10 w-full h-full object-contain object-center p-1"
                                    />

                                    {/* Name and Designation at Bottom */}
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 z-20">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-purple-300">{member.designation}</p>
                                    </div>
                                </div>

                                <div className="p-6" onClick={(e) => e.stopPropagation()}>
                                    <p className="text-gray-300 mb-4">{member.comment}</p>
                                    <p className="text-gray-400 mb-2"><span className="text-purple-300">Specialization:</span> {member.specialization}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.expertise.map((skill, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-purple-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleExpand(member.id);
                                        }}
                                        className="flex items-center text-purple-300 hover:text-purple-400 transition-colors mb-4"
                                    >
                                        {expandedId === member.id ? (
                                            <>
                                                <span>Less info</span>
                                                <ChevronUp size={16} className="ml-1" />
                                            </>
                                        ) : (
                                            <>
                                                <span>More info</span>
                                                <ChevronDown size={16} className="ml-1" />
                                            </>
                                        )}
                                    </button>

                                    {expandedId === member.id && (
                                        <div className="pt-2 border-t border-gray-800 mt-2 space-y-3">
                                            <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                                <Mail size={16} />
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {member.email}
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                                <Linkedin size={16} />
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    LinkedIn Profile
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                                <Github size={16} />
                                                <a
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    GitHub Profile
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                                <FileText size={16} />
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setSelectedProject(member);
                                                        setShowResumeOptions(true);
                                                    }}
                                                >
                                                    Resume
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-75 ${isModalOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                    onClick={handleClickOutside}
                >
                    <div
                        ref={modalRef}
                        className={`bg-gray-900 rounded-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto transform ${isModalOpen ? 'scale-100' : 'scale-95'} transition-transform duration-300`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className="relative h-56 md:h-64 lg:h-72 w-full overflow-hidden rounded-t-xl">
                            {/* Blurred Background */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${selectedProject.gallery ? selectedProject.gallery[currentImageIndex] : selectedProject.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'blur(20px) brightness(0.7)',
                                    opacity: 0.6,
                                }}
                            ></div>

                            {/* Foreground Clear Image */}
                            <img
                                src={selectedProject.gallery ? selectedProject.gallery[currentImageIndex] : selectedProject.image}
                                alt={selectedProject.name}
                                className="relative z-10 w-full h-full object-contain object-center p-4"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-20"></div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-gray-900 bg-opacity-50 rounded-full p-2 text-white hover:bg-gray-800 transition-colors z-30"
                            >
                                <X size={20} />
                            </button>

                            {/* Next and Previous Buttons */}
                            {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 rounded-full p-2 text-white hover:bg-gray-800 transition-colors z-30"
                                    >
                                        <ArrowLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 rounded-full p-2 text-white hover:bg-gray-800 transition-colors z-30"
                                    >
                                        <ArrowRight size={20} />
                                    </button>
                                </>
                            )}

                            {/* Name and Specialization/Designation */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.name}</h2>
                                <p className="text-purple-300 text-lg">
                                    {selectedProject.designation || selectedProject.specialization}
                                </p>
                            </div>
                        </div>


                        {/* Modal body */}
                        <div className="p-6">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-purple-300">About</h3>
                                <p className="text-gray-300">{selectedProject.bio || selectedProject.comment}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-purple-300">
                                    {Array.isArray(selectedProject.expertise) ? "Expertise" : "Specialization"}
                                </h3>
                                {Array.isArray(selectedProject.expertise) ? (
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.expertise.map((skill, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-300">{selectedProject.expertise}</p>
                                )}
                            </div>

                            {selectedProject.projects && (
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-300">Projects</h3>
                                    <ul className="list-disc list-inside text-gray-300">
                                        {selectedProject.projects.map((project, idx) => (
                                            <li key={idx} className="mb-1">{project}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="border-t border-gray-800 pt-6 mt-6">
                                <h3 className="text-xl font-semibold mb-4 text-purple-300">Contact</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <a href={`mailto:${selectedProject.email}`} className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                        <Mail size={18} />
                                        <span>{selectedProject.email}</span>
                                    </a>

                                    <a href={selectedProject.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                        <Linkedin size={18} />
                                        <span>LinkedIn Profile</span>
                                    </a>

                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                            <Github size={18} />
                                            <span>GitHub Profile</span>
                                        </a>
                                    )}

                                    {selectedProject.profileLink && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors">
                                            <User size={18} />
                                            <span>Profile</span>
                                        </a>
                                    )}

                                    {selectedProject.resume && (
                                        <div className="relative">
                                            <button
                                                onClick={toggleResumeOptions}
                                                className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors"
                                            >
                                                <FileText size={18} />
                                                <span>Resume</span>
                                            </button>

                                            {showResumeOptions && (
                                                <div className="absolute z-10 mt-2 bg-gray-800 rounded-lg shadow-xl py-2 w-48">
                                                    <button
                                                        onClick={openResumePreview}
                                                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-300"
                                                    >
                                                        <Maximize size={16} className="mr-2" />
                                                        View Resume
                                                    </button>
                                                    <button
                                                        onClick={downloadResume}
                                                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-300"
                                                    >
                                                        <Download size={16} className="mr-2" />
                                                        Download Resume
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Resume Preview Modal */}
            {isResumePreviewOpen && selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                    onClick={closeResumePreview}
                >
                    <div
                        className={`bg-white rounded-lg p-4 ${isResumeFullscreen ? 'w-full h-full m-0 rounded-none' : 'max-w-3xl w-full max-h-[90vh] mx-4'} transition-all duration-300`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">{selectedProject.name}'s Resume</h3>
                            <div className="flex space-x-2">
                                <button
                                    onClick={toggleResumeFullscreen}
                                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Maximize size={20} />
                                </button>
                                <button
                                    onClick={downloadResume}
                                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Download size={20} />
                                </button>
                                <button
                                    onClick={closeResumePreview}
                                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[90%] overflow-auto border border-gray-300 rounded">
                            <iframe
                                src={getGoogleDriveEmbedUrl(selectedProject.resume)}
                                title={`${selectedProject.name}'s Resume`}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}