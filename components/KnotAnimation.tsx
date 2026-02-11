"use client";
import { motion } from "framer-motion";

export default function KnotAnimation() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 2 }}
      className="text-center text-6xl"
    >
      🧵🤝💍
    </motion.div>
  );
}
