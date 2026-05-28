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
              style={{
                display: "block", marginLeft: "auto", marginBottom: 32,
                background: "rgba(255,255,255,0.1)", border: "none",
                color: "#fff", width: 40, height: 40, borderRadius: "50%",
                fontSize: 20, cursor: "pointer", lineHeight: "40px", textAlign: "center",
              }}
            >
              ✕
            </button>

            {/* Heading */}
            <h2 style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 700, letterSpacing: "-1.5px",
              color: "#fff", marginBottom: 48, lineHeight: 1.1,
            }}>
              Frequently asked<br />questions
            </h2>

            {/* Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FAQS.map((faq, i) => {
                const isOpen = expanded === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 16,
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "22px 28px",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: 16, fontWeight: 600, color: "#fff",
                      }}>
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", flexShrink: 0, marginLeft: 16 }}
                      >
                        ∨
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
                          <p style={{
                            padding: "0 28px 22px",
                            fontFamily: "var(--font-dm), sans-serif",
                            fontSize: 15, color: "rgba(255,255,255,0.6)",
                            lineHeight: 1.7, margin: 0,
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
