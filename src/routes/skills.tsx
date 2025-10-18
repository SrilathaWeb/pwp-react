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
    { skills: backendSkills, label: 'Backend Technologies'},
    { skills: frontendSkills, label:'Frontend Technologies'},
    { skills: databaseSkills, label: 'Database Technologies'},
{ skills: deploymentSkills,label: 'Deployment Technologies'},
];
export default function Skills(){
    return (
        <>
            <section id="skills" className="container mx-auto p-6">
                <h2 className="text-5xl gradient-text text-center">Technical Skills </h2>

                {allSkills.map((skills) => (
                    <>
                        <h3 className="text-2xl text-left">{skills.label}</h3>
                        <div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center p-10 m-0">
                    {  skills.skills.map((skill,index) => (
                            <div key={index} className="p-5 bg-purple-400 rounded-lg hover:bg-purple-700 transition glow">
                                <img src={skill.icon} className="w-10 h-10 mx-auto mb-2"/>
                                <p>{skill.name}</p>
                            </div>
                    ))}
                        </div>
                    </>
                ))}
            </section>
        </>
    )
}