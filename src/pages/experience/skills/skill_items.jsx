export const skill_data = () => {
    return new Promise((resolve, reject) => {
        resolve(data());
    });
  
  };

// const TYPES = [
//     { id: 1, name: '😵‍💫 All' },
//     { id: 2, name: '🌟 Main Picks' },
//     { id: 3, name: '💬 Languages' },
//     { id: 4, name: '📚 Libraries/Frameworks/Engines' },
//     { id: 5, name: '💾 Databases' },
//     { id: 6, name: '🛠️ Developer Tools' },
//     { id: 7, name: '🌐 Hosting' },
//     { id: 8, name: '📆 Project Management' },
// ]

const data = () => {
    return [
        {
            name: "C++",
            icon: <i class="devicon-cplusplus-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Fun fact: The creator of this language taught at my university!",
            display: [1, 2, 3],
            projects: [""]
        },
        {
            name: "C",
            icon: <i class="devicon-c-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "frequent use",
            use_color: 'bg-lime-600',
            description: "printf() is both faster and easier, I will die on this hill.",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "C#",
            icon: <i class="devicon-csharp-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Game dev + .NET stuff",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "Python",
            icon: <i class="devicon-python-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "frequent use",
            use_color: 'bg-lime-600',
            description: "Tutor with is for ENGR 102",
            display: [1, 2, 3],
            projects: [""]
        },
        {
            name: "JavaScript",
            icon: <i class="devicon-javascript-plain"></i>,
            experience: "1 yr",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "For projects both personal and for Arbin Instruments.",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "TypeScript",
            icon: <i class="devicon-typescript-plain"></i>,
            experience: "1 yr",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "For projects both personal and for Arbin Instruments.",
            display: [1, 2, 3],
            projects: [""]
        },
        {
            name: "R",
            icon: <i class="devicon-r-original"></i>,
            experience: "2.5 yrs",
            exp_color: 'bg-lime-600',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Used in my research!",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "Java",
            icon: <i class="devicon-java-plain"></i>,
            experience: "6 yrs",
            exp_color: 'bg-lime-800',
            use: "moderate use",
            use_color: 'bg-orange-700',
            description: "The first language I ever learned! Courtesy of AP CSA.",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "HTML",
            icon: <i class="devicon-html5-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "HTML demon over here.",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "CSS",
            icon: <i class="devicon-css3-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "CSS enjoyer",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "Dart",
            icon: <i class="devicon-dart-plain"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Used with Flutter!",
            display: [1, 3],
            projects: [""]
        },
        {
            name: "VS Code",
            icon: <i class="devicon-vscode-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Personal fave editor <3",
            display: [1, 2, 6],
            projects: [""]
        },
        {
            name: "Visual Studio",
            icon: <i class="devicon-visualstudio-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "frequent use",
            use_color: 'bg-lime-700',
            description: "Finally learned how to use a debugger with this.",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "R Studio",
            icon: <i class="devicon-rstudio-plain"></i>,
            experience: "2.5 yrs",
            exp_color: 'bg-lime-600',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Used in my research!",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "NumPy",
            icon: <i class="devicon-numpy-original"></i>,
            experience: "3 yrs",
            exp_color: 'bg-green-700',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Also help teach this for ENGR 102",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Pandas",
            icon: <i class="devicon-pandas-original"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "AI4ALL projects and such.",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Kaggle",
            icon: <i class="devicon-kaggle-original"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "AI4ALL projects and such.",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Jupyter",
            icon: <i class="devicon-jupyter-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "AI4ALL projects and such.",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "TensorFlow",
            icon: <i class="devicon-tensorflow-original"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Used in my CarryOn project!",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "PyTorch",
            icon: <i class="devicon-pytorch-original"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "pytorching :o",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Selenium",
            icon: <i class="devicon-selenium-original"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Used in my CarryOn project!",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "ThreeJS",
            icon: <i class="devicon-threejs-original"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "On this website o-o",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "React",
            icon: <i class="devicon-react-original"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "I have a LinkedIn cert for this >:]",
            display: [1, 2, 4],
            projects: [""]
        },
        {
            name: "NodeJS",
            icon: <i class="devicon-nodejs-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Node >>>",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "ExpressJS",
            icon: <i class="devicon-express-original"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Pretty good for backend stuff.",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "MongoDB",
            icon: <i class="devicon-mongodb-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "I've set up my own cluster! B)",
            display: [1, 2, 5],
            projects: [""]
        },
        {
            name: "PostGreSQL",
            icon: <i class="devicon-postgresql-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Over a yr's data for restaurants for CSCE 315 project!",
            display: [1, 5],
            projects: [""]
        },
        {
            name: ".NET",
            icon: <i class="devicon-dotnetcore-plain"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Used during my Arbin Instruments internship heavily.",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Electron",
            icon: <i class="devicon-electron-original"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Used during my Arbin Instruments internship heavily.",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "TailwindCSS",
            icon: <i class="devicon-tailwindcss-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "On this website o-o",
            display: [1, 2, 4],
            projects: [""]
        },
        {
            name: "MaterialUI",
            icon: <i class="devicon-materialui-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "On this website o-o",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Bootstrap",
            icon: <i class="devicon-bootstrap-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "IMO there are just a lot of better CSS options.",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Flutter",
            icon: <i class="devicon-flutter-plain"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Mobile dev go brrrr",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Android Studio",
            icon: <i class="devicon-androidstudio-plain"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Sacrificed so much storage space for this 😭😭",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Git",
            icon: <i class="devicon-git-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "git gud",
            display: [1, 2, 6],
            projects: [""]
        },
        {
            name: "GitHub",
            icon: <i class="devicon-github-original"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "Have hosted some github pages.",
            display: [1, 6, 9],
            projects: [""]
        },
        {
            name: "NPM",
            icon: <i class="devicon-npm-original-wordmark"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "package manager of choice",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Yarn",
            icon: <i class="devicon-yarn-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "I never noticed that it has a cute logo!",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Linux",
            icon: <i class="devicon-linux-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Via WSL and remote SSH",
            display: [1, 4, 6],
            projects: [""]
        },
        {
            name: "Ubuntu",
            icon: <i class="devicon-ubuntu-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "For all my C++ stuff :o",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "SSH",
            icon: <i class="devicon-ssh-original"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "light use",
            use_color: 'bg-red-500',
            description: "I have an SSH key for github :)",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Nuget",
            icon: <i class="devicon-nuget-original"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "I've downloaded a few nugets for Arbin Instruments :]c",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Latex",
            icon: <i class="devicon-latex-original"></i>,
            experience: "1 yr",
            exp_color: 'bg-orange-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Lab reports :,)",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Putty",
            icon: <i class="devicon-putty-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "For CSCE 314; one of the most painful experiences.",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Docker",
            icon: <i class="devicon-docker-plain"></i>,
            experience: "3 yrs",
            exp_color: 'bg-green-700',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Want to get better at this for sure.",
            display: [1, 7, 8],
            projects: [""]
        },
        {
            name: "Figma",
            icon: <i class="devicon-figma-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "I used to be obsessed with making powerpoints.",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Blender",
            icon: <i class="devicon-blender-original"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "The world's greatest blenderer.",
            display: [1, 6],
            projects: [""]
        },
        {
            name: "Unity",
            icon: <i class="devicon-unity-original"></i>,
            experience: "3 yrs",
            exp_color: 'bg-lime-700',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "a lotta game jams..",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Unreal",
            icon: <i class="devicon-unrealengine-original"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Game jam team game!",
            display: [1, 4],
            projects: [""]
        },
        {
            name: "Markdown",
            icon: <i class="devicon-markdown-original"></i>,
            experience: "3 yr",
            exp_color: 'bg-lime-700',
            use: "heavy use",
            use_color: 'bg-lime-700',
            description: "A lot of Github READMEs.",
            display: [1, 6, 8],
            projects: [""]
        },
        {
            name: "Trello",
            icon: <i class="devicon-trello-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Used for CSCE 315 Project",
            display: [1, 8],
            projects: [""]
        },
        {
            name: "Confluence",
            icon: <i class="devicon-confluence-original"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Used at my Arbin Instruments internship.",
            display: [1, 8],
            projects: [""]
        },
        {
            name: "Jira",
            icon: <i class="devicon-jira-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Used at my Arbin Instruments internship.",
            display: [1, 8],
            projects: [""]
        },
        {
            name: "Slack",
            icon: <i class="devicon-slack-plain"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Slack for the APEC Challenge.",
            display: [1, 8],
            projects: [""]
        },
        {
            name: "Heroku",
            icon: <i class="devicon-heroku-original"></i>,
            experience: "<1 yr",
            exp_color: 'bg-red-500',
            use: "light use",
            use_color: 'bg-red-500',
            description: "Hosted some twitter bots!",
            display: [1, 7],
            projects: [""]
        },
        {
            name: "Firebase",
            icon: <i class="devicon-firebase-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "What hosts this site!",
            display: [1, 7],
            projects: [""]
        },
        {
            name: "Azure",
            icon: <i class="devicon-azure-plain"></i>,
            experience: "2 yrs",
            exp_color: 'bg-orange-500',
            use: "moderate use",
            use_color: 'bg-orange-500',
            description: "Using my 200$ student credit B)",
            display: [1, 7],
            projects: [""]
        },
        {
            name: "Vercel",
            icon: <div>
                    <div className='hidden dark:block'>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f59e0b" viewBox="0 0 256 222"><path d="m128 0l128 221.705H0z"/></svg>
                    </div>
                    <div className='dark:hidden'>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#78350f" viewBox="0 0 256 222"><path d="m128 0l128 221.705H0z"/></svg>
                    </div>
                </div>,
            experience: "1 yrs",
            exp_color: 'bg-orange-500',
            use: "frequent use",
            use_color: 'bg-lime-600',
            description: "Honestly such a good tool.",
            display: [1, 7],
            projects: [""]
        },
    ];
}