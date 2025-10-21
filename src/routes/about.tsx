export default function About() {
    return (
        <>
            <section id="about" className="bg-gray-800 ">
                <h2 className="text-4xl gradient-text text-center p-6">About Me</h2>
                <div className="max-w-4xl mx-auto px-6 py-5">
                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-location-dot text-cyan-400 mr-2"></i>
                        I was born in <b>Warangal, Telangana, India</b>, and raised in <b>Hyderabad</b>, where my
                        passion for technology and creativity began to flourish.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-graduation-cap text-purple-400 mr-2"></i>
                        I earned my <b>Bachelor’s degree in Information Technology</b> from <b>Sridevi Women’s
                        Engineering College, JNTU University</b>.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-briefcase text-cyan-400 mr-2"></i>
                        With over <b>12 years of experience</b> in full-stack development, I’ve worked
                        at <b>Polaris</b> and <b>Cognizant</b> for global clients such as <b>CITI Bank</b>, <b>Maritz
                        Inc.</b>, <b>Anthem Inc.</b>, and <b>ING</b>.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-earth-europe text-pink-400 mr-2"></i>
                        I also had the opportunity to work <b>on-site in Belgium for two years</b> with the ING client,
                        collaborating with diverse teams and gaining global exposure.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-code text-cyan-400 mr-2"></i>
                        My expertise includes <b>Java, Spring Boot, Hibernate, Angular, React, Docker, AWS</b>, and <b>PL/SQL</b>.
                        I focus on designing clean, scalable, and cloud-native applications.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-lightbulb text-yellow-400 mr-2"></i>
                        I’m known for my <b>problem-solving mindset</b> and love to take on complex challenges that push
                        my creativity and technical limits.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-users text-green-400 mr-2"></i>
                        As a <b>team collaborator and mentor</b>, I enjoy guiding others, promoting clean code
                        practices, and contributing to collective success.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <i className="fa-solid fa-wand-magic-sparkles text-purple-400 mr-2"></i>
                        I believe technology and creativity can coexist — I bring both analytical precision and design
                        intuition to every project.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        <i className="fa-solid fa-camera text-cyan-400 mr-2"></i>
                        Outside of work, I’m passionate about <b>travel, photography</b>, and <b>video blogging</b>. I
                        love capturing cultures and experiences that inspire my creativity and perspective.
                    </p>

                    <div className="mt-8">
                        <a href="assets/Srilatha_FullStack_Resume.pdf"
                           className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition">
                            <i className="fa-solid fa-download mr-2"></i>Download Resume
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}