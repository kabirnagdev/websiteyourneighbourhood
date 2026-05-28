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

const ROW3 = [
  { icon: "🌮", label: "Taco Tuesday" },
  { icon: "🎯", label: "Archery Class" },
  { icon: "🎬", label: "Movie Night" },
  { icon: "🏓", label: "Ping Pong" },
  { icon: "🌿", label: "Nature Trail" },
  { icon: "🎻", label: "Jazz Evening" },
  { icon: "🤸", label: "Acrobatics" },
  { icon: "🍦", label: "Ice Cream Social" },
  { icon: "🚣", label: "Kayaking" },
  { icon: "🎡", label: "Carnival Night" },
];

function TickerRow({ items, direction }: { items: typeof ROW1; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  const anim = direction === "left" ? "ctaScrollLeft" : "ctaScrollRight";
  const dur = direction === "left" ? 36 : 40;
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div style={{ display: "flex", width: "max-content", gap: 12, animation: `${anim} ${dur}s linear infinite` }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: 9,
              background: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 100,
              padding: "9px 20px 9px 12px",
              flexShrink: 0,
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
            }}
          >
            <span style={{ width: 32, height: 32, background: "#f0f0f0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
              {item.icon}
            </span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 500, color: "#111", whiteSpace: "nowrap" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CTASection() {
  return (
    <section
      className="text-center"
      style={{
        background: "radial-gradient(ellipse 700px 520px at 50% 42%, rgba(110,168,230,0.36) 0%, rgba(150,195,242,0.16) 44%, transparent 68%), #EEF1F6",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes ctaScrollLeft  { 0% { transform: translateX(0);    } 100% { transform: translateX(-50%); } }
        @keyframes ctaScrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0);    } }
      `}</style>

      {/* CTA copy + buttons */}
      <motion.div
        className="mx-auto"
        style={{ maxWidth: 780, padding: "130px 52px 72px" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1.08, color: "#111", marginBottom: 20 }}>
          Never run out of<br />plans again.
        </h2>
        <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(17,17,17,0.5)", lineHeight: 1.65, marginBottom: 48, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>
          Yanegi is free to join. Find hangouts happening around you or create your own and bring people together.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            className="border-none cursor-pointer transition-opacity hover:opacity-75"
            style={{ background: "#111", color: "#fff", padding: "14px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, fontFamily: "inherit" }}
          >
            Join for Free
          </button>
          <button
            className="cursor-pointer transition-colors flex items-center gap-1.5"
            style={{ background: "transparent", color: "#111", border: "1.5px solid rgba(17,17,17,0.28)", padding: "14px 32px", borderRadius: 100, fontSize: 15, fontWeight: 500, fontFamily: "inherit" }}
          >
            Explore Plans ›
          </button>
        </div>
      </motion.div>

      {/* 3-row scrolling ticker */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingBottom: 80 }}>
        <TickerRow items={ROW1} direction="left" />
        <TickerRow items={ROW2} direction="right" />
        <TickerRow items={ROW3} direction="left" />
      </div>
    </section>
  );
}
