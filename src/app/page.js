"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `New Inquiry:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(`https://wa.me/917452878887?text=${text}`, "_blank");
  };

  const services = [
    "GST Registration & Filing",
    "Income Tax Filing",
    "ROC Compliance",
    "Business Registration",
    "Accounting & Bookkeeping",
    "Startup Advisory",
  ];

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">

      <Navbar onConsultation={() => setOpenModal(true)} />
      <Hero onConsultation={() => setOpenModal(true)} />
      <Stats />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* WHATSAPP FLOAT */}
      <a
       href="https://wa.me/917452878887?text=Hi%20I%20want%20consultation"
       target="_blank"
       className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
       >
       WhatsApp Us
      </a>

      <ConsultationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </main>
  );
}