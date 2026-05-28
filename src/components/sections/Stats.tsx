"use client";

import { motion } from "framer-motion";

const STATS = [
  { num: "50K+", label: "Active hangouts" },
  { num: "120+", label: "Cities covered" },
  { num: "2M+",  label: "Connections made" },
  { num: "98%",  label: "Happy attendees" },
];

export default function Stats() {
  return (
    <div
      className="flex justify-center flex-wrap gap-20"
      style={{
        padding: "40px 60px",
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(5,12,24,0.06)",
        borderBottom: "1px solid rgba(5,12,24,0.06)",
      }}
    >
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="text-brand font-black" style={{ fontSize: 42, letterSpacing: "-1.5px" }}>
            {s.num}
          </div>
          <div className="text-void/42 font-medium mt-1" style={{ fontSize: 13 }}>
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
