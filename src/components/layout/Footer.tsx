import Link from "next/link";

const COLS: { head: string; links: string[] }[] = [
  { head: "NAVIGATION", links: ["Explore", "Hangouts", "Pricing", "Changelog", "Blog", "About"] },
  { head: "RESOURCES", links: ["Contact", "Help center", "Careers", "Merch"] },
  { head: "SOCIALS", links: ["X (Twitter)", "Instagram", "Discord"] },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", color: "rgba(230,232,234,0.7)", borderTop: "1px solid #0a0a0a" }}>
      <style>{`
        @keyframes footerMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* Main grid */}
      <div className="flex justify-between items-start flex-wrap" style={{ gap: 56, padding: "64px 24px 56px" }}>
        {/* Wordmark block */}
        <div style={{ flexShrink: 0, maxWidth: 360 }}>
          <div className="flex items-center" style={{ gap: 14, marginBottom: 20 }}>
            <img src="/logo-custom.png" alt="Yanegi" width={52} height={52} style={{ objectFit: "contain" }} />
            <span className="brand" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", color: "#efede7" }}>
              Yanegi
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(239,237,231,0.5)", margin: 0, fontWeight: 500 }}>
            made of love & made to love.
            <br />
            a live map of everything happening around you.{" "}
            <span style={{ color: "#c8f021" }}>go outside.</span>
          </p>
        </div>

        {/* Link columns */}
        <div className="flex flex-wrap" style={{ gap: 64 }}>
          {COLS.map((col) => (
            <div key={col.head} className="flex flex-col" style={{ gap: 12 }}>
              <span className="hud-label" style={{ color: "rgba(230,232,234,0.35)", marginBottom: 6 }}>
                {col.head}
              </span>
              {col.links.map((l) => (
                <Link
                  key={l}
                  href="#"
                  className="mono no-underline transition-colors hover:text-[#c8f021]"
                  style={{ fontSize: 12, color: "rgba(230,232,234,0.6)" }}
                >
                  {l}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Node map */}
        <div className="hidden lg:block">
          <span className="hud-label" style={{ color: "rgba(230,232,234,0.35)", display: "block", marginBottom: 14 }}>
            GLOBAL NODE
          </span>
          <div className="hud-label flex" style={{ gap: 16, color: "rgba(230,232,234,0.6)" }}>
            {["NYC", "LDN", "TKY", "DEL", "SYD"].map((c, i) => (
              <span key={c} className="flex items-center" style={{ gap: 6 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: i === 0 ? "#c8f021" : "rgba(230,232,234,0.35)" }} />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Legal row */}
      <div className="flex justify-between items-center flex-wrap" style={{ gap: 12, borderTop: "1px solid rgba(230,232,234,0.14)", padding: "16px 24px" }}>
        <span className="hud-label" style={{ color: "rgba(230,232,234,0.35)" }}>
          © YANEGI 2026–2032. ALL RIGHTS RESERVED.
        </span>
        <div className="flex" style={{ gap: 20 }}>
          <Link href="/privacy" className="hud-label no-underline transition-colors hover:text-[#c8f021]" style={{ color: "rgba(230,232,234,0.35)" }}>
            PRIVACY POLICY
          </Link>
          <Link href="/terms" className="hud-label no-underline transition-colors hover:text-[#c8f021]" style={{ color: "rgba(230,232,234,0.35)" }}>
            TERMS
          </Link>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center" style={{ borderTop: "1px solid rgba(230,232,234,0.14)", height: 36 }}>
        <span className="hud-label flex items-center" style={{ gap: 8, padding: "0 24px", color: "rgba(230,232,234,0.5)", flexShrink: 0, borderRight: "1px solid rgba(230,232,234,0.14)", height: "100%", alignItems: "center", display: "flex" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c8f021" }} />
          CONNECTION SECURE
        </span>
        <div style={{ flex: 1, overflow: "hidden", height: "100%", display: "flex", alignItems: "center", background: "#c8f021" }}>
          <div className="hud-label" style={{ display: "flex", width: "max-content", animation: "footerMarquee 22s linear infinite", color: "#111", fontWeight: 700 }}>
            {Array.from({ length: 2 }).map((_, half) => (
              <span key={half} style={{ display: "flex" }}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} style={{ padding: "0 28px", whiteSpace: "nowrap" }}>
                    GO OUTSIDE ★ TOUCH GRASS ★ MEET PEOPLE
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <span className="hud-label hidden md:flex" style={{ padding: "0 24px", color: "rgba(230,232,234,0.5)", flexShrink: 0, borderLeft: "1px solid rgba(230,232,234,0.14)", height: "100%", alignItems: "center" }}>
          SCN: 0007&nbsp;&nbsp;NODE: YNG_01
        </span>
      </div>
    </footer>
  );
}
