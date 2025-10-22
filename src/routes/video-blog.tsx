import {useEffect} from "react";
import {useLocation} from "react-router";
//import {Carousel} from "flowbite-react";

const travelVlogs = [
    {
        icon: "fa-mountain-sun",
        location: "Arches National Park, Utah",
        title: "Exploring the Majestic Arches National Park",
        description: "Join me as I hike through the stunning red rock formations and witness the breathtaking arches that make this park a natural wonder.",
        videoUrl: "https://www.youtube.com/embed/UMkBuQt9444"
    },
    {
        icon: "fa-balloon",
        location: "Albuquerque Balloon Fiesta, New Mexico",
        title: "A Day in the Life at the Albuquerque Balloon Fiesta",
        description: "Experience the magic of hundreds of colorful hot air balloons filling the sky at dawn in Albuquerque, New Mexico.",
        videoUrl: "https://www.youtube.com/embed/rijoWm082FQ"
    },
    {
        icon : "fa-mountain",
        location: "Colorado's Rocky Mountains",
        title: "Hiking the Scenic Trails of Colorado's Rocky Mountains",
        description: "Come along as I explore some of the most beautiful hiking trails in Colorado, surrounded by towering peaks and pristine wilderness.",
        videoUrl: "https://www.youtube.com/embed/z_tOOqHZVY8"
    },
    {
        icon: "fa-mountain",
        location: "White Sands National Park, New Mexico",
        title: "Discovering the Unique Landscapes of White Sands National Park",
        description: "Watch as I wander through the surreal white gypsum sand dunes and capture the beauty of this one-of-a-kind national park.",
        videoUrl: "https://www.youtube.com/embed/wASJQcKdN2Q"
    },
    {
        icon: "fa-hot-tub-person",
        location: "Jemez Hot Springs, New Mexico",
        title: "Relaxing at the Natural Hot Springs of Jemez, New Mexico",
        description: "Join me for a rejuvenating soak in the warm, mineral-rich waters of Jemez Hot Springs, surrounded by stunning red rock cliffs.",
        videoUrl: "https://www.youtube.com/embed/WjJCTPQTXtE"
    },
    {
        icon: "fa-city",
        location: "Las Vegas, Nevada",
        title: "Exploring the Vibrant City Life of Las Vegas, Nevada",
        description: "Experience the excitement of Las Vegas as I explore the famous Strip, vibrant nightlife, and iconic landmarks.",
        videoUrl: "https://www.youtube.com/embed/WuM0HxIapGg"
    },
    {
        icon: "fa-leaf",
        location: "Fourth of July Trail, Colorado",
        title: "Autumn Colors on the Fourth of July Trail",
        description: "Join me as I hike the Fourth of July Trail, surrounded by vibrant fall foliage and breathtaking mountain views.",
        videoUrl: "https://www.youtube.com/embed/_s-WlQd8tsE"
    },
    {
        icon: "fa-globe",
        location: "Pagosa Springs, Colorado",
        title: "Soaking in the Serenity of Pagosa Springs, Colorado",
        description: "Experience the tranquility of Pagosa Springs as I relax in the natural hot springs set against a backdrop of stunning mountain scenery.",
        videoUrl: "https://www.youtube.com/embed/Fz6V6O1slkY"
    },
    {
        icon: "fa-hot-tub-person",
        location: "Yellowstone National Park, Wyoming",
        title: "Yellowstone National Park: A Journey Through Nature's Wonders",
        description: "Join me as I explore the diverse landscapes, geysers, and wildlife of Yellowstone National Park, capturing its raw beauty.",
        videoUrl: "https://www.youtube.com/embed/-OgRU6hxpjo"
    },
    {
        icon: "fa-cloud-sun",
        location: "Sandia Crest, New Mexico",
        title: "Sunrise at Sandia Crest, New Mexico",
        description: "Watch the sun rise over the Sandia Mountains as I take in the breathtaking views from the crest.",
        videoUrl: "https://www.youtube.com/embed/fl19UXC-ZEE"
    },
    {
        icon: "fa-water",
        location: "Granby, Colorado",
        title: "Exploring the Tranquil Town of Granby, Colorado",
        description: "Join me as I explore the charming town of Granby, nestled in the Rockies, and discover its natural beauty and outdoor adventures.",
        videoUrl: "https://www.youtube.com/embed/q_yn8AJr_Ps"
    },
    {
        icon: "fa-water-ladder",
        location: "Blue Hole, New Mexico",
        title: "Diving into the Crystal Clear Waters of the Blue Hole, New Mexico",
        description: "Experience the thrill of diving into the deep blue waters of the Blue Hole, a natural wonder in New Mexico.",
        videoUrl: "https://www.youtube.com/embed/C6wjwrlwVq0"
    },
    {
        icon: "fa-hill-rockslide",
        location: "Great Sand Dunes National Park, Colorado",
        title: "Climbing the Great Sand Dunes of Colorado",
        description: "Join me as I take on the challenge of climbing the towering sand dunes in Great Sand Dunes National Park, Colorado.",
        videoUrl: "https://www.youtube.com/embed/EyYWTxxepmI"
    },
    {
        icon: "fa-tree",
        location: "Santa Fe National Forest, New Mexico",
        title: "Wandering Through the Santa Fe National Forest",
        description: "Explore the lush trails and vibrant fall colors of the Santa Fe National Forest with me.",
        videoUrl: "https://www.youtube.com/embed/Zl5Jx1rZfDs"
    },
    {
        icon: "fa-person-hiking",
        location: "South Fork, Colorado",
        title: "A Serene Escape to South Fork, Colorado",
        description: "Join me as I explore the peaceful town of South Fork, Colorado, and its beautiful natural surroundings.",
        videoUrl: "https://www.youtube.com/embed/VGTl1Sdvq8k"
    }
];

const scrollImages = [
    "/scroll/ballon-fiesta.jpg",
    "/scroll/Colorado.jpg",
    "/scroll/granby.jpg",
    "/scroll/arches.jpg",
    "/scroll/sanddunes.jpg",
    "/scroll/santafe.jpg"
];

export default function VideoBlog() {

    const location = useLocation();

    useEffect(() => {
        const items = document.querySelectorAll("[data-carousel-item]");
        let index = 0;

        console.log(scrollImages.length);
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

                            {scrollImages.map((url) => (
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={url} className="absolute block w-full h-full object-cover"
                                     alt="Ballon Fiesta"/>
                                </div>
                            ))}

                        </div>
                    <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
                        { scrollImages.map((_, index) => (
                            <>
                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
                                    aria-current="true" aria-label={`Slide ${index+1}`} data-carousel-slide-to={index}></button>
                            </>
                        )) }
                        </div>
                </div>
               {/* <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                        {scrollImages.map((url,index) => (
                                <img src={url} className="absolute block w-full h-full object-cover"
                                     alt="Ballon Fiesta" id = {`image${index}`}/>
                        ))}
                    </Carousel>
                </div>*/}
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

            <div className=" bg-gray-600">
                <section className="pt-10 text-center">
                    <h1 className="text-4xl font-extrabold gradient-text mb-4">My Travel Vlogs</h1>
                    <p className="text-purple-400 max-w-2xl mx-auto">
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

                            {travelVlogs.map((vlog) => (
                                <>
                                <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-red-500/30 transition p-2">
                                <iframe key={vlog.location} width="100%" src={vlog.videoUrl} title={vlog.location}></iframe>
                                <div className="p-2">
                                    <h3 className="text-sm font-semibold text-red-500"><i className={`fa-solid ${vlog.icon} mr-2`}></i>{vlog.location}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{vlog.description}</p>
                                </div>
                                </div>
                                </>
                            ))}

                    </div>
                 </section>
            </div>
        </>
    )
}