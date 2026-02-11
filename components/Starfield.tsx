"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingParticles() {
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      ref.current.rotation.x += 0.0003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={new Float32Array(
            Array.from({ length: 1500 }, () => (Math.random() - 0.5) * 200)
          )}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ff2e88" size={0.5} />
    </points>
  );
}

export default function Starfield() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
