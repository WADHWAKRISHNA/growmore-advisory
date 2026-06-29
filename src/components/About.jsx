import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-8 md:px-10 py-24 border-t border-gray-800">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-yellow-500 font-semibold mb-3">
            ABOUT US
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            We Help Businesses
            <br />
            Stay Compliant &
            <br />
            Grow Confidently.
          </h2>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-gray-400 leading-8">

            Grow More Advisory is a modern consulting firm providing
            GST, Income Tax, ROC Compliance, Business Registration,
            Accounting and Startup Advisory services.

            Our mission is to simplify complex compliances while
            helping businesses focus on growth.

          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div>
              <h3 className="text-yellow-500 text-3xl font-bold">
                5+
              </h3>

              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-yellow-500 text-3xl font-bold">
                150+
              </h3>

              <p className="text-gray-400 mt-2">
                Happy Clients
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}