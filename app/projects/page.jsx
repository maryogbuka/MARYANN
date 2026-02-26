"use client";
import PageTransition from "../components/PageTransition";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ozis – Nigerian Food Ordering & Restaurant Management Platform",
    description:
      "A full-scale food ordering and restaurant management system built to help Nigerian restaurants accept payments, manage orders, track sales performance, and gain insight into customer preferences through analytics.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Paystack",
      "Admin Dashboard"
    ],
    image: "/ozis.png",
    liveLink: "https://foodmill.vercel.app",
    github: "https://github.com/maryogbuka/restaurant",
    features: [
      "Multi-payment support (Card, USSD, Bank Transfer)",
      "Restaurant admin dashboard with sales analytics",
      "Customer reviews and ratings system",
      "Real-time order processing",
      "Most-ordered meals and performance insights"
    ],
    role: "Full Stack Developer & UI Systems Designer"
  },
  {
    title: "Modern Standard Insurance Brokers – Corporate Website",
    description:
      "A professional corporate website built for an insurance brokerage firm to clearly present services, improve credibility, and streamline client inquiries through structured communication channels.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Resend API"
    ],
    image: "/msib.png",
    liveLink: "https://msibltd.com",
    github: "https://github.com/maryogbuka/msib",
    features: [
      "Clear service presentation for insurance offerings",
      "Email automation for client inquiries",
      "Responsive design across devices",
      "Lead capture and inquiry forms",
      "Professional brand presentation"
    ],
    role: "Frontend Developer"
  },
  {
    title: "POS Application & Deployment System",
    description:
      "A custom POS application and onboarding system built for a payment solutions company to simplify terminal requests, automate documentation, and streamline internal processing.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "PDF Generation"
    ],
    image: "/pos.png",
    liveLink: "https://oliveposforms.vercel.app",
    github: "https://github.com/maryogbuka/pos_deployment_form",
    features: [
      "Dynamic POS request forms",
      "Automated PDF document generation",
      "Email delivery of submissions",
      "Client data validation and processing",
      "Mobile-friendly interface"
    ],
    role: "Full Stack Developer"
  },
  {
    title: "Still Living – Fashion E-Commerce Platform",
    description:
      "A modern fashion e-commerce platform designed to help a growing brand sell products online, accept secure payments, manage orders, and track transactions using a unified reference system.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Paystack",
      "Flutterwave"
    ],
    image: "/ozybrand.png",
    liveLink: "https://ozybrand.vercel.app",
    github: "https://github.com/maryogbuka/brand",
    features: [
      "Product catalog and collections display",
      "Secure payments via Paystack and Flutterwave",
      "Unified payment reference tracking",
      "Order creation and verification",
      "Mobile-optimized storefront"
    ],
    role: "Full Stack Developer"
  },
  {
    title: "Jesus Club Tour – Event Ticketing Platform",
    description:
      "A complete event ticketing platform built to manage free and paid event registrations, ticket tiers, and secure online payments with automated ticket issuance.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Paystack",
      "Node.js"
    ],
    image: "/clubtour.png",
    liveLink: "https://lloydconcert.vercel.app",
    github: "https://github.com/maryogbuka/ConcertTicket",
    features: [
      "Event listings and ticket tiers",
      "Free and paid ticket workflows",
      "Secure online payments",
      "Cart-based ticket selection",
      "Automated ticket generation after payment"
    ],
    role: "Full Stack Developer"
  }
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-14 max-w-7xl mx-auto">

        {/* ---------- HERO ---------- */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Selected <span className="text-[#7ee7f9]">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These are real, deployed systems built to solve real business
            challenges — from payments and automation to scalability and user
            experience.
          </p>
        </motion.div>

        {/* ---------- PROJECTS ---------- */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-full text-sm text-[#7ee7f9]">
                    {project.role}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-[#7ee7f9] font-semibold mb-3">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-[#7ee7f9] rounded-full mt-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#7ee7f9] font-semibold mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#7ee7f9]/10 border border-[#7ee7f9]/20 text-[#7ee7f9] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-[#7ee7f9] text-gray-900 font-semibold px-6 py-3 rounded-lg text-center"
                  >
                    View Live System
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border border-[#7ee7f9] text-[#7ee7f9] font-semibold px-6 py-3 rounded-lg text-center"
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-24 p-10 bg-[#0e1821] rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Let’s Build Something That Works
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If you’re looking to build a reliable web platform  whether it’s
            e-commerce, internal systems, or customer-facing applications
            we can design and build a solution that fits your business goals.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#7ee7f9] text-gray-900 font-semibold px-10 py-4 rounded-full"
          >
            Start a Project Conversation →
          </motion.a>
        </motion.div>

      </section>
    </PageTransition>
  );
}