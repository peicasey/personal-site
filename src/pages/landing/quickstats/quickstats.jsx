import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Parallax from 'parallax-js';

import Me from '../../../assets/meTpose.png';
import Floaties from '../../../assets/floaties1.png';
import FloatiesTop from '../../../assets/floaties2.png';

// icons
import { SiCplusplus, SiPython, SiR, SiTypescript } from "react-icons/si";

const INDEX =
[
    0, 1, 2, 3, 4, 5
]

const TOP_LANGS = [
    { 
        name: "C++",
        icon: <SiCplusplus/>,
        idx: 0,
        exp: 
        [
            [1, 75, 0],
            [1, 100, 0],
            [1, 110, 0],
            [1, 150, 0],
            [0, 200, 0],
        ]
    },
    { 
        name: "TypeScript",
        icon: <SiTypescript/>,
        idx: 1,
        exp: 
        [
            [1, 100, 50],
            [1, 110, 50],
            [1, 150, 50],
            [1, 200, 50],
            [0, 300, 50],
        ]
    },
    { 
        name: "Python",
        icon: <SiPython/>,
        idx: 2,
        exp: 
        [
            [1, 110, 100],
            [1, 150, 100],
            [1, 200, 100],
            [0, 300, 100],
            [0, 400, 100],

        ]
    },
    { 
        name: "R",
        icon: <SiR/>,
        idx: 3,
        exp:
        [
            [1, 150, 100],
            [1, 200, 100],
            [1, 300, 100],
            [1, 400, 100],
            [0, 500, 100],

        ]
    },
]


const FUN = [
    'begs cats for attention',
    'sleepy'
]

const seeMore = 
`
    scale-0 group-hover:scale-100 group-hover:translate-y-[-10px]
    duration-100 
    absolute top-0 right-[-50px]
    p-2 rounded-lg bg-white dark:bg-neutral-800 
    text-sm text-amber-800 dark:text-amber-500
`

const glow = 
`
    select-none
    w-60 h-auto 
    group-hover:opacity-25 group-hover:brightness-125 group-hover:blur-md
    dark:group-hover:brightness-50 dark:group-hover:opacity-100 dark:group-hover:blur-lg
    opacity-0 dark:opacity-100 transition-opacity
    brightness-50 blur-md
`

const bg = 
`   
    sm:h-full w-[100vw] py-8 pl-64
    h-[60vh] 
    pr-2 sm:pr-8 md:pr-12 lg:pr-24
    flex flex-col md:flex-row gap-0 md:gap-8 lg:gap-18
`

const skill_rating =
`
    w-4 h-4 lg:w-6 lg:h-6
    border-[1px] border-amber-700 dark:border-lime-700
    bg-amber-500 dark:bg-lime-800
    translate-x-[-40px] scale-0 
    group-hover:scale-100 group-hover:translate-x-0 
    duration-500
`

export default function QuickStats () {

    const navigate = useNavigate();

    useEffect(() => { 
        console.log("Mounted"); 
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
        parallaxInstance.friction(0.2, 0.2);

    },[]);
    

    return (
        <div onClick={() => navigate('/experience')} className='group hover:cursor-pointer w-full my-28'>
            <div className='flex justify-center' id="scene">
                <div className='py-4' data-depth="0">
                    <div className={bg}>
                        <div className='md:w-[50vw] pl-0 '>
                            <p className="font-bold text-lg text-amber-950 dark:text-white">Me in a nutshell :)</p>
                            <div className='text-amber-950 dark:text-lime-700 font-normal hidden sm:block'>
                                <p>I've worked mostly in web, desktop, games, and statistics!</p>
                                <p className='mt-2'>However I've also dabbled in mobile, AI/ML, parellized networks, and assembly.</p>
                                <p className='mt-2'>You'll find me checking out some new front-end JS package!</p>
                            
                            </div>
                        </div>
                        <div className='w-full text-amber-700 dark:text-white pl-0 mt-4'>
                            <div className='flex justify-between flex-wrap flex-col sm:flex-row gap-4 sm:gap-0 duration-500'>
                                {TOP_LANGS.map((top_lang) => (
                                    <div className='flex items-center sm:gap-2 duration-500' >
                                        <div className='group-hover:translate-y-[-2px] group-hover:hidden flex items-center gap-4'>
                                            <div className='scale-150 lg:text-3xl'>
                                                {top_lang.icon}
                                            </div>
                                            <div className=''>
                                                {top_lang.name}
                                            </div>
                                        </div>
                                        <div className='w-0 group-hover:w-full overflow-hidden'>
                                            <div className='flex items-center gap-1'>
                                                <div className=' translate-y-2 translate-x-[-100px] group-hover:translate-x-0 group-hover:translate-y-0 duration-100'>
                                                    {top_lang.icon}
                                                </div>
                                                <div className='translate-y-2 translate-x-[-100px] group-hover:translate-x-0 group-hover:translate-y-0  duration-200'>
                                                    {top_lang.name}
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex gap-1 lg:gap-2 w-full'>
                                                    {top_lang.exp.map((exp) => (
                                                        <div 
                                                            className={skill_rating} 
                                                            style={{
                                                                background: (!exp[0]) ? 'transparent' : '',
                                                                'transition-duration': exp[1] + 'ms',
                                                                'transition-delay': exp[2] + 'ms',

                                                            }}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='absolute left-0 sm:left-auto translate-y-24 sm:translate-y-14 sm:relative w-full flex justify-center'>
                                <div className='p-4 bg-[#33352f] dark:bg-neutral-800 rounded-lg mt-1 overflow-hidden'>
                                    <div className='absolute group-hover:opacity-0 group-hover:translate-x-[-100%] translate-x-0 ease-in-out duration-100'>
                                        <code className='text-white text-sm sm:text-md'>
                                            [...]
                                        </code>
                                    </div>
                                    <div className='translate-x-[-150%] group-hover:translate-x-0 ease-out duration-300'>
                                        <code className='text-white text-sm sm:text-md'>
                                            ['begs cats for attention', 'sleepy']
                                        </code>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <img data-depth="0.1"
                    src={Floaties}
                    className='w-60 h-auto select-none filter drop-shadow-sm'
                />
                <img data-depth="0.2"
                    src={Me}
                    className={glow}
                />
                <div className=' flex' data-depth="0.3">
                    <img 
                        src={Me}
                        className='group-hover:scale-[1.05] transition-transform duration-300 w-60 h-auto select-none filter dark:brightness-75 drop-shadow-md'
                    />
                    <div className={seeMore}>
                        Click to see more!
                    </div>
                </div>
            
                <img data-depth="0.6"
                    src={FloatiesTop}
                    className='w-60 h-auto select-none filter brightness-125 dark:brightness-200 drop-shadow-lg'
                />
            
            </div>

        </div>
    )   
}