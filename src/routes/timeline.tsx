export default function Timeline(){
    return (
        <>

            <section id="experience" className="mx-auto px-6 py-10 bg-gray-800 text-gray-200">
                <h2 className="text-4xl font-extrabold text-center gradient-text mb-10">
                    Professional Experience
                </h2>

                {/* Timeline container */}
                <div className="flex flex-col  pl-6  h-full space-y-10">



                    <div className="flex items-start space-x-4">
                        <div className="absolute h-380 md:h-200 w-1 bg-cyan-400 ml-2"></div>

                        <div className="flex-shrink-0 mt-1">
                            <div className="relative w-5 h-5 rounded-full bg-pink-500 ring-4 ring-black"></div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-pink-300">
                                Deep Dive (Full Stack Web Development)
                            </h3>
                            <p className="text-gray-400 text-sm mb-2">
                                Central New Mexico Community College, USA | Nov - Dec 2025
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed space-y-2">
                                <li>
                                    <b>PWP (Personal Web Portfolio):</b> Designed and built a responsive portfolio using <b>React Router, Tailwind CSS, and Vite</b>.
                                </li>
                                <li>
                                    <b>WanderList App:</b> Bucket list platform for travelers built with <b>React, Tailwind CSS, Express JS, PostgreSQL</b>.
                                </li>
                                <li>
                                    🏆 <b>Hackathon Winner:</b> Built an AI optimization platform with <b>React Router, Tailwind CSS, LLM Studio</b>.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                            <div className="relative w-5 h-5 rounded-full bg-cyan-500 ring-4 ring-black "></div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-300">Lead Full Stack Developer</h3>
                            <p className="text-gray-400 text-sm mb-2">Cognizant Technology Solutions | 2014 – 2023</p>
                            <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed space-y-2">
                                <li>Led a team building scalable microservices using Java, Spring, Hibernate, Angular, and Cloud.</li>
                                <li>Delivered solutions for <b>ING Belgium</b>, <b>Anthem Inc.</b>, and <b>Maritz Inc.</b></li>
                                <li>Implemented CI/CD pipelines with Jenkins, Docker, and ING Cloud reducing release time by 40%.</li>
                                <li>Mentored developers and maintained code quality via SonarQube and Git workflows.</li>
                                <li>Worked on-site in <b>Belgium</b> with ING teams for 2 years, following agile best practices.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                            <div className="relative  w-5 h-5 rounded-full bg-purple-500 ring-4 ring-black"></div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-purple-300">Software Developer</h3>
                            <p className="text-gray-400 text-sm mb-2">Polaris Financial Technology, India | 2010 – 2014</p>
                            <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed space-y-2">
                                <li>Developed and maintained core banking apps for <b>CITI Bank</b> using Java, JSP, and Spring.</li>
                                <li>Improved backend performance by 25% through optimized SQL queries and data modeling.</li>
                                <li>Collaborated closely with teams on requirements and design.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                            <div className="relative  w-5 h-5 rounded-full bg-cyan-500 ring-4 ring-black"></div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-300">Bachelor of Technology (IT)</h3>
                            <p className="text-gray-400 text-sm mb-2">Sridevi Women’s Engineering College, JNTU University, India | 2009</p>
                            <p className="text-gray-300 text-sm">Specialized in Information Technology.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                            <div className="relative w-5 h-5 rounded-full bg-pink-500 ring-4 ring-black"></div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-pink-300">Diploma (EIE)</h3>
                            <p className="text-gray-400 text-sm mb-2">SBTET, Hyderabad, India | 2006</p>
                            <p className="text-gray-300 text-sm">Specialized in Electronics and Instrumentation Engineering.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}