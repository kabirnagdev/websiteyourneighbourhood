"use client";

import { motion } from "framer-motion";

const EMOJIS = [
  { src: "/emojis/slot-machine_1f3b0.png",               w: 52, style: { top: "14%", left: "7%"   }, dur: 6.8, delay: 0,    ty: -14, r0: -4, r1: 2  },
  { src: "/emojis/video-game_1f3ae.png",                 w: 48, style: { top: "56%", left: "4%"   }, dur: 5.9, delay: 0.9,  ty: -10, r0: 2,  r1: -3 },
  { src: "/emojis/snow-capped-mountain_1f3d4-fe0f.png",  w: 42, style: { top: "12%", left: "54%"  }, dur: 7.2, delay: 0.4,  ty: -8,  r0: -2, r1: 4  },
  { src: "/emojis/auto-rickshaw_1f6fa.png",              w: 52, style: { top: "28%", left: "68%"  }, dur: 6.3, delay: 1.2,  ty: -14, r0: 0,  r1: 3  },
  { src: "/emojis/studio-microphone_1f399-fe0f.png",     w: 44, style: { top: "10%", left: "82%"  }, dur: 5.7, delay: 0.6,  ty: -12, r0: -3, r1: 2  },
  { src: "/emojis/parachute_1fa82.png",                  w: 42, style: { top: "18%", left: "93%"  }, dur: 6.5, delay: 1.5,  ty: -8,  r0: 4,  r1: -2 },
  { src: "/emojis/carousel-horse_1f3a0.png",             w: 50, style: { top: "48%", left: "16%"  }, dur: 6.1, delay: 0.3,  ty: -13, r0: -2, r1: 4  },
  { src: "/emojis/performing-arts_1f3ad.png",            w: 58, style: { top: "62%", left: "80%"  }, dur: 5.8, delay: 0.2,  ty: -14, r0: 3,  r1: -2 },
  { src: "/emojis/racing-car_1f3ce-fe0f.png",            w: 48, style: { top: "50%", left: "90%"  }, dur: 6.6, delay: 1.1,  ty: -10, r0: -4, r1: 2  },
  { src: "/emojis/camping_1f3d5-fe0f.png",               w: 38, style: { top: "70%", left: "28%"  }, dur: 7.0, delay: 1.8,  ty: -8,  r0: 2,  r1: -3 },
  { src: "/emojis/motor-scooter_1f6f5.png",              w: 46, style: { top: "72%", left: "65%"  }, dur: 6.4, delay: 0.7,  ty: -12, r0: -1, r1: 3  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center"
      style={{
        minHeight: "100vh",
        paddingTop: 62,
        background: "radial-gradient(ellipse 780px 600px at 62% 35%, rgba(110,168,230,0.38) 0%, rgba(150,195,242,0.18) 48%, transparent 68%), #EEF1F6",
      }}
    >
      {/* Floating emojis */}
      {EMOJIS.map((e, i) => (
        <motion.img
          key={i}
          src={e.src}
          alt=""
          draggable={false}
          className="absolute pointer-events-none select-none"
          style={{ width: e.w, height: e.w, objectFit: "contain", filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.10))", ...e.style }}
          animate={{ y: [0, e.ty, 0], rotate: [e.r0, e.r1, e.r0] }}
          transition={{ duration: e.dur, delay: e.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Staggered headline — centred in full viewport */}
      <motion.div
        className="relative z-10"
        style={{ width: "100%", maxWidth: 1100 }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div style={{ textAlign: "left", paddingLeft: "10%" }}>
          <span style={{ display: "block", fontFamily: "'Leckerli One', cursive", fontSize: "clamp(28px,3.2vw,42px)", lineHeight: 1.25, color: "#111" }}>
            Live a life,
          </span>
          <span style={{ display: "block", fontFamily: "'Poppins', sans-serif", fontSize: "clamp(44px,5.8vw,72px)", fontWeight: 700, letterSpacing: "-2.5px", lineHeight: 1.0, color: "#111" }}>
            You will remember
          </span>
        </div>

        <div style={{ textAlign: "right", paddingRight: "10%", marginTop: "clamp(20px,3vw,40px)" }}>
          <span style={{ display: "block", fontFamily: "'Leckerli One', cursive", fontSize: "clamp(28px,3.2vw,42px)", lineHeight: 1.25, color: "#111" }}>
            Meet the People,
          </span>
          <span style={{ display: "block", fontFamily: "'Poppins', sans-serif", fontSize: "clamp(44px,5.8vw,72px)", fontWeight: 700, letterSpacing: "-2.5px", lineHeight: 1.0, color: "#111" }}>
            You will remember
          </span>
        </div>
      </motion.div>

      {/* Subtle scroll hint */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 24, height: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
        >
          <span style={{ display: "block", width: 1.5, height: 18, background: "rgba(17,17,17,0.25)", borderRadius: 2 }} />
          <span style={{ display: "block", width: 6, height: 6, borderRight: "1.5px solid rgba(17,17,17,0.25)", borderBottom: "1.5px solid rgba(17,17,17,0.25)", transform: "rotate(45deg)", marginTop: -6 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
