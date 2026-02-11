import PasswordGate from "../components/PasswordGate";
import MusicPlayer from "../components/MusicPlayer";
import CinematicSections from "../components/CinematicSections";

export default function Page() {
  return (
    <PasswordGate>
      <MusicPlayer />
      <CinematicSections />
    </PasswordGate>
  );
}
