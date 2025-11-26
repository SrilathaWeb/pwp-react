export default function Contact() {
    return (
        <div id="contact" className="grid md:grid-cols-2 grid-cols-1 p-8 bg-gray-900 text-white gap-8">

            <div className="flex flex-col justify-center items-center space-y-6">

                <h1 id="contact" className="text-center text-4xl mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                   Contact Me
                </h1>
                <p className="text-center text-cyan-400 mb-6 max-w-md">
                    Have a project in mind or want to collaborate? I’m always excited to connect and collaborate.
                    I’d love to hear from you! Fill out the form and I’ll get back to you as soon as possible.
                </p><p className="text-purple-400 mb-6 max-w-md">
                    Whether you’re looking to discuss opportunities, share ideas, or just connect — feel free to reach out.
                </p>



                <a
                    href="https://www.linkedin.com/in/srilatha-alla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:opacity-80 transition"
                >
                    <i className="fa-brands fa-linkedin text-blue-500 text-3xl"></i>
                    <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/SrilathaWeb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:opacity-80 transition"
                >
                    <i className="fa-brands fa-github text-3xl"></i>
                    <span>GitHub</span>
                </a>

                <a
                    href="https://www.youtube.com/@sathvikreddy16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:opacity-80 transition"
                >
                    <i className="fa-brands fa-youtube text-red-500 text-3xl"></i>
                    <span>YouTube</span>
                </a>
            </div>

            <form className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg">

                <p className="text-center text-purple-400 mb-6">
                    Looking to get in touch with me? Fill out the form below.
                </p>

                <label className="mt-3 w-full text-purple-300">
                    Name:
                    <input
                        type="text"
                        name="name"
                        className="block w-full mt-2 p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                    />
                </label>

                <label className="mt-4 w-full text-purple-300">
                    Email:
                    <input
                        type="email"
                        name="email"
                        className="block w-full mt-2 p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                    />
                </label>

                <label className="mt-4 w-full text-purple-300">
                    Message:
                    <textarea
                        name="message"
                        rows={5}
                        className="block w-full mt-2 p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                    ></textarea>
                </label>

                <button
                    type="submit"
                    className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
