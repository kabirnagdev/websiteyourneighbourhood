"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DOTS = [
  { top: "30%", left: "20%", delay: 0,    color: "#3C91ED" },
  { top: "50%", left: "40%", delay: 0.5,  color: "#7EBDE9" },
  { top: "25%", left: "60%", delay: 1.0,  color: "#3C91ED" },
  { top: "65%", left: "55%", delay: 1.5,  color: "rgba(255,255,255,0.8)" },
  { top: "40%", left: "75%", delay: 0.8,  color: "#3C91ED" },
  { top: "70%", left: "25%", delay: 1.2,  color: "#7EBDE9" },
  { top: "55%", left: "82%", delay: 2.0,  color: "#3C91ED" },
];

export default function MapPreview() {
  return (
    <div id="map" style={{ padding: "0 60px 100px" }}>
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-brand font-bold uppercase tracking-[2.5px] text-[11px] block mb-3">Live Map</span>
        <h2 className="font-extrabold text-void" style={{ fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-1.5px" }}>
          See what&apos;s happening near you
        </h2>
      </motion.div>

      <motion.div
        className="relative overflow-hidden"
        style={{
          borderRadius: 32,
          border: "1px solid rgba(5,12,24,0.08)",
          height: 420,
          background: "linear-gradient(135deg, #0d1b3e 0%, #0a1628 55%, #050C18 100%)",
          boxShadow: "0 8px 40px rgba(5,12,24,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        {/* Grid lines */}
        {[25, 50, 75].map((p) => (
          <div key={p} className="absolute top-0 bottom-0" style={{ left: `${p}%`, width: 1, background: "rgba(255,255,255,0.025)" }} />
        ))}
        {[33, 66].map((p) => (
          <div key={p} className="absolute left-0 right-0" style={{ top: `${p}%`, height: 1, background: "rgba(255,255,255,0.025)" }} />
        ))}

        {/* Animated dots */}
        {DOTS.map((d, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 10,
              height: 10,
              top: d.top,
              left: d.left,
              background: d.color,
              boxShadow: `0 0 0 4px ${d.color}33`,
            }}
            animate={{ scale: [1, 1.35, 1] }}
            transition={{ duration: 3, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Popup card */}
        <div
          style={{
            background: "rgba(5,12,24,0.88)",
            border: "1px solid rgba(60,145,237,0.28)",
            borderRadius: 18,
            padding: "16px 20px",
            backdropFilter: "blur(14px)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: 220,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="flex items-center gap-2.5">
            <Image src="/emojis/soccer-ball_26bd.png" alt="Soccer" width={30} height={30} className="object-contain flex-shrink-0" />
            <div>
              <div className="font-bold text-white" style={{ fontSize: 13.5 }}>Friday Soccer Kickoff</div>
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.42)" }}>Riverside Park · 6:00 PM</div>
            </div>
          </div>
          <div className="text-right font-semibold" style={{ fontSize: 11, color: "#7EBDE9" }}>0.8 km away</div>
        </div>
      </motion.div>
    </div>
  );
}
