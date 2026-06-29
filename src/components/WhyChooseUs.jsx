import { motion } from "framer-motion";

const reasons = [
  {
    title: "Expert Professionals",
    desc: "Experienced advisors ensuring accurate compliance and business guidance."
  },
  {
    title: "Fast Turnaround",
    desc: "Timely filing, registrations and documentation without unnecessary delays."
  },
  {
    title: "Transparent Pricing",
    desc: "Clear pricing with no hidden charges."
  },
  {
    title: "Dedicated Support",
    desc: "Quick assistance through WhatsApp, Email & Calls."
  },
  {
    title: "100% Compliance",
    desc: "Stay legally compliant with GST, Income Tax and ROC regulations."
  },
  {
    title: "Growth Focused",
    desc: "Helping businesses save tax, improve processes and scale efficiently."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-8 md:px-10 py-24 border-t border-gray-800">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Grow More Advisory?
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          We don't just file compliances. We help businesses grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-yellow-500 transition"
            >

              <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xl mb-6">
                ✓
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}