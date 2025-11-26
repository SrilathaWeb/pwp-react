import React, { useState } from "react";

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

// --- Project Card Component ---
const ProjectCard: React.FC<{ project: PortfolioProject; onReadMore: (project: PortfolioProject) => void }> = ({ project, onReadMore }) => {
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

    // Determine color based on index or main technology for visual variety
    const getColor = (name: string) => {
        if (name.includes('React')) return 'border-cyan-500';
        if (name.includes('Java')) return 'border-orange-500';
        if (name.includes('ING')) return 'border-purple-500';
        return 'border-blue-500';
    };

    // Simple text preview, ensures short descriptions don't look empty
    const shortDescription = project.description.length > 50
        ? project.description.substring(0, 50) + '...'
        : project.description;


    return (
        <div
            className={`bg-gray-900 rounded-xl p-6 shadow-2xl transition-all duration-300 transform 
                        hover:-translate-y-1 hover:shadow-cyan-500/50 
                        border-t-4 ${getColor(project.technology)} flex flex-col justify-between`}
        >
            <div>
                {/* Header and Company/Date */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-cyan-400">{project.projectName}</h3>
                        <h4 className="text-gray-400 text-sm">{project.companyName}</h4>
                    </div>
                    <i className={`${iconClass} text-2xl text-purple-400`}></i>
                </div>

                <div className="flex items-center text-gray-500 text-xs mb-3">
                    <i className="fa fa-calendar text-white p-1 rounded bg-gray-700" aria-hidden="true"></i>
                    <span className="ml-2 font-medium">{project.date}</span>
                </div>

                {/* Short Description */}
                <p className="text-gray-300 text-sm mb-4 min-h-[4rem]">
                    {shortDescription}
                </p>

                {/* Tech Stack Preview */}
                {/*<p className="text-sm font-semibold text-white mb-4 border-t border-gray-700 pt-2">
                    Key Tech: <span className="text-purple-300 font-normal">{project.technology.split(',')[0]}...</span>
                </p>*/}
            </div>

            {/* Read More Button */}
            <button
                onClick={() => onReadMore(project)}
                className="w-full py-2 mt-auto bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition duration-300 shadow-md"
            >
                Read More / Full Details
            </button>
        </div>
    );
};

// --- Project Modal Component ---
const ProjectModal: React.FC<{ project: PortfolioProject | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        // Overlay
        <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose} // Close on clicking outside
        >
            {/* Modal Content */}
            <div
                className="bg-gray-800 rounded-xl max-w-2xl w-full p-8 shadow-2xl border-4 border-cyan-500 transform scale-100 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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
            </div>
        </div>
    );
};


// --- Main Portfolio Component ---
export default function Portfolio () {
    const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

    const handleReadMore = (project: PortfolioProject) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="portfolio" className="bg-gray-800 py-10 px-4 md:px-10">
                <h2 className="text-4xl md:text-5xl gradient-text text-center mb-10 font-extrabold">Featured Projects</h2>
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onReadMore={handleReadMore}
                        />
                    ))}
                </div>
            </section>

            {/* Modal rendering */}
            <ProjectModal
                project={selectedProject}
                onClose={handleCloseModal}
            />
        </>
    )
}