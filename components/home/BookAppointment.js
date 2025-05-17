"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 10px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
  pulse: {
    scale: [1, 1.03, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function BookAppointment() {
  // Zoom effect on scroll
  const scrollY = useMotionValue(0);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <section
      id="booking-form"
      className="relative bg-[#E8F5FF] py-12 sm:py-16 md:py-20 overflow-hidden"
      role="region"
      aria-label="Book an Appointment"
    >
      {/* Subtle Joint Illustration Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/joint-illustration-bg.svg')] bg-cover bg-center opacity-10"
        style={{ scale }}
      />
      <div className="absolute inset-0 bg-[#E8F5FF]/80" />

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#00A3B3] rounded-full opacity-30"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.5, 0.3],
              transition: {
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] mb-4 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Ready to Start Your Recovery?
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-[#1A3C5A] mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subtextVariants}
        >
          Book your session today!
        </motion.p>
        <Link href="/contact" passHref>
          <motion.a
            className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-500"
            whileHover="hover"
            whileTap="tap"
            animate="pulse"
            variants={buttonVariants}
            aria-label="Book Now"
          >
            Book Now
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
