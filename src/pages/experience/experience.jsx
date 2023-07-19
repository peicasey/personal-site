import Experience_TL from './experience_tl'

export default function Experience() {
    return (
        <>
            <div className="p-4 pt-24 pb-24 md:p-24 md:pb-32 dark:text-white drop-shadow-lg">
                <div className="relative mb-2">
                    <div >
                        <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">EXPERIENCE</h1>
                    </div>
                    <div className="absolute top-0 left-1 aria-hidden select-none">
                        <h1 className="text-6xl font-bold text-amber-500 text-stroke">EXPERIENCE</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-start mt-4'>
                    <h2 className='text-2xl'>Experience</h2>
                    <Experience_TL/>
                </div>
            </div>
            <div className='sm:mb-24 w-full flex'>
                <div className='w-full sm:flex-grow-1'>
                    <p className='mt-8 ml-8 text-amber-800 hidden sm:block'><em>experience/resume/resume.pdf</em></p>
                    <div className='bg-amber-300 dark:bg-neutral-800 w-full h-[22em] sm:h-72 shadow-lg mt-8 sm:mt-0'></div>
                </div>
                <iframe 
                    src="https://drive.google.com/file/d/1b93M4hC97dCYc5BzVtbdZZPEPY4saGsW/preview?usp=embed_googleplus" 
                    className='w-auto h-96 shadow-lg flex-grow-0'
                >    
                </iframe>
                <div className='w-full sm:w-20'>
                    <p className='mt-8 ml-8 text-amber-800 hidden sm:block'>.</p>
                    <div className='bg-amber-300 dark:bg-neutral-800 w-full h-[22em] sm:h-72 shadow-lg mt-8 sm:mt-0'></div>
                </div>
            </div>
            <div className='bg-amber-300 dark:bg-neutral-800 w-full h-20 mb-24 block sm:hidden'></div>
        </>
        
    )
}