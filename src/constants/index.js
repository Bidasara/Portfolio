import { Bethevibe,netflix} from "../assets/images";
import {
    todo,
    key,
    css,
    express,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    twitter,
    cplusplus,
    docker,
    aws,
    threejs
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Container Application",   
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services",
        type: "Cloud Platform",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "3D library",
    }
];
export const projects = [
    {
        iconUrl: aws,
        theme: 'btn-back-black',
        name: 'Combine',
        description: 'Developed web applications and implemented containerization using Docker and Docker Compose. Subsequently deployed the containerized application to an Amazon Web Services (AWS) Elastic Compute Cloud (EC2) instance. The Projects are on localhost 3001 and 3002',
        link: 'http://13.53.124.6:3001/',
        githublink:'https://github.com/Bidasara/Password-Saver',
    },
    {
        iconUrl: Bethevibe,
        theme: 'btn-back-black',
        name: 'BeTheVibe',
        description: 'Developed a web application that organizes your favorite songs into albums and includes a player to listen to them.',
        link: 'https://bethevibe.freewebhostmost.com/',
        githublink:'https://github.com/Bidasara/BeTheVibe',
    },
    {
        iconUrl: key,
        theme: 'btn-back-yellow',
        name: 'DPApp',
        description: 'Created a Password Manager using React and MongoDB',
        link: 'http://13.53.124.6:3001/',
        githublink:'https://github.com/Bidasara/Password-Saver'
    },
    {
        iconUrl: todo,
        theme: 'btn-back-red',
        name: 'ToDo',
        description: 'Created a Todo List using React',
        link: 'http://13.53.124.6:3002/',
        githublink:'https://github.com/Bidasara/Todo'
    },
    {
        iconUrl: twitter,
        theme: 'btn-back-blue',
        name: 'Twitter Clone',
        description: 'Created a frontend clone of the web application twitter',
        githublink: 'https://github.com/Bidasara/Twitter-copy',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-orange',
        name: 'Netflix Clone',
        description: 'Created a frontend clone of the web application netflix',
        githublink: 'https://github.com/Bidasara/Netflix-Copy',
    }
];