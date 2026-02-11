"use client";
import { useEffect, useState } from "react";

export default function DolbyIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 4000);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[2000]">
      <div className="text-center animate-pulse">
        <h1 className="text-5xl tracking-[1em] font-bold">YUVARAJ</h1>
        <p className="mt-4 text-lg tracking-widest">LOVE CINEMATIC PRESENTS</p>
      </div>
    </div>
  );
}
