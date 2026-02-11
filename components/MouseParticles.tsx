"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function MouseParticles() {
  const ref = useRef<any>();
  const { mouse } = useThree();

  useFrame(() => {
    ref.current.position.x = mouse.x * 5;
    ref.current.position.y = mouse.y * 5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#ff69b4" emissive="#ff1493" />
    </mesh>
  );
}
