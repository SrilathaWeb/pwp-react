export default function Contact() {
    return (
        <>
            <form className="form-group p-5 bg-gray-800 flex flex-col items-center">
                <h1 className="text-center text-4xl m-5 gradient-text">Contact Me</h1>
                <p className="text-center text-purple-500">Looking for get in touch with me? Please Submit the below form.</p>
               <label className="mt-4 block text-purple-500 w-1/2">
                    Name:
                    <input type="text" name="name" className="block w-full mt-2 p-2 rounded-md border border-gray-300"/>
                </label>
                <label className="mt-4 block text-purple-500 w-1/2">
                    Email:
                    <input type="email" name="email" className="block w-full mt-2 p-2 rounded-md border border-gray-300"/>
                </label>
                <label className="mt-4 block text-purple-500 w-1/2">
                    Message:
                    <textarea name="message" rows={5} className="block w-full mt-2 p-2 rounded-md border border-gray-300"></textarea>

               </label>
                <div className="mt-8">
                    <button
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition">Submit
                    </button>
                </div>
            </form>

        </>
    )
}