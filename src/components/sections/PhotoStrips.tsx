"use client";

const PHOTOS = [
  "/events/f6a30ee2d9747cedd7a395eccac1a4df.jpg",
  "/events/dc951bc9b03bbacb37d934119de561bd.jpg",
  "/events/2feb21631d3ae39eb88c507f95ef84c8.jpg",
  "/events/228ef8cd9b068fc6f74f806c9acd4961.jpg",
  "/events/download.png",
  "/events/928b7425cc344a3dc4324c6783998551.jpg",
  "/events/82ca116c0229061a95d0d4a926876875.jpg",
  "/events/5c20c360f613b3fb8b887f20e9458bc8.jpg",
  "/events/50911560321b1b0e8f1747c32ec022c8.jpg",
];

const PHOTOS2 = [
  "/events2/2d0d624827f7ae15bf817b1b5218685c.jpg",
  "/events2/4acd1b81bd59b2da6bb14cb599cd53e8.jpg",
  "/events2/6f1d76e4e64dc91d1042dcc8bed1c36a.jpg",
  "/events2/7d6beec371af55165f540e1f891a64cf.jpg",
  "/events2/836fd0ae3a69dc48bbbe18ba7ccb8a21.jpg",
  "/events2/bde0cce47fc213e41e28e0466633d92e.jpg",
  "/events2/d93838621ce201639079fdc3a376ec68.jpg",
  "/events2/f5d579ef516ff721495b138581becf67.jpg",
  "/events2/f8b73780da65710fe2fbabb61849d61f.jpg",
];

const ACCENTS = ["#c8f021", "#2b38ff", "#ff4d29"];

function Strip({ photos, direction }: { photos: string[]; direction: "left" | "right" }) {
  const doubled = [...photos, ...photos];
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div style={{ display: "flex", gap: 16, width: "max-content", animation: `${animName} 38s linear infinite`, padding: "10px 0" }}>
        {doubled.map((src, i) => (
          <div
            key={i}
            className="transition-transform duration-300 hover:scale-105 hover:!rotate-0"
            style={{
              width: 250,
              height: 165,
              borderRadius: 20,
              overflow: "hidden",
              flexShrink: 0,
              border: "2.5px solid #111",
              boxShadow: `5px 6px 0 ${ACCENTS[i % 3]}`,
              transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)`,
            }}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhotoStrips() {
  return (
    <section style={{ background: "#efede7", padding: "32px 0 80px", overflow: "hidden" }}>
      {/* Section header */}
      <div className="flex items-center justify-between flex-wrap" style={{ padding: "0 24px 32px", gap: 12 }}>
        <div className="flex items-center" style={{ gap: 16 }}>
          <span className="hud-label" style={{ background: "#ff4d29", color: "#fff", padding: "6px 12px", borderRadius: 100 }}>/02</span>
          <h2 style={{ fontSize: "clamp(28px,3.6vw,48px)", fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase", margin: 0 }}>
            Caught in the wild
          </h2>
        </div>
        <span className="hud-label" style={{ opacity: 0.55 }}>
          REAL HANGOUTS — UNFILTERED ★
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Strip photos={PHOTOS} direction="left" />
        <Strip photos={PHOTOS2} direction="right" />
      </div>
    </section>
  );
}
