"use client";

import { storySections } from "../data/storyData";

export default function CinematicSections() {
  return (
    <>
      {storySections.map((section) => (
        <section key={section.id}>
          <h2>{section.title}</h2>
          <h4 style={{ opacity: 0.7, marginBottom: "20px" }}>
            {section.subtitle}
          </h4>
          <p style={{ whiteSpace: "pre-line" }}>
            {section.content}
          </p>
        </section>
      ))}
    </>
  );
}
