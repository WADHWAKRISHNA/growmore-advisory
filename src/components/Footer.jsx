"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]"
      />

      {/* Main Container */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        {/* Top Grid */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black">

              Grow More

              <span className="block text-yellow-500">

                Advisory

              </span>

            </h2>

            <p className="mt-6 leading-8 text-gray-400">

              Helping startups, MSMEs and enterprises with taxation,
              accounting, compliance and strategic business advisory
              services across India.

            </p>

            {/* Social Icons */}

            <div className="mt-8 flex gap-4">
                            <Link
                href="https://www.instagram.com/growmoreadvisoryllp"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://wa.me/917452878887"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaWhatsapp />
              </Link>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white">

              Quick Links

            </h3>

            <ul className="mt-6 space-y-4">

              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Leadership", "/team"],
                ["Contact", "/contact"],
              ].map(([title, link]) => (

                <li key={title}>

                  <Link
                    href={link}
                    className="text-gray-400 transition-all duration-300 hover:pl-2 hover:text-yellow-400"
                  >
                    {title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold text-white">

              Our Services

            </h3>

            <ul className="mt-6 space-y-4">

              {[
                "GST Registration",
                "Income Tax",
                "ROC Compliance",
                "Accounting",
                "Startup Advisory",
                "Business Consulting",
              ].map((service) => (

                <li
                  key={service}
                  className="text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >

                  {service}

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">

              Contact

            </h3>

            <div className="mt-6 space-y-5 text-gray-400">

              <div>

                <p className="font-semibold text-white">

                  Phone

                </p>

                <p className="mt-1">

                  +91 74528 78887

                </p>

              </div>

              <div>

                <p className="font-semibold text-white">

                  Email

                </p>

                <p className="mt-1">

                  info@growmoreadvisory.com

                </p>

              </div>

              <div>

                <p className="font-semibold text-white">

                  Office

                </p>

                <p className="mt-1 leading-7">

                  India

                </p>

              </div>

            </div>

          </div>

        </div>
                {/* Bottom Bar */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-center text-sm text-gray-500">

              © {new Date().getFullYear()} Grow More Advisory. All Rights Reserved.

            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">

              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 transition hover:text-yellow-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-sm text-gray-500 transition hover:text-yellow-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/refund-policy"
                className="text-sm text-gray-500 transition hover:text-yellow-400"
              >
                Refund Policy
              </Link>

            </div>

            <motion.button
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-xl text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >

              ↑

            </motion.button>

          </div>

        </div>

      </div>

    </footer>
  );
}