import { useState, useRef, useEffect } from 'react'

const delay = 2500;

const FEATURED_PROJECTS = 
[
  { 
    picture: './carousel/tao.svg',
    description: 'A public-facing website for the ENGR TA Org.',
  },
  { 
    picture: './carousel/revs.svg',
    description: 'Full-stack web-app storing 12 months of restaurant data.',
  },
  { 
    picture: './carousel/bf.svg',
    description: 'A puzzle game featuring various skills of 3 friends.',
  },
  { 
    picture: './carousel/eotu.svg',
    description: 'You are a bird at the end of the universe!',
  },
]

const container = 
` 
  min-w-[90vw] sm:min-w-[75vw] h-[375px] sm:h-[300px] md:h-[250px] lg:h-[210px]
  px-8 pt-8 pb-12
  bg-white dark:bg-neutral-800
`

const style = 
`
  h-[50vh] w-[100vw] bg-amber-500
  xs:hover:scale-110 xs:hover:cursor-pointer duration-700
  bg-cover 
`

export default function Project_Feature() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === FEATURED_PROJECTS.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className='w-full flex flex-col justify-center'>
      <div className='w-full flex justify-center'>
        <div className="w-[100vw] h-full overflow-hidden">
          <div
            className="flex no-wrap gap-0 duration-500 ease-in-out"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {FEATURED_PROJECTS.map((project, index) => (

              <div key={index} className=''>
                <div className={style + " bg-center"}
                style={{ 'background-image': "url(" + project.picture + ')', }}
                onMouseEnter={() => {
                  setIndex(index);
                }}
                ></div>
              </div>

            ))}
          </div>
        </div>
        
      </div>
      <div className='my-4 flex justify-center'>
        <div className='flex w-[15vw] sm:w-[10vw] items-center gap-1'>     
            {FEATURED_PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className='h-2 w-16 flex-grow-0 rounded-lg
                bg-amber-600 hover:bg-amber-700 
                hover:flex-grow hover:px-2
                hover:cursor-pointer
                duration-500'
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
        </div>
      </div>
    </div>
    
  );
}



// import { Suspense } from 'react'
// import { Carousel } from 'antd';


// function Loading () {
//   return (
//       <div className='w-full h-[50vh] bg-amber-500 flex justify-center items-center'>
//           <p className='select-none text-9xl text-center'>Loading... 🐊</p>
//       </div>
//   )
// }

// const style = 
// `
//   h-[50vh] w-full
//   hover:scale-110 hover:cursor-pointer duration-700
//   bg-cover 
// `

// const Project_Feature = () => (
//   <Carousel autoplay>
//     <div>
//       <Suspense fallback={<Loading/>}>
//         <div className={style + " bg-[url('./carouseltao.svg')]"}></div>
//       </Suspense>
//     </div>
//     <div>
//       <div className={style + " bg-center bg-[url('./carousel/revs.svg')]"}></div>
//     </div>
//     <div>
//       <div className={style + " bg-right bg-[url('./carousel/bf.svg')]"}></div>
//     </div>
//     <div>
//       <div className={style + " bg-[url('./carousel/eotu.svg')]"}></div>
//     </div>
//   </Carousel>
// );

// export default Project_Feature;