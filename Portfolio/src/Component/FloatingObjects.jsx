import React from "react";
import { Float, Sphere, Box, TorusKnot } from "@react-three/drei";

const FloatingObjects = () => {
  return (
    <>
      {/* Floating Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#4cc9f0" />
        </Sphere>
      </Float>

      {/* Floating Box */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <Box args={[0.6, 0.6, 0.6]} position={[2, 0.5, 0]}>
          <meshStandardMaterial color="#f72585" />
        </Box>
      </Float>

      {/* Floating Torus Knot */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1.8}>
        <TorusKnot args={[0.4, 0.12, 100, 32]} position={[0, 2, -1]}>
          <meshStandardMaterial color="#7209b7" />
        </TorusKnot>
      </Float>
    </>
  );
};

export default FloatingObjects;
