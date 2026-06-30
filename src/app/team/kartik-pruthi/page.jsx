"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function KartikProfile() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[160px]" />

      {/* Hero */}

      <section className="relative py-24">

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[380px_1fr]">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="flex justify-center"
          >

            <div className="rounded-[30px] border border-yellow-500/20 bg-white/[0.03] p-5 backdrop-blur-xl">

              <Image
                src="/kartik.jpg"
                alt="Kartik Pruthi"
                width={340}
                height={420}
                className="rounded-[20px]"
              />

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-yellow-400">

              Partner

            </span>

            <h1 className="mt-8 text-6xl font-black">

              Kartik

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Pruthi

              </span>

            </h1>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "CA Finalist",
                "Business Advisor",
                "Consultant",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>

              ))}

            </div>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400">

              Kartik Pruthi is a Partner at Grow More Advisory,
              contributing to business advisory and consulting
              services. He works closely with clients to understand
              business objectives and provide practical guidance
              that supports informed decision-making and sustainable growth.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Expertise */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[4px] text-sm text-yellow-500">

              Expertise

            </span>

            <h2 className="mt-5 text-5xl font-black">

              Professional Focus

            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {[
              {
                icon: "💼",
                title: "Business Advisory",
                desc: "Helping businesses make practical decisions through professional advisory and planning.",
              },
              {
                icon: "📈",
                title: "Strategic Consulting",
                desc: "Supporting entrepreneurs with business strategy and sustainable growth planning.",
              },
              {
                icon: "🤝",
                title: "Client Relations",
                desc: "Building long-term relationships through trust, transparency and professional support.",
              },
              {
                icon: "📋",
                title: "Compliance Support",
                desc: "Assisting businesses in maintaining smooth and structured compliance processes.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-yellow-500/15 bg-white/[0.03] p-8 backdrop-blur-xl"
              >

                <div className="text-5xl">

                  {item.icon}

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-gray-400">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-4xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-[35px] border border-yellow-500/20 bg-white/[0.03] p-12 text-center backdrop-blur-xl"
          >

            <h2 className="text-4xl font-black">

              Connect with

              <span className="block text-yellow-500">

                Grow More Advisory

              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">

              Looking for professional business advisory or consulting?
              Our team is here to help you move forward with confidence.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="https://wa.me/917452878887"
                target="_blank"
              >

                <button className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105">

                  💬 WhatsApp

                </button>

              </Link>

              <Link
                href="mailto:contact@growmoreadvisory.com"
              >

                <button className="rounded-full border border-yellow-500/30 px-8 py-4 font-semibold transition hover:border-yellow-500 hover:bg-yellow-500/10">

                  ✉️ Email

                </button>

              </Link>

            </div>

            <Link href="/about">

              <button className="mt-8 text-yellow-500 transition hover:translate-x-1">

                ← Back to About

              </button>

            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}