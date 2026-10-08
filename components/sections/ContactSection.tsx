"use client";

import React from "react";
import { CONTACT_INFO } from "@/data/siteData";
import TiltCard from "@/components/TiltCard";

interface ContactSectionProps {
  onOpenContact?: () => void;
}

export default function ContactSection({ onOpenContact }: ContactSectionProps) {
  return (
    <section className="panel contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact-grid">
        <div>
          <span className="eyebrow">05 / Your next possibility</span>
          <h2 id="contact-heading">
            Let’s make
            <br />
            the complex
            <br />
            <em>click.</em>
          </h2>
          <p>
            Have an operational challenge worth solving? Let’s explore what AI-native software could make possible.
          </p>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginBottom: "24px" }}>
            <button
              type="button"
              className="button"
              onClick={onOpenContact}
              aria-haspopup="dialog"
            >
              Start a conversation (Contact Form)
            </button>
            <a
              className="button outline"
              href={`mailto:${CONTACT_INFO.email}?subject=AI-native%20solution%20inquiry`}
              style={{ fontSize: "13px" }}
            >
              Email us directly
            </a>
          </div>
          <div className="legal">{CONTACT_INFO.legal}</div>
        </div>

        <TiltCard className="contact-details">
          <h3>
            A real problem.
            <br />
            A good starting point.
          </h3>
          <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          <p>{CONTACT_INFO.focusAreas}</p>
          <p>
            {CONTACT_INFO.taglines.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < CONTACT_INFO.taglines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </TiltCard>
      </div>
    </section>
  );
}
