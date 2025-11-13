"use client";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Personal Introduction */}
        <motion.div
          className="max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s Build <span className="text-[#7ee7f9]">Together</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
           Welcome to  <span className="text-[#7ee7f9] font-semibold">Maryann&apos;s World</span>, a developer who believes that great technology 
            should solve real problems. Whether you&apos;re looking for a collaborator, need help with a project, 
            or just want to talk tech, I&apos;d love to hear from you.
          </p>
          <p className="text-gray-400">
            I typically respond within a few hours - let&apos;s create something amazing!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Email 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#7ee7f9] transition-all"
          >
            <div className="text-2xl mb-3">📧</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7ee7f9]">Primary Email</h3>
            <p className="text-gray-300 text-sm mb-4">For projects & collaborations</p>
            <a 
              href="mailto:maryann.ogbuka@gmail.com" 
              className="text-white hover:text-[#7ee7f9] transition-colors break-all"
            >
              mhycienth58@gmail.com
            </a>
          </motion.div>

          {/* Email 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#7ee7f9] transition-all"
          >
            <div className="text-2xl mb-3">💼</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7ee7f9]">Work Email</h3>
            <p className="text-gray-300 text-sm mb-4">For professional inquiries</p>
            <a 
              href="mailto:maryann.ogbuka.work@gmail.com" 
              className="text-white hover:text-[#7ee7f9] transition-colors break-all"
            >
              mhycienth57@gmail.com
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#7ee7f9] transition-all"
          >
            <div className="text-2xl mb-3">💬</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7ee7f9]">WhatsApp</h3>
            <p className="text-gray-300 text-sm mb-4">Quick chats & updates</p>
            <a 
              href="https://wa.me/2348123456308" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7ee7f9] transition-colors"
            >
              +234 702 674 3308
            </a>
          </motion.div>

          {/* Mobile */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#7ee7f9] transition-all"
          >
            <div className="text-2xl mb-3">📱</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7ee7f9]">Mobile</h3>
            <p className="text-gray-300 text-sm mb-4">Call or text me directly</p>
            <a 
              href="tel:+2348123456789" 
              className="text-white hover:text-[#7ee7f9] transition-colors"
            >
              +234 904 578 8664
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#7ee7f9] transition-all"
          >
            <div className="text-2xl mb-3">💻</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7ee7f9]">GitHub</h3>
            <p className="text-gray-300 text-sm mb-4">See my code & projects</p>
            <a 
              href="https://github.com/maryogbuka" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7ee7f9] transition-colors"
            >
              @maryogbuka
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#7ee7f9] transition-all"
          >
            <div className="text-2xl mb-3">👔</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7ee7f9]">LinkedIn</h3>
            <p className="text-gray-300 text-sm mb-4">Professional network</p>
            <a 
              href="https://linkedin.com/in/annie-o-b59966185" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7ee7f9] transition-colors"
            >
              Maryann Ogbuka
            </a>
          </motion.div>
        </motion.div>

        {/* Quick Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Prefer to start with a quick hello? Use the button below
          </p>
          <motion.a
            href="mailto:mhycienth57@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7ee7f9] text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition text-lg"
          >
            Send Me an Email →
          </motion.a>
        </motion.div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 p-6 bg-[#0e1821] rounded-2xl border border-gray-800 max-w-2xl text-center"
        >
          <h3 className="text-lg font-semibold mb-3 text-[#7ee7f9]">A Little About My Approach</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I believe the best projects start with great communication. Whether you need a frontend developer, 
            IT support specialist, or someone who understands both worlds, I&apos;m here to help bring your ideas to life. 
            Let&apos;s discuss how we can work together to create solutions that are not just functional, but exceptional.
          </p>
        </motion.div>
      </section>
    </PageTransition>
  );
}