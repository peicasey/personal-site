import { Suspense } from 'react'
import About_Cards from './components/about_cards'

import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { Disclosure, Transition } from '@headlessui/react'

import Me from '../../assets/me.png'

const tags = [
    {
      text: "she/her",
    },
    {
        text: "web dev",
    },
    {
        text: "biostats",
    },
    {
        text: "AI/ML",
    },
    {
        text: "game dev",
    },
]


const currently = [
    {
        text: "studying as a 3rd year Honors CS + Stats major 🎓 at",
        link_text: 'Texas A&M',
        link: 'https://engineering.tamu.edu/cse/index.html'
    },
    {
        text: "making C# and Electron desktop apps as a SWE Intern 💼 at",
        link_text: 'Arbin Instruments',
        link: 'https://arbin.com/about-us/'
    },
    {
        text: "scouring R docs as an undergrad biostats researcher 🧬 at the",
        link_text: 'Institute of Biosciences and Technology',
        link: 'https://ibt.tamu.edu/faculty/kurt-zhang.html'
    },  
];

const school = [
    {
        text: "begging the Finance Center for funds as Vice President 💻 at the",
        link_text: 'Aggie Coding Club',
        link: 'https://aggiecodingclub.com/'
    },
    {
        text: "explaining a for-loop as Vice President 🧑‍🏫 at the",
        link_text: 'ENGR TA Organization',
        link: 'http://tx.ag/engr102dc'
    },
    {
        text: "increasing diversity and inclusion in AI/ML 🤖 at ",
        link_text: 'AI4ALL',
        link: 'https://ai-4-all.org/'
    },
    {
        text: "competitively programming 👨‍💻 at the ",
        link_text: 'Aggie Competitive Programming Club',
        link: 'https://tamuacpc.com/home'
    },
    {
        text: "coding new games 👾 with my",
        link_text: 'game jam team',
        link: 'https://pengso0o.itch.io/'
    },
    {
        text: "on-the-spot planning yet another project 🤔 at",
        link_text: 'some hackathons',
        link: 'https://devpost.com/peicasey'
    },
];


const previously = [
    {
        text: "applied island-clustering algorithms in breast cancer detection 🧑‍🔬 as a",
        link_text: 'Hamill Summer Research Intern',
        link: 'https://ibt.tamu.edu/education/biotech-graduate-track/summer-research-program.html'
    },
    {
        text: "ordered pizza for 200 project members as Projects Chair 💻 at the",
        link_text: 'Aggie Coding Club',
        link: 'https://aggiecodingclub.com/'
    },
    {
        text: "advocated for women in STEM fields ⚙️ at the ",
        link_text: 'Society of Women Engineers',
        link: 'https://www.swetamu.com/'
    },

];

const Loading = () => {
    return (
        <div className='w-36 sm:w-[20vw] animate-pulse flex-grow h-auto rounded-lg flex justify-center items-center'>
            <p>Loading... 🐊</p>
        </div>
    );
};

export default function About() {

    const link_style = "underline decoration-dotted text-lime-700 hover:text-[#a9b11b] dark:text-lime-200 dark:hover:text-lime-300"

    return (
        <div className="mt-20 dark:text-white">
            <div className="relative mb-8 mr-8 ml-8 sm:mr-24 sm:ml-24">
                <div >
                    <h1 className="text-5xl sm:text-6xl dark:text-red-800 font-bold mr-2 duration-0">ABOUT</h1>
                </div>
                <div className="absolute top-0 left-1 aria-hidden select-none">
                    <h1 className="text-5xl sm:text-6xl font-bold text-amber-500 text-stroke">ABOUT</h1>
                </div>
            </div>
            <div className="flex flex-col items-stretch md:flex-row gap-16 p-10 pb-16 sm:pl-24 sm:pr-24 bg-stone-50 dark:bg-[#211e1d] mb-2 dark:text-white duration-500">
                
                <div className='h-full w-full flex flex-col justify-center items-center pt-8'>
                    <Suspense fallback={ <Loading/> }>
                        <img
                            src={ Me }
                            alt='Casey Pei staring off past the camera'
                            className='w-36 sm:w-[20vw] flex-grow h-auto rounded-lg'
                        />
                    </Suspense>
                    <p className='mt-4 sm:text-center text-stone-500 text-sm'>
                        figure 1. a picture to humanize me by reminding you that 
                        I'm a real person and not a little internet creature
                    </p>
                    

                </div>
                <div>
                    <p className="text-md text-amber-500">C:/about/about-me.txt</p>
                    <div className="flex flex-wrap mt-4 mb-8 gap-2">
                        {tags.map((tag) => (
                        <div className="flex items-center hover:cursor-zoom-in bg-[#a8c480] hover:bg-lime-200 dark:bg-lime-900 dark:hover:bg-lime-600 text-xs hover:text-sm sm:text-sm sm:hover:text-[1em] rounded-lg pl-2 pr-2 duration-200">
                            {tag.text}
                        </div>
                        ))} 
                    </div>
                    <p className="text-sm sm:text-md mb-4 dark:text-neutral-200 duration-500">
                        Hi, my name is Casey :)
                    </p>
                    <p className="text-sm sm:text-md mb-4 dark:text-neutral-200 duration-500">
                        I am a computer science student hailing from the dry lands of Albuquerque,
                        New Mexico! I love making interesting projects that are either entertaining
                        or helpful and occassionally both -- combining accessible, aesthetic and intuitive 
                        design with an application of AI/ML and statistics. As of now, I've done the 
                        most work in web, AI/ML, biostatistics, games and desktop.
                    </p>
                    <p className="text-sm sm:text-md mb-8 dark:text-neutral-200 duration-500">
                        Outside of CS Major<sup className='text-[0.5em]'>TM</sup> activities, I am an 
                        enjoyer of Nightwing and other superheroes, partaker in digital art and animation,
                        and loyal watcher of the <a className={link_style} href='https://www.youtube.com/user/technothepig' target='_blank'>Technoblade 
                        youtube channel
                        </a>. 
                        You will often find me studying
                        / taking a nap in the Zachry Engineering Building, binging a new 3-hour video essay, 
                        and sending oddly specific online personality quizzes to friends.
                    </p>
                    
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-2 py-2 text-left text-sm font-medium bg-[#edece8] hover:bg-[#dcdbd7] dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-500">
                            <p className="text-sm sm:text-md">
                                ⏰ Currently I'm . . .
                            </p>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-neutral-500 dark:text-neutral-500 duration-500`}
                            />
                        </Disclosure.Button>
                        <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                        <Disclosure.Panel className="px-2 pb-2 pt-2 text-sm text-neutral-500 dark:text-neutral-200">
                            <ul className="text-sm sm:text-md ">
                                {currently.map((curr) => (
                                <li className="list-[square] marker:text-amber-500 ml-4">
                                    <p> {curr.text} <a href={curr.link} target="_blank" rel="noopener noreferrer" className={link_style}>{curr.link_text}</a>.</p>
                                </li>
                            ))}
                        </ul>
                        </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>

                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-2 py-2 mt-2 text-left text-sm font-medium bg-[#edece8] hover:bg-[#dcdbd7] dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-500">
                            <p className="text-sm sm:text-md">
                                🎒 At school I'm . . .
                            </p>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-neutral-500 dark:text-neutral-500 duration-500`}
                            />
                        </Disclosure.Button>
                        <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                        <Disclosure.Panel className="px-2 pb-2 pt-2 text-md text-neutral-500 dark:text-neutral-200">
                            <ul className="text-sm sm:text-md ">
                                {school.map((sch) => (
                                <li className="list-[square] marker:text-amber-500 ml-4">
                                    <p> {sch.text} <a href={sch.link} target="_blank" rel="noopener noreferrer" className={link_style}>{sch.link_text}</a>.</p>
                                </li>
                                ))}
                            </ul>
                        </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>

                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-2 py-2 mt-2 text-left text-sm font-medium bg-[#edece8] hover:bg-[#dcdbd7] dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-500">
                            <p className="text-sm sm:text-md">
                                ⏪ Previously I've . . .
                            </p>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-neutral-500 dark:text-neutral-500 duration-500`}
                            />
                        </Disclosure.Button>
                        <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                        <Disclosure.Panel className="px-2 pb-2 pt-2 text-sm text-neutral-500 dark:text-neutral-200">
                            <ul className="text-sm sm:text-md ">
                                {previously.map((prev) => (
                                <li className="list-[square] marker:text-amber-500 ml-4">
                                    <p> {prev.text} <a href={prev.link} target="_blank" rel="noopener noreferrer" className={link_style}>{prev.link_text}</a>.</p>
                                </li>
                                ))}
                            </ul>
                        </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>

                    <p className="text-sm sm:text-md mt-8 mb-4 dark:text-neutral-200 duration-500">
                        I can be reached at <a href="mailto:peicasey@gmail.com" target="_blank" rel="noopener noreferrer" className={link_style}>peicasey@gmail</a> or at my <a href="https://linkedin.com/in/casey-pei" target="_blank" rel="noopener noreferrer" className={link_style}>linkedin</a> :D
                    </p>

                </div>
                
            </div>
            <div className="p-24 pt-8 pb-24">
                <p className="text-lg font-bold mb-4">More from me :o</p>
                <About_Cards />
            </div>
        </div>
    )
}