"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-6"
          >
            Trusted Business Advisory
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            Helping Businesses
            <span className="text-yellow-500"> Grow Smarter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-8 text-gray-400 text-lg leading-8"
          >
            GST, Income Tax, Accounting, Business Registration,
            ROC Compliance and Business Advisory —
            everything your business needs under one roof.
          </motion.p>

          <div className="flex gap-4 mt-10 flex-wrap">

            <a
              href="https://wa.me/917452878887"
              target="_blank"
              className="bg-yellow-500 text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Book a Consultation
            </a>

            <a
              href="#services"
              className="border border-gray-700 px-7 py-4 rounded-full hover:border-yellow-500 transition"
            >
              Explore Services
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
        >

          <div className="rounded-3xl border border-yellow-500/20 bg-[#111] p-10 shadow-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Why Businesses Choose Us
            </h3>

            <div className="space-y-5">

              <div>✔ Business Registration</div>
              <div>✔ GST Compliance</div>
              <div>✔ Income Tax Advisory</div>
              <div>✔ Accounting & Bookkeeping</div>
              <div>✔ ROC Compliance</div>
              <div>✔ Business Growth Support</div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}