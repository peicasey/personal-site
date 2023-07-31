import { DocumentTextIcon } from '@heroicons/react/24/solid'

import logo from '../../assets/logo_512.png'

import './footer.css'

export default function Footer() {

    const link_style = "cursor-pointer underline decoration-dotted text-lime-700 hover:text-[#a9b11b] dark:text-lime-200 dark:hover:text-lime-500 duration-500"

    return (
        <div className="py-8 px-16 sm:px-24 bg-[#ffc846] dark:bg-[#0c0b09] dark:text-white inset-shadow">
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
                            <a href="https://www.linkedin.com/in/casey-pei/" target="_blank" rel="noopener noreferrer" className={link_style}>linkedin</a>
                        </div>
                        <div className="flex items-center text-lime-700 dark:text-lime-200 gap-2">
                            <i className="text-lg devicon-github-plain"></i> 
                            <a href="https://github.com/peicasey/" target="_blank" rel="noopener noreferrer" className={link_style}>github</a>
                        </div>
                        <div className="flex items-center text-lime-700 dark:text-lime-200 gap-2">
                            <DocumentTextIcon />
                            <a href="https://github.com/peicasey/" target="_blank" rel="noopener noreferrer" className={link_style}>resume</a>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 sm:gap-2">
                    <p className="text-lg font-bold ">Always down to chat!</p>
                    <p className="text-sm sm:text-md">Feel free to reach out at <a href="https://www.linkedin.com/in/casey-pei/" target="_blank" rel="noopener noreferrer" className={link_style}>peicasey@gmail.com</a> or at my <a href="https://www.linkedin.com/in/casey-pei/" target="_blank" rel="noopener noreferrer" className={link_style}>linkedin</a> :D</p>
                    <p className="text-sm sm:text-md text-lime-800 dark:text-lime-200">Made with 💚 by Casey Pei</p>
                    
                    <p className="text-sm sm:text-md mb-0">
                        <a href="/accessibility" target="_blank" rel="noopener noreferrer" className={link_style}>Accessibility Statement</a> <br/> <a href="https://www.websitecarbon.com/website/caseypei-me/" target="_blank" rel="noopener noreferrer" className={link_style}> 1.83 g of CO2/view</a>
                    </p>
                    
                </div>
                
            </div>
            
        </div>
    )
}