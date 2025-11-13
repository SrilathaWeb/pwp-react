
import {useLocation} from "react-router";
import {Navigation} from "./navigation.tsx";
import TypewriterText from "../routes/typewriter.tsx";
import RolesDropAnimation from "../components/drop-animation.tsx";

export function CustomNav (){
    const location=useLocation();

    if (location.pathname === '/videoblog' ){
        return (

                <nav className=" absolute top-8 left-0 right-5 flex justify-center z-10 space-x-6">
                    <Navigation/>
                </nav>
        )

    } else if (location.pathname != '/' ){
         return (
             <section className="code-banner p-7">
                 <nav className="top-8 left-0 right-5 flex justify-center z-10 space-x-6">
             <Navigation/>
             </nav>
             </section>

         )
     } else{
    return (
        <>
            <section className="relative flex h-screen overflow-hidden items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/SrilathaAlla.jpg"
                        alt="Srilatha Alla"
                        className="w-full h-full object-cover object-[30%_center] banner shadow-2xl"
                    />
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/25 sm:bg-black/15"></div>
                </div>

                {/* Navigation */}
                <nav className="absolute top-8 left-0 right-5 flex justify-center z-30 space-x-6">
                    <Navigation />
                </nav>

                {/* Text Content */}
                <div
                    className="
      relative z-20 text-center md:text-left
      px-4 sm:px-6 md:px-12
      max-w-xl
      bg-white/60 md:bg-transparent
       md:backdrop-blur-0
      rounded-2xl md:rounded-none
      py-4 md:py-0
      mt-100 md:mt-0
      md:translate-x-48  /* 💡 moves text to the right on medium+ screens */
      sm:translate-x-16  /* small right shift on tablets */
      translate-x-0      /* no shift on mobile */
      transition-transform duration-500 ease-in-out
    "
                >
                    <TypewriterText
                        text="Full Stack Developer"
                        speed={120}
                        pause={1000}
                        style="text-3xl sm:text-5xl md:text-6xl font-bold
             bg-gradient-to-r from-purple-700 to-pink-500
             bg-clip-text text-transparent
             drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
             mb-4"
                    />
                    <p className="text-gray-900 text-sm sm:text-lg mb-4 leading-relaxed">
                        Hello, I’m <span className="text-purple-800 font-semibold text-2xl">Srilatha</span> — a passionate software developer with hands-on experience building scalable front-end and back-end solutions for global enterprises.
                    </p>
                </div>

                {/* Roles Animation */}
                <div className="z-10 absolute top-120 -right-10 md:bottom-6 md:right-0">
                    <RolesDropAnimation />
                </div>
            </section>


        </>
    )
     }
}