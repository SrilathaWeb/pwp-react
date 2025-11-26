import { useEffect, useState } from 'react';

export default function LoadingSpinner() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide loading spinner after page has fully loaded
        const handleLoad = () => {
            // Give a brief moment for all assets to fully render
            setTimeout(() => {
                setIsVisible(false);
            }, 500);
        };

        // Check if document is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center z-[999]">
            {/* Animated gradient spinner */}
            <div className="relative w-20 h-20">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin"></div>

                {/* Middle spinning ring (opposite direction) */}
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-pink-400 border-l-cyan-300 animate-spin" style={{ animationDirection: 'reverse' }}></div>

                {/* Inner dot */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
            </div>

            {/* Loading text */}
            <div className="absolute bottom-20 text-center">
                <p className="text-cyan-400 font-semibold text-lg animate-pulse">Loading your portfolio...</p>
            </div>
        </div>
    );
}
