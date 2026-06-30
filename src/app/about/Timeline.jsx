"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2020",
    title: "Foundation",
    desc: "Grow More Advisory was established with a vision to simplify taxation and compliance for businesses."
  },
  {
    year: "2021",
    title: "Growing Client Base",
    desc: "Expanded our services while building long-term relationships with startups, SMEs and professionals."
  },
  {
    year: "2023",
    title: "Service Expansion",
    desc: "Introduced complete financial, compliance and advisory solutions under one trusted platform."
  },
  {
    year: "Today",
    title: "Future Ready",
    desc: "Continuing to empower businesses with expert advisory, technology-driven solutions and trusted partnerships."
  }
];

export default function Timeline() {
  return (

<section className="relative py-32 overflow-hidden">

<motion.div

animate={{
scale:[1,1.15,1],
x:[0,40,0],
y:[0,-30,0]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[150px]"

/>

<div className="max-w-6xl mx-auto px-6 relative z-10">

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.8}}

className="text-center"

>

<span className="uppercase tracking-[4px] text-yellow-500 text-sm">
Our Journey
</span>

<h2 className="mt-5 text-4xl md:text-5xl font-bold">

Our Growth

<span className="text-yellow-500">
 Timeline
</span>

</h2>

<p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">

Every milestone reflects our commitment to helping businesses
grow with confidence, trust and professional excellence.

</p>

</motion.div>

<div className="relative mt-24">

<motion.div

initial={{height:0}}

whileInView={{height:"100%"}}

viewport={{once:true}}

transition={{
duration:2
}}

className="absolute left-1/2 top-0 hidden md:block w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-300"

/>

<div className="space-y-20">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            className={`relative flex items-center ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >
            {/* Card */}
            <div className="w-full md:w-1/2 px-4">
              <motion.div
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-yellow-500"
              >
                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent"
                />

                <span className="relative z-10 inline-flex rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
                  {item.year}
                </span>

                <h3 className="relative z-10 mt-5 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-5 leading-8 text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0px rgba(234,179,8,.3)",
                    "0 0 25px rgba(234,179,8,.8)",
                    "0 0 0px rgba(234,179,8,.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="h-6 w-6 rounded-full border-4 border-[#050505] bg-yellow-500"
              />
            </div>

            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}

      </div>
    </div>

  </div>
</section>
  );
}