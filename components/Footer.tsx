"use client";

import React from "react";
import { SECTION_NAMES, NAV_SECTIONS } from "@/data/siteData";

interface FooterProps {
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function Footer({ currentIndex, onNavigate }: FooterProps) {
  const formattedCount = String(currentIndex + 1).padStart(2, "0");
  const currentSectionName = SECTION_NAMES[currentIndex] || "The vision";
  const nextChapter =
    currentIndex < 5
      ? `Up next: ${SECTION_NAMES[currentIndex + 1]}`
      : "Journey complete · Let’s talk";

  return (
    <footer className="bottom">
      <div className="journey-info">
        <span className="count" id="count">
          {formattedCount} <small>/ 06</small>
        </span>
        <div>
          <div className="section-name" id="section-name">
            {currentSectionName}
          </div>
          <div className="hint">
            Scroll to explore · Swipe or use navigation
          </div>
        </div>
      </div>

      <div className="navigation-center">
        <div className="next-chapter" id="next-chapter">
          {nextChapter}
        </div>
        <div className="progress" aria-label="Jump to a section">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              className={currentIndex === section.index ? "active" : ""}
              onClick={() => onNavigate(section.index)}
              aria-label={`Section ${section.index + 1}: ${section.label}`}
            />
          ))}
        </div>
      </div>

      <div className="journey-buttons">
        <a
          className="collection"
          href="https://nuvsol-design-concepts.yaseerm.chatgpt.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          All designs
        </a>
        <button
          id="previous"
          type="button"
          onClick={() => onNavigate(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous section"
        >
          Previous
        </button>
        <button
          id="next"
          type="button"
          onClick={() => onNavigate(currentIndex + 1)}
          disabled={currentIndex === 5}
          aria-label="Next section"
        >
          Next
        </button>
      </div>
    </footer>
  );
}
