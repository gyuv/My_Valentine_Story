"use client";
import { useState } from "react";

export default function PasswordGate({ children }: any) {
  const [entered, setEntered] = useState(false);
  const [input, setInput] = useState("");

  if (entered) return children;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl mb-6">Enter Password</h1>
      <input
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-3 text-black"
      />
      <button
        onClick={() => input === "kuttu" && setEntered(true)}
        className="mt-4 px-6 py-2 bg-pink-600"
      >
        Enter
      </button>
    </div>
  );
}
