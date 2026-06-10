"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ── Floating background tiles — same style as the app's map pins ── */
const FLOATERS = [
  { src: "/emojis/basketball_1f3c0.png",                 size: 56, top: "42%", left: "88%", tilt: -8, dur: 6.5, delay: 0.0 },
  { src: "/emojis/studio-microphone_1f399-fe0f.png",     size: 48, top: "64%", left: "8%",  tilt: 6,  dur: 7.2, delay: 0.8 },
  { src: "/emojis/video-game_1f3ae.png",                 size: 50, top: "82%", left: "18%", tilt: -4, dur: 5.8, delay: 1.4 },
  { src: "/emojis/artist-palette_1f3a8.png",             size: 46, top: "6%",  left: "82%", tilt: 7,  dur: 6.8, delay: 0.4 },
  { src: "/emojis/confetti-ball_1f38a.png",              size: 52, top: "78%", left: "42%", tilt: -6, dur: 7.5, delay: 1.1 },
  { src: "/emojis/auto-rickshaw_1f6fa.png",              size: 54, top: "8%",  left: "92%", tilt: 5,  dur: 6.2, delay: 0.6 },
  { src: "/emojis/bowling_1f3b3.png",                    size: 44, top: "58%", left: "94%", tilt: -7, dur: 6.9, delay: 1.7 },
  { src: "/emojis/camping_1f3d5-fe0f.png",               size: 46, top: "84%", left: "72%", tilt: 4,  dur: 7.8, delay: 0.2 },
];

/* Pool the phone draws random "events" from on every visit */
const PIN_POOL = [
  "/emojis/basketball_1f3c0.png",
  "/emojis/studio-microphone_1f399-fe0f.png",
  "/emojis/video-game_1f3ae.png",
  "/emojis/artist-palette_1f3a8.png",
  "/emojis/bowling_1f3b3.png",
  "/emojis/barber-pole_1f488.png",
  "/emojis/auto-rickshaw_1f6fa.png",
  "/emojis/confetti-ball_1f38a.png",
  "/emojis/performing-arts_1f3ad.png",
  "/emojis/soccer-ball_26bd.png",
  "/emojis/camping_1f3d5-fe0f.png",
  "/emojis/racing-car_1f3ce-fe0f.png",
  "/emojis/sparkler_1f387.png",
  "/emojis/pool-8-ball_1f3b1.png",
  "/emojis/books_1f4da.png",
  "/emojis/beach-with-umbrella_1f3d6-fe0f.png",
];

type Pin = { src: string; x: number; y: number; rot: number; delay: number };

/* ── The app screen, rebuilt in code so pins shuffle every load ── */
function AppScreen() {
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    // shuffle client-side only → fresh events every visit, no hydration mismatch
    const shuffled = [...PIN_POOL].sort(() => Math.random() - 0.5).slice(0, 7);
    setPins(
      shuffled.map((src, i) => ({
        src,
        x: 8 + Math.random() * 70,
        y: 16 + Math.random() * 54,
        rot: -8 + Math.random() * 16,
        delay: 0.15 * i,
      }))
    );
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, background: "#eef0eb", overflow: "hidden" }}>
      {/* abstract streets */}
      <svg viewBox="0 0 300 620" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <path d="M-20 120 C 80 100, 140 180, 320 150" stroke="#fff" strokeWidth="10" fill="none" />
        <path d="M60 -20 C 90 200, 40 400, 110 640" stroke="#fff" strokeWidth="14" fill="none" />
        <path d="M-20 360 C 120 330, 200 420, 320 380" stroke="#ffd75e" strokeWidth="9" fill="none" />
        <path d="M200 -20 C 180 220, 260 420, 230 640" stroke="#fff" strokeWidth="10" fill="none" />
        <path d="M-20 520 C 100 500, 220 560, 320 530" stroke="#fff" strokeWidth="8" fill="none" />
        <circle cx="48" cy="250" r="26" fill="#cdeab4" />
        <rect x="218" y="440" width="54" height="40" rx="10" fill="#cdeab4" />
        <rect x="20" y="430" width="44" height="34" rx="9" fill="#bfe1f2" />
      </svg>

      {/* status bar */}
      <div className="brand" style={{ position: "absolute", top: 10, left: 18, right: 18, display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, color: "#111" }}>
        <span>02:01</span>
        <span style={{ letterSpacing: 1 }}>▮▮▮ ⏾</span>
      </div>

      {/* search bar */}
      <div style={{ position: "absolute", top: 34, left: 12, right: 12, display: "flex", gap: 6 }}>
        <div style={{ flex: 1, background: "#fff", borderRadius: 100, padding: "9px 14px", fontSize: 12, color: "#9aa0a6", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
          <span>⌕</span> Search...
        </div>
        <div style={{ background: "#fff", borderRadius: 100, width: 64, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 12 }}>
          🔔 ◎
        </div>
      </div>

      {/* randomized event pins — the app's signature black tiles */}
      {pins.map((p, i) => (
        <img
          key={i}
          src={p.src}
          alt=""
          draggable={false}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 44,
            height: 44,
            padding: 8,
            background: "#1c1c1e",
            borderRadius: 12,
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            transform: `rotate(${p.rot}deg)`,
            animation: `popIn 0.45s ${0.4 + p.delay}s cubic-bezier(0.34,1.56,0.64,1) both`,
            objectFit: "contain",
          }}
        />
      ))}

      {/* bottom nav */}
      <div style={{ position: "absolute", bottom: 12, left: 12, right: 12, background: "#fff", borderRadius: 100, padding: "10px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 14px rgba(0,0,0,0.12)", fontSize: 15 }}>
        <span style={{ color: "#2b38ff" }}>⌂</span>
        <span style={{ color: "#9aa0a6" }}>◴</span>
        <span style={{ background: "#2b38ff", color: "#fff", width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginTop: -2 }}>+</span>
        <span style={{ color: "#9aa0a6" }}>💬</span>
        <span style={{ color: "#9aa0a6" }}>◉</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh", paddingTop: 56, display: "flex", flexDirection: "column" }}>
      {/* soft color blobs */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,240,33,0.35) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle, rgba(43,56,255,0.14) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* live background — drifting app-pin tiles */}
      {FLOATERS.map((f, i) => (
        <img
          key={i}
          src={f.src}
          alt=""
          draggable={false}
          className="pointer-events-none select-none"
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            padding: 10,
            background: "#1c1c1e",
            borderRadius: 16,
            boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
            objectFit: "contain",
            opacity: 0.9,
            ["--tilt" as string]: `${f.tilt}deg`,
            animation: `floatBob ${f.dur}s ${f.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      <div
        className="max-lg:!grid-cols-1"
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)",
          alignItems: "center",
          padding: "24px 24px 48px",
          gap: 24,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left: headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ paddingLeft: "5%", paddingTop: 16 }}
        >
          {/* chips */}
          <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 24 }}>
            <span className="hud-label" style={{ background: "#111", color: "#c8f021", padding: "7px 14px", borderRadius: 100 }}>
              ● LIVE EVERYWHERE
            </span>
            <span className="hud-label" style={{ border: "1.5px solid #111", color: "#111", padding: "7px 14px", borderRadius: 100 }}>
              /01 — THE APP
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(52px, 7.5vw, 112px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              textTransform: "uppercase",
              color: "#111",
              margin: 0,
            }}
          >
            Find your
            <br />
            <span style={{ background: "#c8f021", padding: "0 14px", borderRadius: 14, display: "inline-block", transform: "rotate(-1.2deg)" }}>
              hangout
            </span>
            <span style={{ color: "#ff4d29" }}>.</span>
          </h1>

          <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.65, maxWidth: 440, color: "rgba(17,17,17,0.7)", fontWeight: 500 }}>
            Yanegi maps what&apos;s happening around you — pickup games, open
            mics, rooftop plans — and the people making it happen. Live.
          </p>

          <div className="flex flex-wrap items-center" style={{ gap: 14, marginTop: 36 }}>
            <a
              href="/install"
              className="no-underline transition-transform hover:scale-105"
              style={{ background: "#111", color: "#fff", padding: "16px 32px", borderRadius: 100, fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}
            >
              Enter the map <span style={{ color: "#c8f021" }}>→</span>
            </a>
            <a
              href="#modules"
              className="no-underline transition-colors hover:bg-[#111] hover:text-white"
              style={{ border: "2px solid #111", color: "#111", padding: "14px 30px", borderRadius: 100, fontSize: 15, fontWeight: 600 }}
            >
              See how it works
            </a>
          </div>

          {/* mini social proof strip */}
          <div className="hud-label flex items-center" style={{ gap: 14, marginTop: 40, opacity: 0.6 }}>
            <span>REAL PEOPLE</span>
            <span style={{ color: "#ff4d29" }}>★</span>
            <span>REAL PLACES</span>
            <span style={{ color: "#2b38ff" }}>★</span>
            <span>REAL TIME</span>
          </div>
        </motion.div>

        {/* ── Right: 3D floating phone ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", justifyContent: "center", perspective: 1400, position: "relative", padding: "20px 0" }}
        >
          {/* spinning star sticker */}
          <svg width="92" height="92" viewBox="0 0 92 92" style={{ position: "absolute", top: "4%", right: "12%", animation: "spinSlow 14s linear infinite", zIndex: 2 }}>
            <path d="M46 2l8 28 28-8-20 24 20 24-28-8-8 28-8-28-28 8 20-24-20-24 28 8z" fill="#ff4d29" />
            <text x="46" y="50" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily="var(--font-poppins), sans-serif">LIVE</text>
          </svg>

          <div
            style={{
              width: "min(300px, 78vw)",
              aspectRatio: "300/620",
              borderRadius: 44,
              background: "#111",
              padding: 10,
              boxShadow: "28px 40px 80px rgba(17,17,17,0.35), -8px -8px 32px rgba(200,240,33,0.25)",
              transformStyle: "preserve-3d",
              animation: "phoneBob 7s ease-in-out infinite",
              position: "relative",
            }}
          >
            {/* side buttons */}
            <div style={{ position: "absolute", right: -3, top: "22%", width: 3, height: 56, background: "#333", borderRadius: 2 }} />
            <div style={{ position: "absolute", left: -3, top: "18%", width: 3, height: 34, background: "#333", borderRadius: 2 }} />

            <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 36, overflow: "hidden" }}>
              <AppScreen />
              {/* notch */}
              <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 84, height: 22, background: "#111", borderRadius: 100 }} />
            </div>
          </div>

          {/* caption chip under phone */}
          <span
            className="hud-label"
            style={{ position: "absolute", bottom: "-2%", left: "50%", transform: "translateX(-50%) rotate(-2deg)", background: "#2b38ff", color: "#fff", padding: "8px 16px", borderRadius: 100, whiteSpace: "nowrap" }}
          >
            NEW EVENTS EVERY TIME YOU OPEN ↻
          </span>
        </motion.div>
      </div>
    </section>
  );
}
