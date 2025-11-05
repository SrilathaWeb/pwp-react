import  { useRef, useEffect, useState } from "react";

const CanvasPage = () => {
    const canvasRef = useRef(null);
    const [angle, setAngle] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = "img_4.png";
        imageRef.current = img;

        img.onload = () => {
            drawRotatedImage(ctx, img, angle);
        };
    }, []);

    useEffect(() => {
        if (!imageRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        drawRotatedImage(ctx, imageRef.current, angle);
    }, [angle]);

    const drawRotatedImage = (ctx, img, angle) => {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
        ctx.save();
        ctx.translate(centerX, centerY); // Move rotation point to center
        ctx.rotate((angle * Math.PI) / 180); // Convert degrees → radians
        ctx.drawImage(img, -img.width / 2, -img.height / 2); // Draw centered
        ctx.restore();
    };

    useEffect(() => {
        let frameId;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = imageRef.current;

        const animate = () => {
            setAngle((prev) => (prev + 1) % 360); // Rotate 1° per frame
            frameId = requestAnimationFrame(animate);
        };

        if (img) animate();
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <canvas
                ref={canvasRef}
                width={200}
                height={200}
                className=" rounded shadow-md"
            />

        </div>
    );
};

export default CanvasPage;
