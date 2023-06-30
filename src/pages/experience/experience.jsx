import Experience_TL from './experience_tl'

export default function Experience() {
    return (
        <div className="p-4 pt-24 pb-24 md:p-24 md:pb-32 dark:text-white drop-shadow-lg">
            <div className="relative mb-2">
                <div >
                    <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">EXPERIENCE</h1>
                </div>
                <div className="absolute top-0 left-1 aria-hidden select-none">
                    <h1 className="text-6xl font-bold text-amber-500 text-stroke">EXPERIENCE</h1>
                </div>
            </div>
            <Experience_TL/>
        </div>
    )
}