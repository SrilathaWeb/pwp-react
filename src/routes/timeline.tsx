export default function Timeline(){
    return (
        <>

            <section id="experience" className="mx-auto px-6 py-10 bg-gray-800 text-gray-200">
                <h2 className="text-4xl font-extrabold text-center gradient-text mb-10">Professional Experience</h2>
                <ol className="relative border-l border-cyan-400 ml-6">
                    <li className="mb-12 ml-6">
                        <span
                            className="absolute -left-3 flex  w-6 h-6 bg-cyan-500 rounded-full ring-10 ring-gray-950"></span>
                        <h3 className="text-2xl font-semibold text-cyan-300">Lead Full Stack Developer</h3>
                        <p className="text-gray-400 text-sm mb-1">Cognizant Technology Solutions | 2014 – 2023</p>
                        <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed">
                            <li>Led a team of developers building scalable microservices and enterprise-level web apps
                                using
                                Java, Spring, Hibernate, Lit, PL/SQL, Angular, and Cloud.
                            </li>
                            <li>Delivered solutions for top clients like <b>ING Belgium</b>, <b>Anthem Inc.</b> ,
                                and <b>Maritz
                                    Inc.</b> in improving
                                performance and customer engagement.
                            </li>
                            <li>Implemented CI/CD pipelines with Jenkins, Docker, and ING Cloud to streamline
                                deployments and
                                reduce release times by 40%.
                            </li>
                            <li>Mentored junior developers and enforced code quality using SonarQube and Git
                                workflows.
                            </li>

                            <li> Got a chance to work <b>on-site in Belgium for 2 years with ING client, </b> collaborating
                                closely
                                with cross-functional teams.
                            </li>
                            <li>Followed agile methodologies, spring planning, poker, daily standups. Gathering all the
                                requirements from stakeholders and planning the technical design flow.
                            </li>
                        </ul>
                    </li>

                    <li className="mb-12 ml-6">
                        <span
                            className="absolute -left-3 flex w-6 h-6 bg-purple-500 rounded-full ring-10 ring-gray-950"></span>
                        <h3 className="text-2xl font-semibold text-purple-300">Software Developer</h3>
                        <p className="text-gray-400 text-sm mb-1">Polaris Financial Technology, India | 2010 – 2014</p>
                        <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed">
                            <li>Developed and maintained core banking applications for <b>CITI Bank</b> using Java, JSP,
                                Servlets, Struts, Spring, Websphere, and PL/SQL.
                            </li>
                            <li>Optimized backend queries and improved application performance by 25% through effective
                                data modeling.
                            </li>
                            <li>Collaborated with cross-functional teams on product design and requirements gathering.
                            </li>
                        </ul>
                    </li>

                    <li className="ml-6">
                        <span
                            className="absolute -left-3 flex w-6 h-6 bg-pink-500 rounded-full ring-10 ring-gray-950"></span>
                        <h3 className="text-2xl font-semibold text-pink-300">Bachelor of Technology (IT)</h3>
                        <p className="text-gray-400 text-sm mb-1">Sridevi Women’s Engineering College, JNTU University,
                            India |
                            2009</p>
                        <p className="text-gray-300 text-sm">Graduated and specializing in Information Technology.</p>
                    </li>
                </ol>
            </section>
        </>
    )
}