"use client";

import { motion } from "framer-motion";

const items = [
  "150+ Businesses Served",
  "GST • Income Tax • ROC",
  "Startup & MSME Advisory",
  "AI Assisted Consulting",
  "99% Client Satisfaction",
  "Business Registration",
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#090909] py-5">

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >

        {[...items, ...items].map((item, index) => (

          <div
            key={index}
            className="mx-10 flex items-center gap-3 whitespace-nowrap"
          >

            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />

            <span className="text-sm font-medium tracking-wide text-gray-300">

              {item}

            </span>

          </div>

        ))}

      </motion.div>

    </section>
  );
}