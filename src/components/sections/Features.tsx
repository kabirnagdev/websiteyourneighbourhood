"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/data";

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-brand font-bold uppercase tracking-[2.5px] text-[11px] block mb-3">Features</span>
        <h2 className="font-extrabold text-void" style={{ fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-1.5px" }}>
          Everything you need
          <br />to get out there
        </h2>
      </motion.div>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 2px 16px rgba(5,12,24,0.05)",
              borderRadius: 26,
              padding: "34px 28px",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{
              y: -6,
              background: "rgba(255,255,255,0.75)",
              borderColor: "rgba(60,145,237,0.3)",
              boxShadow: "0 16px 40px rgba(60,145,237,0.12)",
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 15,
                background: "rgba(60,145,237,0.1)",
                border: "1px solid rgba(60,145,237,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 22,
                fontSize: 22,
              }}
            >
              {f.emojiSrc ? (
                <Image src={f.emojiSrc} alt={f.title} width={26} height={26} className="object-contain" />
              ) : (
                f.icon
              )}
            </div>
            <h3 className="font-bold text-void mb-2" style={{ fontSize: 17, letterSpacing: "-0.3px" }}>{f.title}</h3>
            <p className="text-void/50 leading-relaxed" style={{ fontSize: 13.5 }}>{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
