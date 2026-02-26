"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PageTransition from "./components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Image
        src="/maryann.png"
        alt="Background Image"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-20"
        fill
      />

      <section className="flex flex-col pt-20 items-center justify-center text-center min-h-[90vh] px-6">
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building{" "}
          <span className="text-[#7ee7f9]">Scalable Web Systems</span>
          <br className="hidden md:block" />
          for Real Businesses
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I design and build secure, high-performance websites and applications
          that help businesses operate smoothly, earn trust, and scale without
          technical friction.
        </motion.p>

        {/* Credibility Stats */}
        <motion.div
          className="flex justify-center gap-10 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[
            { number: "3+", label: "Years Building Production Systems" },
            { number: "10+", label: "Completed Web Solutions" },
            { number: "End-to-End", label: "Ownership & Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7ee7f9] text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
          >
            View Live Projects →
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#7ee7f9] text-[#7ee7f9] font-semibold px-8 py-3 rounded-full hover:bg-[#7ee7f9]/10 transition"
          >
            Book a Strategy Call
          </motion.a>
        </motion.div>
      </section>
    </PageTransition>
  );
}