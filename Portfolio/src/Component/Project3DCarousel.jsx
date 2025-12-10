import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";

const projects = [
  { title: "React Portfolio", color: "#4cc9f0" },
  { title: "E-Commerce App", color: "#f72585" },
  { title: "MERN Dashboard", color: "#3a86ff" },
  { title: "AI Chatbot", color: "#ffbe0b" },
];

const Project3DCarousel = () => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.003; // smooth rotation
  });

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const z = Math.sin(angle) * 3;

        return (
          <Float
            key={index}
            speed={1.2}
            rotationIntensity={1}
            floatIntensity={0.7}
          >
            <mesh position={[x, 0, z]}>
              <boxGeometry args={[1.2, 0.7, 0.2]} />
              <meshStandardMaterial color={project.color} />

              {/* Project Title */}
              <Text
                position={[0, -0.9, 0]}
                fontSize={0.25}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {project.title}
              </Text>
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

export default Project3DCarousel;
