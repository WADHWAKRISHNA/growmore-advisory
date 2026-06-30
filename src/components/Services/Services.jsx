"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080808] py-32"
    >

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#3d2b07_0%,transparent_55%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="max-w-3xl"
          >

            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">

              Our Services

            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl">

              Professional Solutions

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                For Every Business Stage

              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">

              From registrations and taxation to accounting,
              compliance and strategic advisory—we provide
              end-to-end business solutions under one roof.

            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
          >

            <Link
              href="/services"
              className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >

              View All Services →

            </Link>

          </motion.div>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {services.map((service, index) => (

          <ServiceCard
            key={service.title}
            service={service}
            index={index}
          />

        ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-24 overflow-hidden rounded-[34px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/[0.03] to-yellow-500/10 p-10 backdrop-blur-xl"
        >

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[3px] text-yellow-400">

                Need Expert Guidance?

              </span>

              <h3 className="mt-5 text-3xl font-black text-white">

                Let's Build Your Business Together

              </h3>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">

                Whether you're starting a new venture, managing statutory
                compliance or planning business growth, our team is ready
                to provide practical and reliable professional support.

              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://wa.me/917452878887?text=Hi%20I%20want%20a%20business%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >

                Book Consultation

              </a>

              <Link
                href="/contact"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500 hover:bg-yellow-500/10"
              >

                Contact Us

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );
}