"use client";

import React, { useState, useEffect, useRef } from "react";
import { SIGNAL_NODES } from "@/data/siteData";
import { SignalNode } from "@/types";

export default function NetworkCanvas() {
  const [selectedSignalId, setSelectedSignalId] = useState<string | null>(null);
  const [description, setDescription] = useState<string>(
    "Select a node to explore how real-world context shapes practical AI."
  );
  const [isTracing, setIsTracing] = useState<boolean>(false);
  const [traceStatus, setTraceStatus] = useState<string>("Explore the connections");
  const traceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelectSignal = (node: SignalNode) => {
    setSelectedSignalId(node.id);
    setDescription(node.detail);
  };

  const stopTrace = () => {
    if (traceTimerRef.current) {
      clearTimeout(traceTimerRef.current);
      traceTimerRef.current = null;
    }
    setIsTracing(false);
    setTraceStatus("Explore the connections");
  };

  const startTrace = () => {
    if (traceTimerRef.current) {
      clearTimeout(traceTimerRef.current);
    }
    setIsTracing(true);
    let index = 0;

    const runStep = () => {
      if (index >= SIGNAL_NODES.length) {
        setTraceStatus("Context → Intelligence → Feedback");
        traceTimerRef.current = setTimeout(() => {
          stopTrace();
        }, 1600);
        return;
      }

      const node = SIGNAL_NODES[index];
      setSelectedSignalId(node.id);
      setDescription(node.detail);
      setTraceStatus(`Connection ${index + 1} of ${SIGNAL_NODES.length}`);

      index++;
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      traceTimerRef.current = setTimeout(runStep, isReduced ? 2800 : 1800);
    };

    runStep();
  };

  const toggleTrace = () => {
    if (isTracing) {
      stopTrace();
    } else {
      startTrace();
    }
  };

  useEffect(() => {
    return () => {
      if (traceTimerRef.current) {
        clearTimeout(traceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="network-wrap">
      <div className="network-caption">
        <span className="live-symbol" aria-hidden="true">✦</span>
        <span>THE NUVSOL INTELLIGENCE CANVAS</span>
      </div>

      <div className={`network ${isTracing ? "tracing" : ""}`}>
        <svg viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="wire">
              <stop stopColor="#b7e6ff" />
              <stop offset="0.5" stopColor="#b7e6ff" />
              <stop offset="1" stopColor="#ffba66" />
            </linearGradient>
          </defs>
          <path
            d="M190 105 C340 105 350 260 500 260"
            fill="none"
            stroke="url(#wire)"
            strokeWidth="2"
            opacity="0.35"
          />
          <circle r="5" fill="#b7e6ff">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path="M190 105 C340 105 350 260 500 260"
            />
          </circle>

          <path
            d="M190 260 L500 260"
            fill="none"
            stroke="url(#wire)"
            strokeWidth="2"
            opacity="0.35"
          />
          <circle r="5" fill="#b7e6ff">
            <animateMotion
              dur="2.8s"
              repeatCount="indefinite"
              path="M190 260 L500 260"
            />
          </circle>

          <path
            d="M190 415 C340 415 350 260 500 260"
            fill="none"
            stroke="url(#wire)"
            strokeWidth="2"
            opacity="0.35"
          />
          <circle r="5" fill="#b7e6ff">
            <animateMotion
              dur="3.1s"
              repeatCount="indefinite"
              path="M190 415 C340 415 350 260 500 260"
            />
          </circle>

          <path
            d="M500 260 C650 260 660 105 810 105"
            fill="none"
            stroke="url(#wire)"
            strokeWidth="2"
            opacity="0.35"
          />
          <circle r="5" fill="#ffba66">
            <animateMotion
              dur="3.4s"
              repeatCount="indefinite"
              path="M500 260 C650 260 660 105 810 105"
            />
          </circle>

          <path
            d="M500 260 L810 260"
            fill="none"
            stroke="url(#wire)"
            strokeWidth="2"
            opacity="0.35"
          />
          <circle r="5" fill="#ffba66">
            <animateMotion
              dur="3.7s"
              repeatCount="indefinite"
              path="M500 260 L810 260"
            />
          </circle>

          <path
            d="M500 260 C650 260 660 415 810 415"
            fill="none"
            stroke="url(#wire)"
            strokeWidth="2"
            opacity="0.35"
          />
          <circle r="5" fill="#ffba66">
            <animateMotion
              dur="4.0s"
              repeatCount="indefinite"
              path="M500 260 C650 260 660 415 810 415"
            />
          </circle>
        </svg>

        <div className="core-node">
          <div className="core-orbit"></div>
          <div className="core-orbit second"></div>
          <span className="core-icon" aria-hidden="true">✦</span>
          <strong>AI-native</strong>
          <span>Human-centered intelligence</span>
        </div>

        {SIGNAL_NODES.map((node) => {
          const isSelected = selectedSignalId === node.id;
          const icon = node.side === "left" ? "◈" : "✧";
          return (
            <button
              key={node.id}
              type="button"
              className={`signal ${node.order} ${isSelected ? "selected" : ""}`}
              onClick={() => handleSelectSignal(node)}
              aria-pressed={isSelected}
            >
              <span className="signal-icon" aria-hidden="true">
                {icon}
              </span>
              <strong>{node.label}</strong>
              <small>{node.subLabel}</small>
            </button>
          );
        })}
      </div>

      <div className="trace-controls">
        <button
          className="trace-button"
          id="trace-intelligence"
          type="button"
          onClick={toggleTrace}
          aria-pressed={isTracing}
        >
          <span aria-hidden="true">✦</span>
          {isTracing ? "Stop the trace" : "Trace the intelligence"}
        </button>
        <span className="trace-status" id="trace-status" aria-live="polite">
          {traceStatus}
        </span>
      </div>

      <p className="network-description" id="network-description" aria-live="polite">
        {description}
      </p>

      <div className="canvas-domain">
        <span>Healthcare</span>
        <span>Organizations & events</span>
        <span>Retail operations</span>
      </div>
    </div>
  );
}
