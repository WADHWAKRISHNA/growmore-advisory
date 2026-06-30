"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Krishna Wadhwa",
    role: "Founder & CEO",
    subtitle: "CA Finalist • Advisory & AI Strategy",
    image: "/leadership/krishna.jpg",
    link: "/team/krishna-wadhwa",
  },
  {
    name: "Kartik",
    role: "Senior Associate",
    subtitle: "CA Finalist • Advisory",
    image: "/leadership/kartik.jpg",
    link: "/team/kartik-pruthi",
  },
  {
    name: "Divyam",
    role: "Senior Associate",
    subtitle: "CMA Finalist",
    image: "/leadership/divyam.jpg",
    link: "/team/divyam-takkar",
  },
];

export default function Leadership() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b2b08_0%,transparent_65%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">
            Our Team
          </span>

          <h2 className="mt-7 text-4xl font-black md:text-5xl">

            Meet The Experts Behind

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Grow More Advisory
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A dedicated team helping businesses grow through
            taxation, compliance, accounting and strategic advisory.
          </p>

        </motion.div>

        {/* Team Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {leaders.map((leader, index) => (

            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/30"
            >

              <div className="h-64 overflow-hidden">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {leader.name}
                </h3>

                <p className="mt-2 text-yellow-400">
                  {leader.role}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {leader.subtitle}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                                    Helping businesses with practical taxation,
                  compliance and financial advisory solutions
                  focused on long-term growth.

                </p>

                <Link
                  href={leader.link}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-400 transition-all duration-300 hover:gap-3"
                >
                  Learn More
                  <span>→</span>
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}