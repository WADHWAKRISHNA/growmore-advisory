"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Hero from "./Hero";
import OurStory from "./OurStory";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import Timeline from "./Timeline";
import Founder from "./Founder";
import Leadership from "./Leadership";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

export default function AboutPage() {
  const router = useRouter();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Glow 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-44 -top-44 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[150px]"
      />

      {/* Background Glow 2 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[150px]"
      />

      {/* Back Button */}
      <motion.button
        onClick={() => router.back()}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        whileHover={{
          scale: 1.08,
          x: -4,
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl transition hover:border-yellow-500 hover:bg-yellow-500/20"
      >
        ← Back
      </motion.button>

      <Hero />
      <OurStory />
      <MissionVision />
      <WhyChooseUs />
      <Timeline />
      <Founder />
      <Leadership />
      <Testimonials />
      <CTA />

    </motion.main>
  );
}