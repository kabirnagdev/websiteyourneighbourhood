"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is Yanegi?",
    a: "Yanegi is a free app that helps you find real hangouts happening near you — from pickup basketball games and open mics to group hikes and study sessions. Create your own event or join one in seconds.",
  },
  {
    q: "Is Yanegi free to use?",
    a: "Yes — Yanegi is completely free to join. Browse events, RSVP, chat with other attendees, and create your own hangouts at no cost.",
  },
  {
    q: "How do verified profiles work?",
    a: "Users can verify their identity through a quick in-app process. Verified badges let you know who you're meeting before you show up, so every hangout starts with trust.",
  },
  {
    q: "Can I host my own event?",
    a: "Absolutely. You can spin up a hangout in under a minute — set the time, location, capacity, and description. Your event goes live on the map immediately.",
  },
  {
    q: "How do I find events near me?",
    a: "Open the live map and see pins for active events in your area. Filter by category — sports, music, food, arts, and more — to find exactly what you're looking for.",
  },
  {
    q: "Is there a chat feature?",
    a: "Yes. Every event has a built-in group chat so you can message attendees, ask questions, and build the vibe before you arrive.",
  },
];

interface FAQModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FAQModal({ open, onClose }: FAQModalProps) {
  const [expanded, setExpanded] = useState<number | null>(0);

  // close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // prevent background scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="faq-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            overflowY: "auto", padding: "60px 20px 60px",
          }}
        >
          <motion.div
            key="faq-panel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
            style={{ width: "100%", maxWidth: 760 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="hud-label"
              style={{
                display: "block", marginLeft: "auto", marginBottom: 32,
                background: "transparent", border: "1px solid rgba(230,232,234,0.4)",
                color: "#e6e8ea", padding: "10px 16px",
                fontSize: 10, cursor: "pointer",
              }}
            >
              [ ESC ] CLOSE ✕
            </button>

            {/* Heading */}
            <div className="hud-label" style={{ color: "#c8f021", marginBottom: 14 }}>
              [ TRANSMISSION LOG — COMMON QUERIES ]
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase",
              color: "#e6e8ea", marginBottom: 48, lineHeight: 1.02,
            }}>
              Frequently asked<br />questions_
            </h2>

            {/* Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FAQS.map((faq, i) => {
                const isOpen = expanded === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: isOpen ? "rgba(43,56,255,0.12)" : "rgba(230,232,234,0.04)",
                      border: "1px solid rgba(230,232,234,0.22)",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "20px 24px", gap: 16,
                    }}>
                      <span style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                        <span className="hud-label" style={{ color: "#c8f021", flexShrink: 0 }}>
                          Q_{String(i + 1).padStart(2, "0")}
                        </span>
                        <span style={{ fontSize: 15, fontWeight: 600, color: "#e6e8ea", letterSpacing: "0.01em" }}>
                          {faq.q}
                        </span>
                      </span>
                      <motion.span
                        className="mono"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ fontSize: 18, color: "rgba(230,232,234,0.5)", flexShrink: 0 }}
                      >
                        +
                      </motion.span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className="mono" style={{
                            padding: "0 24px 22px",
                            fontSize: 12.5, color: "rgba(230,232,234,0.6)",
                            lineHeight: 1.8, margin: 0,
                          }}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
