"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, X } from "lucide-react"; // Changed X to Twitter

// Quick links
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Career", href: "/contact#career" },
];

// Social media links
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={24} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/reload.physiotherapy/?igsh=MXFhaGwxb3pmMzNyZQ%3D%3D#",
    icon: <Instagram size={24} />,
  },
  {
    name: "X", // Changed from X to Twitter
    href: "https://x.com",
    icon: <X size={24} />,
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay: i * 0.3 },
  }),
};

const linkVariants = {
  hover: {
    scale: 1.05,
    color: "#00A3B3",
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const socialVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 10px rgba(0, 163, 179, 0.5)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer
      className="bg-[#1A3C5A] text-white py-12"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-[#F7F7F7] text-[#1A3C5A]/90 rounded-lg p-10">
          {/* Company Info */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left border-t md:border-t-0 pt-6 md:pt-0"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="/logo-m.png"
                alt="Reload Physiotherapy Logo"
                width={84}
                height={84}
                className="object-contain rounded-full"
                aria-label="Reload Physiotherapy Logo"
              />
            </motion.div>
            <p className="text-sm font-poppins mb-2">
              Empowering Movement, Restoring Strength
            </p>
            <p className="text-sm">Delivering world-class physiotherapy</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col items-center md:items-start border-t md:border-t-0 pt-6 md:pt-0"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-base md:text-xl font-semibold font-poppins mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span
                      className="text-xs md:text-base"
                      whileHover="hover"
                      variants={linkVariants}
                      aria-label={link.name}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col items-center md:items-start border-t md:border-t-0 pt-6 md:pt-0"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-base md:text-xl font-semibold font-poppins mb-6">
              Contact Us
            </h3>
            <p className="text-xs md:text-base mb-2">
              <motion.a
                href="mailto:info@reloadphysio.com"
                whileHover={{ color: "#00A3B3" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                aria-label="Email Reload Physiotherapy"
              >
                reloadphysiotherapy@gmail.com
              </motion.a>
            </p>
            <p className="text-xs md:text-base mb-2">
              <motion.a
                href="tel:+91-XXXX-XXXX"
                whileHover={{ color: "#00A3B3" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                aria-label="Call Reload Physiotherapy"
              >
                +91-XXXX-XXXX
              </motion.a>
            </p>
            <p className="text-xs md:text-base">
              Ambikanagar, Gandhi Nagar, Kavoor, Mangaluru, Karnataka 575015
            </p>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          className="flex justify-center space-x-3 md:space-x-4 mt-10"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer noindex"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
              whileHover="hover"
              variants={socialVariants}
              aria-label={`Follow Reload Physiotherapy on ${social.name}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm mt-10">
          <p>
            © {new Date().getFullYear()} Reload Physiotherapy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
