import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Hero3D from "./Hero3D";
import FloatingObjects from "./FloatingObjects";
import Project3DCarousel from "./Project3DCarousel";
import CubeMenu from "./CubeMenu";
import BotIcon3D from "./Chatbot/BotIcon3D";



const ThreeScene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 2, 5], fov: 55 }}>
  {/* Soft Ambient Light */}
  <ambientLight intensity={0.6} />

  {/* Main directional light */}
  <directionalLight position={[5, 5, 5]} intensity={1.5} />

  {/* Environment preset */}
  <Environment preset="sunset" />

  {/* Controls */}
  <OrbitControls enableZoom={false} />

  {/* All 3D Components */}
  {/* <Hero3D /> */}
  <FloatingObjects />
  <Project3DCarousel />

  {/* Extra light */}
  <ambientLight intensity={0.3} />
  <directionalLight position={[4, 4, 4]} />

  {/* Cube Menu */}
  <CubeMenu onSelect={(page) => console.log("Go to:", page)} />

  
       <BotIcon3D />
  
</Canvas>

    </div>
  );
};

export default ThreeScene;
