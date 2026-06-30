"use client";

import Link from "next/link";

export default function Navbar({ onConsultation }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Grow More Advisory"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              Grow More Advisory
            </h1>
            <p className="text-xs text-gray-400">
              Business Growth • Compliance • Advisory
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <Link href="/about" className="hover:text-yellow-400 transition">
           About
          </Link>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/917452878887"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Book a Consultation
        </a>

      </div>
    </header>
  );
}