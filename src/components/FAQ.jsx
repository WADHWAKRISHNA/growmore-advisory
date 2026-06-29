"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which services do you provide?",
    answer:
      "We provide GST, Income Tax, ROC Compliance, Accounting, Business Registration and Startup Advisory services.",
  },
  {
    question: "Can I consult online?",
    answer:
      "Yes. We provide online consultation through WhatsApp, Google Meet and Phone Calls.",
  },
  {
    question: "How long does GST Registration take?",
    answer:
      "Normally it takes around 3–7 working days depending upon document verification.",
  },
  {
    question: "Do you handle company compliance?",
    answer:
      "Yes. We manage ROC filing, annual compliance, director KYC and company secretarial compliances.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="px-8 md:px-10 py-24 border-t border-gray-800">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Everything you need to know before getting started.
        </p>

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="border border-gray-800 rounded-xl mb-5 overflow-hidden"
          >

            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-[#111]"
            >

              <span className="font-semibold">
                {faq.question}
              </span>

              <span className="text-yellow-500 text-xl">
                {open === index ? "-" : "+"}
              </span>

            </button>

            {open === index && (

              <div className="px-6 py-5 text-gray-400 bg-[#0d0d0d]">
                {faq.answer}
              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}