export interface Blog {
    id: string;
    title: string;
    tags: string[];
    file: string;
}

export const technicalBlogData: Blog[] = [

  {
        id: "java",
        title: "Learn JAVA 20 Version features",
        tags: ["Java", "Back End","Java 20 version"],
        file: "/markdown/post/java20.md",
    },
    {
        id: "java8",
        title: "Learn JAVA 8 Version features",
        tags: [" Java 8","Back End", "Stream API", "Lambda Expressions", "Functional Programming"],
        file: "/markdown/post/java8.md",
    },
    {
        id: "javastreams",
        title: "Learn JAVA 8 Streams",
        tags: [" Java 8","Back End", "Streams"],
        file: "/markdown/post/java_streams.md",
    },

    {
        id: "javaversions",
        title: "Learn JAVA 8 to 20 Version features",
        tags: [" Java","Back End"],
        file: "/markdown/post/java_versions.md",
    },
    {
        id: "spring-boot",
        title: "Understand the Spring Boot, Rest Features",
        tags: ["Spring", "Back End","Spring Boot 3.x","Java 20 version"],
        file: "/markdown/post/springboot.md",
    },
    {
        id: "oauth2",
        title: "OAuth2 + Java Spring Boot Guide",
        tags: ["Spring", "Back End","Spring Boot 3.x","OAuth2"],
        file: "/markdown/post/oauth2.md",
    },
    {
        id: "hibernate",
        title: "Understand the Hibernate Features",
        tags: ["Hibernate", "Back End","Java", "Spring Boot JPA"],
        file: "/markdown/post/springboot.md",
    },
    {
        id: "rest",
        title: "Learn Rest API services",
        tags: ["REST","Spring REST","Back End"],
        file: "/markdown/post/rest_api.md",
    },
    {
        id: "microservices",
        title: "Microservices Features",
        tags: ["Spring", "Back End" ,"Microservices","Spring Cloud"],
        file: "/markdown/post/microservices.md",
    },
    {
        id: "ai",
        title: "Understanding Artificial Intelligence (AI)",
        tags: ["AI", "Machine Learning", "Data"],
        file: "/markdown/post/AI.md",
    },
    {
        id: "docker",
        title: "Create, Build, and Deploy with Docker",
        tags: ["Docker", "Containers", "DevOps"],
        file: "/markdown/post/docker.md",
    },
    {
        id: "compose",
        title: "Working with Docker Compose in Frontend Apps",
        tags: ["Frontend", "UI", "Docker"],
        file: "/markdown/post/compose.md",
    },
    {
        id: "flowbite",
        title: "Working with Flowbite in Frontend Apps",
        tags: ["Frontend", "UI", "Flowbite","CSS","Styles","React"],
        file: "/markdown/post/flowbite.md",
    },
    {
        id: "angular",
        title: "Angular + REST API CRUD example",
        tags: ["Frontend", "Angular", "Rest"],
        file: "/markdown/post/angular.md",
    },
    {
        id: "algorithms-loops",
        title: "Algorithms, Loops, and Conditionals",
        tags: ["JavaScript", "Logic", "Programming"],
        file: "/markdown/post/algorithms-loops-and-conditionals.md",
    },

    {
        id: "http-rest",
        title: "Understanding HTTP and REST APIs",
        tags: ["API", "HTTP", "Backend"],
        file: "/markdown/post/http_rest.md",
    },
    {
        id: "intro-to-express",
        title: "Getting Started with Express",
        tags: ["Express", "Node.js", "Backend"],
        file: "/markdown/post/intro-to-express.md",
    },
    {
        id: "intro_to_express",
        title: "Express Basics and Middleware",
        tags: ["Express", "Server", "API"],
        file: "/markdown/post/intro_to_express.md",
    },
    {
        id: "hono",
        title: "Learn about Hono + NodeJs",
        tags: ["Node", "Server", "Hono"],
        file: "/markdown/post/hono.md",
    },
    {
        id: "mailgun",
        title: "Mailgun Authentication Express Guide",
        tags: ["Express", "Server", "Mailgun","Node.js", "Backend"],
        file: "/markdown/post/mailgun_auth.md",
    },
    {
        id: "intro_to_react",
        title: "React Router + API integration example",
        tags: ["React", "Frontend", "JavaScript"],
        file: "/markdown/post/intro_to_react.md",
    },
    {
        id: "react_md",
        title: "React Router + Markdown Blog Guide",
        tags: ["React", "Frontend", "Markdown Files"],
        file: "/markdown/post/react_md.md",
    },
    {
        id: "javascript",
        title: "JavaScript Fundamentals",
        tags: ["JavaScript", "ES6", "Frontend"],
        file: "/markdown/post/javascript.md",
    },
    {
        id: "react-intro",
        title: "React Introduction and Setup",
        tags: ["React", "JavaScript", "Frontend"],
        file: "/markdown/post/react-intro.md",
    },
    {
        id: "git-branching",
        title: "Git Branching Simplified",
        tags: ["Git", "Version Control", "DevOps"],
        file: "/markdown/post/git-branching.md",
    },
    {
        id: "oml",
        title: "Introduction to Object Modeling Language (OML)",
        tags: ["Modeling", "Design", "Architecture"],
        file: "/markdown/post/oml.md",
    },
    {
        id: "ddl",
        title: "Data Definition Language (DDL) Explained",
        tags: ["SQL", "Database", "DDL"],
        file: "/markdown/post/ddl.md",
    },
    {
        id: "sql",
        title: "SQL Guide",
        tags: ["SQL", "Database", "Joins"],
        file: "/markdown/post/sql.md",
    },
    {
        id: "persona",
        title: "Creating User Personas for Design",
        tags: ["UX", "Design Thinking", "Personas"],
        file: "/markdown/post/persona.md",
    },
    {
        id: "pm-sprints",
        title: "Project Management and Agile Sprints",
        tags: ["Agile", "Scrum", "Project Management"],
        file: "/markdown/post/pm-sprints.md",
    },
    {
        id: "project-management",
        title: "Core Concepts of Project Management",
        tags: ["Management", "Planning", "Agile"],
        file: "/markdown/post/project-management.md",
    },
    {
        id: "ui-ux",
        title: "UI/UX Design Principles for Developers",
        tags: ["UI", "UX", "Design"],
        file: "/markdown/post/ui-ux.md",
    },

];