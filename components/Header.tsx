"use client";

import React, { useState } from "react";
import { NAV_SECTIONS } from "@/data/siteData";

interface HeaderProps {
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function Header({ currentIndex, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top">
      <a
        className="brand"
        href="#vision"
        onClick={(e) => {
          e.preventDefault();
          onNavigate(0);
          setMobileMenuOpen(false);
        }}
      >
        <span className="brand-mark" aria-hidden="true" />
        <span>nuvsol</span>
      </a>

      <nav className="top-nav" aria-label="Sections">
        {NAV_SECTIONS.slice(0, 5).map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={currentIndex === section.index ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(section.index);
            }}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <a
          className="button"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(5);
            setMobileMenuOpen(false);
          }}
        >
          Let’s talk
        </a>

        {/* Mobile menu toggle for smaller screens */}
        <button
          type="button"
          className="mobile-toggle md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          style={{
            background: "none",
            border: "1px solid #dce5f4",
            borderRadius: "8px",
            padding: "8px 10px",
            fontSize: "16px",
            cursor: "pointer",
            color: "#102945",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#ffffff",
            borderBottom: "1px solid #e1edf0",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            zIndex: 60,
          }}
        >
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              style={{
                color: currentIndex === section.index ? "#1256d1" : "#526c84",
                fontWeight: currentIndex === section.index ? 700 : 500,
                fontSize: "15px",
              }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(section.index);
                setMobileMenuOpen(false);
              }}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
