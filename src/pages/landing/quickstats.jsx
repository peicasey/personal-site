import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Parallax from 'parallax-js';

import Me from '../../assets/meTpose.png';
import Floaties from '../../assets/floaties1.png';
import FloatiesTop from '../../assets/floaties2.png';

// icons
import { SiCplusplus, SiPython, SiR, SiTypescript } from "react-icons/si";

const TOP_LANGS = [
    { 
        name: "C++",
        icon: <SiCplusplus/>,
    },
    { 
        name: "JavaScript / TypeScript",
        icon: <SiTypescript/>,
    },
    { 
        name: "Python",
        icon: <SiPython/>,
    },
    { 
        name: "R",
        icon: <SiR/>,
    },
]

const FAVE_FRAMES = [
    { 
        name: "React",
        icon: "React",
    },
    { 
        name: "Javascript / TypeScript",
        icon: "JS/TS",
    },
    { 
        name: "Python",
        icon: "Py",
    },
    { 
        name: "R",
        icon: "R",
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
    bg-[#4f6232] group-hover:bg-[#576732] 
    dark:bg-[#1c230c] dark:group-hover:bg-[#21290f]
    h-64 w-[100vw] py-8 pl-64 
    transition-colors duration-500
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
        <div onClick={() => navigate('/experience')} className='group hover:cursor-pointer w-full my-20'>
            <div className='flex justify-center' id="scene">
                <div className='py-10' data-depth="0">
                    <div className={bg}>
                        <h2 className='text-lime-200 text-2xl font-bold'>Quick Stats</h2>
                        <div className='text-lime-300 pl-4'>
                            <h3 className='font-bold'>TOP LANGS</h3>
                            <div className='flex gap-4 flex-wrap flex-col sm:flex-row duration-500'>
                                {TOP_LANGS.map((top_lang) => (
                                    <div className='flex items-center gap-1  duration-500'>
                                        {top_lang.icon}
                                        <div className='w-0 scale-0 truncate group-hover:w-full group-hover:scale-100 duration-500'>
                                            {top_lang.name}
                                        </div>
                                    </div>
                                ))}
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