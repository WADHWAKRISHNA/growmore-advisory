"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Krishna Wadhwa",
    role: "Founder & Designated Partner",
    image: "/krishna.jpg",
    desc: "Specializing in GST, Income Tax, ROC compliances and strategic business advisory."
  },
  {
    name: "Kartik Pruthi",
    role: "Designated Partner",
    image: "/kartik.jpg",
    desc: "Focused on client relationships, compliance management and operational excellence."
  },
  {
    name: "Divyam Takkar",
    role: "Designated Partner",
    image: "/divyam.jpg",
    desc: "Dedicated to financial management, accounting solutions and business support."
  }
];

export default function Leadership() {

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

className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[160px]"
/>

<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="text-center">

<span className="uppercase tracking-[4px] text-yellow-500 text-sm">

Leadership Team

</span>

<h2 className="mt-5 text-4xl md:text-5xl font-bold">

Meet Our

<span className="text-yellow-500">
 Leadership
</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Behind every successful client relationship is a dedicated team
committed to professionalism, transparency and long-term growth.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
            }}
            className="group relative overflow-hidden rounded-3xl border border-yellow-500/15 bg-white/[0.03] backdrop-blur-xl"
          >
            {/* Image */}

            <div className="relative overflow-hidden">

              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={550}
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-yellow-500/10" />

            </div>

            {/* Content */}

            <div className="p-8">

              <h3 className="text-2xl font-bold">

                {member.name}

              </h3>

              <p className="mt-2 text-yellow-500">

                {member.role}

              </p>

              <p className="mt-5 leading-8 text-gray-400">

                {member.desc}

              </p>

              <motion.button
                whileHover={{ x: 6 }}
                className="mt-8 flex items-center gap-2 text-yellow-500 font-medium"
              >
                View Profile
                <span>→</span>
              </motion.button>

            </div>

            {/* Bottom Accent */}

            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 transition-all duration-500 group-hover:w-full" />

          </motion.div>
        ))}

      </div>

    </div>

  </section>
);
}