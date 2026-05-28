"use client";

import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
//  HOW TO ADD YOUR GIF / VIDEO
//
//  Option A — GIF
//    1. Drop your .gif file into /public/demos/  (e.g. discover.gif)
//    2. In each item below, uncomment `gifSrc` and set the path.
//    3. The <img> tag inside renders it automatically.
//
//  Option B — MP4 (recommended: smaller file, smoother)
//    1. Convert your GIF → MP4 (use ezgif.com or ffmpeg)
//    2. Drop the .mp4 into /public/demos/
//    3. Uncomment `videoSrc` and set the path.
//    4. The <video> tag inside renders it automatically.
// ─────────────────────────────────────────────────────────────

const ITEMS = [
  {
    title: "Discover Events Near You",
    description: "Open the live map and see what's happening right now — soccer games, open mics, rooftop hangouts. Tap any pin to join instantly.",
    accent: "#3C91ED",
    demoGradient: "linear-gradient(145deg,#0a1220,#162845,#1e3d6a)",
    icon: "🗺️",
    videoSrc: "/demos/discover.mp4",
  },
  {
    title: "Join & Create Plans with Ease",
    description: "Spin up a hangout in under a minute or drop into one nearby. Set the time, place, and vibe — your crew will find you.",
    accent: "#7C3AED",
    demoGradient: "linear-gradient(145deg,#140510,#3a0e22,#5e1a38)",
    icon: "🗓️",
    videoSrc: "/demos/create-event.mp4",
  },
  {
    title: "Chat & Verify Before You Meet",
    description: "Message the group, check verified profiles, and get to know people before showing up. Every hangout starts with trust.",
    accent: "#059669",
    demoGradient: "linear-gradient(145deg,#0a1610,#16321a,#1e4d28)",
    icon: "✅",
    videoSrc: "/demos/chat.mp4",
  },
];

export default function ShowcaseSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 40px 120px",
      }}
    >
      {/* Heading */}
      <motion.div
        className="text-center"
        style={{ maxWidth: 700, margin: "0 auto 72px" }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 4.8vw, 58px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.08,
            color: "#111",
          }}
        >
          From inspiration
          <br />
          to creation.
        </h2>
        <p
          style={{
            marginTop: 20,
            fontSize: 16,
            color: "#666",
            lineHeight: 1.7,
          }}
        >
          Everything you need to find, save, and experience your next favourite hangout.
        </p>
      </motion.div>

      {/* Three columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* ── Demo area (replace placeholder with your GIF/video) ── */}
            <motion.div
              style={{
                borderRadius: 22,
                overflow: "hidden",
                background: item.demoGradient,
                aspectRatio: "4/3",
                position: "relative",
                marginBottom: 24,
                boxShadow: `0 8px 40px ${item.accent}22`,
                border: `1px solid ${item.accent}33`,
              }}
              whileHover={{ scale: 1.025, boxShadow: `0 16px 56px ${item.accent}44` }}
              transition={{ duration: 0.3 }}
            >
              {item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                />
              ) : item.gifSrc ? (
                <img
                  src={item.gifSrc}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    border: `2px dashed ${item.accent}55`,
                    borderRadius: 22,
                  }}
                >
                  <span style={{ fontSize: 42 }}>{item.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: item.accent, opacity: 0.7 }}>
                    Add your GIF / video here
                  </span>
                </div>
              )}

              {/* Subtle shimmer overlay */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${item.accent}11 0%, transparent 60%)`,
                  pointerEvents: "none",
                }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              />
            </motion.div>

            {/* ── Text below ── */}
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-0.4px",
                marginBottom: 10,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#666",
                lineHeight: 1.7,
                maxWidth: 340,
              }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
