import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const faces = [
  { label: "Home", color: "#ff4d6d" },
  { label: "Projects", color: "#4cc9f0" },
  { label: "Skills", color: "#f72585" },
  { label: "About", color: "#3a86ff" },
  { label: "AI Chatbot", color: "#ffbe0b" },
  { label: "Contact", color: "#00f5d4" },
];

const CubeMenu = ({ onSelect }) => {
  const cubeRef = useRef();

  // auto rotation
  useFrame(() => {
    cubeRef.current.rotation.y += 0.003;
  });

  return (
    <group ref={cubeRef}>
      {/* Cube */}
      <mesh
        onClick={() => console.log("Clicked cube")}
        rotation={[0.5, 0.5, 0]}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#222" />

        {/* FACES */}
        {faces.map((face, i) => {
          const positions = [
            [0, 0, 1.01], // front
            [0, 0, -1.01], // back
            [1.01, 0, 0], // right
            [-1.01, 0, 0], // left
            [0, 1.01, 0], // top
            [0, -1.01, 0], // bottom
          ];

          const rotations = [
            [0, 0, 0],
            [0, Math.PI, 0],
            [0, Math.PI / 2, 0],
            [0, -Math.PI / 2, 0],
            [-Math.PI / 2, 0, 0],
            [Math.PI / 2, 0, 0],
          ];

          return (
            <mesh
              key={i}
              position={positions[i]}
              rotation={rotations[i]}
              onClick={() => onSelect(face.label)}
            >
              <planeGeometry args={[1.8, 1.8]} />
              <meshStandardMaterial color={face.color} />

              {/* TEXT */}
              <Text
                fontSize={0.35}
                color="white"
                position={[0, 0, 0.01]}
                anchorX="center"
                anchorY="middle"
              >
                {face.label}
              </Text>
            </mesh>
          );
        })}
      </mesh>
    </group>
  );
};

export default CubeMenu;
