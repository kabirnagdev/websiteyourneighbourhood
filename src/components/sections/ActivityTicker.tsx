"use client";

const ITEMS = [
  { icon: "🏀", label: "Sports" },
  { icon: "🎵", label: "Live Music" },
  { icon: "🍕", label: "Food & Drinks" },
  { icon: "🏕️", label: "Outdoors" },
  { icon: "🎮", label: "Gaming" },
  { icon: "🎨", label: "Arts & Culture" },
  { icon: "🎭", label: "Shows" },
  { icon: "🏃", label: "Fitness" },
  { icon: "🎲", label: "Board Games" },
  { icon: "🌄", label: "Adventures" },
  { icon: "🎪", label: "Festivals" },
  { icon: "📚", label: "Study Groups" },
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function ActivityTicker() {
  return (
    <section
      style={{
        background: "#EEF1F6",
        padding: "36px 0 40px",
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "tickerScroll 28s linear infinite",
          gap: 14,
        }}
      >
        {DOUBLED.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 100,
              padding: "10px 22px 10px 14px",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                background: "#f0f0f0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                fontFamily: "'Leckerli One', cursive",
                fontSize: 16,
                color: "#111",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
