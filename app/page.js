

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
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A{" "}
                <span className="text-orange-400 font-semibold">Frontend Developer</span> and{" "}
                <span className="text-[#7ee7f9] font-semibold">IT Support Specialist</span>{" "}
                crafting digital experiences that blend beauty with functionality.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex justify-center gap-8 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "20+", label: "Projects" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
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
