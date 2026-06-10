"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    id: "01",
    tag: "DISCOVER",
    accent: "#2b38ff",
    accentFg: "#fff",
    title: "Discover events near you",
    description:
      "Open the live map and see what's happening right now — soccer games, open mics, rooftop hangouts. Tap any pin to join instantly.",
    videoSrc: "/demos/discover.mp4",
  },
  {
    id: "02",
    tag: "CREATE",
    accent: "#c8f021",
    accentFg: "#111",
    title: "Join & create plans with ease",
    description:
      "Spin up a hangout in under a minute or drop into one nearby. Set the time, place, and vibe — your crew will find you.",
    videoSrc: "/demos/create-event.mp4",
  },
  {
    id: "03",
    tag: "CONNECT",
    accent: "#ff4d29",
    accentFg: "#fff",
    title: "Chat & verify before you meet",
    description:
      "Message the group, check verified profiles, and get to know people before showing up. Every hangout starts with trust.",
    videoSrc: "/demos/chat.mp4",
  },
];

export default function ShowcaseSection() {
  return (
    <section id="modules" style={{ background: "#111", borderRadius: "40px 40px 0 0", padding: "64px 24px 96px" }}>
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap" style={{ gap: 12, marginBottom: 52 }}>
        <div className="flex items-center" style={{ gap: 16 }}>
          <span className="hud-label" style={{ background: "#c8f021", color: "#111", padding: "6px 12px", borderRadius: 100 }}>/04</span>
          <h2 style={{ fontSize: "clamp(28px,3.6vw,48px)", fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase", margin: 0, color: "#efede7" }}>
            How it works
          </h2>
        </div>
        <span className="hud-label" style={{ color: "rgba(239,237,231,0.5)" }}>
          FROM INSPIRATION → TO CREATION
        </span>
      </div>

      {/* Three modules */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group transition-transform duration-300 hover:-translate-y-2"
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 28,
              overflow: "hidden",
              background: "#1c1c1e",
              border: "1.5px solid rgba(239,237,231,0.15)",
            }}
          >
            {/* Accent title bar */}
            <div className="flex items-center justify-between" style={{ background: item.accent, color: item.accentFg, padding: "10px 16px" }}>
              <span className="hud-label" style={{ fontWeight: 700 }}>{item.tag}</span>
              <span className="brand" style={{ fontSize: 13, fontWeight: 700 }}>{item.id}</span>
            </div>

            {/* Video */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#000" }}>
              <video
                src={item.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
              />
            </div>

            {/* Text */}
            <div style={{ padding: "20px 20px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: "#efede7", letterSpacing: "-0.01em", marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(239,237,231,0.6)", lineHeight: 1.7, margin: 0 }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
