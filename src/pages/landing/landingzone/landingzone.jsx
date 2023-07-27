// import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


import Status from '../status/status'
import Loading3D from "./loading3d"


const Model = () => {
  const gltf = useLoader(GLTFLoader, "scene.glb");

  return (
    <>
      <primitive object={gltf.scene} rotation={[0, 50, 0]} scale={1} />
    </>
  );
};

const popup =
`
  z-[1] absolute bottom-28 right-[10vw] left-auto md:top-28 md:left-[40vw]
  text-amber-500
  shadow-lg
  scale-0 group-hover:scale-100 group-hover:translate-y-[-10px]
  duration-100 
  p-4 rounded-lg 
  bg-white dark:bg-neutral-800
  w-36 h-24
  text-sm text-amber-800 dark:text-amber-500
`
// 

export default function LandingPage() {
  return (
    <div className="bg-[#ffc846] dark:bg-[#0c0b09] pt-4 overflow-hidden w-[100vw] h-[100vh]">

       <div className="absolute flex flex-col sm:flex-row justify-between duration-200">
          <div className="hidden sm:block"></div>
          <div className="relative w-auto md:w-2/4 mt-20 ml-12 sm:m-20 mr-8">
              <div className="relative mb-4">
                  <div >
                      <h1 className="animate-[scaleUp_0.5s_ease-out] text-5xl sm:text-6xl dark:text-red-800 md:text-8xl drop-shadow-lg font-bold mr-3">HI! IT'S</h1>
                      <h1 className="animate-[scaleUp_0.75s_ease-out] text-6xl sm:text-7xl dark:text-red-800 md:text-8xl drop-shadow-lg font-bold mr-3">CASEY PEI</h1>
                  </div>
                  <div className="absolute top-0 left-2 aria-hidden select-none">
                      <h1 className="animate-[scaleUp_0.5s_ease-out] text-5xl sm:text-6xl md:text-8xl font-bold text-amber-200 text-stroke mr-1">HI! IT'S</h1>
                      <h1 className="animate-[scaleUp_0.75s_ease-out] text-6xl sm:text-7xl md:text-8xl  font-bold text-amber-200 text-stroke mr-1">CASEY PEI</h1>
                  </div>
                  <div className="absolute top-0 left-3 aria-hidden select-none">
                      <h1 className="animate-[scaleUp_0.5s_ease-out] text-5xl sm:text-6xl md:text-8xl font-bold text-amber-500 text-stroke">HI! IT'S</h1>
                      <h1 className="animate-[scaleUp_0.75s_ease-out] text-6xl sm:text-7xl md:text-8xl font-bold text-amber-500 text-stroke">CASEY PEI</h1>
                  </div>
              </div>

              <div className="md:w-full w-[35vw]">            
                <p className="animate-[scaleUp_1s_ease-out] text-md md:text-xl mb-4 text-black dark:text-white duration-500">Welcome to my site! I'm Casey, currently a <a href="" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted text-lime-700 hover:text-[#a9b11b] dark:text-lime-200 dark:hover:text-lime-500 duration-500">junior Honors CS + Stats major @ Texas A&M 🎓</a> interested in all things software dev :)</p>              
                <div className="animate-[scaleUp_1.25s_ease-out]">
                  <Status />
                </div>
              </div>
          </div>                
      </div>
     
      <div className='w-[100vw] h-full flex flex-col items-end sm:flex-row justify-center sm:justify-between'>
        
        <div className='delay-500 animate-[fadeUp_1s_ease-out] group hover:cursor-grab w-[60vw] h-full absolute md:top-0 right-0 md:right-auto left-auto md:left-[-12vw]'>
          
          <div className={popup}>
            Hi hey hello! Scroll down for more 👇
          </div>
          <Suspense fallback={ <Loading3D /> }>

            <Canvas className='group-hover:scale-110 scale-100 duration-200' camera={{ fov: 25 }}>
                
              {/* <ambientLight color={'#FFC0CB'} intensity={0.25} /> */}
              <Stage intensity={0.1} preset={"soft"} shadows="accumulate" environment="sunset">
                <Model/>
              </Stage>
              <OrbitControls autoRotate cursor={true} speed={15} enablePan={false} enableZoom={false} />
            
            </Canvas>
          </Suspense>

        </div>
        <div className='w-[1vw] invisible sm:visible'></div>
      </div>
      

    </div>
  );
}

