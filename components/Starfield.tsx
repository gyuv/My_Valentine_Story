"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Infinity3D from "./Infinity3D";

export default function Starfield() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0,0,20] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Infinity3D />
      </Canvas>
    </div>
  );
}
