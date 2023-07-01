import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";


export default function BackButton () {
    
    const navigate = useNavigate();
    
    return (
        <div className="aria-hidden select-none flex dark:text-white">
            <div onClick={() => navigate(-1)} className="flex gap-2 items-center mb-4 hover:cursor-pointer ml-4 hover:ml-0 hover:gap-4 hover:mr-2 duration-500">
                <ArrowLongLeftIcon className="h-6" />
                <div>Go Back</div>
            </div>
        </div>
        
    );
}