"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";

export default function Categories() {
  return (
    <section id="explore" style={{ padding: "80px 60px 100px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-brand font-bold uppercase tracking-[2.5px] text-[11px] block mb-3">
          Explore
        </span>
        <h2 className="font-extrabold text-void" style={{ fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-1.5px" }}>
          Find your kind of fun
        </h2>
        <p className="text-void/48 mt-4 mx-auto leading-relaxed" style={{ fontSize: 16, maxWidth: 500 }}>
          From casual café catchups to weekend adventures — there&apos;s something for everyone.
        </p>
      </motion.div>

      <div
        className="grid gap-3.5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
      >
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="flex flex-col items-center gap-3 text-center rounded-[22px] cursor-pointer transition-all"
            style={{
              padding: "28px 16px 22px",
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 2px 16px rgba(5,12,24,0.05)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            whileHover={{
              y: -5,
              background: "rgba(60,145,237,0.1)",
              borderColor: "rgba(60,145,237,0.4)",
              boxShadow: "0 12px 32px rgba(60,145,237,0.15)",
            }}
          >
            <Image src={cat.src} alt={cat.name} width={44} height={44} className="object-contain" />
            <span className="text-void/75 font-semibold" style={{ fontSize: 12 }}>
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
