import { useLocation } from "react-router";

// Navigation Component
export const Navigation = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleNavClick = (sectionId: string) => {
        if (isHomePage) {
            // If already on home, just scroll to section
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Navigate to home first, then scroll to section
            window.location.href = `/#${sectionId}`;
        }
    };

    const handleBlogNavigation = (path: string) => {
        // Navigate to the blog page and scroll to top
        window.location.href = path;
    };

    return (
        <div className="flex flex-wrap gap-2 md:gap-4 p-2 bg-gray-900/50 backdrop-blur-sm rounded-full shadow-lg justify-center max-w-4xl">
            {['Home','About', 'Skills','Portfolio', 'Timeline', 'Contact'].map(item => (
                <button
                    key={item}
                    onClick={() => item.toLowerCase() === 'home' ? window.location.href = '/' : handleNavClick(item.toLowerCase())}
                    className="text-white hover:text-cyan-400 px-2 md:px-3 py-1 text-xs md:text-sm font-medium transition duration-200 bg-none border-none cursor-pointer"
                >
                    {item}
                </button>
            ))}
            <button
                onClick={() => handleBlogNavigation('/videoblog')}
                className="text-white hover:text-cyan-400 px-2 md:px-3 py-1 text-xs md:text-sm font-medium transition duration-200 bg-none border-none cursor-pointer"
            >
                Video Blog
            </button>
            <button
                onClick={() => handleBlogNavigation('/technicalblog')}
                className="text-white hover:text-cyan-400 px-2 md:px-3 py-1 text-xs md:text-sm font-medium transition duration-200 bg-none border-none cursor-pointer"
            >
                Technical Blog
            </button>
        </div>
    );
};

// Custom Nav Component for Video Blog Page
export function CustomNav() {
    const location = { pathname: window.location.hash.substring(1) || '/' };

    if (location.pathname === '/videoblog') {
        return (
            <nav className="absolute top-8 left-0 right-5 flex justify-center z-10 space-x-6">
                <Navigation/>
            </nav>
        );
    }

    return null;
}