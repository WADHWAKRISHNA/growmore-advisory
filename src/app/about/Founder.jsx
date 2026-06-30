"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const expertise = [
  "GST Compliance",
  "Income Tax",
  "ROC & MCA",
  "Accounting",
  "Business Advisory",
  "Startup Registration",
];

export default function Founder() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-10 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[150px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[4px] text-sm text-yellow-500">

            Meet The Founder

          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">

            The Vision Behind

            <span className="text-yellow-500">
              {" "}Grow More Advisory
            </span>

          </h2>

        </motion.div>

        <div className="mt-20 grid lg:grid-cols-[340px_1fr] gap-16 items-start">

          {/* PHOTO */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="absolute -inset-4 rounded-[35px] bg-yellow-500/10 blur-2xl" />

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[30px] border border-yellow-500/20"
            >

              <Image
                src="/founder.jpg"
                alt="Krishna Wadhwa"
                width={340}
                height={420}
                className="h-[420px] w-full object-cover"
              />

            </motion.div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <h3 className="text-5xl font-black">

              Krishna

              <span className="text-yellow-500">
                {" "}Wadhwa
              </span>

            </h3>

            <p className="mt-4 text-xl text-gray-400">

              Founder & Designated Partner

            </p>

            <div className="mt-8 h-[1px] w-32 bg-yellow-500" />

            <p className="mt-8 text-gray-400 leading-9 text-lg">
                           Grow More Advisory was founded with a vision to make
              taxation, compliance and financial advisory simple,
              transparent and growth-oriented.

              Krishna Wadhwa specializes in GST, Income Tax,
              ROC compliances, Accounting and Business Advisory,
              helping startups, entrepreneurs and established
              businesses stay compliant while making smarter
              financial decisions for sustainable growth.

            </p>

            {/* Expertise */}

            <div className="mt-12 grid grid-cols-2 gap-4">

              {expertise.map((item, index) => (

                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-yellow-500/20 bg-white/[0.03] backdrop-blur-xl p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="h-10 w-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">

                      ✓

                    </div>

                    <span className="font-medium">

                      {item}

                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* Quote */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .4 }}
              className="mt-12 rounded-3xl border-l-4 border-yellow-500 bg-white/[0.03] backdrop-blur-xl p-8"
            >

              <p className="italic text-lg leading-9 text-gray-300">

                "Strong businesses are built on trust,
                compliance and informed financial decisions.
                My goal is to help every entrepreneur focus
                on growth while we take care of the financial
                and regulatory responsibilities."

              </p>

              <div className="mt-8">

                <h4 className="text-2xl font-bold text-yellow-500">

                  Krishna Wadhwa

                </h4>

                <p className="mt-2 text-gray-500">

                  Founder & Designated Partner

                </p>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}