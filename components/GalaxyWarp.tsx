"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function GalaxyWarp() {
  const ref = useRef<any>();

  useFrame((state) => {
    ref.current.rotation.z += 0.002;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 5;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[15, 3, 16, 100]} />
      <meshStandardMaterial color="#ff2e88" wireframe />
    </mesh>
  );
}
