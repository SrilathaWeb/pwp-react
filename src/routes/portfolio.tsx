type portfolio = {
    projectName: string;
    companyName: string;
    date: string;
    description: string;
    technology: string;
}
const projects:portfolio[] = [
    {
        projectName: 'WanderList App',
        companyName: 'CNM',
        date:"Sep 2025 to Dec 2025",
        description: 'WanderList (Bucket List) App used by travel people who are interested in adventures trips. Users can create their profile and add the places they want to visit in their bucket list. They can also mark the places they have visited and share their experiences with others. Built responsive web application using',
        technology: 'React Router, Node.js, Express.js, PostgreSQL'
    },
    {
        projectName: 'OPTI Green - Hackathop',
        companyName: 'NM Tech Talks',
        date:"Nov 8, 9 2025",
        description: 'OPTI Green is an intelligent dashboard that analyzes and optimizes LLM (Large Language Model) token usage to reduce API costs and compute energy consumption. It helps developers and organizations make AI usage more efficient, sustainable, and transparent — by reducing the token.',
        technology: 'React Router, Node.js, LLM studio, Python, Typescript'
    },
    {
        projectName: 'Personal Website',
        companyName: 'CNM',
        date:"Sep 2025 to Nov 2025",
        description: 'Designed My personal website project to showcase about my skills, portfolio, technical blog, video blog.',
        technology: 'React Router, Node.js, Typescript'
    },
    {
        projectName: 'Aurora Sandbox',
        companyName: 'ING Belgium',
        date:"Jan 2022 to Apr 2023",
        description: 'Aurora Sandbox and Global Sandbox used to test the new apps, test new technologies, and see if they work before they introduce them to their customers. Design frontend application using ',
        technology: 'Lit, ING Custom Framework, Node.js, Express.js and ING Cloud'
    },
    {
        projectName: 'CRM Portal',
        companyName: 'ING Belgium',
        date:"Feb 2019 to Jan 2022",
        description: 'Customer Resource Management (CRM) is a single view application. Its shows complete information of commercial customer.I did enhancements to the existing project. supported the production issues and worked on the change requests using ',
        technology: 'Java, Spring, ING custom Framework and PL/SQL'
    },
    {
        projectName: 'Claim View App',
        companyName: 'Anthem Inc.',
        date:"Apr 2018 to Feb 2019",
        description: 'Claim View Application used by end users of Anthem. Users will be able to see their claims like Dental, Institutional, Professional. Through Site minder, they will land on Claim View home page. Based on their Role and Permissions they can see the claims and download the claim in pdf format. Built responsive claim tracking tool using ',
        technology: 'Angular, Node JS, Express JS and sql'
    },
    {
        projectName: 'Maritz Motivation Solutions App',
        companyName: 'Maritz Inc.',
        date:"Feb 2014 to Mar 2017",
        description: 'Maritz Motivation Solutions or MMS deals with motivating people by engaging, rewarding and recognizing them. People may be employees, Partners or end-customers of any organization. Maritz has tools, technologies and methodologies to do employee recognition, sales incentive and consumer loyalty for their clients using ',
        technology: 'Java, Maritz Framework, PL/SQL'
    },
    {
        projectName: 'Credit Platform',
        companyName: 'CITI Bank',
        date:"Mar 2013 to Feb 2014",
        description: 'The Credit Platform is a web-based, Credit Approval document generator, Collateral Monitoring System, MIS Reporting and data storage tool. The system was built as a global technology solution. Products Supported includes Mortgages, Commercial loans, Lines of credit, Credit cards, Personal loans etc.. Created a centralized loan and credit management solution using ',
        technology :'Java, Spring, Hibernate'
    },
    {
        projectName: 'Universal Rate Server',
        companyName: 'CITI Bank',
        date:"Nov 2010 to Mar 2013",
        description: 'URS: Universal Rate Server FE is a centralized server used by Regional Treasury to provide on-line Foreign Exchange rates to all the countries supported by Regional Treasury. Created a centralized loan and credit management solution using',
        technology: 'Java, Structs, Websphere, Oracle PL/SQL'
    }
]

export default function Portfolio () {
    return (
        <>
            <section id="portfolio" className="max-w-7xl mx-auto px-10 py-5">
                <h2 className="text-4xl gradient-text text-center mb-10 font-extrabold">My Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {projects.map((project) => (
                        <>
                        <div className="bg-gray-800 rounded-xl p-5 shadow-lg glow hover:-translate-y-1 transition hover:bg-purple-900 ">
                            <h3 className="text-lg font-bold text-cyan-400">{project.projectName}</h3>
                            <div className="flex items-center justify-between">
                                <h2 className="text-gray-400 text-sm mb-2">{project.companyName}</h2>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <i className="fa fa-calendar bg-blue-700 text-white p-1 rounded" aria-hidden="true"></i>
                                    <span className="ml-2">({project.date})</span>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm">  {project.description} <b> {project.technology} .</b>
                                </p>
                        </div>
                        </>
                        ))}

                    </div>
            </section>

        </>
    )
}