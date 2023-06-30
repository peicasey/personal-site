
import '../../index.css'

export default function About() {


    return (
        <div className="mt-20 dark:text-white drop-shadow-lg">
            <div className="p-10 pl-24 pr-24 bg-stone-50 dark:bg-[#211e1d] md:text-lg mb-2 dark:text-white duration-500">
                <p className="text-md text-amber-500 mb-4">C:/landing/hi-there.txt</p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">Hi, my name is Casey Pei :)</p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">I'm currently a <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 dark:text-lime-200">junior Honors CS + Stats major @ Texas A&M 🎓</a></p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">Previously I've been at <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 dark:text-lime-200">Institute of Biosciences and Technology</a></p>
                <p className="md:text-lg mb-2 dark:text-white duration-500">Always love to have a chat, so if any of that interests you, reach me here: <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 dark:text-lime-200">Institute of Biosciences and Technology</a></p>
                

            </div>
            <div>

            </div>
            <div className="bg-[#e6e4e3] dark:bg-[#131211]">
                <h3>Adventures</h3>
                <div></div>
                <a href="/adventures">see more</a>
            </div>
        </div>
    )
}