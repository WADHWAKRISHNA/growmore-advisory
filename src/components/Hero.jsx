"use client";

import { motion } from "framer-motion";

export default function Hero({ onConsultation }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center px-6">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[150px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2b2206_0%,transparent_55%)] opacity-60" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
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
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight tracking-tight"
          >
            Grow Your Business.
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent"> Simplify Your Compliance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-gray-400 text-lg leading-8"
          >
            Empowering startups, professionals and businesses with
            GST, Income Tax, ROC Compliance, Accounting &
            Strategic Business Advisory — all under one roof.
          </motion.p>
           
          <div className="flex flex-wrap gap-3 mt-8 text-sm">

           <span className="px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10">
           ⭐ Trusted by Businesses
           </span>

           <span className="px-4 py-2 rounded-full border border-white/10">
            GST • Income Tax • ROC
          </span>

          </div>
          <div className="flex gap-4 mt-10 flex-wrap">
            <button
              onClick={onConsultation}
              className="bg-yellow-500 text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Book a Consultation
            </button>

            <a
              href="#services"
              className="border border-gray-700 px-7 py-4 rounded-full hover:border-yellow-500 transition text-white"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-3xl border border-yellow-500/20 bg-[#111] p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Why Businesses Choose Us
            </h3>

            <div className="space-y-5 text-gray-300">
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