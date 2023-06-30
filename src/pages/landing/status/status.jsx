import React, { Component } from 'react';
import TypeIt from "typeit-react";
import '../../../index.css'
import './status.css'

// const statuses = [

//     { name: 'working as a SWE Intern @ Arbin Instruments 💼', link: 'https://arbin.com/about-us/' },
//     { name: 'doing undergrad biostatistics research 🧬', link: 'https://ibt.tamu.edu/faculty/kurt-zhang.html' },
//     { name: 'as the VP @ Aggie Coding Club 💻', link: 'https://aggiecodingclub.com/' },
//     { name: 'as the VP @ ENGR TA Organization 🧑‍🏫', link: 'http://tx.ag/engr102dc' },
//     { name: 'as an AI/ML Changemaker @ AI4ALL 🤖', link: 'https://ai-4-all.org/' },
//     { name: 'competively programming @ Aggie Competitive Programming Club 👨‍💻', link: 'https://tamuacpc.com/home' },
//     { name: 'coding new games 👾', link: 'https://pengso0o.itch.io/' },
//     { name: 'planning yet another project 🤔', link: 'https://devpost.com/peicasey' },

// ]

const SPEED = 20; /* The speed/duration of the effect in milliseconds */
const START_DELAY = 2500;

export default class Status extends Component {

    
    render() {

        return (
            <div>
                <p className="text-md md:text-xl text-black dark:text-white duration-500">You can catch me <a id="status-update" href="/links" className="underline decoration-dotted text-lime-700 dark:text-lime-100">
                    <TypeIt className="hover:text-lime-200 dark:text-lime-200 dark:hover:text-lime-500 duration-500"
                        options={{
                        loop: true,
                        breakLines: false,
                        cursorChar: '|',
                        lifeLike: true,
                        loopDelay: [0, START_DELAY],
                        startDelay: 0,
                        cursorSpeed: 500,
                        speed: SPEED,
                        strings: [
                            'working as a SWE Intern @ Arbin Instruments 💼', 
                            'doing undergrad biostatistics research 🧬',
                            'as the VP @ Aggie Coding Club 💻',
                            'as the VP @ ENGR TA Organization 🧑‍🏫',
                            'as an AI/ML Changemaker @ AI4ALL 🤖',
                            'competively programming @ Aggie Competitive Programming Club 👨‍💻', 
                            'coding new games 👾',
                            'planning yet another project 🤔',
                        ],
                        waitUntilVisible: true,
                        }}
                    />
                </a> at the moment.</p>
            </div>
        )
    }
    
}