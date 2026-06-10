import Navbar from "@/components/layout/Navbar";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yanegi.app&hl=en_IN";

export default function InstallPage() {
  return (
    <>
      <Navbar />
      <main
        className="blueprint"
        style={{
          minHeight: "100vh",
          background: "#e6e8ea",
          display: "flex",
          alignItems: "center",
          paddingTop: 56,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background image, framed as evidence */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            top: "12%",
            right: "5%",
            bottom: "12%",
            width: "44%",
            border: "1px solid #0a0a0a",
            backgroundImage: "url('/yanegi-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "60% 20%",
          }}
        >
          <span
            className="hud-label"
            style={{ position: "absolute", bottom: -1, left: -1, background: "#0a0a0a", color: "#e6e8ea", padding: "5px 10px" }}
          >
            FIG_01 — THE APP IN THE WILD
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 560, margin: "0 auto 0 6%", padding: "80px 24px" }}>
          <div className="hud-label" style={{ color: "#2b38ff", marginBottom: 18 }}>
            [ DEPLOY — ANDROID BUILD ]
          </div>
          <h1
            style={{
              fontSize: "clamp(34px, 4.5vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              textTransform: "uppercase",
              color: "#0a0a0a",
              marginBottom: 22,
            }}
          >
            Download
            <br />
            Yanegi<span style={{ color: "#2b38ff" }}>_</span>
          </h1>
          <p
            className="mono"
            style={{ fontSize: 13, color: "rgba(10,10,10,0.65)", lineHeight: 1.8, marginBottom: 40, maxWidth: 400 }}
          >
            {">"} Find real hangouts happening near you — sports, music, food,
            and more. Create your own event or join one in seconds. Free to
            download.
          </p>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              style={{ height: 64, width: "auto" }}
            />
          </a>

          <div className="hud-label" style={{ marginTop: 28, opacity: 0.5 }}>
            VERSION: LATEST&nbsp;&nbsp;//&nbsp;&nbsp;SIZE: LIGHT&nbsp;&nbsp;//&nbsp;&nbsp;COST: FREE
          </div>
        </div>
      </main>
    </>
  );
}
