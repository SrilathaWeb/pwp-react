import React from "react";
import { motion } from "framer-motion";

// --- START: Roles Drop Animation (MODIFIED for TSX) ---
interface RoleData {
    name: string;
    color: string;
    x: number;
    y: number;
    rotate: number;
}

const rolesData: RoleData[] = [
    { name: "Full Stack Developer", color: "bg-blue-600", x: 0, y: 0, rotate: -5 },
    { name: "Front End Developer", color: "bg-pink-500", x: -40, y: -70, rotate: 4 },
    { name: "Back End Developer", color: "bg-green-500", x: -20, y: -140, rotate: -6 },
    { name: "UI/UX Designer", color: "bg-orange-500", x: -60, y: -210, rotate: 3 },
    { name: "Senior Developer", color: "bg-indigo-500", x: -40, y: -280, rotate: -8 },
];

interface RolesDropAnimationProps {
    isActive: boolean;
}

export default function RolesDropAnimation  ({ isActive }):React.FC<RolesDropAnimationProps>{
    // Defines the initial state (hidden/off-screen)
    const initialProps = { y: 300, opacity: 0, x: 0, rotate: 0 };

    return (
        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 z-20 w-[300px] h-[300px] pointer-events-none hidden lg:block">
            {rolesData.map((role: RoleData, index: number) => (
                <motion.div
                    key={index}
                    // Start from the defined initial position
                    initial={initialProps}
                    // Animate to the target position only if isActive is true
                    animate={isActive ? {
                        y: role.y,
                        x: role.x,
                        opacity: 1,
                        rotate: role.rotate,
                    } : initialProps}
                    transition={{
                        delay: isActive ? index * 0.25 : 0, // Delay only when running animation
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                    }}
                    className={`absolute bottom-0 right-0 px-6 py-3 rounded-full text-white text-base font-semibold shadow-xl ${role.color} w-fit whitespace-nowrap`}
                >
                    {role.name}
                </motion.div>
            ))}
        </div>
    );
}
