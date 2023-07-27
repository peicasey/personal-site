import { Suspense } from 'react'
import { Carousel } from 'antd';


function Loading () {
  return (
      <div className='w-full h-[50vh] bg-amber-500 flex justify-center items-center'>
          <p className='select-none text-9xl text-center'>Loading... 🐊</p>
      </div>
  )
}

const style = 
`
  h-[50vh] w-full
  hover:scale-110 hover:cursor-pointer duration-700
  bg-cover 
`

const Project_Feature = () => (
  <Carousel autoplay>
    <div>
      <Suspense fallback={<Loading/>}>
        <div className={style + " bg-[url('./tao.svg')]"}></div>
      </Suspense>
    </div>
    <div>
      <div className={style + " bg-center bg-[url('./revs.svg')]"}></div>
    </div>
    <div>
      <div className={style + " bg-right bg-[url('./bf.svg')]"}></div>
    </div>
    <div>
      <div className={style + " bg-[url('./eotu.svg')]"}></div>
    </div>
  </Carousel>
);

export default Project_Feature;