
import {useLocation} from "react-router";
import {Navigation} from "./navigation.tsx";

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
                <div className="absolute inset-0 flex">
                     <img src="/SrilathaAlla.jpg" alt="Srilatha Alla" className="min-w-full h-auto banner shadow-2xl"/>
                </div>
                <nav className=" absolute top-8 left-0 right-5 flex justify-center z-10 space-x-6 ">
                    <Navigation/>
                </nav>
                <div className="relative text-right z-10 ml-70">
                    <h1
                        className="text-5xl md:text-6xl font-bold gradient-text mb-3">Full Stack
                        Developer</h1>
                    <p className="text-black text-lg max-w-2xl mx-auto mb-6">
                        Hello, I’m <span className="text-purple-700 font-semibold">Srilatha Alla</span> — a passionate
                        developer
                        with over 12 years of experience in front end & back end technologies. Worked on multiple
                        technologies.
                    </p>
                    <a href="/portfolio"
                       className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition">View
                        My Work</a>

                </div>

            </section>

        </>
    )
     }
}