
"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// Nav links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Career", href: "/contact#career" },
];

// Mobile menu variants
const menuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
};

// Hamburger to "R" animation
const hamburgerVariants = {
  closed: { rotate: 0, transition: { duration: 0.3 } },
  open: { rotate: 90, transition: { duration: 0.3 } },
};

const lineVariants = {
  closed: { opacity: 1, y: 0 },
  open: { opacity: 0 },
};

const rVariants = {
  closed: { opacity: 0, scale: 0 },
  open: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#FFFFFF]/5 z-50 transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : ""
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-16 sm:h-22">
    
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center"
          role="img"
          aria-label="Reload Physiotherapy Logo"
        >
          <motion.img
            src="/logo-min.png"
            alt="Reload Physiotherapy Logo"
            width={121}
            height={121}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="object-contain "
          />
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <motion.span
                  className="text-[#1A3C5A] text-sm lg:text-base font-medium"
                  whileHover={{ color: "#00A3B3" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  aria-label={link.name}
                >
                  {link.name}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Book Appointment Button */}
        <motion.a
          href="/contact"
          className="hidden md:block bg-[#1A3C5A] text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-sm lg:text-base font-medium"
          initial={{ opacity: 0, boxShadow: "0 0 0 rgba(0, 163, 179, 0)" }}
          animate={{ opacity: 1, boxShadow: "0 0 8px rgba(0, 163, 179, 0.3)" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 12px rgba(0, 163, 179, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          aria-label="Book Appointment"
        >
          Book Appointment
        </motion.a>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => toggleOpen()}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
        >
          <motion.span
            className="w-5 h-0.5 bg-[#1A3C5A] mb-1"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="w-5 h-0.5 bg-[#1A3C5A] mb-1"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="w-5 h-0.5 bg-[#1A3C5A]"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="absolute text-[#00A3B3] font-bold text-base"
            variants={rVariants}
            animate={isOpen ? "open" : "closed"}
          >
            R
          </motion.span>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-[#FFFFFF] overflow-hidden"
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
        role="navigation"
        aria-label="Mobile Menu"
      >
        <ul className="flex flex-col items-center py-2">
          {navLinks.map((link) => (
            <li key={link.name} className="py-1.5">
              <Link href={link.href}>
                <motion.span
                  className="text-[#1A3C5A] text-sm font-medium"
                  whileHover={{ color: "#00A3B3" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => toggleOpen()}
                  aria-label={link.name}
                >
                  {link.name}
                </motion.span>
              </Link>
            </li>
          ))}
          <li className="py-1.5">
            <motion.a
              href="/contact"
              className="bg-[#1A3C5A] text-white px-3 py-1.5 rounded-lg text-sm font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px rgba(0, 163, 179, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleOpen()}
              aria-label="Book Appointment"
            >
              Book Appointment
            </motion.a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}