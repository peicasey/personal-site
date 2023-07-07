// import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import NextButton from '../../components/nextbutton'
// import SadDuck from '../../assets/notfound/not_found.png'

export default function NotFound() {
    return (
        <div className="p-24 flex gap-8">
            <img
                src={SadDuck}
                className='w-2/4 h-auto hidden'
            />
            <div >
                <div className="relative mb-2 lg:block hidden">
                    <div >
                        <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">AAAAAAAAAAAAAHHHHH</h1>
                    </div>
                    <div className="absolute top-0 left-1 aria-hidden select-none">
                        <h1 className="text-6xl font-bold text-amber-500 text-stroke">AAAAAAAAAAAAAHHHHH</h1>
                    </div>
                </div>
                <div className="relative mb-2 2xl:hidden xl:hidden lg:hidden md:block hidden">
                    <div >
                        <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">AAAAAAHHHH</h1>
                    </div>
                    <div className="absolute top-0 left-1 aria-hidden select-none">
                        <h1 className="text-6xl font-bold text-amber-500 text-stroke">AAAAAAHHHH</h1>
                    </div>
                </div>
                <div className="relative mb-2 2xl:hidden xl:hidden lg:hidden md:hidden sm:block hidden">
                    <div >
                        <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">AAAAHHHH</h1>
                    </div>
                    <div className="absolute top-0 left-1 aria-hidden select-none">
                        <h1 className="text-6xl font-bold text-amber-500 text-stroke">AAAAHHHH</h1>
                    </div>
                </div>
                <div className="relative mb-2 sm:hidden block">
                    <div >
                        <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">AAAHHH</h1>
                    </div>
                    <div className="absolute top-0 left-1 aria-hidden select-none">
                        <h1 className="text-6xl font-bold text-amber-500 text-stroke">AAAHHH</h1>
                    </div>
                </div>
                <div className="dark:text-white">
                    <p className="font-bold lg:text-2xl sm:text-lg">This page could not be found!</p>
                    <p className="font-bold lg:text-2xl sm:text-lg mb-8">Please proceed to the nearest exit:</p>
                    {/* <p className="lg:text-2xl text-lg">Please proceed to the nearest exit</p> <ArrowTrendingDownIcon className='w-4'/> */}
                    <NextButton link={'/'} page_name={'exit'}/>
                    

                </div>
            </div>
        </div>
        
    )
}