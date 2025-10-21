import {Tooltip} from "flowbite-react";

type Skill = {
    name: string;
    icon: string;
};
const backendSkills :Skill[] = [
    { name: 'Java', icon: '/icons/Java-Dark.svg' },
    { name: 'Spring', icon: '/icons/Spring-Dark.svg' },
    { name: 'Hibernate', icon: '/icons/Hibernate-Dark.svg' },
    { name: 'REST', icon: '/icons/REST.png' },
    { name: 'Microservices', icon: '/icons/microservices.png' },
    { name: 'GoLang', icon: '/icons/GoLang.svg' },
];

const frontendSkills:Skill[] = [
    { name: 'HTML', icon: '/icons/HTML.svg' },
    { name: 'CSS', icon: '/icons/CSS.svg' },
    { name: 'Angular', icon: '/icons/Angular-Dark.svg' },
    { name: 'React', icon: '/icons/React-Dark.svg' },
    { name: 'TailWind CSS', icon: '/icons/TailwindCSS-Dark.svg' },
    { name: 'Node JS', icon: '/icons/NodeJS-Dark.svg' },
    { name: 'Express JS', icon: '/icons/ExpressJS-Dark.svg' },
    { name: 'Lit', icon: '/icons/Lit-Dark.svg' },
];

const databaseSkills:Skill[] = [
    { name: 'MySQL', icon: '/icons/MySQL-Dark.svg' },
    { name: 'PostgreSQL', icon: '/icons/PostgreSQL-Dark.svg' },
    { name: 'Oracle', icon: '/icons/oracle.png' },
];

const deploymentSkills:Skill[] = [
    { name: 'Jenkins', icon: '/icons/Jenkins-Dark.svg' },
    { name: 'Docker', icon: '/icons/Docker.svg' },
];

const allSkills  = [
    { skills: backendSkills, label: 'Backend Technologies', percentage: '90%'},
    { skills: frontendSkills, label:'Frontend Technologies',percentage: '80%'},
    { skills: databaseSkills, label: 'Database Technologies', percentage: '70%'},
{ skills: deploymentSkills,label: 'Deployment Technologies',percentage: '70%'},
];

const softSkills= [
    { name:"Motivational Leader", icon:'fa-solid fa-people-group', image: 'leader.png', desc:'Inspire and guide teams to stay focused, motivated, and achieve shared goals.'},
    {name:"Communication", icon:"fa-solid fa-comments",image:"leader.png",desc:'Clearly convey complex technical concepts to diverse audiences.' },
    {name:"Thinker", icon:"fa-solid fa-brain",image:"coding.png" ,desc:'Approach challenges with logical reasoning and creative problem-solving.'},
    {name:"Planner", icon:"fa-solid fa-calendar-check",image:"coding.png",desc:'Strategically organize tasks, priorities, and milestones for efficient project delivery.' },
    { name: "Problem Solving", icon: "fa-solid fa-lightbulb", img: " " ,desc:'Analyze issues methodically and design effective, long-term solutions.'},
    { name: "Team Collaboration", icon: "fa-solid fa-people-arrows", img: " " ,desc:'Work seamlessly with cross-functional teams to deliver cohesive, high-quality outcomes.'},
    { name: "Adaptability", icon: "fa-solid fa-arrows-rotate", img: " " ,desc:'Quickly adjust to changing requirements, tools, and environments with a positive mindset.'},
    { name: "Time Management", icon: "fa-solid fa-clock", img: "" ,desc:'Balance multiple priorities and deliver consistent results under tight deadlines.'},
    { name: "Mentorship",icon: "fa-solid fa-chalkboard-user", img: " " ,desc:'Support and coach junior developers to grow their technical and professional skills.'},
    { name: "Cultural Awareness", icon: "fa-solid fa-globe", img: "",desc:'Collaborate effectively with international teams by understanding diverse perspectives.'},
    { name: "Attention to Detail", icon: "fa-solid fa-magnifying-glass", img: "",desc:'Ensure precision in code, design, and documentation to maintain quality and reliability.' },
    { name: "Strategic Planning",  icon: "fa-solid fa-chess-queen", img: "" ,desc:'Anticipate future challenges and align development goals with long-term business strategy'},
];

export default function Skills(){
    return (
        <>
            <section id="skills" className="container mx-auto p-6">
                <h2 className="text-4xl gradient-text text-center mb-5">Technical Skills </h2>

                {allSkills.map((skills) => (
                    <>
                        <div className="flex items-center">
                        <h3 className="text-2xl text-left mr-5">{skills.label}</h3>
                            <i className="fa-solid fa-code text-xl mr-10"/>
                        <div className="w-50 bg-gray-500 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-400 to-green-900 h-3 rounded-full "
                                 style={{width:skills.percentage}}></div>
                        </div>
                            <span className="ml-10">{skills.percentage}</span>
                        </div>
                        <div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center p-5">
                            {skills.skills.map((skill, index) => (
                                <div key={index}
                                     className="p-3 bg-purple-400 rounded-lg hover:bg-purple-700">
                                    <img src={skill.icon} className="w-8 h-8 mx-auto mb-2"/>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
            </section>
            <div className="container mx-auto">
                <h2 className="text-4xl gradient-text text-center mb-5">Soft Skills </h2>
<div className="grid grid-cols-6 md:grid-cols-6 gap-4 text-center">
           {softSkills.map((skill, index) => (
             <div key={index} className="bg-gray-900 rounded-2xl inline-block m-2 shadow-lg p-6 hover:shadow-purple-500">
               <Tooltip content={skill.desc} style="light">
                 <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4 rounded-full shadow-md"/>
               </Tooltip>
               <h3 className="text-sm font-semibold text-purple-400 flex justify-center items-center space-x-2">
                 <i className={`${skill.icon} fa-solid text-lg text-cyan-400`}/>
                 <span>{skill.name}</span>
               </h3>
             </div>
           ))}
         </div>
            </div>
            </>
            )
            }