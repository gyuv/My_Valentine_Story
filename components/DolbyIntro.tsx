"use client";
import { useEffect, useState } from "react";

export default function DolbyIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 4000);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <h1 className="text-4xl tracking-[1em] animate-pulse">
        YUVARAJ PRESENTS
      </h1>
    </div>
  );
}
