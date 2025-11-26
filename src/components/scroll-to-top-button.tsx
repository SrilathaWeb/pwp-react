import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up and tear down the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll the window to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
                        p-4 rounded-full shadow-lg bg-cyan-600 text-white
                        hover:bg-cyan-500 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-300`}
            aria-label="Scroll to top"
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <i className="fa-solid fa-arrow-up text-xl"></i>
        </motion.button>
    );
};

export default ScrollToTopButton;
