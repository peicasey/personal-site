import { useState } from 'react'

// import Status from './status/status'
import QuickStats from './quickstats'
import Adventures_Brief from '../adventures/adventures_brief'
import NextButton from '../../components/nextbutton'
import LandingZone from './landingzone/landingzone'

import '../../index.css'
import './landing.css'

export default function Landing() {

    const link_style = "underline decoration-dotted text-lime-700 hover:text-[#a9b11b] dark:text-lime-200 dark:hover:text-lime-300"

    return (
        <div className="overflow-hidden">
            {/* #3b2b16  #704009 */}
            <LandingZone />
            <div>
                {/* <Landing/> */}
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