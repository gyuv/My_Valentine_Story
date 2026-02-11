import PasswordGate from "@/components/PasswordGate";
import DolbyIntro from "@/components/DolbyIntro";
import MusicPlayer from "@/components/MusicPlayer";
import SoundFX from "@/components/SoundFX";
import Starfield from "@/components/Starfield";
import GoldNames from "@/components/GoldNames";
import RainLightning from "@/components/RainLightning";
import CinematicSections from "@/components/CinematicSections";
import DroneTemple from "@/components/DroneTemple";
import KnotAnimation from "@/components/KnotAnimation";
import Ending from "@/components/Ending";

export default function Page() {
  return (
    <PasswordGate>
      <DolbyIntro />
      <MusicPlayer />
      <SoundFX />
      <Starfield />
      <GoldNames />
      <CinematicSections />
      <RainLightning />
      <DroneTemple />
      <KnotAnimation />
      <Ending />
    </PasswordGate>
  );
}
