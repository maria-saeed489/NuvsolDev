"use client";

import React, { useEffect, useRef } from "react";
import { Product } from "@/types";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      const rect = dialogRef.current.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        onClose();
      }
    }
  };

  if (!product) return null;

  const isExternal = product.url.startsWith("https");

  return (
    <dialog
      ref={dialogRef}
      id="product-dialog"
      aria-labelledby="dialog-title"
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <div className="dialog-top">
        <span className="eyebrow" style={{ margin: 0 }}>
          AI-native product portfolio
        </span>
        <button
          type="button"
          className="close"
          id="close-dialog"
          onClick={onClose}
          aria-label="Close dialog"
        >
          Close
        </button>
      </div>
      <div id="dialog-content">
        <h2 id="dialog-title">{product.name}</h2>
        <span className="status">{product.status}</span>
        <p>{product.desc}</p>
        <h3>Product capabilities</h3>
        <ul>
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <p className="dialog-note">{product.note}</p>
        <a
          className="button"
          href={product.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {product.cta}
        </a>
      </div>
    </dialog>
  );
}
