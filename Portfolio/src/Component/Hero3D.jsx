import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Hero3D = () => {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={cubeRef} position={[0, 1, 0]}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial
          color="#00eaff"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
};

export default Hero3D;
