"use client";
import { useEffect, useState } from "react";

export default function Ending() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 90000);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white text-black flex items-center justify-center text-5xl">
      To Be Continued…
    </div>
  );
}
