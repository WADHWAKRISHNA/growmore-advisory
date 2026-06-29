import { motion } from "framer-motion";

const services = [
  {
    title: "GST Registration & Filing",
    desc: "Complete GST registration, monthly & annual return filing with expert compliance."
  },
  {
    title: "Income Tax Filing",
    desc: "Individual, Business & Company Income Tax Return filing with tax planning."
  },
  {
    title: "ROC Compliance",
    desc: "Annual filing, director KYC, company compliance and MCA services."
  },
  {
    title: "Business Registration",
    desc: "Private Limited, LLP, Partnership, MSME, Startup India registration."
  },
  {
    title: "Accounting & Bookkeeping",
    desc: "Professional bookkeeping, MIS reports and accounting solutions."
  },
  {
    title: "Startup Advisory",
    desc: "Helping startups with legal, taxation and financial planning."
  },
];

export default function Services() {
  return (
    <section className="px-8 md:px-10 py-24 border-t border-gray-800">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Professional Financial & Business Solutions Under One Roof
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: .25 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-yellow-500 transition"
            >

              <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}