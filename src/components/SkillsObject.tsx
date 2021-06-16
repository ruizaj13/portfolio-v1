import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import { Glitch, EffectComposer } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "ProjectName.mtl");
  const obj = useLoader(OBJLoader, "ProjectName.obj", (loader) => {
    materials.preload();
    //@ts-ignore
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.01}/>;
};

export default function ObjModel() {
  return (
    <div style={{width:'50%', position:'absolute', marginLeft:'45%'}}>
      <Canvas style={{height:'100vh'}}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls  autoRotate={true} rotateSpeed={1} />
          {/* <ambientLight intensity={1}/> */}
          <directionalLight color="white" intensity={1} position={[5, 0, 9]} />
          <EffectComposer>
            <Glitch
              //@ts-ignore
              delay={[1,10]} // min and max glitch delay
              //@ts-ignore
              duration={[0.6, 1.0]} // min and max glitch duration
              //@ts-ignore
              strength={[0.3]} // min and max glitch strength
              mode={GlitchMode.SPORADIC} // glitch mode
              active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
              ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            />        
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
