
export default function About() {
    return (
        <section id="about" className="relative bg-gray-800 py-10 px-4 md:px-10">
            <h2 className="text-4xl md:text-5xl gradient-text text-center mb-8 font-extrabold">About Me</h2>


            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-start gap-8">

                {/* 1. Main About Text (order-1 on mobile, md:order-2 on desktop)
                    This ensures the main narrative is seen first on small screens.
                */}
                <div className="w-full md:w-2/3 order-1 md:order-2 p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-700">
                    <div className="text-gray-300 leading-relaxed text-sm space-y-4">

                        <p>
                            <i className="fa-solid fa-graduation-cap text-purple-400 mr-2"></i>
                            I earned my <b>Bachelor’s degree in Information Technology</b> from <b>JNTU University</b>, which laid the foundation for my passion for scalable software development.
                        </p>
                        <p>
                            <i className="fa-solid fa-briefcase text-cyan-400 mr-2"></i>
                            As a full-stack developer, I’ve worked at <b>Polaris</b> and <b>Cognizant</b> for global clients such as <b>CITI Bank</b>, <b>Maritz Inc.</b>, <b>Anthem Inc.</b>, and <b>ING</b>. My expertise includes <b>Java, Spring Boot, Hibernate, Angular, React, Docker, AWS</b>, and <b>PL/SQL</b>.
                        </p>
                        <p>
                            <i className="fa-solid fa-earth-europe text-pink-400 mr-2"></i>
                            I also had the opportunity to work <b>on-site in Belgium for two years</b> with the ING client, collaborating with diverse teams and gaining invaluable global exposure to agile development practices.
                        </p>
                        <p>
                            <i className="fa-solid fa-lightbulb text-yellow-400 mr-2"></i>
                            I’m known for my <b>problem-solving mindset</b> and love to take on complex challenges that push my creativity and technical limits, always focusing on designing clean, scalable, and cloud-native applications.
                        </p>
                        <p>
                            <i className="fa-solid fa-users text-green-400 mr-2"></i>
                            As a <b>team collaborator and mentor</b>, I enjoy guiding others, promoting clean code practices, and contributing to collective success, believing strongly in the power of shared knowledge.
                        </p>
                        <p>
                            <i className="fa-solid fa-camera text-cyan-400 mr-2"></i>
                            Outside of work, I balance my technical side with creative outlets, being passionate about <b>travel, photography</b>, and <b>video blogging</b>. I love capturing cultures and experiences that inspire my creativity and perspective.
                        </p>
                    </div>
                </div>


                {/* 2. Key Focus Areas (order-2 on mobile, md:order-1 on desktop)
                    Only sticky on medium screens and up.
                */}
                <div className="w-full md:w-1/3 order-2 md:order-1 p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 md:sticky md:top-4">
                    <h3 className="text-xl font-semibold text-center text-cyan-400 mb-6">Key Focus Areas</h3>
                    <div className="space-y-4">

                        <div className="p-4 bg-gray-700/50 rounded-lg">
                            <i className="fa-solid fa-cloud-arrow-up text-purple-400 mr-2"></i>
                            <span className="text-white font-medium">Cloud-Native Design:</span>
                            <p className="text-xs text-gray-300 mt-1">Specializing in microservices deployment via Docker and optimized cloud performance.</p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg">
                            <i className="fa-solid fa-shield-halved text-pink-400 mr-2"></i>
                            <span className="text-white font-medium">High Reliability:</span>
                            <p className="text-xs text-gray-300 mt-1">Commitment to TDD, CI/CD, and robust error handling for enterprise-grade solutions.</p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg">
                            <i className="fa-solid fa-code-branch text-cyan-400 mr-2"></i>
                            <span className="text-white font-medium">Tech Leadership:</span>
                            <p className="text-xs text-gray-300 mt-1">Guiding teams, code reviews, and maintaining standards across the full stack.</p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg">
                            <i className="fa-solid fa-chart-line text-yellow-400 mr-2"></i>
                            <span className="text-white font-medium">Performance Optimization:</span>
                            <p className="text-xs text-gray-300 mt-1">Tuning Java Spring and SQL queries for 25%+ speed improvements.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}