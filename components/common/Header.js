
"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

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
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

// Hamburger to "R" animation
const hamburgerVariants = {
  closed: { rotate: 0, transition: { duration: 0.2 } },
  open: { rotate: 90, transition: { duration: 0.2 } },
};

const lineVariants = {
  closed: { opacity: 1, y: 0, transition: { duration: 0.15 } },
  open: { opacity: 0, transition: { duration: 0.15 } },
};

const rVariants = {
  closed: { opacity: 0, scale: 0, transition: { duration: 0.15 } },
  open: { opacity: 1, scale: 1, transition: { duration: 0.15 } },
};

// Header entrance animation
const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 5);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true); // Non-home pages: header with gradient background
      return;
    }

    // Homepage: header with transparent background initially
    setIsScrolled(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, handleScroll]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-150 ${
        isScrolled || !isHomePage
          ? "bg-gradient-to-r from-[#00A3B3] to-[#1A3C5A] shadow-lg"
          : "bg-transparent"
      }`}
      variants={headerVariants}
      initial="visible" // Always visible initially
      animate="visible" // Keep visible, only background changes
      role="banner"
      style={{ margin: 0, boxSizing: "border-box" }}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center h-16 sm:h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center"
          role="img"
          aria-label="Reload Physiotherapy Logo"
        >
          <motion.img
            src="/logo.webp"
            alt="Reload Physiotherapy Logo"
            width={120}
            height={120}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="object-contain sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
          />
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <Link href={link.href}>
                <motion.span
                  className="text-white text-sm lg:text-base font-medium focus:outline-none relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  aria-label={link.name}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Book Appointment Button */}
        <motion.a
          href="/contact#booking"
          className="hidden md:block bg-white text-[#1A3C5A] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm lg:text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 12px rgba(255, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          aria-label="Book Appointment"
        >
          Book Appointment
        </motion.a>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
          onClick={() => toggleOpen()}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-white mb-1.5"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="w-6 h-0.5 bg-white mb-1.5"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className="absolute text-white font-bold text-lg"
            variants={rVariants}
            animate={isOpen ? "open" : "closed"}
          >
            R
          </motion.span>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-gradient-to-b from-[#00A3B3] to-[#1A3C5A] overflow-hidden"
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
        role="navigation"
        aria-label="Mobile Menu"
      >
        <ul className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <li key={link.name} className="py-2 relative">
              <Link href={link.href}>
                <motion.span
                  className="text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  onClick={() => toggleOpen()}
                  aria-label={link.name}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </motion.span>
              </Link>
            </li>
          ))}
          <li className="py-2">
            <motion.a
              href="/contact"
              className="bg-white text-[#1A3C5A] px-4 py-2 rounded-full text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleOpen()}
              aria-label="Book Appointment"
            >
              Book Appointment
            </motion.a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}