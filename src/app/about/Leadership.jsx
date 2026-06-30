"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const team = [
  {
    name: "Krishna Wadhwa",
    role: "Founder & Designated Partner",
    image: "/krishna.jpg",
    desc: "Specializing in GST, Income Tax, ROC compliances and strategic business advisory.",
    link: "/team/krishna-wadhwa",
  },
  {
    name: "Kartik Pruthi",
    role: "Designated Partner",
    image: "/kartik.jpg",
    desc: "Focused on client relationships, compliance management and operational excellence.",
    link: "/team/kartik-pruthi",
  },
  {
    name: "Divyam Takkar",
    role: "Designated Partner",
    image: "/divyam.jpg",
    desc: "Dedicated to financial management, accounting solutions and business support.",
    link: "/team/divyam-takkar",
  },
];

export default function Leadership() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-sm uppercase tracking-[4px] text-yellow-500">

            Our Leadership

          </span>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">

            Meet The

            <span className="text-yellow-500">

              {" "}Experts

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            Behind every successful client relationship is a dedicated
            team committed to professionalism, transparency and
            sustainable business growth.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {team.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[32px] border border-yellow-500/20 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40"
            >

              {/* Image */}

              <div className="relative h-[460px] overflow-hidden">              <Image
                src={member.image}
                alt={member.name}
                fill
                priority={index === 0}
                className="object-cover object-top transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

              {/* Hover Glow */}

              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            </div>

            {/* Content */}

            <div className="p-8">

              <h3 className="text-2xl font-bold text-white">

                {member.name}

              </h3>

              <p className="mt-2 font-medium text-yellow-500">

                {member.role}

              </p>

              <p className="mt-5 leading-8 text-gray-400">

                {member.desc}

              </p>

              <Link href={member.link}>

                <motion.div
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-yellow-500 transition-all duration-300 hover:gap-3 hover:text-yellow-400"
                >

                  View Profile

                  <span>→</span>

                </motion.div>

              </Link>

            </div>

            {/* Bottom Accent */}

            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 transition-all duration-500 group-hover:w-full" />

          </motion.div>

        ))}
              </div>

    </div>

  </section>

  );
}
                