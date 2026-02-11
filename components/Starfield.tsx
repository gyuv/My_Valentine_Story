import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Stars } from "@react-three/drei";

<Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} intensity={2} />

  <Stars radius={200} depth={80} count={7000} factor={6} fade />

  <Infinity3D />
  <TempleScene3D />
  <GalaxyWarp />
  <MouseParticles />

  <EffectComposer>
    <Bloom
      intensity={1.8}
      luminanceThreshold={0.2}
      luminanceSmoothing={0.9}
    />
  </EffectComposer>
</Canvas>
