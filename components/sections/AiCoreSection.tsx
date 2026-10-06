"use client";

import React, { useState } from "react";
import { AI_PATTERNS } from "@/data/siteData";
import TiltCard from "@/components/TiltCard";

export default function AiCoreSection() {
  const [activePatternIndex, setActivePatternIndex] = useState<number>(0);
  const activePattern = AI_PATTERNS[activePatternIndex];

  return (
    <section className="panel ai" id="ai" aria-labelledby="ai-heading">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">01 / AI solution patterns</span>
          <h2 id="ai-heading">
            Built for the task.
            <br />
            <em>Designed for intelligence.</em>
          </h2>
        </div>
        <p>
          Our AI-native direction combines useful intelligence with workflow automation and human expertise.
        </p>
      </div>

      <div className="pattern-tabs" role="group" aria-label="Explore AI solution patterns">
        {AI_PATTERNS.map((pattern, index) => {
          const isActive = activePatternIndex === index;
          return (
            <button
              key={pattern.id}
              type="button"
              className={isActive ? "active" : ""}
              onClick={() => setActivePatternIndex(index)}
              aria-pressed={isActive}
            >
              <span>{pattern.numberStr}</span>
              <b>{pattern.tabTitle}</b>
              <small>{pattern.tabSub}</small>
            </button>
          );
        })}
      </div>

      <TiltCard className="pattern-stage">
        <div className="pattern-copy" aria-live="polite">
          <h3>{activePattern.title}</h3>
          <p>{activePattern.desc}</p>
          <p className="pattern-jargon">{activePattern.jargon}</p>
        </div>

        <div className="pattern-visual">
          <div className="pattern-tag">AI SOLUTION DESIGN / CONCEPTUAL PATTERN</div>
          <div className="token-stream">
            <span>Business context</span>
            <span>Relevant information</span>
            <span>User intent</span>
          </div>

          <div className="engine">
            <span className="engine-spark" aria-hidden="true">✦</span>
            <div>
              <b id="engine-label">{activePattern.engine}</b>
              <small>Intelligence shaped by the task</small>
            </div>
          </div>

          <div className="output-stream">
            <span>Useful assistance</span>
            <span>Connected actions</span>
            <span>Expert feedback</span>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
