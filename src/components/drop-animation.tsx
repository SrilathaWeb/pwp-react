import { motion } from "framer-motion";

const roles = [
    { name: "Full Stack Development", color: "bg-blue-600", x: 0, y: 0, rotate: -5 },
    { name: "Front End Development", color: "bg-pink-500", x: -40, y: -70, rotate: 4 },
    { name: "Back End Development", color: "bg-green-500", x: -20, y: -140, rotate: -6 },
    { name: "UI/UX Design", color: "bg-orange-500", x: -60, y: -210, rotate: 3 },
    { name: "Senior Developer", color: "bg-indigo-500", x: -40, y: -280, rotate: -8 },
];

export default function RolesDropAnimation() {
    return (
        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 z-20 w-[400px] h-[300px] pointer-events-none">
            {roles.map((role, index) => (
                <motion.div
                    key={index}
                    initial={{ y: 300, opacity: 0 }}
                    animate={{
                        y: roles[index].y,
                        x: roles[index].x,
                        opacity: 1,
                        rotate: roles[index].rotate,
                    }}
                    transition={{
                        delay: index * 0.25,
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                    }}
                    className={`absolute bottom-0 right-0 px-6 py-3 rounded-full text-white text-xs md:text-base font-semibold shadow-xl ${role.color}`}
                >
                    {role.name}
                </motion.div>
            ))}
        </div>
    );
}
