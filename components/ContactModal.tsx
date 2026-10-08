"use client";

import React, { useState, useEffect, useRef } from "react";
import { CONTACT_INFO } from "@/data/siteData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "AI-native solution inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      // Even if offline or network fails, provide mailto fallback
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Could not send directly. You can also send via your email app."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg(null);
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "AI-native solution inquiry",
      message: "",
    });
  };

  const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    formData.subject || "AI-native solution inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${
      formData.organization || "N/A"
    }\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <dialog
      ref={dialogRef}
      id="contact-dialog"
      aria-labelledby="contact-dialog-title"
      onClick={handleBackdropClick}
      onClose={onClose}
      style={{
        maxWidth: "640px",
        width: "min(640px, 94vw)",
        padding: "32px",
        borderRadius: "24px",
      }}
    >
      <div className="dialog-top">
        <span className="eyebrow" style={{ margin: 0 }}>
          Direct Contact · {CONTACT_INFO.email}
        </span>
        <button
          type="button"
          className="close"
          id="close-contact-dialog"
          onClick={onClose}
          aria-label="Close contact dialog"
        >
          Close
        </button>
      </div>

      {!submitted ? (
        <div id="contact-dialog-content">
          <h2 id="contact-dialog-title" style={{ fontSize: "32px", marginBottom: "8px" }}>
            Let’s make the complex click.
          </h2>
          <p style={{ color: "var(--mut)", fontSize: "14px", marginBottom: "22px" }}>
            Share your operational challenge or project idea. Your message goes straight to{" "}
            <strong style={{ color: "#1256d1" }}>{CONTACT_INFO.email}</strong>.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="contact-form-row">
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--ink)", marginBottom: "5px" }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Dr. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--line)",
                    fontSize: "14px",
                    outline: "none",
                    background: "#f9fbfe",
                    color: "var(--ink)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--ink)", marginBottom: "5px" }}
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--line)",
                    fontSize: "14px",
                    outline: "none",
                    background: "#f9fbfe",
                    color: "var(--ink)",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="contact-form-row">
              <div>
                <label
                  htmlFor="contact-org"
                  style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--ink)", marginBottom: "5px" }}
                >
                  Organization / Industry
                </label>
                <input
                  id="contact-org"
                  name="organization"
                  type="text"
                  placeholder="e.g. Healthcare, Retail, Non-profit"
                  value={formData.organization}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--line)",
                    fontSize: "14px",
                    outline: "none",
                    background: "#f9fbfe",
                    color: "var(--ink)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--ink)", marginBottom: "5px" }}
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Inquiry or product interest"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--line)",
                    fontSize: "14px",
                    outline: "none",
                    background: "#f9fbfe",
                    color: "var(--ink)",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--ink)", marginBottom: "5px" }}
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about the workflow you want to transform..."
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid var(--line)",
                  fontSize: "14px",
                  outline: "none",
                  background: "#f9fbfe",
                  color: "var(--ink)",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {errorMsg && (
              <div
                style={{
                  padding: "10px 14px",
                  background: "#fff2f0",
                  border: "1px solid #ffccc7",
                  borderRadius: "8px",
                  color: "#cf1322",
                  fontSize: "13px",
                }}
              >
                {errorMsg}
                <div style={{ marginTop: "6px" }}>
                  <a
                    href={mailtoUrl}
                    style={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    Click here to send directly via your email client
                  </a>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "10px", flexWrap: "wrap" }}>
              <button
                type="submit"
                className="button"
                disabled={isSubmitting}
                style={{ padding: "12px 24px" }}
              >
                {isSubmitting ? "Sending message..." : "Send to contact@nuvsol.com"}
              </button>

              <a
                href={mailtoUrl}
                className="button outline"
                style={{ padding: "12px 20px", fontSize: "13px" }}
              >
                Open in Email App
              </a>
            </div>
          </form>
        </div>
      ) : (
        <div style={{ padding: "20px 0", textAlign: "center" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #439afb, #1766df)",
              color: "#ffffff",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              fontSize: "28px",
              margin: "0 auto 18px",
              boxShadow: "0 10px 25px rgba(23, 102, 223, 0.3)",
            }}
          >
            ✓
          </div>
          <h2 style={{ fontSize: "28px", marginBottom: "10px", color: "var(--ink)" }}>
            Message Sent Successfully!
          </h2>
          <p style={{ color: "var(--mut)", fontSize: "15px", maxWidth: "440px", margin: "0 auto 20px" }}>
            Thank you, <strong>{formData.name}</strong>. Your inquiry has been forwarded to{" "}
            <strong>{CONTACT_INFO.email}</strong>. Our team will review your message and reply promptly.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <button
              type="button"
              className="button"
              onClick={handleReset}
              style={{ padding: "10px 20px", fontSize: "13px" }}
            >
              Send another message
            </button>
            <button
              type="button"
              className="button outline"
              onClick={onClose}
              style={{ padding: "10px 20px", fontSize: "13px" }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
