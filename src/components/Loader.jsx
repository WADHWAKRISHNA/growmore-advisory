"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[420px] w-[420px] rounded-full bg-yellow-500 blur-[140px]"
      />

      <div className="relative flex flex-col items-center">

        {/* Logo */}

        <motion.div
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          <Image
            src="/logo.png"
            alt="Grow More Advisory"
            width={120}
            height={120}
            priority
            className="drop-shadow-[0_0_35px_rgba(234,179,8,0.6)]"
          />
        </motion.div>

        {/* Ring */}

        <div className="relative mt-10 h-24 w-24">
                      <motion.svg
            className="absolute inset-0 -rotate-90"
            width="96"
            height="96"
            viewBox="0 0 96 96"
          >
            {/* Background Ring */}

            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="4"
              fill="none"
            />

            {/* Animated Ring */}

            <motion.circle
              cx="48"
              cy="48"
              r="42"
              stroke="#eab308"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="264"
              animate={{
                strokeDashoffset: [264, 0],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
              }}
            />

          </motion.svg>

          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            className="absolute inset-0 flex items-center justify-center text-lg font-bold text-yellow-400"
          >
            Loading
          </motion.span>

        </div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-8 text-2xl font-bold tracking-wide text-white"
        >
          Grow More Advisory
        </motion.h2>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-3 text-sm tracking-[4px] uppercase text-yellow-400"
        >
          Preparing Your Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}