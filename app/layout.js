

import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Elegant frontend developer portfolio with flowing design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0f16] text-white overflow-x-hidden`}>
        {/* === Background Gradient (Embedded here) === */}
        {/* === Navbar === */}
        <nav className="fixed top-0 w-full flex justify-center gap-10 py-6 z-50 backdrop-blur-md bg-white/5">
          <Link href="/" className="hover:text-[#7ee7f9] transition">Home</Link>
          <Link href="/about" className="hover:text-[#7ee7f9] transition">About</Link>
          <Link href="/projects" className="hover:text-[#7ee7f9] transition">Projects</Link>
          <Link href="/contact" className="hover:text-[#7ee7f9] transition">Contact</Link>
        </nav>
        <main className="relative z-10 pt-24">{children}</main>
      </body>
    </html>
  );
}
