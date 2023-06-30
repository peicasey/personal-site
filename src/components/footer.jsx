import { DocumentTextIcon } from '@heroicons/react/24/solid'

import logo from '../assets/logo_512.png'

export default function Footer() {
    return (
        <div className="p-8 pl-24 pr-24 bg-[#ffc846] dark:bg-[#51320a] dark:text-white">
            <div className="flex gap-8 sm:gap-16 mb-8 mt-4">
                <div className="flex gap-8 md:gap-16 flex-col sm:flex-row">
                    <div>
                        <img
                            className="h-auto w-16 min-w-[30px]"
                            src={logo}
                            alt="Casey Pei Logo"
                        />
                    </div>
                    <div>
                        <div className="flex items-center text-lime-700 dark:text-lime-200 gap-2">
                            <i className="devicon-linkedin-plain"></i> 
                            <a href="https://www.linkedin.com/in/casey-pei/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline decoration-dotted text-lime-700 hover:text-lime-200 dark:text-lime-200 dark:hover:text-lime-500 duration-500">linkedin</a>
                        </div>
                        <div className="flex items-center text-lime-700 dark:text-lime-200 gap-2">
                            <i className="text-lg devicon-github-plain"></i> 
                            <a href="https://github.com/peicasey/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline decoration-dotted text-lime-700 hover:text-lime-200 dark:text-lime-200 dark:hover:text-lime-500 duration-500">github</a>
                        </div>
                        <div className="flex items-center text-lime-700 dark:text-lime-200 gap-2">
                            <DocumentTextIcon />
                            <a href="https://github.com/peicasey/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline decoration-dotted text-lime-700 hover:text-lime-200 dark:text-lime-200 dark:hover:text-lime-500 duration-500">resume</a>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 sm:gap-2">
                    <p className="text-lg font-bold ">Always down to chat!</p>
                    <p className="text-sm sm:text-md">Feel free to reach out at <a href="https://www.linkedin.com/in/casey-pei/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline decoration-dotted text-lime-700 hover:text-lime-200 dark:text-lime-200 dark:hover:text-lime-500 duration-500">peicasey@gmail.com</a> or at my <a href="https://www.linkedin.com/in/casey-pei/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline decoration-dotted text-lime-700 hover:text-lime-200 dark:text-lime-200 dark:hover:text-lime-500 duration-500">linkedin</a> :D</p>
                    <p className="text-sm sm:text-md mb-4 text-lime-800 dark:text-lime-200">Made with 💚 by Casey Pei</p>
                </div>
                
            </div>
            
        </div>
    )
}