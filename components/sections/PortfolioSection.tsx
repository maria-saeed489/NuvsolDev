"use client";

import React from "react";
import { PRODUCTS } from "@/data/siteData";
import { Product } from "@/types";
import TiltCard from "@/components/TiltCard";

interface PortfolioSectionProps {
  onOpenProduct: (product: Product) => void;
}

export default function PortfolioSection({ onOpenProduct }: PortfolioSectionProps) {
  return (
    <section className="panel portfolio" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">02 / AI-native product portfolio</span>
          <h2 id="portfolio-heading">
            Different worlds.
            <br />
            One intelligent approach.
          </h2>
        </div>
        <p>
          Focused solutions for the teams running clinics, community events, and neighborhood stores.
        </p>
      </div>

      <div className="portfolio-grid">
        {PRODUCTS.map((product) => (
          <TiltCard key={product.id} className="product">
            <div className="product-display">
              <div className="mini-app">
                <b>{product.miniApp.title}</b>
                {product.miniApp.rows.map((row, idx) => (
                  <div key={idx} className="mini-row">
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-info">
              <div className="product-sector">{product.sector}</div>
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <span className="status">{product.status}</span>
              <button
                type="button"
                onClick={() => onOpenProduct(product)}
                aria-haspopup="dialog"
              >
                Explore product
              </button>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="portfolio-bottom">
        <span>Explore each product for capabilities, intended users, and current stage.</span>
        <span>Interface concepts shown with illustrative data.</span>
      </div>
    </section>
  );
}
