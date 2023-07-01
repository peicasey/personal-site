import { useState } from 'react'

import Status from './status/status'
import Adventures_Brief from '../adventures/adventures_brief'
import NextButton from '../../components/nextbutton'

import '../../index.css'
import './landing.css'

export default function Landing() {

    const [count, setCount] = useState(0)

    return (
        <div className="">
            {/* #3b2b16  #704009 */}
            <div className="bg-[#ffc846] dark:bg-[#0c0b09] h-[32rem] sm:h-[26rem] md:h-[40rem] lg:h-[32rem] flex flex-col sm:flex-row justify-between duration-200">
                <div className="hidden sm:block"></div>
                <div className="relative w-auto md:w-2/4 m-20">
                    <div className="relative mb-4">
                        <div >
                            <h1 className="text-6xl dark:text-black md:text-8xl drop-shadow-lg font-bold mr-3">HI! IT'S</h1>
                            <h1 className="text-7xl dark:text-black md:text-8xl drop-shadow-lg font-bold mr-3">CASEY PEI</h1>
                        </div>
                        <div className="absolute top-0 left-2 aria-hidden select-none">
                            <h1 className="text-6xl md:text-8xl font-bold text-amber-200 text-stroke mr-1">HI! IT'S</h1>
                            <h1 className="text-7xl md:text-8xl  font-bold text-amber-200 text-stroke mr-1">CASEY PEI</h1>
                        </div>
                        <div className="absolute top-0 left-3 aria-hidden select-none">
                            <h1 className="text-6xl md:text-8xl font-bold text-amber-500 text-stroke">HI! IT'S</h1>
                            <h1 className="text-7xl md:text-8xl font-bold text-amber-500 text-stroke">CASEY PEI</h1>
                        </div>
                    </div>
                    
                    <p className="text-md md:text-xl mb-4 text-black dark:text-white duration-500">Welcome to my site! I'm Casey, currently a <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 hover:text-lime-200 dark:text-lime-200 dark:hover:text-lime-500 duration-500">junior Honors CS + Stats major @ Texas A&M 🎓</a> interested in all things software dev :)</p>
                    <Status />
                </div>
                
                
               
            </div>
            <div className="p-10 pl-24 pr-24 bg-neutral-50 dark:bg-[#211e1d] md:text-lg mb-2 dark:text-white duration-500">
                <p className="text-md text-amber-500 mb-4">C:/landing/hi-there.txt</p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">Thanks for visiting my little corner of the internet</p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">I'm currently a <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 dark:text-lime-200">junior Honors CS + Stats major @ Texas A&M 🎓</a></p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">Previously I've been at <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 dark:text-lime-200">Institute of Biosciences and Technology</a></p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">Always love to have a chat, so if any of that interests you, reach me here: <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 dark:text-lime-200">Institute of Biosciences and Technology</a></p>
            </div>
            
            <div>

            </div>
            <div className="bg-[#e6e4e3] dark:bg-[#131211]">
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <h1>Vite + React + Casey's site for now :D</h1>
                <h2>Dev change</h2>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                    </button>
                    <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
            <div className="p-16 ">
                <div className="flex justify-between">
                    <p className="text-lg font-bold dark:text-white">What I've been up to!</p>
                    <NextButton link={'/adventures'} page_name={'more'} />
                </div>
                <Adventures_Brief />
            </div>
        </div>
    )
}