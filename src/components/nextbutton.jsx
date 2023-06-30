import { ArrowLongRightIcon } from '@heroicons/react/24/outline'


export default function NextButton ({ link, page_name }) {
    
    const handleClick = (myLink) => () => {
        window.location.href = myLink;
    }
    
    return (
        <div className="flex">
            <div onClick={handleClick({link})} className="flex gap-2 items-center mb-4 hover:cursor-pointer hover:ml-4 hover:gap-4 duration-500">
                <div>{ page_name }</div>
                <ArrowLongRightIcon className="h-6" />
            </div>
        </div>
        
    );
}