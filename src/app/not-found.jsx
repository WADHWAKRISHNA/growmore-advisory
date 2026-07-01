"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  {
    title: "OOPS... YOU CAUGHT US!",
    text: "I think the link you clicked was broken... just like she broke your heart. 💔",
  },
  {
    title: "WAIT... DON'T LEAVE!",
    text: 'Our developers are fixing this page faster than your friends reply "I\'m on my way." 😅',
  },
  {
    title: "WE'LL BE RIGHT BACK!",
    text: "This page is under construction. Unlike your ex, we'll actually come back. 🚀",
  },
];

const quotes = [
  "☕ Our coffee is brewing...",
  "💻 Developers are coding at 2 AM.",
  "📊 Accountants approved the budget.",
  "🚀 Something awesome is coming soon.",
  "✨ Great things take a little time.",
];

export default function NotFound() {
  const [current, setCurrent] = useState(0);
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 7000);

    const quoteInterval = setInterval(() => {
      setQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => {
      clearInterval(msgInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b2b08_0%,transparent_65%)] opacity-40" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/10"
      />

      <div className="relative z-10 mt-40 max-w-3xl text-center">

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className="text-5xl font-black text-white md:text-7xl">
              {messages[current].title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-300">
              {messages[current].text}
            </p>

          </motion.div>

        </AnimatePresence>

        <p className="mt-10 text-2xl font-bold text-white">

          🚧 This page is currently

          <span className="block text-yellow-400">

            UNDER CONSTRUCTION

          </span>

        </p>
                {/* Premium Info Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "☕ Coffee Level",
              text: "Enough caffeine has been consumed to finish this page soon.",
            },
            {
              title: "💻 Developer Status",
              text: "Currently converting bugs into features... almost.",
            },
            {
              title: "📊 Accountant Status",
              text: "Everything is perfectly balanced. As it should be.",
            },
          ].map((card, index) => (

            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-yellow-500/20 bg-white/[0.04] p-7 backdrop-blur-xl"
            >

              <h3 className="text-xl font-bold text-yellow-400">

                {card.title}

              </h3>

              <p className="mt-4 leading-8 text-gray-400">

                {card.text}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Rotating Quote */}

        <AnimatePresence mode="wait">

          <motion.div
            key={quote}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mx-auto mt-12 max-w-3xl rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-8 py-6 backdrop-blur-xl"
          >

            <p className="text-lg font-medium text-yellow-300">

              {quotes[quote]}

            </p>

          </motion.div>

        </AnimatePresence>
                {/* Action Buttons */}

        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 px-10 py-4 font-bold text-black shadow-[0_0_40px_rgba(234,179,8,0.35)] transition-all duration-300"
            >
              Back To Home →
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="rounded-2xl border border-yellow-500/30 bg-white/5 px-10 py-4 font-semibold text-yellow-400 backdrop-blur-xl transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Contact Us
            </motion.button>
          </Link>

        </div>

        <p className="mt-10 text-sm tracking-wide text-gray-500">
          © {new Date().getFullYear()} Grow More Advisory • Built with ☕, patience & a few debugging sessions.
        </p>

      </div>

    </main>
  );
}