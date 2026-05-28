import Link from "next/link";

const COL1 = ["Explore", "Hangouts", "Pricing", "Changelog", "Blog", "About"];
const COL2 = ["Contact", "Help center", "Careers", "Merch", "X (Twitter)", "Instagram"];

export default function Footer() {
  return (
    <footer style={{ background: "#333", color: "rgba(255,255,255,0.7)", padding: "72px 64px 44px", fontFamily: "'DM Sans', sans-serif" }}>

      <div className="flex justify-between items-start flex-wrap mb-16" style={{ gap: 60 }}>
        <div className="flex items-start" style={{ gap: 16, flexShrink: 0 }}>
          <img
            src="/logo-custom.png"
            alt="Yanegi"
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
          <div style={{ fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.25, color: "rgba(255,255,255,0.88)", fontWeight: 400, maxWidth: 220 }}>
            made <em style={{ fontStyle: "normal", fontFamily: "var(--font-leckerli), cursive", fontSize: "1.05em" }}>of love</em> &amp;<br/>
            made <em style={{ fontStyle: "normal", fontFamily: "var(--font-leckerli), cursive", fontSize: "1.05em" }}>to love</em>
          </div>
        </div>

        <div className="flex" style={{ gap: 72, flexShrink: 0 }}>
          <div className="flex flex-col" style={{ gap: 13 }}>
            {COL1.map((l) => (
              <Link key={l} href="#" className="no-underline hover:text-white transition-colors"
                style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>
                {l}
              </Link>
            ))}
          </div>
          <div className="flex flex-col" style={{ gap: 13 }}>
            {COL2.map((l) => (
              <Link key={l} href="#" className="no-underline hover:text-white transition-colors"
                style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap" style={{ gap: 12, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 22 }}>
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
          ©Yanegi 2026–2032. All rights reserved
        </span>
        <div className="flex" style={{ gap: 22 }}>
          {["Privacy policy", "Terms"].map((l) => (
            <Link key={l} href="#" className="no-underline transition-colors hover:text-white/65"
              style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
