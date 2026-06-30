"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navLinks = [
    {
      name: "Services",
      href: "#services",
      external: true,
    },
    {
      name: "About",
      href: "/about",
      external: false,
    },
    {
      name: "Leadership",
      href: "/leadership",
      external: false,
    },
    {
      name: "Contact",
      href: "#contact",
      external: true,
    },
  ];

  return (

    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: .6 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-yellow-500/10 bg-black/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-4"
        >

          <img
            src="/logo.png"
            alt="Grow More Advisory"
            className="h-12 w-auto transition duration-300 group-hover:scale-105"
          />

          <div>

            <h2 className="text-xl font-bold text-white">

              Grow More Advisory

            </h2>

            <p className="text-xs tracking-[2px] text-gray-400">

              BUSINESS • COMPLIANCE • ADVISORY

            </p>

          </div>

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navLinks.map((item) => (

            item.external ? (

              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium tracking-wide text-gray-300 transition hover:text-yellow-400"
              >

                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />

              </a>

            ) : (

              <Link
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium tracking-wide text-gray-300 transition hover:text-yellow-400"
              >

                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />

              </Link>

            )

          ))}

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white lg:hidden"
        >
          ☰
        </button>
                {/* Mobile Menu */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute left-4 right-4 top-24 rounded-3xl border border-yellow-500/20 bg-[#0b0b0b]/95 p-6 backdrop-blur-2xl lg:hidden"
            >

              <div className="flex flex-col gap-5">

                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-3 text-gray-300 transition hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
                >
                  Services
                </a>

                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-3 text-gray-300 transition hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
                >
                  About
                </Link>

                <Link
                  href="/leadership"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-3 text-gray-300 transition hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
                >
                  Leadership
                </Link>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-3 text-gray-300 transition hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
                >
                  Contact
                </a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.header>

  );
}