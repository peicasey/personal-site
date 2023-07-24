import Experience_TL from './experience_tl/experience_tl'
import Skills from './skills/skills'


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
                    <div className='flex justify-center mt-4'>
                        <Experience_TL/>
                    </div>
                </div>
            </div>
            <div className='mt-8 mb-36'>
                <Skills />
            </div>
            <div className='sm:mb-24 w-full flex'>
                <div className='w-full sm:flex-grow-1'>
                    <p className='mt-8 ml-28 text-amber-800 hidden sm:block'><em>experience/resume/resume.pdf</em></p>
                    <div className='bg-amber-300 dark:bg-neutral-800 w-full h-[22em] sm:h-72 shadow-lg mt-8 sm:mt-0 pt-16  pl-28'>
                        <p className='text-amber-900 text-lg'>Last updated: July 7, 2023</p>
                        <div className='text-amber-800'>
                            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" 
                                    stroke="#92400e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
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