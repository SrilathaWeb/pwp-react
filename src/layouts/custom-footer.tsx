export function CustomFooter() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto text-center p-4">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <div className="mt-4">
                    <a href=" https://www.linkedin.com/in/srilatha-alla-2b4b6214/" className="mx-2 hover:text-gray-400">LinkedIn</a>
                    <a href="git hub url"
                          className="mx-2 hover:text-gray-400">GitHub</a>
                    <a href="https://twitter.com/SrilathaAlla" className="mx-2 hover:text-gray-400">Twitter</a>
                    <i className="fa-brands fa-youtube text-red-500"></i>
                    <a href="https://www.youtube.com/@sathvikreddy16" target="_blank" className="hover:text-cyan-400 ml-1">Subscribe to my Channel</a>
                </div>
            </div>
        </footer>
    );
}
