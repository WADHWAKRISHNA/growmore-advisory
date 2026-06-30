"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero({ onConsultation }) {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-24 lg:pt-36">

      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_.95fr]">

        <HeroContent onConsultation={onConsultation} />

        <HeroDashboard />

      </div>

    </section>
  );
}