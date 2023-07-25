import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom"


export default function NextButton ({ link, page_name }) {
    
    const navigate = useNavigate();

    return (
        <div className="aria-hidden select-none flex justify-start mr-4">
            <div onClick={() => navigate(link)} className="flex gap-2 items-center mb-4 hover:cursor-pointer mr-4 hover:mr-0 hover:gap-4 duration-500 dark:text-white">
                <div>{ page_name }</div>
                <ArrowLongRightIcon className="h-6" />
            </div>
        </div>
        
    );
}