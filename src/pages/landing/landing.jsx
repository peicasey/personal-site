import { useState } from 'react'

import Status from './status/status'
import QuickStats from './quickstats'
import Adventures_Brief from '../adventures/adventures_brief'
import NextButton from '../../components/nextbutton'

import '../../index.css'
import './landing.css'

export default function Landing() {

    const link_style = "underline decoration-dotted text-lime-700 hover:text-[#a9b11b] dark:text-lime-200 dark:hover:text-lime-300"

    const [count, setCount] = useState(0)

    return (
        <div className="">
            {/* #3b2b16  #704009 */}
            <div className="bg-[#ffc846] dark:bg-[#0c0b09] h-[32rem] sm:h-[26rem] md:h-[40rem] lg:h-[32rem] flex flex-col sm:flex-row justify-between duration-200">
                <div className="hidden sm:block"></div>
                <div className="relative w-auto md:w-2/4 m-20">
                    <div className="relative mb-4">
                        <div >
                            <h1 className="text-6xl dark:text-red-800 md:text-8xl drop-shadow-lg font-bold mr-3">HI! IT'S</h1>
                            <h1 className="text-7xl dark:text-red-800 md:text-8xl drop-shadow-lg font-bold mr-3">CASEY PEI</h1>
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
                    
                    <p className="text-md md:text-xl mb-4 text-black dark:text-white duration-500">Welcome to my site! I'm Casey, currently a <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 hover:text-[#a9b11b] dark:text-lime-200 dark:hover:text-lime-500 duration-500">junior Honors CS + Stats major @ Texas A&M 🎓</a> interested in all things software dev :)</p>
                    <Status />
                </div>
                
                
               
            </div>
            <div className="p-10 pl-24 pr-24 bg-neutral-50 dark:bg-[#211e1d] md:text-lg mb-2 dark:text-white duration-500">
                <p className="text-md text-amber-500 mb-4">C:/landing/hi-there.txt</p>
                <p className="text-md mb-2 dark:text-white duration-500">
                    Thanks for visiting my little corner of the internet / portfolio / project storage / blog / cry into the void!
                </p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">
                    Feel free to poke around on this landing page for an overview of everything I've put into this site or use the menu to find out more details about everything.
                </p>
                <p className="text-md md:text-lg mb-2 dark:text-white duration-500">
                    With that said, I'm always down to have a chat -- so if anything here interests you, reach me at <a href="mailto:peicasey@gmail.com" target="_blank" rel="noopener noreferrer" className={link_style}>peicasey@gmail</a> or at my <a href="https://linkedin.com/in/casey-pei" target="_blank" rel="noopener noreferrer" className={link_style}>linkedin</a> :D
                </p>
            </div>
            
            <div>
                <QuickStats />
            </div>
            
            <div className="pt-16 pb-16 pr-8 pl-8 sm:pr-16 sm:pl-16 md:pr-24 md:pl-24 md:pb-24">
                <div className="flex justify-between">
                    <p className="text-lg font-bold dark:text-white">What I've been up to!</p>
                    <NextButton link={'/adventures'} page_name={'more'} />
                </div>
                <Adventures_Brief />
            </div>
        </div>
    )
}