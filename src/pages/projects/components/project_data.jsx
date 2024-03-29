import { RiGithubLine, RiYoutubeLine, RiSlideshowLine } from "react-icons/ri";
import { SiDevpost } from "react-icons/si";
import { FaLink, FaItchIo } from "react-icons/fa";

export const project_data = () => {
    return new Promise((resolve, reject) => {
        resolve(data());
    });
  
  };

const data = () => {
    return [
        {
            name: "Rev's Grill",
            idx: 0,
            icon: '🐕‍🦺🍔',
            color: 'maroon',
            timeline: "Mar - May 2023",
            roles: ['Full-Stack Developer'],
            tools: 
            [
                'PostgresSQL', 
                'Express.js', 'React', 'Node.js', 
                'Firebase', 'Vercel',
                'Google Translate API', 'OpenWeather API '
            ],
            categories: 
            [
                'Full-Stack', 'Web'
            ],
            description: 
            `
             Worked on the client-side employee and home page, routing and server-side of a publicly hosted PERN full-stack web application for restaurant customers, servers and managers (csce-315-project3-team51.vercel.app).
             Stores 12 months of order and inventory data, allows users to dynamically edit menu, create orders, generate reports.
            `,
            links: 
            [
              { link: 'https://csce-315-project3-team51.vercel.app/', icon: <FaLink/> },   
              { link: 'https://github.com/peicasey/CSCE315_Project3_Team51', icon: <RiGithubLine/> },
              { link: 'https://docs.google.com/presentation/d/1NTnYNZHogNn4e-pfzuGFJUpqq05gTcrCKD_wx3Y6iV8/edit?usp=sharing', icon: <RiSlideshowLine/> },   
            ]
            ,
        },
        {
            name: "CarryOn",
            idx: 1,
            icon: '🧳✈️',
            color: 'lightblue',
            timeline: "January 20-22 2023",
            roles: [ 'Project Manager', 'Front-End Developer'],
            tools: 
            [
                'React', 'Reactstrap', 
                'Python', 'TensorFlow', 'Selenium', 
                'Microsoft Azure Cloud', 'Figma'
            ],
            categories: 
            [
                'Full-Stack', 'Front-End', 'Web', 'AI/ML'
            ],
            description: 
            `
             Designed and implemented a Selenium web scraper to extract item guideline information from the Transportation Security Administration website's carry-on item guideline page.
             Developed a React Front-End to enter packing-lists, applying TensorFlow Natural Language Processing to process items and checking validity of lists.            
            `,
            links: 
            [
              { link: 'https://devpost.com/software/carryon-hg39kz', icon: <SiDevpost/> },   
              { link: 'https://github.com/peicasey/TAMUHack23', icon: <RiGithubLine/> }   
            ],
        },
        {
            name: "Crawler.txt",
            idx: 2,
            icon: '📜🤖',
            color: '#ae9068',
            timeline: "Mar - May 2023",
            roles: [ 'Designer', 'Back-End Developer'],
            tools: 
            [
                'C++', 'Windows API'
            ],
            categories: 
            [
                'Back-End', 'Networks'
            ],
            description: 
            `
                Built a multi-threaded parallelized program in C++ using the Windows API to identify and find keywords, which processed +900 MB/s or +100M words/s at 99% CPU usage when tested on Wikipedia.            
            `,
            links: 
            [
                {link: '', icon: <a className='text-xs font-bold'>N/A</a>}
            ],
        },
        {
            name: "Electify",
            idx: 3,
            icon: '🗳️⚡',
            color: '#e74646',
            timeline: "Mar - April 2023",
            roles: [ 'Project Manager', 'Full-Stack Developer'],
            tools: 
            [
                'Flutter', 'Android Studio', 'Firebase', 
                'Python', 'TensorFlow', 'Selenium', 'Figma'
            ],
            categories: 
            [
                'Full-Stack', 'Mobile', 'AI/ML'
            ],
            description: 
            `
             Designed and implemented a full-stack iOS and Android mobile app using Figma, Flutter and Android Studio, allowing users to browse articles, take quizzes, register for voting, keep track of elections and laws.
             Hosted on Firebase with user-authentication.           
            `,
            links: 
            [
                { link: 'https://github.com/peicasey/Google-Solution-23', icon: <RiGithubLine/>},
                { link: 'https://www.youtube.com/watch?v=Dq5mzhSnesQ/', icon: <RiYoutubeLine/>} 
            ],
        },
        {
            name: "Breaking Free",
            idx: 4,
            icon: '💔❤️‍🩹',
            color: '#262628',
            timeline: "February 2023",
            roles: [ 'Game Developer', 'UI Designer', 'Visuals'],
            tools: 
            [
                'Unity', 'C#',
            ],
            categories: 
            [
                'Front-End', 'Game'
            ],
            description: 
            `
             Created a grid-based puzzle game solved by switching between three characters with different abilities to navigate a system of walls, wires and pressure plates in C# and Unity Engine (pengso0o.itch.io/break-free).
             Won Best in Visuals at the Chillenium Game Jam 2023 (55 submissions, 200+ participants).        
            `,
            links: 
            [
                { link: 'https://pengso0o.itch.io/break-free', icon: <FaItchIo/>},
                { link: 'https://youtu.be/o_yJc_myIks', icon: <RiYoutubeLine/>} 
            ],
        },
        {
            name: "Edge of the Universe",
            idx: 5,
            icon: '🪐🌠',
            color: '#161932',
            timeline: "February 2023",
            roles: [ 'Game Developer', 'UI Designer', 'Visuals'],
            tools: 
            [
                'Unity', 'C#',
            ],
            categories: 
            [
                'Front-End', 'Game'
            ],
            description: 
            `
             Created a grid-based puzzle game solved by switching between three characters with different abilities to navigate a system of walls, wires and pressure plates in C# and Unity Engine (pengso0o.itch.io/break-free).
             Won Best in Visuals at the Chillenium Game Jam 2023 (55 submissions, 200+ participants).        
            `,
            links: 
            [
                { link: 'https://pengso0o.itch.io/break-free', icon: <FaItchIo/>},
                { link: 'https://youtu.be/o_yJc_myIks', icon: <RiYoutubeLine/>} 
            ],
        },
        {
            name: "Casey's Site",
            idx: 6,
            icon: '🐊🍊',
            color: '#d97706',
            timeline: "July 2023",
            roles: [ 'Lead Designer'],
            tools: 
            [
                'React', 'JS', 'MUI', 'TailwindCSS', 'ThreeJS', 'NodeJS', 'Firebase',
            ],
            categories: 
            [
                'Front-End', 'Web'
            ],
            description: 
            `
             Designed a personal portfolio site using Vite and React, deployed via Firebase.
             Crafted UX design with focus on accessability using Material UI and TailwindCSS. 
            `,
            links: 
            [
                { link: 'https://caseypei.me', icon: <FaLink/>},
            ],
        },
    ]
} 