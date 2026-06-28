"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `New Inquiry:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(`https://wa.me/917452878887?text=${text}`, "_blank");
  };

  const services = [
    "GST Registration & Filing",
    "Income Tax Filing",
    "ROC Compliance",
    "Business Registration",
    "Accounting & Bookkeeping",
    "Startup Advisory",
  ];

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-10 py-5 bg-[#0b0b0b] border-b border-gray-800">
        <h1 className="text-2xl font-bold">GROW MORE ADVISORY</h1>

        <button className="px-5 py-2 bg-yellow-500 text-black rounded-full font-medium hover:scale-105 transition">
         Book Consultation
        </button>
      </header>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Helping Businesses Grow, Stay Compliant & Scale Confidently
        </motion.h1>

        <p className="text-gray-400 mt-5">
          Tax | GST | Income Tax | ROC | Business Advisory
        </p>

        <p className="text-gray-500 mt-3">
          Helping startups and businesses scale with compliance, strategy & execution.
        </p>

        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="mt-10 px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold"
        >
          Get Consultation
        </motion.button>

      </section>
       <div className="flex flex-wrap justify-center gap-6 text-gray-400 mt-6 text-sm">
        <span>✔ GST Experts</span>
        <span>✔ Income Tax Filing</span>
        <span>✔ ROC Compliance</span>
        <span>✔ Startup Advisory</span>
      </div>
      {/* SERVICES */}
      <section className="px-10 py-24 border-t border-gray-800">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-b from-[#111] to-black border border-gray-800 rounded-xl hover:border-yellow-500 hover:scale-105 transition shadow-lg"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* ABOUT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-10 py-24 border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Grow More Advisory is a modern business consulting platform focused on helping
            startups, entrepreneurs, and established businesses manage compliance, taxation,
            and financial operations efficiently.
          </p>

        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="px-10 py-20 border-t border-gray-800">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-gradient-to-b from-[#111] to-black border border-gray-800 rounded-xl">
            Expert Advisory
          </div>

          <div className="p-6 bg-gradient-to-b from-[#111] to-black border border-gray-800 rounded-xl">
            Timely Compliance
          </div>

          <div className="p-6 bg-gradient-to-b from-[#111] to-black border border-gray-800 rounded-xl">
            Business Growth Focus
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="px-10 py-20 border-t border-gray-800">

        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">

          <input name="name" placeholder="Your Name"
            className="p-3 bg-black border border-gray-700 rounded" />

          <input name="email" placeholder="Your Email"
            className="p-3 bg-black border border-gray-700 rounded" />

          <textarea name="message" placeholder="Message" rows="4"
            className="p-3 bg-black border border-gray-700 rounded" />

          <button className="bg-yellow-500 text-black py-3 rounded font-semibold">
            Send on WhatsApp
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-400">
        © {new Date().getFullYear()} GROW MORE ADVISORY
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
       href="https://wa.me/917452878887?text=Hi%20I%20want%20consultation"
       target="_blank"
       className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
       >
       WhatsApp Us
      </a>

    </main>
  );
}