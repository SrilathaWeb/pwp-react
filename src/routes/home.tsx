import About from "./about.tsx";
import Portfolio from "./portfolio.tsx";
import Timeline from "./timeline.tsx";
import Skills from "./skills.tsx";
import Contact from "./contact.tsx";
import ScrollToTopButton from "../components/scroll-to-top-button.tsx";
import BlogSections from "../components/blog-sections.tsx";
import HeroSection from "../components/hero-section.tsx";

export default function Home() {
    // Define the roles array for the typewriter component
    const professionalRoles = [
        "Full Stack Developer",
        "Backend Developer",
        "Cloud Engineer",
        "Frontend Specialist",
        "UI/UX Designer"
    ];

    return (
        <>
            <HeroSection professionalRoles={professionalRoles} />

            <About />
            <Portfolio />
            <Timeline />
            <Skills />
            <BlogSections />
            <Contact />
            <ScrollToTopButton />
        </>
    );
}
