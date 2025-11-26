import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Data Structures ---
type PortfolioProject = {
    projectName: string;
    companyName: string;
    date: string;
    description: string;
    technology: string;
}

const projects: PortfolioProject[] = [
    {
        projectName: 'WanderList App',
        companyName: 'CNM',
        date: "Sep 2025 to Dec 2025",
        description: 'WanderList (Bucket List) App used by travel people who are interested in adventures trips. Users can create their profile and add the places they want to visit in their bucket list. They can also mark the places they have visited and share their experiences with others. Built responsive web application using React Router, Node.js, Express.js, and PostgreSQL.',
        technology: 'React Router, Node.js, Express.js, PostgreSQL'
    },
    {
        projectName: 'OPTI Green - Hackathop',
        companyName: 'NM Tech Talks',
        date: "Nov 8, 9 2025",
        description: 'OPTI Green is an intelligent dashboard that analyzes and optimizes LLM (Large Language Model) token usage to reduce API costs and compute energy consumption. It helps developers and organizations make AI usage more efficient, sustainable, and transparent — by reducing the token usage significantly.',
        technology: 'React Router, Node.js, LLM studio, Python, Typescript'
    },
    {
        projectName: 'Personal Website',
        companyName: 'CNM',
        date: "Sep 2025 to Nov 2025",
        description: 'Designed my personal website project to showcase my skills, portfolio, technical blog, and video blog. The goal was to create a modern, high-performance, and fully responsive digital presence.',
        technology: 'React Router, Node.js, Typescript, Tailwind CSS'
    },
    {
        projectName: 'Aurora Sandbox',
        companyName: 'ING Belgium',
        date: "Jan 2022 to Apr 2023",
        description: 'Aurora Sandbox and Global Sandbox used to test the new apps, test new technologies, and see if they work before they introduce them to their customers. I was responsible for designing and implementing the frontend application using Lit and ING Custom Framework.',
        technology: 'Lit, ING Custom Framework, Node.js, Express.js, ING Cloud'
    },
    {
        projectName: 'CRM Portal',
        companyName: 'ING Belgium',
        date: "Feb 2019 to Jan 2022",
        description: 'Customer Resource Management (CRM) is a single view application that displays complete information for commercial customers. My role involved extensive enhancements to the existing project, production issue support, and implementing change requests using Java and Spring.',
        technology: 'Java, Spring, ING custom Framework, PL/SQL'
    },
    {
        projectName: 'Claim View App',
        companyName: 'Anthem Inc.',
        date: "Apr 2018 to Feb 2019",
        description: 'Claim View Application used by end users of Anthem. Users are able to see their claims (Dental, Institutional, Professional). Built a fully responsive claim tracking tool, ensuring secure access via Site minder and PDF download functionality.',
        technology: 'Angular, Node JS, Express JS, SQL'
    },
    {
        projectName: 'Maritz Motivation Solutions App',
        companyName: 'Maritz Inc.',
        date: "Feb 2014 to Mar 2017",
        description: 'Maritz Motivation Solutions (MMS) deals with motivating people by engaging, rewarding, and recognizing them, including employees, partners, or end-customers. I contributed to the tools and methodologies for employee recognition, sales incentive, and consumer loyalty programs.',
        technology: 'Java, Maritz Framework, PL/SQL'
    },
    {
        projectName: 'Credit Platform',
        companyName: 'CITI Bank',
        date: "Mar 2013 to Feb 2014",
        description: 'The Credit Platform is a web-based, Credit Approval document generator, Collateral Monitoring System, MIS Reporting, and data storage tool. Created a centralized loan and credit management solution that supported products like Mortgages, Commercial loans, Lines of credit, Credit cards, and Personal loans.',
        technology: 'Java, Spring, Hibernate'
    },
    {
        projectName: 'Universal Rate Server',
        companyName: 'CITI Bank',
        date: "Nov 2010 to Mar 2013",
        description: 'URS (Universal Rate Server) FE is a centralized server used by Regional Treasury to provide on-line Foreign Exchange rates to all the countries supported by Regional Treasury.',
        technology: 'Java, Struts, Websphere, Oracle PL/SQL'
    }
];

// --- Enhanced Project Card Component ---
const EnhancedProjectCard: React.FC<{ project: PortfolioProject; index: number; onReadMore: (project: PortfolioProject) => void }> = ({ project, index, onReadMore }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Define an appropriate icon based on the project focus
    let iconClass = "fa-solid fa-code";
    if (project.projectName.includes('App') || project.projectName.includes('Portal')) {
        iconClass = "fa-solid fa-laptop-code";
    } else if (project.projectName.includes('Hackathop')) {
        iconClass = "fa-solid fa-trophy";
    } else if (project.projectName.includes('Sandbox')) {
        iconClass = "fa-solid fa-flask";
    } else if (project.projectName.includes('Website')) {
        iconClass = "fa-solid fa-globe";
    }

    // Color based on index for variety
    const colors = [
        { bg: 'from-cyan-500 to-blue-600', border: 'border-cyan-400', icon: 'text-cyan-300' },
        { bg: 'from-purple-500 to-pink-600', border: 'border-purple-400', icon: 'text-purple-300' },
        { bg: 'from-green-500 to-teal-600', border: 'border-green-400', icon: 'text-green-300' },
        { bg: 'from-orange-500 to-red-600', border: 'border-orange-400', icon: 'text-orange-300' },
        { bg: 'from-indigo-500 to-purple-600', border: 'border-indigo-400', icon: 'text-indigo-300' },
    ];

    const colorScheme = colors[index % colors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative group h-full overflow-hidden rounded-2xl bg-gray-900 border-2 ${colorScheme.border} transition-all duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
        >
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0`}></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.projectName}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                            <span className={`text-sm font-semibold ${colorScheme.icon}`}>{project.companyName}</span>
                            <div className={`w-2 h-2 rounded-full ${colorScheme.icon.replace('text', 'bg')}`}></div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <motion.div
                            animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 10 : 0 }}
                            className={`text-3xl ${colorScheme.icon}`}
                        >
                            <i className={iconClass}></i>
                        </motion.div>
                    </div>
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 text-xs text-gray-400 mb-4">
                    <i className="fa-solid fa-calendar"></i>
                    <span>{project.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 pb-6 border-b border-gray-700">
                    <div className="flex flex-wrap gap-2">
                        {project.technology.split(',').slice(0, 3).map((tech, idx) => (
                            <span key={idx} className={`text-xs px-3 py-1 rounded-full bg-gray-800 ${colorScheme.icon} font-medium`}>
                                {tech.trim()}
                            </span>
                        ))}
                        {project.technology.split(',').length > 3 && (
                            <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400 font-medium">
                                +{project.technology.split(',').length - 3} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onReadMore(project)}
                    className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${colorScheme.bg} hover:shadow-lg`}
                >
                    <i className="fa-solid fa-arrow-right mr-2"></i>
                    View Details
                </motion.button>
            </div>

            {/* Hover border effect */}
            <motion.div
                animate={{ opacity: isHovered ? 1 : 0 }}
                className={`absolute inset-0 rounded-2xl border-2 ${colorScheme.border} pointer-events-none`}
            ></motion.div>
        </motion.div>
    );
};

// --- Project Modal Component (Same as original) ---
const ProjectModal: React.FC<{ project: PortfolioProject | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gray-800 rounded-xl max-w-2xl w-full p-8 shadow-2xl border-4 border-cyan-500 transform transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl transition-colors"
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <h3 className="text-3xl font-extrabold text-cyan-400 mb-2">{project.projectName}</h3>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
                    <p className="text-lg font-medium text-gray-300">{project.companyName}</p>
                    <p className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">{project.date}</p>
                </div>

                {/* Full Description */}
                <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Description</h4>
                    <p className="text-gray-300 leading-relaxed text-base">
                        {project.description}
                    </p>
                </div>

                {/* Technology Stack */}
                <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="text-xl font-semibold text-purple-400 mb-2">Technology Stack</h4>
                    <p className="text-cyan-300 font-mono text-sm leading-relaxed">
                        {project.technology}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

// --- Main Featured Projects Component ---
export default function FeaturedProjects() {
    const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

    const handleReadMore = (project: PortfolioProject) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="portfolio" className="bg-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl gradient-text font-extrabold mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                            Explore my professional portfolio showcasing diverse projects, technologies, and innovative solutions built throughout my career.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, index) => (
                            <EnhancedProjectCard
                                key={index}
                                project={project}
                                index={index}
                                onReadMore={handleReadMore}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={handleCloseModal}
            />
        </>
    );
}
