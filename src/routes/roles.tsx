import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faServer,
    faLaptopCode,
    faPalette,
    faUsers,
    faCloud, faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import TypewriterText from "./typewriter.tsx";

export default function RolesSection() {
    const roles = [
        {
            icon: faCode,
            title: "Full Stack Developer",
            desc: "Building scalable, high-performing web applications using Java, Spring Boot, Hibernate, Microservices, Angular, React, and Tailwind CSS.",
        },
        {
            icon: faServer,
            title: "Backend Developer",
            desc: "Designing APIs, microservices, and backend systems using Java, Spring Boot, and database optimization with PLSQL.",
        },
        {
            icon: faLaptopCode,
            title: "Frontend Developer",
            desc: "Developing responsive and accessible UIs with HTML, CSS, Angular, React, TypeScript, Bootstrap, and Tailwind CSS.",
        },
        {
            icon: faPalette,
            title: "UI/UX Designer",
            desc: "Creating intuitive and visually appealing interfaces with a focus on user flow and design consistency.",
        },
        {
            icon: faUsers,
            title: "Technical Mentor",
            desc: "Guiding teams, mentoring junior developers, and fostering best practices in full-stack development.",
        },

        {
            icon: faCloud,
            title: "Cloud Integration Specialist",
            desc: "Integrating microservices and APIs on AWS and Azure with Docker, Jenkins, and CI/CD pipelines.",
        },
        {
            icon: faLayerGroup,
            title: "Senior/Lead Developer",
            desc: "Designing enterprise-grade architectures ensuring performance, scalability, and reliability.",
        },

    ];

    return (
        <section
            id="roles"
            className="py-5 bg-gradient-to-br from-cyan-950 via-purple-900/40 to-cyan-900 text-white"
        >
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text">
                    <TypewriterText text="Roles I Can Do" style="text-cyan-300"/>
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
                    {roles.map((role, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-purple-500 to-gray-700 p-6 rounded-2xl shadow-md hover:shadow-purple-700 transition transform hover:-translate-y-2">
                            <div className="flex items-center gap-4 mb-3">
                                <FontAwesomeIcon icon={role.icon} className="text-purple-300 text-2xl"/>
                                <h3 className="text-xl font-semibold text-purple-100">{role.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300">{role.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
