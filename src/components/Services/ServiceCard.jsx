"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/30"
    >

      {/* Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-3xl">

        {service.icon}

      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-white">

        {service.title}

      </h3>

      {/* Description */}

      <p className="mt-5 leading-8 text-gray-400">

        {service.description}

      </p>

      {/* Bottom */}

      <div className="mt-10 flex items-center justify-between">

        <span className="text-sm uppercase tracking-[2px] text-yellow-500">

          Professional Service

        </span>

        <Link href={service.link}>

          <motion.div
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 font-semibold text-yellow-400"
          >

            Learn More

            <span>→</span>

          </motion.div>

        </Link>

      </div>

      {/* Bottom Line */}

      <div className="mt-8 h-[2px] overflow-hidden rounded-full bg-white/10">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.1,
          }}
          className="h-full rounded-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"
        />

      </div>

    </motion.div>
  );
}