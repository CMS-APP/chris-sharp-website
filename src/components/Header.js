/** @format */

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLink from "./HeaderLink";
import {
  faHome,
  faBox,
  faWrench,
  faInfoCircle,
  faStar,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between md:justify-center bg-white md:bg-transparent border-b border-gray-200 md:border-none">
      <div className="flex items-center p-2 w-full md:w-full justify-center">
        <Link href="/" className="flex-1">
          <h2
            style={{
              fontFamily: "var(--font-poppins-regular)",
              color: "black",
              marginLeft: "20px",
              fontSize: "1.2rem"
            }}
          >
            Chris Sharp
          </h2>
        </Link>

        <nav
          className="hidden md:flex space-x-5 shadow-lg justify-center"
          style={{
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "30px",
            padding: "8px 20px",
            border: "1px solid #e0e0e0"
          }}
        >
          <HeaderLink href="/" title="Home" />
          <HeaderLink href="/projects" title="Projects" />
          {/* <HeaderLink href="/about" title="About" />
          <HeaderLink href="/testimonials" title="Testimonials" /> */}
          <HeaderLink href="/contact" title="Contact" />
        </nav>

        <div className="flex-1" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-black relative z-50"
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 80 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 p-4 absolute w-full shadow-lg"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <HeaderLink href="/" title="Home" icon={faHome} />
              <HeaderLink href="/products" title="Products" icon={faBox} />
              <HeaderLink href="/services" title="Services" icon={faWrench} />
              <HeaderLink href="/about" title="About" icon={faInfoCircle} />
              <HeaderLink
                href="/testimonials"
                title="Testimonials"
                icon={faStar}
              />
              <HeaderLink href="/contact" title="Contact" icon={faEnvelope} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
