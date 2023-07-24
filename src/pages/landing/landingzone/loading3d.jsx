import { Suspense } from "react";

import CaseySpin from '../../../assets/casey-spins.gif'
import LoadingLight from '../../../assets/loading/loading-light.gif'
import Loading from '../../../assets/loading/loading.png'

const position = 
`
    z-[0] group-hover:scale-110 scale-100 duration-200 
    md:h-[100vh]
    absolute top-[30vh] md:top-0 md:right-auto left-auto md:left-[-3vw] lg:left-[0vw]
`

export default function Loading3D() {
    return (
        <div className={position}>
            <img
                src={ Loading }
                className='w-full h-full'
            />  
        </div>
    )
}