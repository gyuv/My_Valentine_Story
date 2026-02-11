"use client";
import { useEffect } from "react";

export default function SoundFX() {
  useEffect(() => {
    const heart = new Audio("/sounds/heartbeat.mp3");
    heart.loop = true;
    heart.volume = 0.2;
    heart.play().catch(()=>{});

    const bell = new Audio("/sounds/temple-bell.mp3");
    setTimeout(() => bell.play(), 20000);
  }, []);
  return null;
}
