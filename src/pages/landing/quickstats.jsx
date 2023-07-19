import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Parallax from 'parallax-js';

import Me from '../../assets/meTpose.png';
import Floaties from '../../assets/floaties1.png';
import FloatiesTop from '../../assets/floaties2.png';

import NextButton from '../../components/nextbutton';

const TOP_LANGS = [
    { 
        name: "C++",
        icon: "C++",
    },
    { 
        name: "Javascript/TypeScript",
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

const FAVE_FRAMES = [
    { 
        name: "React",
        icon: "React",
    },
    { 
        name: "Javascript/TypeScript",
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
                    <div className='bg-[#4f6232] dark:bg-[#1c230c] h-64 w-[100vw] py-8 pl-64'>
                        <h2 className='text-lime-200 dark:text-lime-200 text-2xl font-bold'>Quick Stats</h2>
                        <div className='z-100'>
                            <NextButton link={'/experience'} page_name={'see more'} />
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
                        className='w-60 h-auto select-none filter dark:brightness-75 drop-shadow-md'
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