import { NavLink } from "react-router";
import { useState } from "react";


export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `block px-4 py-2 rounded-md text-white hover:bg-purple-600 sm:text-sm  ${
            isActive ? "bg-purple-600" : "bg-black"
        }`;

    const navItems = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "SKILLS", path: "/skills" },
        { name:"ROLES", path: "/roles" },
        { name: "PORTFOLIO", path: "/portfolio" },
        { name: "TIMELINE", path: "/timeline" },
        { name: "TECHNICAL BLOG", path: "/technicalblog" },
        { name: "VIDEO BLOG", path: "/videoblog" },
        { name: "CONTACT", path: "/contact" },
    ];

    return (
        <nav className="bg-transparent top-0 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">

                   {/* <div className="flex-shrink-0 text-black top-0 left-0">
                        <NavLink
                            to="/"
                            className=" text-xl font-extrabold"
                            onClick={closeMenu}
                        >
                            Srilatha Alla
                        </NavLink>
                    </div>*/}

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white border-2 bg-purple-600 focus:outline-none "
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Nav Links for desktop */}
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={linkClasses} onClick={closeMenu}
                            >
                                {item.name}
                            </NavLink>
                        ))}

                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden px-2 pb-3 space-y-1 fixed">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={linkClasses} onClick={closeMenu}
                        >
                            {item.name}
                        </NavLink>
                    ))}

                </div>
            )}
        </nav>

    );
}
