import {useRef} from 'react';
import {ArrowRightIcon, Badge, Button, Card} from 'flowbite-react';
import type {Blog} from "./technical_blog_data.tsx";
import {Link} from "react-router";

type dataProp = {
    blogList : Blog[]
}

export function DivSlider(props:dataProp ) {
    const blogs = props.blogList
    const containerRef = useRef<HTMLDivElement | null>(null);
    const divRefs = useRef<Array<HTMLDivElement | null>>([]); // To store refs for each individual div
    const divsPerPage = 1; // Number of divs to show at a time

    const scrollContainer = (direction: 'left' | 'right') => {
        const container = containerRef.current;
        const firstDiv = divRefs.current[0];

        if (!container || !firstDiv) return;

        const divWidth = firstDiv.offsetWidth;
        const scrollAmount = divWidth * divsPerPage;

        if (direction === 'left') {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });
        } else {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative w-full">
            <div
                ref={containerRef}
                className="flex overflow-x-auto scrollbar-hide px-4 space-x-6"
                style={{scrollSnapType: 'x mandatory'}}
                 >
                {blogs.map((post, i) => (
                    <div
                        key={i}
                        ref={(el) => { divRefs.current[i] = el; }}
                        className="flex-shrink-0 snap-start p-4  w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] h-[360px] md:h-[420px]  transition-transform transform hover:scale-[1.03]" // Adjust width based on divsPerPage
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        <Card key={post.id} className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-5 shadow-lg glow -translate-y-1 transition hover:bg-purple-900">
                            <h5 className="text-xl md:text-2xl font-bold text-center text-black tracking-tight">
                                {post.title}
                            </h5>

                            <div className="flex flex-wrap gap-2 mb-4 rounded">
                                {post.tags.map((tag,i) => (
                                    <Badge key ={i} className="bg-cyan-400 text-gray-900 font-semibold text-xs px-2 py-1">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <div className="text-center mt-auto">
                            <Link to={`/post/${post.id}`}
                                  className="hover:underline font-semibold text-cyan-300 inline-flex items-center hover:text-black">
                                Read More <ArrowRightIcon className="m-1 w-4 h-4"/>
                            </Link>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-10 transform">
                <Button onClick={() => scrollContainer('left')}>&lt;</Button>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 transform">
                <Button onClick={() => scrollContainer('right')}>&gt;</Button>
            </div>
        </div>
    );

};
