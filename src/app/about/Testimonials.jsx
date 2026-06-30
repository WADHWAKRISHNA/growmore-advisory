"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonials from "./testimonialsData";

function getRandomTestimonials() {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

export default function Testimonials() {
  const [reviews, setReviews] = useState(getRandomTestimonials());

  useEffect(() => {
    const interval = setInterval(() => {
      setReviews(getRandomTestimonials());
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[160px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-sm text-yellow-500">
            Client Testimonials
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            Trusted By
            <span className="text-yellow-500">
              {" "}Businesses Across India
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            We believe long-term relationships are built through trust,
            transparency and consistent results.
          </p>

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={reviews.map((r) => r.name).join("")}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="mt-20 grid gap-8 lg:grid-cols-3"
          >
                        {reviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-yellow-500/15 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-yellow-500/5" />

                {/* Stars */}

                <div className="relative z-10 flex text-yellow-400 text-xl">
                  {"★★★★★"}
                </div>

                {/* Review */}

                <p className="relative z-10 mt-6 text-gray-300 leading-8">
                  "{review.review}"
                </p>

                {/* Divider */}

                <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-yellow-500/40 via-transparent to-transparent" />

                {/* Client */}

                <div className="relative z-10 mt-6 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/15 text-xl font-bold text-yellow-400">
                    {review.name.charAt(0)}
                  </div>

                  <div>

                    <h4 className="text-lg font-semibold">
                      {review.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {review.company}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}