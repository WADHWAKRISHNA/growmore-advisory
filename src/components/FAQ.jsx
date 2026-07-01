"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does GST Registration take?",
    answer:
      "GST registration is generally completed within 3–7 working days, subject to document verification and government approval.",
  },
  {
    question: "Do you provide ROC Compliance services?",
    answer:
      "Yes. We handle annual ROC filings, director compliance, LLP compliance, company incorporation and all MCA-related services.",
  },
  {
    question: "Can you manage complete accounting for my business?",
    answer:
      "Absolutely. We provide bookkeeping, accounting, payroll, MIS reporting and complete financial management solutions.",
  },
  {
    question: "Do you assist startups?",
    answer:
      "Yes. We help startups with incorporation, taxation, funding readiness, compliance and business advisory.",
  },
  {
    question: "Do you offer Income Tax filing for individuals?",
    answer:
      "Yes. We provide ITR filing, tax planning and advisory services for salaried individuals, professionals and businesses.",
  },
  {
    question: "Can consultations be conducted online?",
    answer:
      "Yes. We provide consultations through Google Meet, Zoom, Microsoft Teams and WhatsApp according to your convenience.",
  },
];

export default function FAQ() {

  const [active, setActive] = useState(0);

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

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">

            FAQs

          </span>

          <h2 className="mt-7 text-4xl font-black md:text-5xl">

            Frequently Asked

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Questions

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            Find answers to the most common questions about our
            taxation, compliance, accounting and advisory services.

          </p>

        </motion.div>

        {/* FAQ List */}

        <div className="mt-20 space-y-5">
                    {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-3xl border border-yellow-500/15 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/40"
            >

              {/* Question */}

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-7 text-left"
              >

                <h3 className="pr-8 text-lg font-semibold text-white md:text-xl">

                  {faq.question}

                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 45 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-2xl font-light text-yellow-400"
                >

                  +

                </motion.div>

              </button>

              {/* Answer */}

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="border-t border-white/10 px-8 pb-8 pt-6">

                      <p className="leading-8 text-gray-400">

                        {faq.answer}

                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}
                  </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400">

            Still have questions? Our experts are here to help you with
            taxation, compliance, accounting and business advisory.

          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]"
          >

            Talk To Our Experts

            <span>→</span>

          </a>

        </motion.div>

      </div>

    </section>

  );
}