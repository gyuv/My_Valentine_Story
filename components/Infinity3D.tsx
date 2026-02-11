"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Infinity3D() {
  const ref = useRef<any>();
  useFrame(() => {
    if(ref.current) ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={[0,-5,-10]}>
      <torusKnotGeometry args={[3,1,200,32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
