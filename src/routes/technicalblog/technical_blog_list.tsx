
import React, {useState} from "react";
//import {ArrowRightIcon, Badge, Card} from "flowbite-react";
//import {Link} from "react-router";
import {type Blog, technicalBlogData} from "./technical_blog_data.tsx";
//import {DivSlider} from "./div_slider.tsx";
import {Badge, Button, Card, ChevronDownIcon, ChevronUpIcon} from "flowbite-react";
import TypewriterText from "../typewriter.tsx";
import { Navigation } from "../../layouts/custom-nav.tsx";



export const TechnicalBlogList: React.FC = () => {

    const [expandedId, setExpandedId] = useState<string | null>(null)
    const [searchTitle, setSearchTitle] = useState("")

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

 const filteredBlogList = technicalBlogData.filter((blog: Blog) =>
     blog.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
         blog.tags.some(tag => tag.toLowerCase().includes(searchTitle.toLowerCase()))
 );


    return (
        <>
            {/* Banner Section */}
            <section className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center">
                {/* Navigation */}
                <nav className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center">
                    <Navigation />
                </nav>

                {/* Banner Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Technical Blog</h1>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        <i className="fa-solid fa-code text-cyan-400 mr-2"></i>
                        Explore in-depth articles on web development, programming patterns, and software design principles.
                    </p>
                </div>

                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
            </section>

            <div className="container mx-auto py-10 px-4">

               <TypewriterText text="All Articles" speed={120} pause={1000} style="text-2xl md:text-3xl font-extrabold text-center mb-8 gradient-text"/>



            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search blogs by title or tag..."
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="w-full sm:w-1/2 shadow-lg border border-black focus:ring-2 focus:ring-purple-600"
                />
            </div>

            <div className="">
                {filteredBlogList.map((post) => (
                    <Card key={post.id}
                        className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white shadow-lg" >
                        <div className="flex flex-col h-full justify-between">

                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                                <Button onClick={() => toggleExpand(post.id)}  color="purple"
                                    className="rounded-full p-1 bg-purple-700 hover:bg-purple-800 transition"  >
                                    {expandedId === post.id ? (
                                        <ChevronUpIcon className="w-5 h-5 text-white" />
                                    ) : (
                                        <ChevronDownIcon className="w-5 h-5 text-white" />
                                    )}
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags.map((tag, index) => (
                                    <Badge  key={index}  color="light"  className="bg-yellow-300 text-black font-semibold text-xs px-2 py-1"
                                            onClick={() => toggleExpand(post.id)}  >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    expandedId === post.id
                                        ? "max-h-64 mt-3 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-sm text-gray-100 mb-3 px-2 leading-relaxed">
                                    This article explores <b>{post.title}</b> — covering
                                    essential concepts, best practices, and real-world coding
                                    examples to help you strengthen your understanding of{" "}
                                   <span className="text-cyan-500 font-bold"> {post.tags.join(", ")}.</span>
                                </p>

                                <div className="text-left">
                                    <a href={`/post/${post.id}`}  className="inline-flex items-center text-cyan-300 hover:text-cyan-400 font-semibold">
                                        Read Full Article →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            </div>
        </>
    );
}