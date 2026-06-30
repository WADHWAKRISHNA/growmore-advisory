"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Business Registration & Compliance",
  "Taxation & Accounting Solutions",
  "AI Assisted Business Advisory",
  "Startup & Growth Consulting",
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#3a2907_0%,transparent_55%)] opacity-40" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">

            About Us

          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl">

            Helping Businesses

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Build, Comply & Grow

            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">

            Grow More Advisory is committed to delivering practical
            business solutions through taxation, compliance,
            accounting and strategic advisory. Our goal is to simplify
            business operations while helping clients make informed
            financial decisions with confidence.

          </p>

          <div className="mt-10 grid gap-4">
                      {features.map((item) => (

            <motion.div
              key={item}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">

                ✓

              </div>

              <span className="text-gray-300">

                {item}

              </span>

            </motion.div>

          ))}

          </div>

          <div className="mt-12">

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
            >

              Learn More About Us

              <span>→</span>

            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <div className="rounded-[34px] border border-yellow-500/20 bg-white/[0.04] p-8 backdrop-blur-2xl">

            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[3px] text-yellow-400">

              Why Businesses Trust Us

            </span>

            <div className="mt-8 space-y-6">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <h3 className="text-4xl font-black text-yellow-500">

                  150+

                </h3>

                <p className="mt-2 text-gray-400">

                  Businesses supported with registrations, taxation,
                  compliance and advisory solutions.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                  <h4 className="text-3xl font-black text-yellow-500">

                    99%

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Client Satisfaction

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                  <h4 className="text-3xl font-black text-yellow-500">

                    5+

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Professional Services

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                  <h4 className="text-3xl font-black text-yellow-500">

                    AI

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Assisted Advisory

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                  <h4 className="text-3xl font-black text-yellow-500">

                    24×7

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Professional Support

                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Quote */}

            <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">

              <p className="text-lg leading-8 text-gray-300 italic">

                "Our mission is simple—empower businesses with reliable
                compliance, smart financial guidance and modern advisory
                solutions that support long-term growth."

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}