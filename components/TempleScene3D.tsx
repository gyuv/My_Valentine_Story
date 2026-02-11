"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function TempleScene3D() {
  const ref = useRef<any>();

  useFrame((state) => {
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.5;
  });

  return (
    <mesh ref={ref} position={[0, 5, -20]}>
      <coneGeometry args={[2, 4, 32]} />
      <meshStandardMaterial color="gold" />
    </mesh>
  );
}
