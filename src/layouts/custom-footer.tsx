export function CustomFooter() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto text-center p-4">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <div className="mt-4">
                    <i className="fa-brands fa-linkedin text-white"></i>
                    <a href="https://www.linkedin.com/in/srilatha-alla/" className="mx-2 hover:text-gray-400" target='_blank'></a>
                    <i className="fa-brands fa-github"></i>
                    <a href="https://github.com/SrilathaCTS" className="mx-2 hover:text-gray-400"  target='_blank'></a>
                    <i className="fa-brands fa-youtube text-red-500"></i>
                    <a href="https://www.youtube.com/@sathvikreddy16" target="_blank" className="hover:text-cyan-400 ml-1"></a>
                </div>
            </div>
        </footer>
    );
}
