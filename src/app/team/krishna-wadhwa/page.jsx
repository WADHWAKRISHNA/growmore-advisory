"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function KrishnaProfile() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Background */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[170px]"
      />

      {/* Hero */}

      <section className="relative z-10 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[420px_1fr]">

          {/* Photo */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute -inset-6 rounded-[45px] bg-yellow-500/20 blur-3xl" />

              <div className="relative rounded-[35px] border border-yellow-500/20 bg-white/[0.04] p-5 backdrop-blur-xl">

                <Image
                  src="/krishna.jpg"
                  alt="Krishna Wadhwa"
                  width={360}
                  height={450}
                  priority
                  className="rounded-[25px] object-cover"
                />

              </div>

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-yellow-400">

              Founder & Designated Partner

            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight xl:text-7xl">

              Krishna

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Wadhwa

              </span>

            </h1>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "CA Finalist",
                "Tax Strategist",
                "Business Advisor",
                "AI-Driven Consultant",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>

              ))}

            </div>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400">

              Krishna Wadhwa is the Founder & Designated Partner of
              Grow More Advisory. As a CA Finalist, he combines
              taxation, compliance and business advisory with
              technology-driven solutions to help startups,
              entrepreneurs and growing businesses simplify complex
              financial challenges.

            </p>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-400">

              His vision is to build a modern advisory firm where
              Artificial Intelligence, automation and professional
              expertise work together to deliver faster decisions,
              smarter compliance and long-term business growth.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="https://wa.me/917452878887"
                target="_blank"
              >

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .97 }}
                  className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-[0_0_35px_rgba(234,179,8,.35)]"
                >

                  Book Consultation

                </motion.button>

              </Link>

              <Link href="mailto:contact@growmoreadvisory.com">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .97 }}
                  className="rounded-full border border-yellow-500/30 bg-white/5 px-8 py-4 font-semibold hover:border-yellow-500 hover:bg-yellow-500/10"
                >

                  Email Me

                </motion.button>

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Professional Highlights */}

      <section className="border-t border-white/10 py-20">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
            {
              number: "150+",
              title: "Businesses Served",
            },
            {
              number: "99%",
              title: "Client Satisfaction",
            },
            {
              number: "AI",
              title: "Technology Driven",
            },
            {
              number: "24×7",
              title: "Professional Support",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-yellow-500/15 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
            >

              <h3 className="text-5xl font-black text-yellow-500">

                {item.number}

              </h3>

              <p className="mt-4 text-gray-400">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Core Expertise */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[4px] text-sm text-yellow-500">

              Core Expertise

            </span>

            <h2 className="mt-5 text-5xl font-black">

              Professional

              <span className="text-yellow-500">

                {" "}Capabilities

              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">

              Delivering practical taxation, compliance and technology-driven
              business solutions that help organizations stay compliant,
              efficient and growth-focused.

            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "📊",
                title: "GST Advisory",
                desc: "Registration, Return Filing, Annual Returns, Notices and End-to-End GST Compliance."
              },
              {
                icon: "📑",
                title: "Income Tax",
                desc: "Tax Planning, Income Tax Returns, Compliance and Advisory Services."
              },
              {
                icon: "🏢",
                title: "ROC & MCA",
                desc: "Company Incorporation, Annual Filings, LLP Compliance and Secretarial Support."
              },
              {
                icon: "💼",
                title: "Business Advisory",
                desc: "Strategic advisory helping startups and MSMEs build scalable businesses."
              },
              {
                icon: "📚",
                title: "Accounting",
                desc: "Bookkeeping, Financial Statements, MIS Reporting and Business Accounts."
              },
              {
                icon: "🚀",
                title: "Startup Consulting",
                desc: "Business Registration, Compliance Setup and Growth Planning."
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-yellow-500/15 bg-white/[0.03] p-8 backdrop-blur-xl"
              >

                <div className="text-5xl">

                  {item.icon}

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-400">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* AI & Technology */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-[40px] border border-yellow-500/20 bg-white/[0.03] p-12 backdrop-blur-xl"
          >

            <span className="uppercase tracking-[4px] text-sm text-yellow-500">

              AI & Technology

            </span>

            <h2 className="mt-5 text-5xl font-black">

              Modern Advisory

              <span className="block text-yellow-500">

                Powered by Technology

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

              Krishna believes that modern advisory firms should go beyond
              traditional compliance. By integrating Artificial Intelligence,
              automation and digital workflows into everyday business
              processes, he focuses on delivering faster, smarter and more
              efficient solutions for entrepreneurs and organizations.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Artificial Intelligence",
                "Business Automation",
                "Workflow Optimization",
                "Web Development",
                "Digital Transformation",
                "Process Automation",
                "Financial Technology",
                "Business Websites",
                "Client Portals",
                "AI Productivity",
              ].map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        </div>

      </section>
            {/* Leadership Philosophy */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="grid gap-12 lg:grid-cols-2"
          >

            <div>

              <span className="uppercase tracking-[4px] text-sm text-yellow-500">

                Leadership Philosophy

              </span>

              <h2 className="mt-5 text-5xl font-black">

                Beyond
                <span className="text-yellow-500"> Compliance</span>

              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-400">

                My vision has always been to build more than a compliance
                practice. Businesses today require strategic advisors who
                understand finance, technology and innovation together.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">

                Every engagement is focused on creating long-term value,
                simplifying regulations and enabling entrepreneurs to make
                confident business decisions.

              </p>

            </div>

            <div className="grid gap-6">

              {[
                "Client First Approach",
                "Technology Driven Solutions",
                "Transparency & Ethics",
                "Continuous Learning",
                "Innovation Through AI",
                "Long-Term Business Relationships",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-yellow-500/15 bg-white/[0.03] p-5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black font-bold">

                    ✓

                  </div>

                  <span className="text-lg">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* Industries */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="uppercase tracking-[4px] text-sm text-yellow-500">

            Industries Served

          </span>

          <h2 className="mt-5 text-5xl font-black">

            Businesses We
            <span className="text-yellow-500"> Support</span>

          </h2>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {[
              "Startups",
              "MSMEs",
              "Private Limited Companies",
              "LLPs",
              "Partnership Firms",
              "Professionals",
              "Freelancers",
              "E-Commerce",
              "Manufacturing",
              "Service Industry",
              "Consulting Firms",
              "Digital Businesses",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 text-yellow-300"
              >

                {item}

              </span>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-white/10 py-28">

        <div className="mx-auto max-w-5xl px-6">

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-[40px] border border-yellow-500/20 bg-white/[0.03] p-14 text-center backdrop-blur-2xl"
          >

            <span className="uppercase tracking-[4px] text-sm text-yellow-500">

              Let's Build Together

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">

              Ready To Grow
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Your Business?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

              Whether you're launching a startup, expanding an existing
              business or looking for trusted taxation and compliance
              guidance, Grow More Advisory is ready to support your
              journey.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="https://wa.me/917452878887"
                target="_blank"
              >

                <button className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105">

                  💬 WhatsApp

                </button>

              </Link>

              <Link
                href="mailto:contact@growmoreadvisory.com"
              >

                <button className="rounded-full border border-yellow-500/30 bg-white/5 px-8 py-4 font-semibold transition hover:border-yellow-500 hover:bg-yellow-500/10">

                  ✉️ Email

                </button>

              </Link>

            </div>

            <Link href="/about">

              <button className="mt-10 text-yellow-500 transition hover:translate-x-1">

                ← Back to About

              </button>

            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}