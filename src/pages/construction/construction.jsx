import NextButton from "../../components/nextbutton"

export default function Construction() {
    return (
        <div className='w-full h-full p-28 pb-56'>
            <div className="relative mb-2">
                <div>
                    <h1 className="text-6xl dark:text-red-800 font-bold mr-2 duration-0">Under Construction!</h1>
                </div>
                <div className="absolute top-0 left-1 aria-hidden select-none">
                    <h1 className="text-6xl font-bold text-amber-500 text-stroke">Under Construction!</h1>
                </div>
            </div>
            <p className='text-2xl my-4 font-bold'>🚧 Come back later when this is done! 🚧</p>
            <NextButton link={'/'} page_name={'exit'}/>
        </div>
    )
}