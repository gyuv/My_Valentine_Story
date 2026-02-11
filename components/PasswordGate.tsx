"use client";

import { useState } from "react";

export default function PasswordGate({
  children
}: {
  children: React.ReactNode;
}) {
  const [entered, setEntered] = useState(false);
  const [password, setPassword] = useState("");

  const checkPassword = () => {
    if (password === "kuttu") {
      setEntered(true);
    } else {
      alert("Wrong password ❤️");
    }
  };

  if (!entered) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <h2>Enter Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginTop: "10px" }}
        />
        <button
          onClick={checkPassword}
          style={{ marginTop: "10px", padding: "10px 20px" }}
        >
          Enter
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
