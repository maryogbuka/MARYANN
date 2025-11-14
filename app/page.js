



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
        className="fixed top-0 left-0  w-full h-full object-cover -z-10 opacity-20"
        layout="fill"
        objectFit="cover"
      />


      <section className="flex flex-col pt-20 items-center justify-center text-center min-h-[90vh] px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Experiences with{" "}
          <span className="text-[#7ee7f9]">Elegance</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
        I design and build web experiences that don’t just look good but feel alive, interactive, fast, 
        and thoughtfully crafted to bring ideas to life in a way people can feel.
        </motion.p>

        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#7ee7f9] text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          View Projects →
        </motion.a>
      </section>
    </PageTransition>
  );
}
