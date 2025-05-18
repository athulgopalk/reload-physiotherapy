"use client";
import { motion } from "framer-motion";
import Link from "next/link";


// Animation variants
const textVariants = {
  hidden: { opacity: 0, translateZ: 0 },
  visible: {
    opacity: 1,
    translateZ: 15,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const subtextVariants = {
  hidden: { opacity: 0, translateZ: 0 },
  visible: {
    opacity: 1,
    translateZ: 10,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
  hover: {
    translateZ: 15,
    boxShadow: "0 0 12px rgba(0, 163, 179, 0.4)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const burstVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: {
    scale: 1.4,
    opacity: 0.15,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const sparkleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const orbVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 20px rgba(0, 163, 179, 0.5)",
      "0 0 30px rgba(0, 163, 179, 0.7)",
      "0 0 20px rgba(0, 163, 179, 0.5)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function CallToAction() {
  return (
    <section
      className="relative bg-[#E8F5FF] h-112 sm:h-128 md:h-[700px] overflow-hidden"
      role="complementary"
      aria-label="Call to Action"
    >
      {/* Background Lattice */}
      <div className="absolute inset-0 bg-[url('/joint-lattice.svg')] bg-cover bg-center animate-[pulse_4s_ease-in-out_infinite] opacity-20" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#00A3B3]/20 to-[#F7F7F7]/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Content */}
      <div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center text-center"
        style={{ perspective: "1000px" }}
      >
        {/* Holographic Orb */}
        <motion.div
          className="absolute top-1/4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)] rounded-full"
          variants={orbVariants}
          initial="initial"
          animate="animate"
          style={{ translateZ: 20 }}
        />
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1A3C5A] font-poppins mb-4 mt-20 sm:mt-24 md:mt-28"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Find the Right Service for You
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#1A3C5A]/80 mb-6 max-w-2xl mx-auto"
          variants={subtextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Book a consultation today.
        </motion.p>
        <motion.div
          className="relative inline-block"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          {/* Vitality Burst */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)]"
            variants={burstVariants}
            initial="rest"
            whileHover="hover"
          />
          {/* Micro-Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00A3B3] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={sparkleVariants}
                initial="initial"
                animate="rest"
                whileHover="animate"
                transition={{ delay: Math.random() * 0.3 }}
              />
            ))}
          </div>
          <Link
            href="/contact#booking"
            className="relative bg-gradient-to-r from-[#00A3B3]/80 to-[#00A3B3] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-sm md:text-base border border-[#00A3B3]/50 hover:bg-[#1A3C5A] transition-colors duration-300"
            aria-label="Book a Consultation"
          >
            Book Now
          </Link>
        </motion.div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Call to Action - Reload Physiotherapy Services",
          description:
            "Book a consultation to find the right physiotherapy service for you at Reload Physiotherapy.",
          url: "https://reloadphysio.in/services#cta",
        })}
      </script>

      {/* Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
