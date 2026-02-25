


"use client";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    
    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Close form after 3 seconds
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus("");
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Email copied to clipboard!');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Email copied to clipboard!');
    }
  };

  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Contact Form Popup */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => !isSubmitting && setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#0e1821] border border-[#7ee7f9] rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send Me a Message
                </h3>
                <p className="text-gray-300">
                  Fill out the form below and I&apos;ll get back to you soon!
                </p>
              </div>

              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-xl font-bold text-[#7ee7f9] mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thank you! Your message has been delivered directly to my inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7ee7f9] transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7ee7f9] transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7ee7f9] transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7ee7f9] transition-colors resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      disabled={isSubmitting}
                      className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#7ee7f9] text-gray-900 py-3 rounded-lg font-semibold hover:bg-[#68d8eb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-sm text-center">
                  Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

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
            Welcome to <span className="text-[#7ee7f9] font-semibold">Maryann&apos;s World</span>, a developer who believes that great technology 
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
            <div 
              onClick={() => copyToClipboard("mhycienth58@gmail.com")}
              className="text-white hover:text-[#7ee7f9] transition-colors break-all cursor-pointer select-all"
            >
              mhycienth58@gmail.com
            </div>
            <p className="text-gray-400 text-xs mt-2">(Click to copy)</p>
          </motion.div>

          {/* Email 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#7ee7f9] transition-all"
          >
            <div className="text-2xl mb-3">💼</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7ee7f9]">Work Email</h3>
            <p className="text-gray-300 text-sm mb-4">For professional inquiries</p>
            <div 
              onClick={() => copyToClipboard("mhycienth57@gmail.com")}
              className="text-white hover:text-[#7ee7f9] transition-colors break-all cursor-pointer select-all"
            >
              mhycienth57@gmail.com
            </div>
            <p className="text-gray-400 text-xs mt-2">(Click to copy)</p>
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
              href="https://wa.me/2347026743308" 
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
              href="tel:+2349045788664" 
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
              href="https://linkedin.com/in/maryann-o-b59966185"
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
            Prefer to start with a detailed message? Use the form below
          </p>
          <motion.button
            onClick={() => setShowForm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7ee7f9] text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition text-lg"
          >
            Send Me a Message →
          </motion.button>
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