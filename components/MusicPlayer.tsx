"use client";
import { useEffect } from "react";

export default function MusicPlayer() {
  useEffect(() => {
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.play().catch(()=>{});
  }, []);
  return null;
}
