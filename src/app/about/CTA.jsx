"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-36">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[170px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="rounded-[40px] border border-yellow-500/20 bg-white/[0.03] backdrop-blur-2xl px-10 py-20 text-center"
        >

          <span className="uppercase tracking-[5px] text-sm text-yellow-500">

            Let's Work Together

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">

            Ready To

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Grow Your Business?

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            Whether you're launching a startup, managing a growing business
            or looking for expert tax and compliance guidance, we're here
            to simplify the process and help you move forward with confidence.

          </p>

          {/* Contact Buttons */}

<div className="mt-14 flex flex-col items-center gap-5">

  {/* WhatsApp */}
  <Link
    href="https://wa.me/917452878887?text=Hello%20Grow%20More%20Advisory,%20I%20would%20like%20to%20book%20a%20consultation."
    target="_blank"
  >
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-full bg-green-500 px-10 py-4 font-semibold text-white shadow-[0_0_35px_rgba(34,197,94,0.35)] transition"
    >
      💬 Book Consultation on WhatsApp
    </motion.button>
  </Link>

  {/* Email */}
  <Link
    href="mailto:contact@growmoreadvisory.com?subject=Consultation Request"
  >
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-full border border-yellow-500/30 bg-white/5 px-10 py-4 font-semibold text-white transition hover:border-yellow-500 hover:bg-yellow-500/10"
    >
      ✉️ Send us an Email
    </motion.button>
  </Link>

</div>
{/* Contact Details */}

<div className="mt-10 text-center">

  <p className="text-gray-400">
    📱 WhatsApp :
    <a
      href="https://wa.me/917452878887"
      target="_blank"
      className="ml-2 font-semibold text-yellow-400 hover:underline"
    >
      +91 74528 78887
    </a>
  </p>

  <p className="mt-3 text-gray-400">
    ✉️ Email :
    <a
      href="mailto:contact@growmoreadvisory.com"
      className="ml-2 font-semibold text-yellow-400 hover:underline"
    >
      contact@growmoreadvisory.com
    </a>
  </p>

</div>

          {/* Bottom Stats */}

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-black text-yellow-500">150+</h3>
              <p className="mt-2 text-sm text-gray-500">
                Businesses Served
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-yellow-500">99%</h3>
              <p className="mt-2 text-sm text-gray-500">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-yellow-500">24×7</h3>
              <p className="mt-2 text-sm text-gray-500">
                Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-yellow-500">5+</h3>
              <p className="mt-2 text-sm text-gray-500">
                Core Services
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}