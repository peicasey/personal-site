import Project_Cards from './components/project_cards'
import Project_Feature from './components/project_feature'


export default function Projects() {

    return (
        <div className="pt-24 dark:text-white">
            <div className='flex justify-center sm:justify-normal sm:ml-24 mb-8'>
                <div className="relative">
                    <div>
                        <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">PROJECTS</h1>
                    </div>
                    <div className="absolute top-0 left-1 aria-hidden select-none">
                        <h1 className="text-6xl font-bold text-amber-500 text-stroke">PROJECTS</h1>
                    </div>
                </div>
            </div>    
            
            <Project_Feature/>
            
            <div className='mt-16 mx-8 sm:mx-16 sm:text-lg flex gap-8'>
                <div className='text-6xl drop-shadow-lg'>
                    🫡
                </div>
                <div className=''>
                    <p className=' text-amber-800'>
                        An incomplete record of some of the projects I've been cooking up!
                        I'm always try to make something novel and/or helpful, using interesting 
                        technologies and designs, so I hope you enjoy.
                    </p>
                    <p className=' text-amber-800 mt-4'>
                        (Currently a work-in-progress as I add more of my projects and finish
                        my write-ups for them).
                    </p>
                </div>
            </div>

            <div className="mt-16 mb-36 mx-4 sm:mx-16 ">
                {/* <h2 className="mb-4">All Projects</h2> */}
                <div className="">
                    <Project_Cards/>
                </div>
            </div>
            

        </div>
    )
}