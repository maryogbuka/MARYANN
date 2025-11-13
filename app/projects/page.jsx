"use client";
import PageTransition from "../components/PageTransition";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ozis : Nigerian Food Ordering Platform",
    description: "A comprehensive restaurant management and food ordering platform built for Nigerian restaurants. Features full payment integration, admin analytics, and customer review systems to help restaurant owners grow their business.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "PayStack Payments", "Admin Dashboard"],
    image: "/ozis.png",
    liveLink: "https://ozis.vercel.app",
    github: "https://github.com/maryogbuka/restaurant",
    features: [
      "Multi-payment integration (Card, USSD, Bank Transfer)",
      "Restaurant admin portal for sales tracking",
      "Customer review and rating system",
      "Real-time order management",
      "Most popular foods analytics"
    ],
    role: "Full-stack Developer & UI/UX Designer"
  },
  {
    title: "Modern Standard Insurance Brokers",
    description: "Official website for Modern Standard Insurance Brokers, a Nigerian insurance company. Built with modern design principles and integrated email systems for client communication and lead generation.",
    tech: ["React", "Next.js", "JavaScript", "Resend API", "Tailwind CSS"],
    image: "/msib.png",
    liveLink: "https://msibltd.com",
    github: "https://github.com/maryogbuka/msib",
    features: [
      "Professional insurance service presentation",
      "Email integration with Resend API",
      "Responsive design for all devices",
      "Service coverage information",
      "Client inquiry forms"
    ],
    role: "Frontend Developer"
  },
  {
    title: "POS Application System",
    description: "A complete POS application form system for a payment solutions company. Enables customers to request POS terminals with automated PDF generation and email integration for streamlined processing.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript", "React", "PDF Generation"],
    image: "/pos.png",
    liveLink: "https://oliveposforms.vercel.app",
    github: "https://github.com/maryogbuka/pos_deployment_form",
    features: [
      "Dynamic POS application forms",
      "Automated PDF generation",
      "Email integration for submissions",
      "Form validation and data processing",
      "Mobile-responsive design"
    ],
    role: "Full-stack Developer"
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Real <span className="text-[#7ee7f9]">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are the actual projects I&apos;ve built and deployed. Each one solves 
            <span className="text-[#7ee7f9]"> real business problems</span> with 
            <span className="text-[#7ee7f9]"> practical, scalable solutions</span>.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center justify-between`}
            >
              {/* Project Image */}
              <div className="flex-1 group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <div className="text-sm font-semibold text-[#7ee7f9] mb-2">
                        {project.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Role Badge */}
                <div className="inline-block bg-[#7ee7f9]/10 border border-[#7ee7f9]/30 text-[#7ee7f9] px-4 py-2 rounded-full text-sm font-medium">
                  {project.role}
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-lg font-semibold text-[#7ee7f9] mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#7ee7f9] rounded-full mt-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-[#7ee7f9] mb-3">Technologies Used</h4>
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

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 bg-[#7ee7f9] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-[#68d8eb] transition-colors"
                  >
                    <span>View Live Site</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-[#7ee7f9] text-[#7ee7f9] font-semibold px-6 py-3 rounded-lg hover:bg-[#7ee7f9]/10 transition-colors"
                  >
                    <span>View Code</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20 p-8 bg-[#0e1821] rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you need a complete business platform like Ozis Food, a professional company website, 
            or custom application forms, I can help bring your vision to life with practical, 
            business-focused solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7ee7f9] text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-[#68d8eb] transition-colors"
            >
              Start a Project
            </motion.a>
            <motion.a
              href="https://ozis.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-[#7ee7f9] text-[#7ee7f9] font-semibold px-8 py-3 rounded-lg hover:bg-[#7ee7f9]/10 transition-colors"
            >
              See Ozis in Action
            </motion.a>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}