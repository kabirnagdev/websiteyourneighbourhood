"use client";

// ─────────────────────────────────────────────────────────────
//  TO ADD VIDEOS:
//  Set videoSrc on either card below, e.g.:
//    videoSrc: "/demos/discover.mp4"
//  The <video> tag will render automatically.
// ─────────────────────────────────────────────────────────────

const CARDS = [
  {
    label: "Discover & Join",
    // videoSrc: "/demos/discover.mp4",
  },
  {
    label: "Create & Connect",
    // videoSrc: "/demos/create-event.mp4",
  },
];

export default function AppPreview() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "100px 5% 110px",
      }}
    >
      {/* Centered heading */}
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 700,
          letterSpacing: "-2.5px",
          lineHeight: 1.08,
          color: "#111",
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto 72px",
        }}
      >
        Everything you need,<br />in your pocket.
      </h2>

      {/* Two cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          maxWidth: 1140,
          margin: "0 auto",
        }}
      >
        {CARDS.map((card) => (
          <div
            key={card.label}
            style={{
              background: "#f2f2f2",
              borderRadius: 28,
              overflow: "hidden",
              aspectRatio: "3/4",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {(card as { videoSrc?: string }).videoSrc ? (
              <video
                src={(card as { videoSrc?: string }).videoSrc}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
              />
            ) : (
              /* Placeholder */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  opacity: 0.35,
                }}
              >
                {/* Phone outline */}
                <div
                  style={{
                    width: 90,
                    height: 160,
                    border: "3px solid #111",
                    borderRadius: 18,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 12,
                    gap: 6,
                  }}
                >
                  <div style={{ width: 28, height: 4, background: "#111", borderRadius: 4 }} />
                  <div style={{ width: 44, height: 44, border: "2.5px solid #111", borderRadius: 8, marginTop: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#111", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  {card.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
