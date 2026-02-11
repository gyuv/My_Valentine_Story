"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import GalaxyWarp from "./GalaxyWarp";
import MouseParticles from "./MouseParticles";
import Infinity3D from "./Infinity3D";
import TempleScene3D from "./TempleScene3D";

export default function Starfield() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <Stars radius={200} depth={80} count={7000} factor={6} fade />
        <GalaxyWarp />
        <MouseParticles />
        <Infinity3D />
        <TempleScene3D />
      </Canvas>
    </div>
  );
}
