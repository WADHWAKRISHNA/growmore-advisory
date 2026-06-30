"use client";

import { motion } from "framer-motion";

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
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const cards = [
  {
    icon: "🚀",
    title: "Mission",
    text: "To simplify taxation, accounting and compliance so businesses can focus on innovation, growth and long-term success without unnecessary complexity.",
  },
  {
    icon: "👁️",
    title: "Vision",
    text: "To become one of India's most trusted advisory firms by building lasting relationships through integrity, expertise and measurable business value.",
  },
  {
    icon: "⭐",
    title: "Core Values",
    list: [
      "Transparency in every interaction",
      "Professional excellence",
      "Client-first approach",
      "Ethical financial practices",
      "Long-term partnerships",
    ],
  },
];

export default function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-28 overflow-hidden"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-[4px] text-yellow-500">
            What Drives Us
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Mission, Vision &
            <span className="text-yellow-500"> Core Values</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Every decision we make is driven by trust, transparency,
            professionalism and a commitment to helping businesses grow
            with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -14,
                rotateX: 6,
                rotateY: 4,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="group rounded-3xl border border-yellow-500/15 bg-white/[0.03] p-10 backdrop-blur-xl hover:border-yellow-500/40 hover:shadow-[0_0_40px_rgba(234,179,8,.15)]"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl"
              >
                {card.icon}
              </motion.div>

              <h3 className="mt-8 text-3xl font-bold">
                {card.title}
              </h3>

              {card.text ? (
                <p className="mt-6 leading-8 text-gray-400">
                  {card.text}
                </p>
              ) : (
                <ul className="mt-6 space-y-4 text-gray-400">
                  {card.list.map((value) => (
                    <li key={value}>✓ {value}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}