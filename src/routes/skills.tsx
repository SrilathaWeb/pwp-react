import React, { useEffect, useRef, useState } from "react";
// Removed: import { Tooltip } from "flowbite-react";
// Note: In a real React project, you'd replace 'react-router' with 'react-router-dom'
import { Link } from "react-router";

// --- Custom Tooltip Component (Replacement for flowbite-react.Tooltip) ---
const Tooltip: React.FC<{ content: string; children: React.ReactNode }> = ({ content, children }) => {
    // This custom component provides the hover-to-show description functionality
    return (
        // The group class allows the child to trigger hover effects on the parent
        <div className="group relative flex justify-center h-full w-full">
            {children}

            {/* Tooltip Popup: Hidden by default, appears on group-hover */}
            <div className="absolute z-50 bottom-full mb-2 hidden group-hover:block max-w-xs w-48 rounded-lg bg-gray-700 p-2 text-xs text-white shadow-xl pointer-events-none text-left">
                {content}
                {/* Arrow / Tip */}
                <div className="absolute left-1/2 bottom-[-4px] transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-700"></div>
            </div>
        </div>
    );
};


// --- Data Definitions ---

type Skill = {
    name: string;
    icon: string;
    href: string;
};

type SoftSkill = {
    name: string;
    icon: string;
    image?: string;
    img?: string;
    desc: string;
};

const backendSkills :Skill[] = [
    { name: 'Java', icon: '/icons/Java-Dark.svg', href:'/post/java' },
    { name: 'Spring', icon: '/icons/Spring-Dark.svg' , href:'/post/spring-boot'},
    { name: 'Hibernate', icon: '/icons/Hibernate-Dark.svg' , href:'/post/hibernate' },
    { name: 'REST', icon: '/icons/REST.png' , href:'/post/rest'},
    { name: 'Microservices', icon: '/icons/microservices.png' , href:'/post/microservices'},
    { name: 'GoLang', icon: '/icons/GoLang.svg', href:'/post/golang' },
];

const frontendSkills:Skill[] = [
    { name: 'HTML', icon: '/icons/HTML.svg' , href:'/post/html'},
    { name: 'CSS', icon: '/icons/CSS.svg' , href:'/post/flowbite'},
    { name: 'Angular', icon: '/icons/Angular-Dark.svg' , href:'/post/angular'},
    { name: 'React', icon: '/icons/React-Dark.svg' , href:'/post/react-intro'},
    { name: 'TailWind CSS', icon: '/icons/TailwindCSS-Dark.svg', href:'/post/tailwind' },
    { name: 'Node JS', icon: '/icons/NodeJS-Dark.svg', href:'/post/nodejs' },
    { name: 'Express JS', icon: '/icons/ExpressJS-Dark.svg' , href:'/post/express'},
    { name: 'Lit', icon: '/icons/Lit-Dark.svg' , href:'/post/lit'},
    {name:'TypeScript' , icon: '/icons/TypeScript.svg' , href:'/post/typescript'},
];

const databaseSkills:Skill[] = [
    { name: 'MySQL', icon: '/icons/MySQL-Dark.svg', href:'/post/sql' },
    { name: 'PostgreSQL', icon: '/icons/PostgreSQL-Dark.svg', href:'/post/ddl' },
    { name: 'Oracle', icon: '/icons/oracle.png' , href:'/post/oracle'},
];

const deploymentSkills:Skill[] = [
    {name:'Apache Tomcat', icon:'/icons/apache-tomcat.png', href:'/post/tomcat'},
    {name:'WebSphere', icon:'/icons/websphere.png', href:'/post/websphere'},
    { name: 'Jenkins', icon: '/icons/Jenkins-Dark.svg' , href:'/post/jenkins'},
    { name: 'Docker', icon: '/icons/Docker.svg', href:'/post/docker' },
];

const allSkills  = [
    { skills: backendSkills, label: 'Backend Technologies', percentage: 90},
    { skills: frontendSkills, label:'Frontend Technologies',percentage: 80},
    { skills: databaseSkills, label: 'Database Technologies', percentage: 70},
    { skills: deploymentSkills,label: 'Deployment Technologies',percentage: 70},
];

const softSkills: SoftSkill[] = [
    { name:"Motivational Leader", icon:'fa-solid fa-people-group', desc:'Inspire and guide teams to stay focused, motivated, and achieve shared goals.'},
    {name:"Communication", icon:"fa-solid fa-comments", desc:'Clearly convey complex technical concepts to diverse audiences.' },
    {name:"Thinker", icon:"fa-solid fa-brain", desc:'Approach challenges with logical reasoning and creative problem-solving.'},
    {name:"Planner", icon:"fa-solid fa-calendar-check", desc:'Strategically organize tasks, priorities, and milestones for efficient project delivery.' },
    { name: "Problem Solving", icon: "fa-solid fa-lightbulb", desc:'Analyze issues methodically and design effective, long-term solutions.'},
    { name: "Team Collaboration", icon: "fa-solid fa-people-arrows", desc:'Work seamlessly with cross-functional teams to deliver cohesive, high-quality outcomes.'},
    { name: "Adaptability", icon: "fa-solid fa-arrows-rotate", desc:'Quickly adjust to changing requirements, tools, and environments with a positive mindset.'},
    { name: "Time Management", icon: "fa-solid fa-clock", desc:'Balance multiple priorities and deliver consistent results under tight deadlines.'},
    { name: "Mentorship",icon: "fa-solid fa-chalkboard-user", desc:'Support and coach junior developers to grow their technical and professional skills.'},
    { name: "Cultural Awareness", icon: "fa-solid fa-globe", desc:'Collaborate effectively with international teams by understanding diverse perspectives.'},
    { name: "Attention to Detail", icon: "fa-solid fa-magnifying-glass", desc:'Ensure precision in code, design, and documentation to maintain quality and reliability.' },
    { name: "Strategic Planning",  icon: "fa-solid fa-chess-queen", desc:'Anticipate future challenges and align development goals with long-term business strategy'},
];


// --- useOnScreen Hook (Type-safe) ---
type ObserverOptions = {
    rootMargin?: string;
    threshold?: number | number[];
};

const useOnScreen = (options: ObserverOptions): [React.RefObject<HTMLDivElement | null>, boolean] => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
};


// --- ProgressBar Component (Scroll-animated) ---

type ProgressBarProps = {
    label: string;
    targetPercentage: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ label, targetPercentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    // Use a threshold of 0.5 to start the animation when half the component is visible
    const [ref, isVisible] = useOnScreen({ rootMargin: '0px', threshold: 0.5 });

    useEffect(() => {
        if (!isVisible) {
            setCurrentPercentage(0); // Reset animation when scrolled out of view
            return;
        }

        if (isVisible) {
            const duration = 1500;
            const startTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTime;
                const progress = Math.min(1, elapsed / duration);
                const value = Math.floor(progress * targetPercentage);

                setCurrentPercentage(value);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            // Start the animation
            requestAnimationFrame(animate);
        }
    }, [isVisible, targetPercentage]);

    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-medium text-white">{label}</h4>
                <span className="text-sm font-semibold text-purple-300">
                    {currentPercentage}%
                </span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-3">
                <div
                    className="bg-gradient-to-r from-blue-400 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${currentPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};


// --- SoftSkillScroll Component (Auto-scrolling display) ---

type SoftSkillScrollProps = {
    skills: SoftSkill[];
};

const SoftSkillScroll: React.FC<SoftSkillScrollProps> = ({ skills }) => {
    // Duplicate skills for seamless infinite scroll effect
    const scrollingSkills = [...skills, ...skills];

    const speed = '60s';
    const animationName = 'auto-scroll-skills';

    // Injecting keyframes and classes using <style> tag
    const styleTag = (
        <style>
            {`
            /* Define the keyframes for the continuous horizontal scroll */
            @keyframes ${animationName} {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }
            
            .animate-soft-scroll {
                animation: ${animationName} ${speed} linear infinite;
                /* Note: width must be 200% when doubling the items */
                width: 200%; 
                display: flex;
                flex-wrap: nowrap;
            }
        `}
        </style>
    );

    return (
        <>
            <div className="bg-gray-800">
            <h2 className="text-3xl sm:text-4xl gradient-text text-center mb-3 font-extrabold px-4">Soft Skills</h2>
            {styleTag}
            <div className="overflow-hidden py-6 rounded-xl shadow-2xl">
                <div className={`animate-soft-scroll flex flex-nowrap items-stretch hidden md:flex`}>
                    {scrollingSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-64 m-2 p-5 bg-gray-900 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-cyan-500/50 border border-gray-700 h-full"
                        >
                            {/* Using the custom Tooltip component */}
                            <Tooltip content={skill.desc}>
                                <div className="flex flex-col h-30 w-full">
                                    {/* Icon and Name */}
                                    <div className="flex items-center space-x-3 mb-3">
                                        <i className={`${skill.icon} text-2xl text-cyan-400`} />
                                        <h3 className="text-lg font-semibold text-purple-400">{skill.name}</h3>
                                    </div>
                                    {/* Description */}
                                    {/* Removed line-clamp-2 to show the first few words more clearly, though the full desc is in the tooltip */}
                                    <p className="text-sm text-gray-300">{skill.desc}</p>
                                </div>
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile/Tablet Responsive Grid for Soft Skills */}
            <div className="md:hidden bg-gray-800 px-4 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {softSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-700 transition-shadow duration-300 hover:shadow-cyan-500/50"
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <i className={`${skill.icon} text-xl text-cyan-400`} />
                                <h3 className="text-base font-semibold text-purple-400">{skill.name}</h3>
                            </div>
                            <p className="text-xs text-gray-300">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
};


// --- Main Skills Component ---

export default function Skills(){
    return (
        <>    <section id="skills" className="p-6 md:p-10 bg-gray-800 text-gray-200">
            <h2 className="text-5xl gradient-text text-center mb-10 font-extrabold">Technical Skills</h2>

            {/* Flex Container for the two main columns */}
            <div className="flex flex-col md:flex-row gap-8 max-w-full mx-auto">

                {/* 1. Progress Bars (Mobile: Top, Desktop: Right)
                     - order-1 (Mobile: Top)
                     - md:order-2 (Desktop: Right)
                */}
                <div className="md:w-2/5 w-full order-1 md:order-2 p-6 ">
                    <h3 className="text-3xl text-center mb-6 font-bold text-white">
                        Technical Proficiency
                    </h3>
                    {allSkills.map((data, index) => (
                        <ProgressBar
                            key={index}
                            label={data.label}
                            targetPercentage={data.percentage}
                        />
                    ))}
                </div>

                {/* 2. Detailed Skills List (Mobile: Bottom, Desktop: Left)
                     - order-2 (Mobile: Bottom)
                     - md:order-1 (Desktop: Left)
                */}
                <div className="md:w-3/5 w-full order-2 md:order-1 p-4 rounded-xl">
                    {allSkills.map((skillsGroup, groupIndex) => (
                        <div key={groupIndex} className="mb-8">
                            <div className="flex items-center mb-4">
                                <h3 className="text-2xl text-left mr-5 font-semibold text-white">{skillsGroup.label}</h3>
                                <i className="fa-solid fa-code text-xl text-purple-400"/>
                            </div>
                            <div
                                className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 text-center p-3  rounded-lg shadow-inner">
                                {skillsGroup.skills.map((skill, index) => (
                                    <Link
                                        key={index}
                                        to={skill.href}
                                        className="p-3 bg-purple-500 rounded-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 flex flex-col items-center justify-center text-sm font-medium text-gray-100"
                                    >
                                        {/* Placeholder for images. In a real app, this would use a proper path */}
                                        <img src={skill.icon} className="w-8 h-8 mx-auto mb-1" alt={skill.name}
                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/32x32/1f2937/FFFFFF?text=?"}}
                                        />
                                        <p>{skill.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    <SoftSkillScroll skills={softSkills} />
    </>
    )
}