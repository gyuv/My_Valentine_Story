import PasswordGate from "@/components/PasswordGate";
import Starfield from "@/components/Starfield";
import AutoNarration from "@/components/AutoNarration";
import KnotAnimation from "@/components/KnotAnimation";
import MusicPlayer from "@/components/MusicPlayer";

export default function Page() {
  return (
    <PasswordGate>
      <MusicPlayer />
      <Starfield />
      <AutoNarration />
      <KnotAnimation />
    </PasswordGate>
  );
}
