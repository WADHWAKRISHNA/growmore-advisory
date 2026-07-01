"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats/Stats";
import Services from "@/components/Services/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">

      <Navbar />

      <Hero
        onConsultation={() => setOpenModal(true)}
      />

      <TrustBar />

      <Stats />

      <Services />

      <About />

      <WhyChooseUs />

      <Leadership />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />

      {/* Floating WhatsApp */}

      <a
        href="https://wa.me/917452878887?text=Hi%20I%20want%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
      >
        💬 WhatsApp
      </a>

      <ConsultationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </main>
  );
} 