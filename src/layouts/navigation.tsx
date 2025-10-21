import {NavLink} from "react-router";

export function Navigation (){
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 ">

                <NavLink to="/"
                   className=" px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">HOME</NavLink>
                <NavLink to="/about"
                   className="px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">ABOUT</NavLink>
                <NavLink to="/skills"
                   className="px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">SKILLS</NavLink>
                <NavLink to="/portfolio"
                   className="px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">PORTFOLIO</NavLink>
            <NavLink to="/timeline"
               className="px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">TIME LINE</NavLink>
                <NavLink to="/videoblog"
                   className="px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">VIDEO
                    BLOG</NavLink>
              {/*  <NavLink to="/technicalblog"
                   className="px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">TECHNICAL
                    BLOG</NavLink>*/}
                <NavLink to="/contact"
                   className="px-5 py-2 rounded-full border border-b-cyan-400 text-cyan-300 hover:bg-purple-600 bg-black hover:text-white">CONTACT</NavLink>

        </div>
    )
}