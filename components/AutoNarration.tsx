"use client";
import { useEffect, useState } from "react";

export default function AutoNarration() {
  const text = "From Biriyani to Forever. From Strangers to Soulmates.";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-4xl font-serif mt-20">
      {display}
    </div>
  );
}
