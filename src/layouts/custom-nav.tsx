import React, { useEffect,  useState } from "react";
import {NavLink} from "react-router";

//import {Navigation} from "./navigation.tsx";
// Mocking Navigation.tsx
const Navigation = () => (
    <div className="flex space-x-4 p-2 bg-gray-900/50 backdrop-blur-sm rounded-full shadow-lg">
        {['Home','About', 'Skills','Portfolio', 'Timeline', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-cyan-400 px-3 py-1 text-sm font-medium transition duration-200">{item}</a>
        ))}
        <a  className="text-white hover:text-cyan-400 px-3 py-1 text-sm font-medium transition duration-200"
            key='VIDEO BLOG'
            href='/videoblog'>
            VIDEO BLOG
        </a>
        <NavLink className="text-white hover:text-cyan-400 px-3 py-1 text-sm font-medium transition duration-200"
            key='TECHNICAL BLOG'
            to='/technicalblog'>
            TECHNICAL BLOG
        </NavLink>
    </div>
);

// Mocking TypewriterText.tsx - UPDATED TO HANDLE MULTIPLE ROLES
const TypewriterText: React.FC<{
    roles: string[]; // Changed from 'text' to 'roles' (array)
    speed: number;
    deleteSpeed: number; // New prop for backspace speed
    pause: number;
    style: string
}> = ({ roles, speed, deleteSpeed, pause, style }) => {

    const [displayedText, setDisplayedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Select the current role to display
    const currentRole = roles[roleIndex % roles.length];

    useEffect(() => {
        let timer: NodeJS.Timeout;

        // Function to handle adding one character
        const handleType = () => {
            setDisplayedText(prev => currentRole.substring(0, prev.length + 1));
        };

        // Function to handle deleting one character (backspace effect)
        const handleDelete = () => {
            setDisplayedText(prev => currentRole.substring(0, prev.length - 1));
        };

        // Determine the delay based on typing/deleting state
        let delay = isDeleting ? deleteSpeed : speed;

        if (isDeleting) {
            if (displayedText.length === 0) {
                // Done deleting, switch to next role
                setIsDeleting(false);
                setRoleIndex(prev => (prev + 1) % roles.length);
                delay = 800; // Short pause before starting the next word
            } else {
                // Still deleting
                timer = setTimeout(handleDelete, delay);
            }
        } else {
            if (displayedText.length < currentRole.length) {
                // Still typing
                timer = setTimeout(handleType, delay);
            } else {
                // Done typing, pause, then start deleting
                delay = pause;
                timer = setTimeout(() => setIsDeleting(true), delay);
            }
        }

        return () => clearTimeout(timer);
    }, [roleIndex, isDeleting, displayedText, currentRole, roles.length, speed, deleteSpeed, pause]);

    return (
        <h1 className={style}>
            {displayedText}
            {/* Pulsing cursor at the end of the text */}
            <span className="inline-block w-1 h-8 bg-pink-500 ml-1 animate-pulse"></span>
        </h1>
    );
};

/*// Mocking RolesDropAnimation.tsx
const RolesDropAnimation = () => (
    <div className="p-4 bg-gray-900/70 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/50">
        <p className="text-sm font-mono text-cyan-300">Roles: Backend, Frontend, Cloud</p>
    </div>
);

// --- MAIN COMPONENT ---*/

export function CustomNav (){
    // Mocking useLocation for environment compatibility
    const location = { pathname: window.location.hash.substring(1) || '/' };
    // const location=useLocation(); // Original line

    // Define the roles array for the typewriter component
    const professionalRoles = [
        "Full Stack Developer",
        "Backend Developer",
        "Cloud Engineer",
        "Frontend Specialist",
        "UI/UX Designer"
    ];

    if (location.pathname === '/videoblog' ){
        return (
            <nav className=" absolute top-8 left-0 right-5 flex justify-center z-10 space-x-6">
                <Navigation/>
            </nav>
        )

  /*  } else if (location.pathname != '/' ){
        return (
            <section className="code-banner p-7">
                <nav className="top-8 left-0 right-5 flex justify-center z-10 space-x-6">
                    <Navigation/>
                </nav>
            </section>
        )*/
    } else{
        return (
            <section className="relative flex h-screen items-center justify-center bg-gray-900">
                {/* Navigation (Fixed Top) */}
                <nav className="absolute top-8 left-0 right-0 flex justify-center z-30 space-x-6">
                    <Navigation />
                </nav>

                {/* Main Content (Text Left, Image Right - Responsive Two-Column) */}
                <div className="relative z-20 w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12">

                    {/* 1. Text Content (Left Side on Desktop, Top on Mobile) */}
                    <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left p-4 md:p-8 space-y-4">
                        <TypewriterText
                            roles={professionalRoles} // Now using roles array
                            speed={80} // Typing speed
                            deleteSpeed={40} // Deleting speed (faster than typing)
                            pause={1500} // Pause after typing a role
                            style="text-4xl sm:text-5xl md:text-6xl font-bold
                            min-h-[3rem] sm:min-h-[4rem]
                            bg-gradient-to-r from-purple-400 to-cyan-400
                            bg-clip-text text-transparent
                            drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                            mb-4"
                        />
                        <p className="text-gray-200 text-sm sm:text-lg mb-4 leading-relaxed max-w-lg md:max-w-none mx-auto">
                            Hello, I’m <span className="text-cyan-400 font-extrabold text-2xl">Srilatha</span> — a passionate software developer with hands-on experience building scalable front-end and back-end solutions for global enterprises.
                        </p>
                        {/* Placeholder for a call-to-action button */}
                        <button className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 transition duration-300 transform hover:scale-[1.05]">
                            View My Work
                        </button>
                    </div>

                    {/* 2. Image and Roles Animation (Right Side on Desktop, Bottom on Mobile) */}
                    <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center h-full relative p-4 md:p-0">

                        {/* Image Container */}
                        <div className="relative w-full max-w-sm md:max-w-none mx-auto h-auto md:h-2/3 mt-20 md:mt-0">
                            {/* The actual image with requested rounded corners and border */}
                            <img
                                src="/SrilathaAlla.jpg"
                                alt="Srilatha Alla"
                                className="w-full h-full object-cover object-center rounded-2xl shadow-2xl border-4 border-cyan-400 transition-all duration-500 ease-in-out hover:scale-[1.01]"
                                style={{ maxHeight: '60vh', objectPosition: 'center' }}
                                // Fallback for image loading
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x500/1e3a8a/ffffff?text=Srilatha+Alla"}}
                            />

                        </div>

                    </div>

                </div>

            </section>
        )
    }
}