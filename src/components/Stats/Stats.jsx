"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

const stats = [
  {
    number: 150,
    suffix: "+",
    title: "Businesses Served",
    description: "Helping startups, MSMEs and growing enterprises across multiple industries.",
    icon: "🏢",
  },
  {
    number: 99,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Focused on reliable service, transparent advice and long-term relationships.",
    icon: "⭐",
  },
  {
    number: 24,
    suffix: "×7",
    title: "Support",
    description: "Quick assistance whenever your business needs professional guidance.",
    icon: "⚡",
  },
  {
    number: 5,
    suffix: "+",
    title: "Core Services",
    description: "Taxation, Compliance, Registration, Accounting and Advisory.",
    icon: "📊",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b2a06_0%,transparent_70%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">

            Our Impact

          </span>

          <h2 className="mt-7 text-4xl font-black md:text-5xl">

            Numbers That Reflect

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Trust & Performance

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">

            Every business we serve strengthens our commitment to delivering
            practical advisory, compliance excellence and sustainable growth.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                  {stats.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: index * .1,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition-all duration-300 hover:border-yellow-500/30 hover:bg-white/[0.06]"
          >

            {/* Icon */}

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-3xl">

              {item.icon}

            </div>

            {/* Counter */}

            <h3 className="mt-8 text-5xl font-black text-yellow-500">

              <Counter
                end={item.number}
                suffix={item.suffix}
              />

            </h3>

            <h4 className="mt-4 text-xl font-bold text-white">

              {item.title}

            </h4>

            <p className="mt-4 leading-7 text-gray-400">

              {item.description}

            </p>

            {/* Progress Line */}

            <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: index * .15,
                }}
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300"
              />

            </div>

          </motion.div>

        ))}
                </div>

        {/* Bottom Trust Strip */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20 rounded-[30px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/[0.03] to-yellow-500/10 p-8 backdrop-blur-xl"
        >

          <div className="grid gap-8 text-center md:grid-cols-3">

            <div>

              <h3 className="text-xl font-bold text-white">
                Trusted Expertise
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Professional guidance backed by practical business
                experience and modern advisory solutions.
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                Growth Focused
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Beyond compliance—we help businesses build systems
                that support long-term growth and efficiency.
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                One Trusted Partner
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                From registrations and taxation to accounting,
                compliance and strategic advisory—all under one roof.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}