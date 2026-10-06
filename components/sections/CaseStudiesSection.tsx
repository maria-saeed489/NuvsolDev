"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/siteData";
import TiltCard from "@/components/TiltCard";

export default function CaseStudiesSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const currentCase = CASE_STUDIES[activeCaseIndex];

  return (
    <section className="panel cases" id="cases" aria-labelledby="cases-heading">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">03 / Product case studies</span>
          <h2 id="cases-heading">
            The problem.
            <br />
            The product. The proof.
          </h2>
        </div>
        <p>A closer look at our product initiatives and validation stages.</p>
      </div>

      <div className="case-layout">
        <div className="case-tabs" role="group" aria-label="Choose a product case study">
          {CASE_STUDIES.map((c, index) => {
            const isActive = activeCaseIndex === index;
            return (
              <button
                key={c.id}
                type="button"
                className={isActive ? "active" : ""}
                onClick={() => setActiveCaseIndex(index)}
                aria-pressed={isActive}
              >
                <b>{c.name}</b>
                <span>{c.sector}</span>
              </button>
            );
          })}
        </div>

        <TiltCard className="case-detail" aria-live="polite">
          <div className="case-title">
            <h3>{currentCase.title}</h3>
            <span className="status">{currentCase.status}</span>
          </div>

          <div className="case-columns">
            <div>
              <span className="case-num">01</span>
              <h4>The challenge</h4>
              <p>{currentCase.challenge}</p>
            </div>
            <div>
              <span className="case-num">02</span>
              <h4>Our approach</h4>
              <p>{currentCase.approach}</p>
            </div>
            <div>
              <span className="case-num">03</span>
              <h4>Validation stage</h4>
              <p>{currentCase.validation}</p>
            </div>
          </div>

          <p className="case-disclosure">{currentCase.disclosure}</p>
        </TiltCard>
      </div>
    </section>
  );
}
