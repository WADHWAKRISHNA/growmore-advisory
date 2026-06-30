"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Experienced Advisory",
    desc: "Professional guidance focused on practical business solutions.",
  },
  {
    title: "Transparent Process",
    desc: "Clear communication with no hidden surprises.",
  },
  {
    title: "AI Powered Efficiency",
    desc: "Modern tools combined with professional expertise.",
  },
  {
    title: "Quick Turnaround",
    desc: "Timely execution without compromising quality.",
  },
  {
    title: "Business First Approach",
    desc: "Solutions designed around your business goals.",
  },
  {
    title: "Long-Term Partnership",
    desc: "Supporting businesses beyond compliance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3d2b07_0%,transparent_60%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">

            Why Choose Us

          </span>

          <h2 className="mt-7 text-4xl font-black md:text-5xl">

            More Than Compliance.

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              A Growth Partner.

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">

            We combine compliance expertise, strategic advisory and
            technology to help businesses operate with confidence.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
                    {/* Left */}

          <div className="space-y-5">

            {reasons.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 8,
                }}
                className="group flex items-start gap-5 rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-yellow-500/30 hover:bg-white/[0.05]"
              >

                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10 text-xl text-yellow-500 transition group-hover:bg-yellow-500 group-hover:text-black">

                  ✓

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">

                    {item.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="rounded-[34px] border border-yellow-500/20 bg-white/[0.04] p-8 backdrop-blur-2xl">

              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[3px] text-yellow-400">

                Our Philosophy

              </span>

              <h3 className="mt-8 text-3xl font-black text-white">

                We Don't Just Complete Compliance.

                <span className="mt-2 block text-yellow-500">

                  We Help Businesses Grow.

                </span>

              </h3>

              <p className="mt-6 leading-8 text-gray-400">

                Every registration, tax filing and compliance activity
                should contribute towards a stronger business—not just
                fulfill a legal requirement. That's the approach we
                follow with every client.

              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

                  <h4 className="text-3xl font-black text-yellow-500">

                    150+

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Businesses Served

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

                  <h4 className="text-3xl font-black text-yellow-500">

                    99%

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Client Satisfaction

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

                  <h4 className="text-3xl font-black text-yellow-500">

                    AI

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Modern Advisory

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

                  <h4 className="text-3xl font-black text-yellow-500">

                    24×7

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Professional Support

                  </p>

                </div>

              </div>

              {/* Divider */}

              <div className="my-10 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

              {/* Quote */}

              <blockquote className="text-lg italic leading-8 text-gray-300">

                "Our objective isn't just to manage compliance.
                We aim to become a long-term strategic partner that
                helps businesses make smarter financial and operational
                decisions."

              </blockquote>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}