import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const BotIcon3D = ({ onBotClick, position = [2, -0.5, 0] }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onClick={onBotClick}
      style={{ cursor: "pointer" }}
    >
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial color="#00eaff" emissive="#0088ff" emissiveIntensity={0.5} />
    </mesh>
  );
};

export default BotIcon3D;
