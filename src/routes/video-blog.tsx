import {useEffect} from "react";
import {useLocation} from "react-router";

export default function VideoBlog() {

    const location = useLocation();

    useEffect(() => {
        const items = document.querySelectorAll("[data-carousel-item]");
        let index = 0;

        if (items.length === 0) return;
        const interval = setInterval(() => {
            items.forEach((item, i) => {
                item.classList.toggle("hidden", i !== index);
            });
            index = (index + 1) % items.length;
        }, 1000);

        return () => clearInterval(interval);
    }, [location.pathname]); // rerun on route change

    return (
        <>

            <section className="relative">

                <div id="travel-carousel" className="relative w-full" data-carousel="slide">

                    <div className="relative h-[400px] overflow-hidden rounded-lg z-0">

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/scroll/ballon-fiesta.jpg" className="absolute block w-full h-full object-cover"
                                 alt="Ballon Fiesta"/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <img src="/scroll/Colorado.jpg" className="absolute block w-full h-full object-cover" alt="Colorado Mountains"/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/scroll/granby.jpg" className="absolute block w-full h-full object-cover" alt="Granby"/>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/scroll/arches.jpg" className="absolute block w-full h-full object-cover"
                                 alt="Arches National Park"/>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/scroll/sanddunes.jpg" className="absolute block w-full h-full object-cover"
                                 alt="Sand Dunes National Park"/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/scroll/santafe.jpg" className="absolute block w-full h-full object-cover"
                                 alt="Santa Fe National Park"/>
                        </div>

                    </div>

                    <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-label="Slide 6"
                                data-carousel-slide-to="5"></button>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-5xl font-bold gradient-text mb-4">Welcome to My Capturing Moments</h1>
                    <p className="text-gray-300 max-w-2xl">
                        <i className="fa-solid fa-video text-cyan-400 mr-2"></i>
                        I capture the beauty of the world through my lens — from serene deserts to soaring peaks.
                        Join me on my adventures and see the world the way I do.
                    </p>
                    <div className="mt-8">
                        <a href="https://www.youtube.com/@sathvikreddy16" target="_blank"
                           className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition">
                            <i className="fa-brands fa-youtube mr-2"></i> Visit My YouTube Channel
                        </a>
                    </div>
                </div>
            </section>

            <div className=" bg-gray-500">
                <section className="pt-10 text-center">
                    <h1 className="text-4xl font-bold gradient-text mb-4">My Travel Vlogs</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        <i className="fa-solid fa-video text-cyan-400 mr-2"></i>
                        I love exploring new places and capturing those moments through my YouTube channel.
                        Join me on my journeys and experiences through
                        <a href="https://www.youtube.com/@sathvikreddy16" target="_blank"
                           className="text-cyan-400 hover:text-cyan-300">
                            <i className="fa-brands fa-youtube mr-2"></i>travel vlog.
                        </a>
                    </p>

                </section>
                <section className="max-w-7xl mx-auto px-6 pb-20 mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-red-500/30 transition p-2">
                            <iframe width="100%"  src="https://www.youtube.com/embed/WuM0HxIapGg" title="Las Vegas"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-red-400"><i className="fa-solid fa-city mr-2"></i>Las Vegas, Nevada</h3>
                                <p className="text-gray-400 text-sm mt-1">I was amazed by the dazzling lights and nonstop energy — Las Vegas truly never sleeps!</p>
                            </div>
                        </div>


                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-green-400/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/VGTl1Sdvq8k" title="South Fork"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-green-300"><i className="fa-solid fa-person-hiking mr-2"></i>South Fork, Colorado</h3>
                                <p className="text-gray-400 text-sm mt-1">I enjoyed peaceful hikes along the Rio Grande and took in the beauty of Colorado’s untouched wilderness.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-orange-400/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/UMkBuQt9444" title="Arches"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-orange-300"><i className="fa-solid fa-mountain-sun mr-2"></i>Arches National Park, Utah</h3>
                                <p className="text-gray-400 text-sm mt-1">I watched the sunrise paint the red arches — it was a surreal moment I’ll never forget.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-blue-400/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/C6wjwrlwVq0" title="Blue Hole"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-blue-400"><i className="fa-solid fa-water-ladder mr-2"></i>Blue Hole, New Mexico</h3>
                                <p className="text-gray-400 text-sm mt-1">I dove into the crystal-clear waters of the Blue Hole — an oasis in the middle of the desert.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/wASJQcKdN2Q" title="White Sands"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-cyan-300"><i className="fa-solid fa-mountain-sun mr-2"></i>White Sands, New Mexico</h3>
                                <p className="text-gray-400 text-sm mt-1">I felt like I was walking on another planet as the soft white dunes shimmered under the golden sunset.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/z_tOOqHZVY8" title="Colorado"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-purple-300"><i className="fa-solid fa-tree-city mr-2"></i>Colorado</h3>
                                <p className="text-gray-400 text-sm mt-1">I felt completely alive breathing in the crisp mountain air and gazing at Colorado’s endless alpine views.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-pink-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/q_yn8AJr_Ps" title="Granby"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-pink-300"><i className="fa-solid fa-water mr-2"></i>Granby, Colorado</h3>
                                <p className="text-gray-400 text-sm mt-1">I found peace in Granby’s quiet trails and serene mountain lakes, far away from city life.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/_s-WlQd8tsE" title="Fourth of July Trail"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-yellow-300"><i className="fa-solid fa-leaf mr-2"></i>Fourth of July Trail</h3>
                                <p className="text-gray-400 text-sm mt-1">I was mesmerized by the explosion of red, orange, and gold leaves — it felt like hiking through a living painting.</p>
                            </div>
                        </div>
                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-green-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/fl19UXC-ZEE" title="Sandia Crest"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-green-300"><i className="fa-solid fa-cloud-sun mr-2"></i>Sandia Crest, New Mexico</h3>
                                <p className="text-gray-400 text-sm mt-1">Standing at the edge of Sandia Crest, I watched the sun melt into the horizon and felt completely still inside.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-red-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/rijoWm082FQ" title="Balloon Fiesta"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-red-400"><i className="fa-solid fa-balloon mr-2"></i>Albuquerque Balloon Fiesta</h3>
                                <p className="text-gray-400 text-sm mt-1">I stood in awe as hundreds of colorful balloons rose into the dawn sky — it was pure joy and wonder.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-orange-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/EyYWTxxepmI" title="Great Sand Dunes"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-orange-300"><i className="fa-solid fa-hill-rockslide mr-2"></i>Great Sand Dunes, Colorado</h3>
                                <p className="text-gray-400 text-sm mt-1">I challenged myself to climb the towering dunes, and from the top, I felt absolute freedom in every direction.</p>
                            </div>
                        </div>
                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-teal-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/WjJCTPQTXtE" title="Jemez Hot Springs"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-teal-300"><i className="fa-solid fa-hot-tub-person mr-2"></i>Jemez Hot Springs</h3>
                                <p className="text-gray-400 text-sm mt-1">I relaxed in warm turquoise pools beneath red cliffs and pine trees, feeling completely at peace with nature.</p>
                            </div>
                        </div>
                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-500 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/Zl5Jx1rZfDs" title="Santa Fe Forest"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-purple-300"><i className="fa-solid fa-tree mr-2"></i>Santa Fe National Forest</h3>
                                <p className="text-gray-400 text-sm mt-1">I wandered through golden aspens and crimson oaks, completely enchanted by the colors of fall.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/OgRU6hxpjo" title="Yellowstone"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-yellow-300"><i className="fa-solid fa-water mr-2"></i>Yellowstone National Park</h3>
                                <p className="text-gray-400 text-sm mt-1">I felt awestruck by Yellowstone’s geysers, wildlife, and powerful natural beauty all around me.</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-teal-500/30 transition p-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/Fz6V6O1slkY" title="Pagosa Springs"></iframe>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-teal-300"><i className="fa-solid fa-hot-tub-person mr-2"></i>Pagosa Springs, Colorado</h3>
                                <p className="text-gray-400 text-sm mt-1">I soaked in the warm hot springs surrounded by snow-covered peaks — pure relaxation and peace.</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}