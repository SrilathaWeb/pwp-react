import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const BlogSections: React.FC = () => {
    return (
        <section className="bg-gray-800 py-12 sm:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text text-center font-extrabold mb-12">
                    Explore My Content
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Video Blog Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <Link to="/videoblog">
                            <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/50 transition duration-300">
                                {/* Background Image/Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-pink-600 to-orange-600"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex flex-col items-center justify-center text-center px-6">
                                    <i className="fa-solid fa-video text-5xl text-white mb-4"></i>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Video Blog</h3>
                                    <p className="text-gray-200 text-sm sm:text-base mb-4">
                                        Travel vlogs, adventures, and capturing moments around the world
                                    </p>
                                    <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
                                        Watch Now →
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Technical Blog Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <Link to="/technicalblog">
                            <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition duration-300">
                                {/* Background Image/Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex flex-col items-center justify-center text-center px-6">
                                    <i className="fa-solid fa-code text-5xl text-white mb-4"></i>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Technical Blog</h3>
                                    <p className="text-gray-200 text-sm sm:text-base mb-4">
                                        In-depth articles on web development, programming, and software design
                                    </p>
                                    <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
                                        Read Articles →
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BlogSections;
