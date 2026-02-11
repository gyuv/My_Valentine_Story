"use client";
import { storySections } from "@/data/storyData";

export default function CinematicSections() {
  return (
    <>
      {storySections.map((section) => (
        <section
          key={section.id}
          className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        >
          <h2 className="text-4xl mb-6">{section.title}</h2>
          <h3 className="opacity-70 mb-8">{section.subtitle}</h3>
          <p className="max-w-3xl whitespace-pre-line">
            {section.content}
          </p>
        </section>
      ))}
    </>
  );
}
