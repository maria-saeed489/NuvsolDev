"use client";

import React from "react";
import NetworkCanvas from "@/components/NetworkCanvas";

interface VisionSectionProps {
  onNavigate: (index: number) => void;
}

export default function VisionSection({ onNavigate }: VisionSectionProps) {
  return (
    <section className="panel vision" id="vision" aria-labelledby="vision-heading">
      <div className="canvas-hero">
        <div className="canvas-copy">
          <span className="eyebrow">AI-native. Workflow-aware. Human-guided.</span>
          <h1 id="vision-heading">
            Intelligence.
            <br />
            <span>In motion.</span>
          </h1>
          <p className="desc">
            AI-native products that turn operational complexity into connected, intelligent workflows.
          </p>

          <div className="hero-vocabulary">
            <span>Applied AI</span>
            <span>Workflow intelligence</span>
            <span>Intelligent automation</span>
          </div>

          <div className="actions">
            <button
              type="button"
              className="button"
              onClick={() => onNavigate(2)}
            >
              Discover our products
            </button>
            <button
              type="button"
              className="button outline"
              onClick={() => onNavigate(1)}
            >
              Explore the AI canvas
            </button>
          </div>

          <p className="hero-note">
            Built with industry experts.
            <br />
            Validated where the real work happens.
          </p>
        </div>

        <NetworkCanvas />
      </div>
    </section>
  );
}
