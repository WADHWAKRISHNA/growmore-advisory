"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { number: 150, suffix: "+", label: "Businesses Served" },
  { number: 99, suffix: "%", label: "Client Satisfaction" },
  { number: null, suffix: "24×7", label: "Support" },
  { number: 5, suffix: "+", label: "Core Services" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-gray-800 py-28"
    >
      {/* Floating Background Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[4px] text-yellow-500"
          >
            Our Story
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
          >
            More Than Compliance.
            <br />
            We Build Long-Term Business Relationships.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="mt-8 leading-9 text-gray-400"
          >
            Grow More Advisory was established with one simple vision —
            to make taxation, accounting and business compliance easy,
            transparent and growth-oriented for every entrepreneur.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            className="mt-6 leading-9 text-gray-400"
          >
            Rather than simply filing returns, we work closely with
            businesses to help them make better financial decisions,
            remain compliant and unlock long-term growth opportunities.
          </motion.p>
        </motion.div>

        {/* RIGHT STATS START */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
        {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.04,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0f0f0f] p-8"
            >
              {/* Hover Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent"
              />

              {/* Animated Number */}
              <motion.h3
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="relative z-10 text-5xl font-black text-yellow-500"
              >
                {stat.number !== null ? (
                  <>
                    {isInView && (
                      <CountUp
                        end={stat.number}
                        duration={2.3}
                      />
                    )}
                    {stat.suffix}
                  </>
                ) : (
                  stat.suffix
                )}
              </motion.h3>

              <p className="relative z-10 mt-3 text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}