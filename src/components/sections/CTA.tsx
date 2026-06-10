"use client";

import { motion } from "framer-motion";

const ROW1 = [
  { icon: "🏀", label: "Pickup Basketball" },
  { icon: "🎵", label: "Open Mic Night" },
  { icon: "🏕️", label: "Group Camping" },
  { icon: "🍕", label: "Food Crawl" },
  { icon: "🎨", label: "Paint & Sip" },
  { icon: "🚴", label: "Cycling Club" },
  { icon: "🎭", label: "Improv Show" },
  { icon: "🌊", label: "Beach Hangout" },
  { icon: "🎮", label: "LAN Party" },
  { icon: "🌄", label: "Sunrise Hike" },
];
const ROW2 = [
  { icon: "🎲", label: "Board Game Night" },
  { icon: "📸", label: "Photography Walk" },
  { icon: "🧘", label: "Yoga in the Park" },
  { icon: "🎪", label: "Street Festival" },
  { icon: "🎤", label: "Karaoke Night" },
  { icon: "🏋️", label: "Gym Buddy" },
  { icon: "📚", label: "Book Club" },
  { icon: "🍳", label: "Cooking Class" },
  { icon: "🎸", label: "Jam Session" },
  { icon: "🏄", label: "Surf Lessons" },
];

const CHIP_ACCENTS = ["#c8f021", "#2b38ff", "#ff4d29", "#efede7"];

function TickerRow({ items, direction }: { items: typeof ROW1; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  const anim = direction === "left" ? "marqueeLeft" : "marqueeRight";
  const dur = direction === "left" ? 36 : 42;
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div style={{ display: "flex", width: "max-content", gap: 10, animation: `${anim} ${dur}s linear infinite` }}>
        {doubled.map((item, i) => {
          const accent = CHIP_ACCENTS[i % CHIP_ACCENTS.length];
          return (
            <span
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                border: `1.5px solid ${accent}`,
                color: accent,
                borderRadius: 100,
                padding: "9px 18px 9px 12px",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {item.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function CTASection() {
  return (
    <section style={{ background: "#111", overflow: "hidden", padding: "32px 0 72px" }}>
      {/* Big lime card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "#c8f021",
          borderRadius: 36,
          margin: "0 24px 56px",
          padding: "clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px)",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* decorative emoji tiles in card corners */}
        <img src="/emojis/confetti-ball_1f38a.png" alt="" width={64} height={64} style={{ position: "absolute", top: "12%", left: "6%", transform: "rotate(-10deg)", opacity: 0.9 }} />
        <img src="/emojis/grinning-face_1f600.png" alt="" width={56} height={56} style={{ position: "absolute", bottom: "14%", right: "7%", transform: "rotate(8deg)", opacity: 0.9 }} />

        <div className="hud-label" style={{ color: "#111", marginBottom: 18, opacity: 0.7 }}>
          /05 — YOUR MOVE
        </div>
        <h2
          style={{
            fontSize: "clamp(40px,6.5vw,92px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.98,
            textTransform: "uppercase",
            color: "#111",
            margin: "0 0 22px",
          }}
        >
          Never run out
          <br />
          of plans<span style={{ color: "#ff4d29" }}>.</span>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(17,17,17,0.75)", lineHeight: 1.7, margin: "0 auto 40px", maxWidth: 440, fontWeight: 500 }}>
          Yanegi is free to join. Find hangouts happening around you or create
          your own and bring people together.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            className="border-none cursor-pointer transition-transform hover:scale-105"
            style={{ background: "#111", color: "#fff", padding: "16px 36px", borderRadius: 100, fontSize: 15, fontWeight: 700 }}
          >
            Join for free →
          </button>
          <button
            className="cursor-pointer transition-colors hover:bg-[#111] hover:text-[#c8f021]"
            style={{ background: "transparent", color: "#111", border: "2px solid #111", padding: "14px 34px", borderRadius: 100, fontSize: 15, fontWeight: 700 }}
          >
            Explore plans
          </button>
        </div>
      </motion.div>

      {/* scrolling tickers */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <TickerRow items={ROW1} direction="left" />
        <TickerRow items={ROW2} direction="right" />
      </div>
    </section>
  );
}
