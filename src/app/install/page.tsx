import Navbar from "@/components/layout/Navbar";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yanegi.app&hl=en_IN";

export default function InstallPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/yanegi-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "60% 20%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          paddingTop: 62,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Left fade so text stays readable without darkening the image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "linear-gradient(to right, rgba(220,232,248,0.92) 0%, rgba(220,232,248,0.7) 35%, rgba(220,232,248,0.1) 55%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 560,
            margin: "0 auto 0 8%",
            padding: "80px 0",
          }}
        >
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              lineHeight: 1.15,
              color: "#111",
              marginBottom: 20,
            }}
          >
            Download Yanegi<br />for Android
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: "rgba(17,17,17,0.7)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 380,
            }}
          >
            Find real hangouts happening near you — sports, music, food, and more. Create your own event or join one in seconds. Free to download.
          </p>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              style={{ height: 68, width: "auto" }}
            />
          </a>
        </div>
      </main>
    </>
  );
}
