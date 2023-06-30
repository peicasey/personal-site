import Project_Cards from './components/project_cards'
import Project_Feature from './components/project_feature'

export default function Projects() {
    return (
        <div className="mt-24 dark:text-white drop-shadow-lg">
            <div className="relative ml-24 mb-8">
                <div >
                    <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">PROJECTS</h1>
                </div>
                <div className="absolute top-0 left-1 aria-hidden select-none">
                    <h1 className="text-6xl font-bold text-amber-500 text-stroke">PROJECTS</h1>
                </div>
            </div>
            <Project_Feature/>
            <div className="p-24">
                <h2 className="mb-4">All Projects</h2>
                <div className="">
                    <Project_Cards/>
                </div>
            </div>
            
        </div>
    )
}