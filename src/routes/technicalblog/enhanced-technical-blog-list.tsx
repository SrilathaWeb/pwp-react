import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { type Blog, technicalBlogData } from "./technical_blog_data.tsx";
import { Navigation } from "../../layouts/custom-nav.tsx";

export const EnhancedTechnicalBlogList: React.FC = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    // Get all unique tags
    const allTags = Array.from(
        new Set(technicalBlogData.flatMap((blog) => blog.tags))
    );

    // Filter blogs based on search and selected tag
    const filteredBlogList = technicalBlogData.filter((blog: Blog) => {
        const matchesSearch =
            blog.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
            blog.tags.some((tag) =>
                tag.toLowerCase().includes(searchTitle.toLowerCase())
            );

        const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    return (
        <>
            {/* Banner Section */}
            <section className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "50px 50px"
                    }}
                />

                {/* Navigation */}
                <nav className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center">
                    <Navigation />
                </nav>

                {/* Banner Content */}
                <motion.div
                    className="relative z-20 text-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Technical Blog
                    </h1>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        <i className="fa-solid fa-code text-cyan-400 mr-2"></i>
                        Explore in-depth articles on web development, programming patterns, and software design principles.
                    </p>
                </motion.div>

                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
            </section>

            {/* Content Section */}
            <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Search and Filter Section */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Search Input */}
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Search articles by title or tag..."
                                value={searchTitle}
                                onChange={(e) => setSearchTitle(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 border-2 border-purple-500 rounded-lg focus:border-cyan-400 focus:outline-none transition duration-300 shadow-lg"
                            />
                        </div>

                        {/* Tag Filter */}
                        <div className="mb-4">
                            <p className="text-gray-300 text-sm font-semibold mb-3">
                                <i className="fa-solid fa-filter mr-2 text-cyan-400"></i>
                                Filter by tag:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedTag(null)}
                                    className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                                        selectedTag === null
                                            ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                                >
                                    All
                                </motion.button>
                                {allTags.map((tag) => (
                                    <motion.button
                                        key={tag}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                                            selectedTag === tag
                                                ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                        }`}
                                    >
                                        {tag}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Results count */}
                        <p className="text-gray-400 text-sm mt-4">
                            <i className="fa-solid fa-book mr-2 text-purple-400"></i>
                            Found {filteredBlogList.length} article{filteredBlogList.length !== 1 ? "s" : ""}
                        </p>
                    </motion.div>

                    {/* Blog Cards Grid */}
                    {filteredBlogList.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBlogList.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="group h-full"
                                >
                                    <div className="relative h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden border-2 border-purple-500/50 hover:border-cyan-400 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20">
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-300 z-0" />

                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                                            {/* Title */}
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition duration-300 line-clamp-2">
                                                {post.title}
                                            </h3>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-block px-3 py-1 bg-purple-500/30 text-cyan-300 text-xs font-semibold rounded-full border border-purple-500/50 hover:border-cyan-400 hover:bg-purple-500/50 transition duration-300 cursor-pointer"
                                                        onClick={() => setSelectedTag(tag)}
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                                                Dive into <span className="text-cyan-400 font-semibold">{post.title}</span> and explore essential concepts, best practices, and practical examples to master {post.tags.join(", ")}.
                                            </p>

                                            {/* Read More Button */}
                                            <motion.a
                                                href={`/post/${post.id}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition duration-300 shadow-lg"
                                            >
                                                <i className="fa-solid fa-arrow-right mr-2"></i>
                                                Read Article
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="text-center py-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <i className="fa-solid fa-search text-gray-400 text-4xl mb-4 block"></i>
                            <p className="text-gray-400 text-lg">
                                No articles found matching your search. Try different keywords or tags.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>
        </>
    );
}
