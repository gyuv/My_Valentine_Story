"use client";

import { storySections } from "@/data/storyData";
import { useEffect } from "react";

export default function CinematicSections() {

  useEffect(() => {
    storySections.forEach(section => {
      if (section.phase === "storm") {
        document.body.classList.add("storm-active");
      }
    });
  }, []);

  return (
    <>
      {storySections.map((section) => (
        <section
          key={section.id}
          className={`chapter min-h-screen flex flex-col justify-center items-center text-center px-6 transition-all duration-1000 ${
            section.phase === "storm" ? "storm-phase" : ""
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            {section.title}
          </h2>

          <h3 className="text-lg md:text-2xl opacity-70 mb-8">
            {section.subtitle}
          </h3>

          <p className="max-w-3xl leading-8 whitespace-pre-line text-lg md:text-xl">
            {section.content}
          </p>
        </section>
      ))}
    </>
  );
}
