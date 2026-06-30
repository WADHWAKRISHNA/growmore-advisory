"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🛡️",
    title: "Trusted Expertise",
    desc: "Experienced professionals delivering reliable tax, compliance and advisory services tailored to your business."
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Quick responses and efficient execution so your business never misses important deadlines."
  },
  {
    icon: "📈",
    title: "Growth Focused",
    desc: "Beyond compliance, we help you make smarter financial decisions for long-term business growth."
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "A responsive team that stays connected and supports you throughout your business journey."
  },
  {
    icon: "🔒",
    title: "Complete Compliance",
    desc: "Stay compliant with evolving regulations through proactive guidance and accurate execution."
  },
  {
    icon: "💼",
    title: "Tailored Solutions",
    desc: "Every business is different, so we provide customized financial and advisory solutions."
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 60
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .7
    }
  }
};

export default function WhyChooseUs() {
  return (

<section className="relative overflow-hidden py-32 bg-[#080808]">

<motion.div
animate={{
scale:[1,1.2,1],
x:[0,40,0],
y:[0,-40,0]
}}
transition={{
duration:12,
repeat:Infinity
}}
className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[140px]"
/>

<div className="relative z-10 max-w-7xl mx-auto px-6">

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.8}}
className="text-center max-w-3xl mx-auto"
>

<span className="uppercase tracking-[4px] text-sm text-yellow-500">
Why Choose Us
</span>

<h2 className="mt-5 text-4xl md:text-5xl font-bold">

Why Businesses

<span className="text-yellow-500">
 Choose Grow More
</span>

</h2>

<p className="mt-6 text-gray-400 leading-8">

We combine expertise, transparency and personalized support
to help businesses confidently manage compliance and achieve
sustainable growth.

</p>

</motion.div>

<motion.div

variants={container}

initial="hidden"

whileInView="show"

viewport={{once:true}}

className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"

>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -12,
                rotateX: 5,
                rotateY: index % 2 === 0 ? -5 : 5,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/15 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              {/* Hover Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5"
              />

              {/* Animated Icon */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl"
              >
                {feature.icon}
              </motion.div>

              <h3 className="relative z-10 mt-7 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="relative z-10 mt-4 leading-8 text-gray-400">
                {feature.desc}
              </p>

              {/* Bottom Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}