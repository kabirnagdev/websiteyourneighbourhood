"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="community" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-brand font-bold uppercase tracking-[2.5px] text-[11px] block mb-3">Community</span>
        <h2 className="font-extrabold text-void" style={{ fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-1.5px" }}>
          People are already out there
        </h2>
        <p className="text-void/48 mt-4 mx-auto leading-relaxed" style={{ fontSize: 16, maxWidth: 440 }}>
          Real stories from the Yanegi community.
        </p>
      </motion.div>

      <div className="grid gap-5 mt-14" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 2px 16px rgba(5,12,24,0.05)",
              borderRadius: 24,
              padding: 28,
              textAlign: "left",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 14px 36px rgba(60,145,237,0.12)",
              borderColor: "rgba(60,145,237,0.3)",
            }}
          >
            <p className="text-void/68 leading-relaxed mb-5" style={{ fontSize: 14.5 }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center font-bold text-white flex-shrink-0"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3C91ED, #294E90)",
                  fontSize: 13,
                }}
              >
                {t.initial}
              </div>
              <div>
                <div className="font-bold text-void" style={{ fontSize: 13.5 }}>{t.name}</div>
                <div style={{ fontSize: 11.5, color: "rgba(5,12,24,0.38)" }}>
                  {t.handle} · {t.city}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
