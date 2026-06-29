"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Amit Sharma",
    company: "Business Owner",
    review:
      "Outstanding GST and Income Tax services. Professional, responsive and highly knowledgeable.",
  },
  {
    name: "Priya Gupta",
    company: "Startup Founder",
    review:
      "The team handled our company registration and ROC compliance seamlessly.",
  },
  {
    name: "Rahul Verma",
    company: "Director",
    review:
      "Very transparent pricing and excellent advisory. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 md:px-10 py-24 border-t border-gray-800">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-14">
          Trusted by businesses across India.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-yellow-500 transition"
            >

              <div className="text-yellow-500 text-2xl mb-5">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-400 leading-7 italic">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}