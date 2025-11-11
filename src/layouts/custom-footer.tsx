import {Link} from "react-router";

export function CustomFooter() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto text-center p-4">
                <p>&copy; 2025 Srilatha Alla Portfolio. All rights reserved.</p>
                <div className="mt-4">

                    <Link to="https://www.linkedin.com/in/srilatha-alla/" className="mx-2 hover:text-gray-400" target='_blank'>
                        <i className="fa-brands fa-linkedin text-white"></i>
                    </Link>

                    <Link to="https://github.com/SrilathaCTS" className="mx-2 hover:text-gray-400"  target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </Link>

                    <Link to="https://www.youtube.com/@sathvikreddy16" target="_blank" className="hover:text-cyan-400 ml-1">
                        <i className="fa-brands fa-youtube text-red-500"></i>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
