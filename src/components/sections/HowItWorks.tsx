"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE_EVENTS } from "@/lib/data";

const STEPS = [
  { n: 1, title: "Discover nearby hangouts",    desc: "Browse the feed or open the map to see what's happening around you — filtered by vibe, distance, or category." },
  { n: 2, title: "Join or create your own",     desc: "Tap to join events instantly or create your own hangout in under a minute. Set the details, invite people, go." },
  { n: 3, title: "Meet people, make memories",  desc: "Show up, connect with real people, and build your social circle beyond the screen." },
];

const CHIPS = ["All", "Sports", "Music", "Social"];

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-brand font-bold uppercase tracking-[2.5px] text-[11px] block mb-3">How it works</span>
        <h2 className="font-extrabold text-void" style={{ fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-1.5px" }}>
          From scroll to hangout
          <br />in 3 steps
        </h2>
      </motion.div>

      <div className="grid gap-16 mt-14" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        {/* Steps */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-5 items-start">
              <div
                className="flex items-center justify-center font-extrabold flex-shrink-0"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: "rgba(60,145,237,0.1)",
                  border: "1px solid rgba(60,145,237,0.25)",
                  fontSize: 13,
                  color: "#3C91ED",
                }}
              >
                {s.n}
              </div>
              <div>
                <h3 className="font-bold text-void mb-1.5" style={{ fontSize: 17 }}>{s.title}</h3>
                <p className="text-void/50 leading-relaxed" style={{ fontSize: 14 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 340,
              height: 340,
              background: "radial-gradient(circle, rgba(60,145,237,0.17) 0%, transparent 68%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <div
            style={{
              width: 256,
              height: 510,
              background: "linear-gradient(170deg, #294E90 0%, #050C18 100%)",
              borderRadius: 42,
              border: "2px solid rgba(255,255,255,0.14)",
              boxShadow: "0 32px 80px rgba(5,12,24,0.22), 0 0 0 1px rgba(255,255,255,0.06)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div style={{ width: 76, height: 20, background: "#050C18", borderRadius: "0 0 14px 14px", alignSelf: "center", marginTop: 10 }} />
            <div style={{ padding: "14px 13px", flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: "#fff" }}>Good evening, Alex 👋</div>
              <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.38)", marginTop: -4 }}>Hangouts near you</div>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 11, padding: "7px 11px", fontSize: 9.5, color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
                🔍  Search hangouts...
              </div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {CHIPS.map((c) => (
                  <span
                    key={c}
                    style={{
                      padding: "3px 9px",
                      borderRadius: 100,
                      fontSize: 8.5,
                      fontWeight: 600,
                      background: c === "All" ? "#3C91ED" : "rgba(60,145,237,0.18)",
                      color: c === "All" ? "#fff" : "#7EBDE9",
                      border: `1px solid ${c === "All" ? "#3C91ED" : "rgba(60,145,237,0.22)"}`,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              {PHONE_EVENTS.map((ev) => (
                <div
                  key={ev.id}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "10px 11px",
                    border: "1px solid rgba(255,255,255,0.09)",
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                  }}
                >
                  <Image src={ev.emoji} alt={ev.category.name} width={28} height={28} className="object-contain flex-shrink-0" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{ev.title}</div>
                    <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.4)" }}>{ev.time} · {ev.location}</div>
                  </div>
                  <button
                    style={{
                      background: "#3C91ED",
                      border: "none",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: 100,
                      fontSize: 8,
                      fontWeight: 700,
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
