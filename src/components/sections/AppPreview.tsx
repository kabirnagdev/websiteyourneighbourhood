"use client";

const PRINCIPLES = [
  {
    n: "01",
    title: "PLANS OVER FEEDS",
    body: "Scrolling is not a hobby. The app exists to get you out the door.",
    bg: "#c8f021",
    fg: "#111",
    emoji: "/emojis/parachute_1fa82.png",
  },
  {
    n: "02",
    title: "LIVE BY DEFAULT",
    body: "Every pin on the map is happening now or about to. No dead listings.",
    bg: "#2b38ff",
    fg: "#fff",
    emoji: "/emojis/sparkler_1f387.png",
  },
  {
    n: "03",
    title: "REAL HUMANS ONLY",
    body: "Verified profiles. Group chat before you meet. Trust is the protocol.",
    bg: "#111",
    fg: "#fff",
    emoji: "/emojis/handshake-no-skin-tone-no-skin-tone_1faf1-200d-1faf2.png",
  },
  {
    n: "04",
    title: "CITY AS PLAYGROUND",
    body: "Courts, rooftops, parks, basements. The whole map is yours.",
    bg: "#ff4d29",
    fg: "#fff",
    emoji: "/emojis/carousel-horse_1f3a0.png",
  },
  {
    n: "05",
    title: "NO FLUFF",
    body: "Create a hangout in under a minute. Time, place, vibe. Done.",
    bg: "#fff",
    fg: "#111",
    emoji: "/emojis/racing-car_1f3ce-fe0f.png",
  },
];

export default function AppPreview() {
  return (
    <section style={{ background: "#efede7", padding: "24px 24px 72px" }}>
      <div className="flex items-center" style={{ gap: 16, marginBottom: 36 }}>
        <span className="hud-label" style={{ background: "#2b38ff", color: "#fff", padding: "6px 12px", borderRadius: 100 }}>/03</span>
        <h2 style={{ fontSize: "clamp(28px,3.6vw,48px)", fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase", margin: 0 }}>
          The manifesto
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: 16,
        }}
      >
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.n}
            className="transition-transform duration-300 hover:scale-[1.03] hover:!rotate-0"
            style={{
              background: p.bg,
              color: p.fg,
              border: "2.5px solid #111",
              borderRadius: 24,
              padding: "24px 20px 28px",
              minHeight: 230,
              display: "flex",
              flexDirection: "column",
              transform: `rotate(${i % 2 === 0 ? -0.8 : 0.8}deg)`,
              boxShadow: "5px 6px 0 rgba(17,17,17,0.85)",
            }}
          >
            <div className="flex justify-between items-start" style={{ marginBottom: 20 }}>
              <span className="hud-label" style={{ border: `1.5px solid ${p.fg}`, padding: "4px 10px", borderRadius: 100, opacity: 0.8 }}>
                {p.n}
              </span>
              <img src={p.emoji} alt="" width={40} height={40} style={{ objectFit: "contain" }} />
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em", margin: "auto 0 10px" }}>
              {p.title}
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, opacity: 0.85, margin: 0, fontWeight: 500 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
