"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import ContactModal from "@/components/ContactModal";
import VisionSection from "@/components/sections/VisionSection";
import AiCoreSection from "@/components/sections/AiCoreSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import MethodSection from "@/components/sections/MethodSection";
import ContactSection from "@/components/sections/ContactSection";
import { NAV_SECTIONS } from "@/data/siteData";
import { Product } from "@/types";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  const journeyRef = useRef<HTMLElement>(null);
  const isNavigatingRef = useRef<boolean>(false);
  const lockTimerRef = useRef<number>(0);

  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 760px)");
    const update = () => setIsMobileState(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const isMobile = useCallback(() => {
    return isMobileState;
  }, [isMobileState]);

  const navigateTo = useCallback(
    (index: number) => {
      const targetIndex = Math.max(0, Math.min(5, index));
      setCurrentIndex(targetIndex);

      const journey = journeyRef.current;
      const panels = journey ? journey.querySelectorAll<HTMLElement>(".panel") : [];
      const targetPanel = panels[targetIndex];

      if (isMobile()) {
        if (targetPanel) {
          targetPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (journey) {
        journey.scrollTo({
          left: targetIndex * journey.clientWidth,
          behavior: "smooth",
        });
      }

      if (typeof window !== "undefined") {
        const hash = NAV_SECTIONS[targetIndex]?.id;
        if (hash) {
          try {
            window.history.replaceState(null, "", `#${hash}`);
          } catch {
            // Ignore history errors if any
          }
        }
      }
    },
    [isMobile]
  );

  // Wheel horizontal scrolling handler for desktop
  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return;

    const handleWheel = (e: WheelEvent) => {
      if (isMobile() || isModalOpen || isContactModalOpen || Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.ctrlKey) {
        return;
      }

      const panels = journey.querySelectorAll<HTMLElement>(".panel");
      const currentPanel = panels[currentIndex];

      if (currentPanel) {
        const overflow = currentPanel.scrollHeight > currentPanel.clientHeight + 4;
        if (overflow) {
          const isDown = e.deltaY > 0;
          if (
            (isDown && currentPanel.scrollTop < currentPanel.scrollHeight - currentPanel.clientHeight - 4) ||
            (!isDown && currentPanel.scrollTop > 4)
          ) {
            return; // Let user scroll inside the panel
          }
        }
      }

      e.preventDefault();
      const now = Date.now();
      if (now < lockTimerRef.current || Math.abs(e.deltaY) < 10) return;

      lockTimerRef.current = now + 700;
      const nextIndex = currentIndex + (e.deltaY > 0 ? 1 : -1);
      navigateTo(nextIndex);
    };

    journey.addEventListener("wheel", handleWheel, { passive: false });
    return () => journey.removeEventListener("wheel", handleWheel);
  }, [currentIndex, isModalOpen, isContactModalOpen, isMobile, navigateTo]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen || isContactModalOpen) return;
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(target?.tagName)) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateTo(currentIndex + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateTo(currentIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isModalOpen, isContactModalOpen, navigateTo]);

  // Scroll synchronization for desktop journey
  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return;

    const handleScroll = () => {
      if (isMobile() || isNavigatingRef.current) return;
      const scrollPos = journey.scrollLeft;
      const panelWidth = journey.clientWidth;
      if (panelWidth > 0) {
        const detectedIndex = Math.round(scrollPos / panelWidth);
        if (detectedIndex !== currentIndex && detectedIndex >= 0 && detectedIndex <= 5) {
          setCurrentIndex(detectedIndex);
        }
      }
    };

    journey.addEventListener("scroll", handleScroll, { passive: true });
    return () => journey.removeEventListener("scroll", handleScroll);
  }, [currentIndex, isMobile]);

  // IntersectionObserver for mobile and active panel state
  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return;
    const panels = journey.querySelectorAll<HTMLElement>(".panel");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
          if (isMobile() && entry.isIntersecting) {
            const index = Array.from(panels).indexOf(entry.target as HTMLElement);
            if (index !== -1 && index !== currentIndex) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: isMobile() ? null : journey,
        threshold: 0.45,
      }
    );

    panels.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, [currentIndex, isMobile, isMobileState]);

  // Hash route initialization
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.slice(1);
    if (hash) {
      const target = NAV_SECTIONS.find((s) => s.id === hash);
      if (target) {
        setTimeout(() => navigateTo(target.index), 150);
      }
    }
  }, [navigateTo]);

  // Resize handler to re-align horizontal slide
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const journey = journeyRef.current;
        if (journey && !isMobile()) {
          journey.scrollTo({
            left: currentIndex * journey.clientWidth,
            behavior: "instant" as ScrollBehavior,
          });
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, isMobile]);

  // When crossing the mobile/desktop boundary (rotate, resize), reset the journey position
  useEffect(() => {
    if (typeof window === "undefined") return;
    const journey = journeyRef.current;
    if (!journey) return;

    if (isMobileState) {
      // Vertical mode: scroll the active panel into view
      const panels = journey.querySelectorAll<HTMLElement>(".panel");
      const target = panels[currentIndex];
      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    } else {
      // Horizontal mode: snap to the correct slide
      journey.scrollTo({
        left: currentIndex * journey.clientWidth,
        behavior: "auto" as ScrollBehavior,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileState]);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header
        currentIndex={currentIndex}
        onNavigate={navigateTo}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <main
        ref={journeyRef}
        className="journey"
        id="journey"
        aria-label="Nuvsol horizontal showcase"
      >
        <VisionSection onNavigate={navigateTo} />
        <AiCoreSection />
        <PortfolioSection onOpenProduct={handleOpenProduct} />
        <CaseStudiesSection />
        <MethodSection />
        <ContactSection onOpenContact={() => setIsContactModalOpen(true)} />
      </main>

      <Footer currentIndex={currentIndex} onNavigate={navigateTo} />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}