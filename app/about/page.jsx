"use client";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
        {/* --- Hero Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#7ee7f9]">Full Stack Developer & Systems Strategist</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            I help businesses <span className="text-[#7ee7f9]">avoid fragile systems</span> by building websites and applications that are 
            <span className="text-[#7ee7f9]"> secure, scalable, and built for real-world usage</span>.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* --- Journey Section --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              For nearly <span className="text-[#7ee7f9] font-semibold">three years</span>, I’ve worked at the intersection of user experience and technical infrastructure. 
              I don’t just build interfaces, I ensure they <span className="text-[#7ee7f9]">perform reliably in real-world environments</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My background in IT Support means I can anticipate <span className="text-[#7ee7f9]">system vulnerabilities</span>, optimize deployments, and troubleshoot before small issues become costly problems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              The result? I create not just <span className="text-[#7feb9d]">beautiful, responsive interfaces</span>, but <span className="text-[#7feb9d]">robust, maintainable systems</span> that truly support business growth.
            </p>

            {/* --- Mini Project Showcase --- */}
            <div className="mt-8 p-6 bg-[#0e1821] rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-[#7ee7f9]">A Glimpse of My Work</h3>
              <p className="text-gray-300 mb-4">
                Here’s a project that highlights my approach:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7ee7f9] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white">Nigerian Food Ordering Platform</h4>
                    <p className="text-sm text-gray-400">
                      Developed for real-world usability, integrating Email APIs to ensure orders reach businesses instantly while maintaining secure, scalable backend systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <a 
                  href="/projects" 
                  className="inline-block px-6 py-2 bg-[#7ee7f9] text-gray-900 font-semibold rounded-lg hover:bg-[#68d8eb] transition-colors"
                >
                  See Full Portfolio
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- Expertise Section --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1"
          >
            <div className="bg-[#0e1821] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-[#7ee7f9] text-center">
                My Expertise
              </h3>
              
              <div className="space-y-6">
                {/* Frontend Development */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7ee7f9] rounded-full"></span>
                    Frontend Development
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    Responsive, accessible web applications built with modern tools that prioritize user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* IT & Systems Support */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7ee7f9] rounded-full"></span>
                    IT & Systems Support
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    Ensuring digital systems operate smoothly, securely, and efficiently to support business operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Application Deployment', 'Server Configuration', 'Network Troubleshooting', 'System Monitoring', 'Hardware Setup'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Cloud & Infrastructure */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7ee7f9] rounded-full"></span>
                    Cloud & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Microsoft 365', 'DNS Management', 'License Management', 'Email Systems', 'User Provisioning'].map(tool => (
                      <span key={tool} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tool}</span>
                    ))}
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7ee7f9] rounded-full"></span>
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Vercel', 'Netlify', 'Resend', 'Brevo', 'Anydesk', 'Microsoft 365', 'VScode', 'Teamviewer', 'Cpanel', 'Active Directory'].map(tool => (
                      <span key={tool} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Problem Solving Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-semibold mb-10 text-[#7ee7f9] text-center">
            Beyond Code: Solving Real Business Challenges
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Network Story */}
            <div className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#7ee7f9] rounded-full"></div>
                <h4 className="text-xl font-semibold text-white">Network Infrastructure Crisis</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Prevented operational downtime by resolving firewall misconfigurations, restoring connectivity, and protecting business continuity during critical operations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Firewall Configuration','Network Troubleshooting','Crisis Management'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>

            {/* Deployment Story */}
            <div className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#7ee7f9] rounded-full"></div>
                <h4 className="text-xl font-semibold text-white">BankOne Software Deployment</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Resolved deployment issues by addressing permission conflicts, enabling secure, smooth operation across all systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Application Deployment','User Permissions','Security Configuration'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Microsoft 365 Story */}
          <div className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#7ee7f9] rounded-full"></div>
              <h4 className="text-xl font-semibold text-white">Microsoft 365 Infrastructure Management</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Led migration to Microsoft 365, managing licenses, DNS configuration, and user provisioning for seamless communication and scalability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Migration','DNS Configuration','License Management'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Optimized subscription costs, streamlined onboarding, and maintained reliable business email infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['User Provisioning','Budget Management','Email Systems'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Problem-Solving Philosophy */}
          <div className="p-6 bg-[#0e1821] rounded-2xl border border-gray-800">
            <h4 className="text-lg font-semibold text-white mb-3 text-center">My Problem-Solving Philosophy</h4>
            <p className="text-gray-300 text-sm leading-relaxed text-center max-w-3xl mx-auto">
              I approach challenges systematically: understanding environment constraints, identifying root causes, and implementing solutions that balance security, functionality, and business continuity.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {['End-to-End Ownership','Systematic Troubleshooting','User-Centric Solutions','Infrastructure Planning'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}