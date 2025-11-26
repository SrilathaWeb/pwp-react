import { motion } from "framer-motion";
import TypewriterText from "../routes/typewriter.tsx";
import { Navigation } from "../layouts/custom-nav.tsx";

interface HeroSectionProps {
    professionalRoles: string[];
}

export default function HeroSection({ professionalRoles }: HeroSectionProps) {
    // Floating animation variants
    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    // Fade in animation
    const fadeInVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.3 }
    };

    // Rotating gradient background
    const bgVariants = {
        animate: {
            background: [
                "linear-gradient(135deg, rgba(17, 24, 39, 1), rgba(30, 27, 75, 1))",
                "linear-gradient(225deg, rgba(17, 24, 39, 1), rgba(29, 78, 137, 1))",
                "linear-gradient(315deg, rgba(17, 24, 39, 1), rgba(76, 29, 149, 1))",
                "linear-gradient(45deg, rgba(17, 24, 39, 1), rgba(30, 27, 75, 1))"
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear" as const
            }
        }
    };

    return (
        <motion.section
            variants={bgVariants}
            animate="animate"
            className="relative flex min-h-screen items-center justify-center py-12 overflow-hidden"
        >
            {/* Animated gradient background elements */}
            <div className="absolute inset-0 z-0">
                {/* Animated blob 1 */}
                <motion.div
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -40, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
                ></motion.div>

                {/* Animated blob 2 */}
                <motion.div
                    animate={{
                        x: [0, -30, 20, 0],
                        y: [0, 40, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
                ></motion.div>

                {/* Animated blob 3 */}
                <motion.div
                    animate={{
                        x: [0, 20, -30, 0],
                        y: [0, 30, -40, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
                ></motion.div>
            </div>

            {/* Navigation (Fixed Top) */}
            <nav className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 flex justify-center z-30">
                <Navigation />
            </nav>

            {/* Main Content */}
            <div className="relative z-20 w-full h-auto max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 gap-6 md:gap-8 mt-20 md:mt-0">

                {/* Text Content (Left Side) */}
                <motion.div
                    className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left p-4 md:p-8 space-y-6"
                    initial="initial"
                    animate="animate"
                    variants={fadeInVariants}
                >
                    {/* Typewriter heading */}
                    <TypewriterText
                        roles={professionalRoles}
                        speed={80}
                        pause={1500}
                        style="text-4xl sm:text-5xl md:text-6xl font-bold
                                min-h-[3rem] sm:min-h-[4rem]
                                bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
                                bg-clip-text text-transparent
                                drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                                mb-4"
                    />

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-gray-300 text-sm sm:text-lg mb-2 leading-relaxed"
                    >
                        Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold text-2xl">Srilatha</span>
                    </motion.p>

                    {/* Description with gradient */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg md:max-w-none mx-auto"
                    >
                        A passionate software developer with hands-on experience building
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> scalable </span>
                        front-end and back-end solutions for
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 font-semibold"> global enterprises</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <i className="fa-solid fa-arrow-right mr-2"></i>
                            View My Work
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                            onClick={() => window.open("https://drive.google.com/file/d/1KWTlwPx8nRpVHX15J7hkci0yjisvGoY0/view", "_blank")}
                        >
                            <i className="fa-solid fa-download mr-2"></i>
                            Download Resume
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center md:justify-start gap-6 pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <motion.a
                            href="https://github.com/SrilathaWeb"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-2xl text-gray-400 hover:text-cyan-400 transition"
                        >
                            <i className="fa-brands fa-github"></i>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/srilatha-alla/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-2xl text-gray-400 hover:text-blue-400 transition"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </motion.a>
                        <motion.a
                            href="https://instagram.com/srilathait.a"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-2xl text-gray-400 hover:text-cyan-400 transition"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </motion.a>
                        <motion.a
                            href="https://www.youtube.com/@sathvikreddy16"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-2xl text-gray-400 hover:text-red-400 transition"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Image Section (Right Side) */}
                <motion.div
                    className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center relative p-4 md:p-0"
                    initial="initial"
                    animate="animate"
                    variants={fadeInVariants}
                >
                    {/* Glowing border effect */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)",
                                "0 0 40px rgba(6, 182, 212, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)",
                                "0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                        className="relative w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto h-auto"
                    >
                        <motion.img
                            src="/SrilathaAlla.jpg"
                            alt="Srilatha Alla"
                            variants={floatingVariants}
                            animate="animate"
                            className="w-full h-auto object-cover object-center rounded-2xl shadow-2xl border-4 border-transparent transition-all duration-500 ease-in-out hover:scale-[1.02]"
                            style={{
                                maxHeight: '50vh',
                                minHeight: '300px',
                                objectPosition: 'center',
                                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3))',
                                backgroundClip: 'padding-box',
                                borderImage: 'linear-gradient(135deg, #06b6d4, #a855f7, #ec4899) 1'
                            }}
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://placehold.co/400x500/1e3a8a/ffffff?text=Srilatha+Alla";
                            }}
                        />
                    </motion.div>

                    {/* Floating tech badges */}
                    <motion.div
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        {/*{['Java', 'React', 'Node.js', 'Spring','Microservices'].map((tech, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur border border-cyan-400/50 rounded-full text-xs font-semibold text-white"
                            >
                                {tech}
                            </motion.div>
                        ))}*/}
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.button
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 text-2xl z-30 bg-none border-none cursor-pointer hover:text-cyan-300 transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <i className="fa-solid fa-chevron-down"></i>
            </motion.button>
        </motion.section>
    );
}
