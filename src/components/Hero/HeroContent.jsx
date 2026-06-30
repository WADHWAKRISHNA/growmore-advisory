"use client";

import { motion } from "framer-motion";

export default function HeroContent({ onConsultation }) {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400 backdrop-blur-xl"
      >
        ✦ Trusted Business Advisory Partner
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 text-5xl font-black leading-tight md:text-6xl xl:text-7xl"
      >
        Helping Businesses

        <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          Grow Smarter.
        </span>

        Stay Compliant.

      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .3,
        }}
        className="mt-8 text-lg leading-9 text-gray-400"
      >
        We help startups, entrepreneurs and growing businesses manage
        taxation, compliance, registrations, accounting and strategic
        advisory under one roof—so you can focus on scaling with
        confidence.
      </motion.p>

      {/* Services */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .45 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {[
          "GST",
          "Income Tax",
          "ROC",
          "Accounting",
          "Business Registration",
          "Startup Advisory",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-500 hover:bg-yellow-500/10"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .6,
        }}
        className="mt-12 flex flex-wrap gap-5"
      >

        <button
          onClick={onConsultation}
          className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-[0_0_35px_rgba(234,179,8,.35)] transition duration-300 hover:-translate-y-1 hover:scale-105"
        >
          Book Consultation Now
        </button>

        <a
          href="#services"
          className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-yellow-500 hover:bg-yellow-500/10"
        >
          Explore Services
        </a>

      </motion.div>

      {/* Trust Strip */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8 }}
        className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
      >

        <div>

          <h3 className="text-3xl font-black text-yellow-500">
            150+
          </h3>

          <p className="text-sm text-gray-500">
            Businesses Served
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-black text-yellow-500">
            99%
          </h3>

          <p className="text-sm text-gray-500">
            Client Satisfaction
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-black text-yellow-500">
            24×7
          </h3>

          <p className="text-sm text-gray-500">
            Expert Support
          </p>

        </div>

      </motion.div>

    </div>
  );
}