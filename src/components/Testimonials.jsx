"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    company: "Manufacturing Business",
    review:
      "Exceptional advisory services with timely compliance support. The team is highly professional and always available when needed.",
  },
  {
    name: "Priya Verma",
    company: "Retail Business",
    review:
      "Their GST and accounting support has streamlined our business operations. Highly satisfied with the service quality.",
  },
  {
    name: "Rahul Mehta",
    company: "IT Services Company",
    review:
      "Professional guidance, transparent communication and practical business advice. A trusted advisory partner.",
  },
  {
    name: "Neha Kapoor",
    company: "Healthcare Clinic",
    review:
      "From taxation to compliance, everything is managed efficiently. Highly recommended for growing businesses.",
  },
  {
    name: "Vikas Gupta",
    company: "Construction Firm",
    review:
      "Reliable professionals who understand business requirements and always provide timely solutions.",
  },
  {
    name: "Sonia Arora",
    company: "E-commerce Brand",
    review:
      "Excellent financial planning and compliance management. Their team has been incredibly supportive throughout.",
  },
  {
    name: "Karan Malhotra",
    company: "Startup Founder",
    review:
      "The advisory provided helped us build a strong financial foundation during the early stages of our startup.",
  },
  {
    name: "Rohit Bansal",
    company: "Trading Business",
    review:
      "Quick response time, knowledgeable professionals and hassle-free compliance support every time.",
  },
  {
    name: "Anjali Mehra",
    company: "Education Institute",
    review:
      "The team delivers quality work with complete transparency. We truly value our association with them.",
  },
  {
    name: "Sandeep Khanna",
    company: "Hospitality Business",
    review:
      "Highly professional approach with attention to every detail. Their business guidance has been extremely valuable.",
  },
  {
    name: "Deepak Jain",
    company: "Logistics Company",
    review:
      "Outstanding advisory services backed by excellent knowledge of taxation and compliance regulations.",
  },
  {
    name: "Ritika Singh",
    company: "Fashion Brand",
    review:
      "Efficient, responsive and highly experienced professionals. Working with them has been a great experience.",
  },
  {
    name: "Mohit Arora",
    company: "Import Export Business",
    review:
      "The team consistently delivers accurate advice and ensures all statutory compliances are completed on time.",
  },
  {
    name: "Pooja Bhatia",
    company: "Food & Beverage Business",
    review:
      "Excellent support with taxation, accounting and strategic financial planning. Truly dependable advisors.",
  },
  {
    name: "Nitin Aggarwal",
    company: "MSME Enterprise",
    review:
      "Grow More Advisory has become an integral part of our business journey. Professional, reliable and client-focused.",
  },
];

export default function Testimonials() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 3) % testimonials.length);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  const visibleTestimonials = [];

  for (let i = 0; i < 3; i++) {

    visibleTestimonials.push(
      testimonials[(current + i) % testimonials.length]
    );

  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d2b07_0%,transparent_65%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-yellow-400">

            Testimonials

          </span>

          <h2 className="mt-7 text-4xl font-black md:text-5xl">

            What Our

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Clients Say

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">

            Trusted by businesses across India for taxation,
            compliance and strategic advisory.

          </p>

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="mt-20 grid gap-8 lg:grid-cols-3"
          >
                        {visibleTestimonials.map((client, index) => (

              <motion.div
                key={`${current}-${index}`}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-yellow-500/15 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_20px_60px_rgba(234,179,8,0.15)]"
              >

                {/* Quote */}

                <div className="absolute right-6 top-4 text-7xl font-black text-yellow-500/10">

                  “

                </div>

                {/* Stars */}

                <div className="flex text-yellow-400 text-lg tracking-wide">

                  ⭐⭐⭐⭐⭐

                </div>

                {/* Review */}

                <p className="mt-6 min-h-[170px] leading-8 text-gray-300">

                  "{client.review}"

                </p>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Client */}

                <div className="flex items-center gap-4">

                  {/* Initials Avatar */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-xl font-bold text-yellow-400">

                    {client.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-white">

                      {client.name}

                    </h3>

                    <p className="text-sm text-gray-400">

                      {client.company}

                    </p>

                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">

                      <span className="h-2 w-2 rounded-full bg-green-400" />

                      Verified Client

                    </div>

                  </div>

                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 transition-all duration-500 group-hover:w-full" />

              </motion.div>

            ))}
                      </motion.div>

        </AnimatePresence>

        {/* Slider Indicators */}

        <div className="mt-12 flex justify-center gap-3">

          {Array.from({
            length: Math.ceil(testimonials.length / 3),
          }).map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index * 3)}
              className={`h-3 rounded-full transition-all duration-500 ${
                current / 3 === index
                  ? "w-10 bg-yellow-500"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}