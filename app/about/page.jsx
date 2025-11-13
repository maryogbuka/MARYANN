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
            Hi, I&apos;m <span className="text-[#7ee7f9]">Maryann</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            I bridge the gap between <span className="text-[#7ee7f9]">elegant code</span> and{" "}
            <span className="text-[#7ee7f9]">robust systems</span>.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* --- Story Text --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              For almost <span className="text-[#7ee7f9] font-semibold">three years</span>, I&apos;ve been working at the intersection of user experience and technical infrastructure.
              Unlike many developers who only see the frontend, I understand what happens <span className="text-[#7ee7f9]">under the hood</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My IT Support background gives me a unique superpower: I build applications with a 
              <span className="text-[#7ee7f9]"> deep understanding of how they&apos;ll perform in real-world environments</span>. 
              From server configurations to network troubleshooting, I see the full picture.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              This means I don&apos;t just create <span className="text-[#7feb9d]">beautiful interfaces</span> I build{" "}
              <span className="text-[#7feb9d]">resilient, maintainable systems</span> that actually work when they reach users.
            </p>

            {/* --- Mini Project Showcase --- */}
            <div className="mt-8 p-6 bg-[#0e1821] rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-[#7ee7f9]">A Glimpse of My Work</h3>
              <p className="text-gray-300 mb-4">
                While my full portfolio has more details, here&apos;s a project that represents my approach:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7ee7f9] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white">Nigerian Food Ordering Platform</h4>
                    <p className="text-sm text-gray-400">
                      Built with real-world usability in mind then integrated Email API for orders that 
                      actually reach businesses instantly.
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

          {/* --- Skills & Expertise --- */}
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
                    Creating responsive, accessible web applications with modern tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
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
                    Ensuring digital systems run smoothly and efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Application Deployment', 'Server Configuration', 'Network Troubleshooting', 'System Monitoring', 'Hardware Setup'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
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
                    {['Microsoft 365', 'DNS Management', 'License Management', 'Email Systems', 'User Provisioning'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7ee7f9] rounded-full"></span>
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Vercel', 'Netlify', 'Resend', 'Brevo' , 'Anydesk' , 'Microsoft 365' , 'VScode' , 'Teamviewer' , 'Cpanel' , 'Active Directory'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- IT Problem-Solving Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-semibold mb-10 text-[#7ee7f9] text-center">
            Beyond Code: Solving Real Infrastructure Challenges
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Network Crisis Story */}
            <div className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#7ee7f9] rounded-full"></div>
                <h4 className="text-xl font-semibold text-white">Network Infrastructure Crisis</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Resolved a major organization-wide network outage by identifying firewall misconfigurations 
                that wasn&apos;t ISP-related. Systematically isolated the issue and restored full connectivity, 
                minimizing business disruption during critical operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  Firewall Configuration
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  Network Troubleshooting
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  Crisis Management
                </span>
              </div>
            </div>

            {/* BankOne Deployment Story */}
            <div className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#7ee7f9] rounded-full"></div>
                <h4 className="text-xl font-semibold text-white">BankOne Software Deployment</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Solved critical application deployment issues during BankOne integration by identifying 
                permission conflicts between default admin accounts and user profiles. Implemented a 
                strategic solution that maintained security while enabling successful application 
                execution across all user systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  Application Deployment
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  User Permissions
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  Security Configuration
                </span>
              </div>
            </div>
          </div>

          {/* Microsoft 365 Story - Full Width */}
          <div className="bg-[#0e1821] p-6 rounded-2xl border border-gray-800 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#7ee7f9] rounded-full"></div>
              <h4 className="text-xl font-semibold text-white">Microsoft 365 Infrastructure Management</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Spearheaded the organization&apos;s transition to Microsoft 365, starting with 7 user licenses 
                  and scaling as needed. Managed the complete deployment lifecycle including DNS record 
                  configuration for proper domain synchronization, license procurement and management, 
                  and user account provisioning with official corporate emails.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    Cloud Migration
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    DNS Configuration
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    License Management
                  </span>
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Handled budgeting and payments for Microsoft 365 subscriptions while continuously 
                  monitoring usage to optimize costs. Established efficient user onboarding processes 
                  and maintained the entire email infrastructure, ensuring reliable business 
                  communication across the organization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    User Provisioning
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    Budget Management
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    Email Systems
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Problem-Solving Philosophy */}
          <div className="p-6 bg-[#0e1821] rounded-2xl border border-gray-800">
            <h4 className="text-lg font-semibold text-white mb-3 text-center">My Problem-Solving Philosophy</h4>
            <p className="text-gray-300 text-sm leading-relaxed text-center max-w-3xl mx-auto">
              I approach technical challenges with a systematic methodology: understand the environment constraints, 
              identify root causes rather than symptoms, and implement solutions that balance security with functionality. 
              Whether it&apos;s network infrastructure, software deployment, or cloud migration, I find the intersection 
              where technology actually serves the people using it.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                End-to-End Ownership
              </span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                Systematic Troubleshooting
              </span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                User-Centric Solutions
              </span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                Infrastructure Planning
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}