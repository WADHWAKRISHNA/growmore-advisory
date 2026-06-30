"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Floating Glow 1 */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-0 h-[520px] w-[520px] rounded-full bg-yellow-500/10 blur-[150px]"
      />

      {/* Floating Glow 2 */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-yellow-400"
        >
          About Grow More Advisory
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-8 text-5xl font-black leading-tight md:text-7xl"
        >
          Building Businesses.
          <br />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent"
          >
            Creating Trust.
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="mt-10 max-w-3xl text-xl leading-9 text-gray-400"
        >
          Grow More Advisory is committed to helping businesses,
          entrepreneurs and startups simplify taxation,
          compliance and financial management through
          reliable advisory services and long-term partnerships.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 12, 0],
          }}
          transition={{
            delay: 1.5,
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-24 flex justify-center"
        >
          <div className="flex h-12 w-7 justify-center rounded-full border border-yellow-500/40">
            <motion.div
              animate={{ y: [4, 20, 4] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="mt-2 h-2 w-2 rounded-full bg-yellow-400"
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
}