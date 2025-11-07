
import {useLocation} from "react-router";
import {Navigation} from "./navigation.tsx";
import TypewriterText from "../routes/typewriter.tsx";

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
            <section className="relative flex  h-screen overflow-hidden items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                     <img src="/SrilathaAlla.jpg" alt="Srilatha Alla" className="min-w-full h-full banner shadow-2xl "/>
                </div>
                <nav className="absolute top-8 left-0 right-5 flex justify-center z-10 space-x-6 ">
                    <Navigation/>
                </nav>
                <div className="relative md:left-50 sm:text-center p-2">
                    <TypewriterText text="Full Stack Developer" speed={120} pause={1000} style="text-5xl md:text-6xl font-bold gradient-text m-10" />
                        <p className="text-black text-lg max-w-2xl mx-auto mb-6">
                        Hello, I’m <span className="text-purple-800 font-semibold text-3xl">Srilatha</span> — a passionate software
                        developer. Experience in front end & back end technologies. Worked with multi national companies.
                    </p>
                    <p className="text-purple-700 text-lg max-w-2xl mx-auto mb-6 font-extrabold"> Full Stack Developer | UI/UX Designer | Web Developer | Senior Developer | Web Designer | Front End Developer | Back End Developer</p>
                    {/*<a href="/portfolio"
                       className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition">View
                        My Work</a>*/}
                    <div className="mt-8">
                        <a href="https://docs.google.com/document/d/1F2FGWVH6vHch4Fx_U2j73NC_RNEDe0Rz/edit?usp=drive_link&ouid=116292810383739847062&rtpof=true&sd=true"
                           className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" >
                            <i className="fa-solid fa-download mr-2"></i>Download Resume
                        </a>
                    </div>

                </div>

            </section>

        </>
    )
     }
}