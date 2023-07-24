import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "scene.glb");

    return (
        <>
        <primitive object={gltf.scene} rotation={[0, 50, 0]} scale={0.6} />
        </>
    );
};
  

export default function Temp() {
    return (
        <div className="bg-[#ffc846] dark:bg-[#0c0b09] overflow-hidden w-[100vw] h-[100vh]">
            <Suspense fallback={ null }>

                <Canvas className='' camera={{ fov: 25 }}>
                    
                    {/* <ambientLight color={'#FFC0CB'} intensity={0.25} /> */}
                    <Stage intensity={0.1} preset={"soft"} shadows="accumulate" environment="sunset">
                        <Model/>
                    </Stage>
                    <OrbitControls autoRotate cursor={true} speed={15} enablePan={false} enableZoom={false} />

                </Canvas>
            </Suspense>
        </div>
    )
}