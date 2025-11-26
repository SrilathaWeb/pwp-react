import React, { useEffect, useRef, useState } from "react";
import RolesDropAnimation from "../components/drop-animation.tsx";

// --- Data Structures ---
type TimelineEntry = {
    title: string;
    company: string;
    date: string;
    bullets: string[] | string;
    mainColor: 'cyan' | 'pink' | 'purple'; // For styling
    isEducation?: boolean;
};

const timelineData: TimelineEntry[] = [
    // ... (Your timeline entries here) ...
    {
        title: "Deep Dive (Full Stack Web Development)",
        company: "Central New Mexico Community College, USA",
        date: "Nov - Dec 2025",
        bullets: [
            "PWP (Personal Web Portfolio): Designed and built a responsive portfolio using <b>React Router, Tailwind CSS, and Vite</b>.",
            "WanderList App: Bucket list platform for travelers built with <b>React, Tailwind CSS, Express JS, PostgreSQL</b>.",
            "🏆 Hackathon Winner: Built an AI optimization platform with <b>React Router, Tailwind CSS, LLM Studio</b>."
        ],
        mainColor: 'pink',
        isEducation:true
    },
    {
        title: "Lead Full Stack Developer",
        company: "Cognizant Technology Solutions",
        date: "2014 – 2023",
        bullets: [
            "Led a team building scalable microservices using <b>Java, Spring, Hibernate, Angular, and Cloud</b>.",
            "Delivered solutions for <b>ING Belgium</b>, <b>Anthem Inc.</b>, and <b>Maritz Inc.</b>",
            "Implemented <b>CI/CD pipelines</b> with <b>Jenkins, Docker,</b> and ING Cloud reducing release time by 40%.",
            "Mentored developers and maintained code quality via SonarQube and Git workflows.",
            "Worked on-site in <b>Belgium</b> with ING teams for 2 years, following agile best practices."
        ],
        mainColor: 'cyan'
    },
    {
        title: "Software Developer",
        company: "Polaris Financial Technology, India",
        date: "2010 – 2014",
        bullets: [
            "Developed and maintained core banking apps for <b>CITI Bank</b> using <b>Java, JSP, and Spring</b>.",
            "Improved backend performance by 25% through optimized SQL queries and data modeling.",
            "Collaborated closely with teams on requirements and design."
        ],
        mainColor: 'purple'
    },
    {
        title: "Bachelor of Technology (IT)",
        company: "Sridevi Women’s Engineering College, JNTU University, India",
        date: "2009",
        bullets: "Specialized in Information Technology.",
        mainColor: 'cyan',
        isEducation:true
    },
    {
        title: "Diploma (EIE)",
        company: "SBTET, Hyderabad, India",
        date: "2006",
        bullets: "Specialized in Electronics and Instrumentation Engineering.",
        mainColor: 'pink',
        isEducation:true
    }
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
            // CRITICAL CHANGE: Set state based on the current intersection status (true or false)
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
// Helper Component for a single timeline item
const TimelineItem: React.FC<{ entry: TimelineEntry }> = ({ entry }) => {
    // Each item uses its own observer hook
    const [ref, isVisible] = useOnScreen({ rootMargin: '0px', threshold: 0.1 }); // Trigger threshold at 10% visible

    // Dynamic classes based on data
    const dotColor = `bg-${entry.mainColor}-500`;
    const titleColor = `text-${entry.mainColor}-300`;

    // Determine content of the body (list or paragraph)
    const ContentBody = Array.isArray(entry.bullets) ? (
        <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed space-y-2">
            {entry.bullets.map((bullet, i) => (
                <li key={i}>
                    {/* Safely inject bolded keywords using dangerouslySetInnerHTML */}
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                </li>
            ))}
        </ul>
    ) : (
        <p className="text-gray-300 text-sm">{entry.bullets}</p>
    );

    return (

        <div
            // Attach the ref from the hook
            ref={ref}
            // Use isVisible to trigger the transform and opacity changes
            className={`flex items-start space-x-3 sm:space-x-4 transition-opacity transition-transform duration-700 ease-in-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Timeline Line & Dot Container */}
            <div className="flex flex-col items-center">
                {/* The Dot */}
                <div className={`flex-shrink-0 relative w-4 sm:w-5 h-4 sm:h-5 rounded-full ring-4 ring-black mt-1 ${dotColor}`}></div>
            </div>

            {/* Content Body */}
            <div className="flex-1 min-w-0">
                <h3 className={`text-lg sm:text-2xl font-semibold ${titleColor}`}>{entry.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-2">{entry.company} | {entry.date}</p>
                {ContentBody}
            </div>
        </div>

    );
};
export default function Timeline() {

    // Track timeline section visibility
    const [timelineRef, timelineVisible] = useOnScreen({
        threshold: 0.25
    });

    // Trigger only once
    const [showRoles, setShowRoles] = useState(false);

    useEffect(() => {
        if (timelineVisible) {
            setShowRoles(true);
        }
    }, [timelineVisible]);



    return (
        <section id="timeline " ref={timelineRef}  className="mx-auto px-4 sm:px-6 py-10 bg-gray-800 text-gray-200">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-center gradient-text mb-10">
                Professional Experience
            </h2>

            <div className="relative max-w-full mx-auto flex flex-col space-y-8 sm:space-y-10">

                {/* The continuous line: Positioned absolutely down the left side */}
                {/* This line provides the backbone for the timeline visualization */}

                <div className="absolute left-2 sm:left-3 w-1 bg-gray-600 h-full"></div>

                {timelineData.map((entry, index) => (

                    <TimelineItem
                        key={index}
                        entry={entry}
                    />
                ))}

            </div>
            <div className="mt-10 relative z-[999]">
            <RolesDropAnimation isActive={showRoles} />
            </div>
        </section>
    );
}