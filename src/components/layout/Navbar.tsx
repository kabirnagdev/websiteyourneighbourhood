"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQModal from "@/components/sections/FAQModal";

const NAV_LINKS = ["About", "Pricing", "Journal", "Contact", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: 62,
          padding: "0 52px",
          transition: "background 0.3s",
          background: scrolled ? "rgba(238,241,246,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        <Link href="/" className="flex items-center gap-2 no-underline" style={{ color: "#111" }}>
          <Image src="/logo-yanegi.png" alt="Yanegi" width={42} height={42} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.3px", fontFamily: "var(--font-dm), sans-serif" }}>
            Yanegi
          </span>
        </Link>

        <ul className="hidden md:flex list-none" style={{ gap: 28, justifyContent: "center" }}>
          {NAV_LINKS.map((l) => (
            <li key={l}>
              {l === "FAQ" ? (
                <button
                  onClick={() => setFaqOpen(true)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 14, fontWeight: 500, color: "#111", opacity: 0.7,
                    fontFamily: "var(--font-dm), sans-serif", padding: 0,
                  }}
                  className="transition-opacity hover:opacity-100"
                >
                  FAQ
                </button>
              ) : (
                <Link
                  href="#"
                  className="no-underline transition-opacity hover:opacity-100"
                  style={{ fontSize: 14, fontWeight: 500, color: "#111", opacity: 0.7, fontFamily: "var(--font-dm), sans-serif" }}
                >
                  {l}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end" style={{ gap: 12 }}>
          <Link
            href="/install"
            className="no-underline transition-opacity hover:opacity-75 flex items-center gap-2"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(17,17,17,0.15)",
              color: "#111",
              padding: "8px 18px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-dm), sans-serif",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 16l-4-4h3V4h2v8h3l-4 4z"/><path d="M4 20h16"/>
            </svg>
            Install App
          </Link>
          <button
            className="border-none cursor-pointer transition-opacity hover:opacity-75"
            style={{ background: "#111", color: "#fff", padding: "9px 22px", borderRadius: 100, fontSize: 14, fontWeight: 500, fontFamily: "var(--font-dm), sans-serif" }}
          >
            Signup
          </button>
        </div>
      </nav>

      <FAQModal open={faqOpen} onClose={() => setFaqOpen(false)} />
    </>
  );
}
