"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

// Nav links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Book Now", href: "/contact" },
];

// Mobile menu variants
const menuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

// Hamburger to "R" animation
const hamburgerVariants = {
  closed: {
    rotate: 0,
    transition: { duration: 0.5 },
  },
  open: {
    rotate: 90,
    transition: { duration: 0.5 },
  },
};

const lineVariants = {
  closed: { opacity: 1, y: 0 },
  open: { opacity: 0 },
};

const rVariants = {
  closed: { opacity: 0, scale: 0 },
  open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
      className={`fixed top-0 left-0 w-full bg-[#FFFFFF] z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex items-center"
          role="img"
          aria-label="Reload Physiotherapy Logo"
        >
          <motion.Image
            src="/logo.png" // Replace with your logo path
            alt="Reload Physiotherapy Logo"
            width={62}
            height={62}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="object-contain  bg-black rounded-full"
          />
          
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} passHref>
                <motion.a
                  className="text-[#1A3C5A] font-medium"
                  whileHover={{ color: "#00A3B3" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  aria-label={link.name}
                >
                  {link.name}
                </motion.a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Book Appointment Button */}
        <motion.a
          href="/contact"
          className="hidden md:block bg-[#1A3C5A] text-white px-4 py-2 rounded-lg font-medium"
          initial={{ opacity: 0, boxShadow: "0 0 0 rgba(0, 163, 179, 0)" }}
          animate={{ opacity: 1, boxShadow: "0 0 10px rgba(0, 163, 179, 0.3)" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0, 163, 179, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 1 }}
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
            className="w-6 h-0.5 bg-[#1A3C5A] mb-1.5"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#1A3C5A] mb-1.5"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#1A3C5A]"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="absolute text-[#00A3B3] font-bold text-lg"
            variants={rVariants}
            animate={isOpen ? "open" : "closed"}
          >
            R
          </motion.span>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-[#FFFFFF] overflow-hidden max-w-[80%] mx-auto" // Adjusted width
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
        role="navigation"
        aria-label="Mobile Menu"
      >
        <ul className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <li key={link.name} className="py-2">
              <Link href={link.href} passHref>
                <motion.a
                  className="text-[#1A3C5A] font-medium"
                  whileHover={{ color: "#00A3B3" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  onClick={() => toggleOpen()}
                  aria-label={link.name}
                >
                  {link.name}
                </motion.a>
              </Link>
            </li>
          ))}
          <li className="py-2">
            <motion.a
              href="/contact"
              className="bg-[#1A3C5A] text-white px-4 py-2 rounded-lg font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(0, 163, 179, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 1 }}
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
