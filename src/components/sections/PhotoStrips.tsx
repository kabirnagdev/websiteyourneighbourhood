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

function Strip({ photos, direction }: { photos: string[]; direction: "left" | "right" }) {
  const doubled = [...photos, ...photos];
  const animName = direction === "left" ? "scrollLeft" : "scrollRight";
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: 14,
          width: "max-content",
          animation: `${animName} 32s linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              width: 240,
              height: 160,
              borderRadius: 16,
              overflow: "hidden",
              flexShrink: 0,
              boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
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
    <section
      style={{
        background: "#EEF1F6",
        paddingBottom: 80,
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", paddingBottom: 44, paddingTop: 8 }}>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            color: "#111",
            letterSpacing: "-1px",
          }}
        >
          Find your hangouts
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Strip photos={PHOTOS} direction="left" />
        <Strip photos={PHOTOS2} direction="right" />
      </div>
    </section>
  );
}
