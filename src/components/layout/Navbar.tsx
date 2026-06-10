"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQModal from "@/components/sections/FAQModal";

const NAV_LINKS = ["About", "Pricing", "Journal", "Contact", "FAQ"];

function SysClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hud-label hidden lg:block" style={{ fontSize: 11, fontWeight: 700, opacity: 0.65 }}>
      {time ?? "--:--:--"}
      <span style={{ animation: "blink 1.2s steps(1) infinite", color: "#ff4d29" }}>_</span>
    </span>
  );
}

export default function Navbar() {
  const [faqOpen, setFaqOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          display: "flex",
          alignItems: "center",
          height: 60,
          padding: "0 24px",
          background: scrolled ? "rgba(239,237,231,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1.5px solid #111" : "1.5px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        {/* Brand — Poppins wordmark */}
        <Link href="/" className="flex items-center gap-2 no-underline" style={{ color: "#111" }}>
          <Image src="/logo-yanegi.png" alt="Yanegi" width={34} height={34} style={{ objectFit: "contain" }} />
          <span className="brand" style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Yanegi
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex list-none" style={{ gap: 4, marginLeft: 36, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <li key={l}>
              {l === "FAQ" ? (
                <button
                  onClick={() => setFaqOpen(true)}
                  className="cursor-pointer transition-colors hover:bg-[#111] hover:text-[#c8f021]"
                  style={{ background: "none", border: "none", padding: "8px 14px", borderRadius: 100, color: "#111", fontSize: 14, fontWeight: 600 }}
                >
                  {l}
                </button>
              ) : (
                <Link
                  href="#"
                  className="no-underline transition-colors hover:bg-[#111] hover:text-[#c8f021]"
                  style={{ padding: "8px 14px", borderRadius: 100, color: "#111", fontSize: 14, fontWeight: 600, display: "inline-block" }}
                >
                  {l}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div style={{ flex: 1 }} />

        {/* Right cluster */}
        <div className="flex items-center" style={{ gap: 16 }}>
          <SysClock />
          <Link
            href="/install"
            className="no-underline hidden sm:flex items-center transition-transform hover:scale-105"
            style={{ border: "2px solid #111", color: "#111", padding: "9px 18px", borderRadius: 100, fontSize: 13.5, fontWeight: 700, gap: 8 }}
          >
            Install app ↓
          </Link>
          <button
            className="border-none cursor-pointer transition-transform hover:scale-105 flex items-center"
            style={{ background: "#111", color: "#fff", padding: "11px 20px", borderRadius: 100, fontSize: 13.5, fontWeight: 700, gap: 6 }}
          >
            Signup <span style={{ color: "#c8f021" }}>↗</span>
          </button>
        </div>
      </nav>

      <FAQModal open={faqOpen} onClose={() => setFaqOpen(false)} />
    </>
  );
}
