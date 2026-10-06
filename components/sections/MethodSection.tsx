"use client";

import React from "react";
import { METHOD_STEPS, FOUNDER_INFO } from "@/data/siteData";

export default function MethodSection() {
  return (
    <section className="panel method" id="method" aria-labelledby="method-heading">
      <div className="method-layout">
        <div>
          <span className="eyebrow">04 / Expert-led. User-informed.</span>
          <h2 id="method-heading">
            Innovation starts
            <br />
            with <span>understanding.</span>
          </h2>
          <p className="method-desc">
            We build alongside the people who live these workflows, prove ideas in real pilots, and use feedback to guide what comes next.
          </p>

          <div className="founder">
            <div className="monogram" aria-hidden="true">
              {FOUNDER_INFO.monogram}
            </div>
            <div>
              <b>{FOUNDER_INFO.name}</b>
              <span>{FOUNDER_INFO.title}</span>
            </div>
          </div>
        </div>

        <div className="steps">
          {METHOD_STEPS.map((step) => (
            <article key={step.numberStr} className="step">
              <span>{step.numberStr}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
