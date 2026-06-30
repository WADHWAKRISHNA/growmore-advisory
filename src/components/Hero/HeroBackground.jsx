"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Main Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-60 -top-60 h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-[180px]"
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[180px]"
      />

      {/* Top Gradient */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d2c08_0%,transparent_60%)] opacity-70" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.03]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* Noise Overlay */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_60%,#000_100%)]" />
    </>
  );
}