"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  function isProductActive() {
    return pathname === "/products" || pathname.includes("/products/");
  }

  return (
    <header className="bg-[var(--primary)] shadow-md w-full sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo, always on the left */}
        <Link
          href="/"
          className="font-bold hover:scale-105 transition-transform"
          style={{ paddingLeft: 10, display: "flex", alignItems: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-poppins-regular)",
              color: "white",
            }}
          >
            Chris Sharp
          </p>
        </Link>

        <nav
          className="hidden md:flex space-x-6"
          style={{ paddingRight: 10, fontWeight: 800 }}
        >
          <Link
            href="/about"
            className={`hover:scale-110 transition-transform ${
              isActive("/about") ? "text-[var(--secondary)]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-poppins-regular)" }}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={`hover:scale-110 transition-transform ${
              isProductActive() ? "text-[var(--secondary)]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-poppins-regular)" }}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`hover:scale-110 transition-transform ${
              isActive("/contact") ? "text-[var(--secondary)]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-poppins-regular)" }}
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--primary)] p-4 absolute w-full shadow-lg"
          >
            <Link
              href="/about"
              className={`block py-2 ${
                isActive("/about") ? "text-[var(--secondary)]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-poppins-bold)" }}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`block py-2 ${
                isProductActive() ? "text-[var(--secondary)]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-poppins-bold)" }}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`block py-2 ${
                isActive("/contact") ? "text-[var(--secondary)]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-poppins-bold)" }}
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
