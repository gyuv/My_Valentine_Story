"use client";

import { useEffect } from "react";

export default function MusicPlayer() {
  useEffect(() => {
    const audio = new Audio("/audio/bg.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  return null;
}
