"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const subtextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 15px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: { duration: 1, ease: "easeOut" },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const waveVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: {
    scale: 1.3,
    opacity: 0.2,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const particleVariants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: [0.8, 1, 0],
    y: "-100vh",
    transition: { duration: 6, ease: "easeOut" },
  },
};

export default function JoinTeam() {
  return (
    <section
      className="relative bg-[#E8F5FF] py-16 sm:py-20 md:py-24 overflow-hidden"
      role="complementary"
      aria-label="Join Our Team"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_20s_linear_infinite]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/20 to-[#F7F7F7]/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00A3B3] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative text-center">
        {/* WhatsApp Icon */}
        <motion.div
          className="mb-8"
          variants={iconVariants}
          initial="initial"
          animate="pulse"
        >
          <MessageCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#00A3B3] mx-auto" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] mb-6 font-poppins"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Join Our Team
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#1A3C5A]/80 mb-8 max-w-2xl mx-auto"
          variants={subtextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Be part of our mission to empower movement.
        </motion.p>

        {/* CTA Button with Empowerment Wave */}
        <motion.div className="relative inline-block">
          <motion.div
            className="absolute inset-0 bg-[#00A3B3] rounded-full blur-xl"
            variants={waveVariants}
            initial="rest"
            whileHover="hover"
          />
          <motion.a
            href="https://wa.me/your_number" // Replace with WhatsApp number or group link
            className="relative bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1A3C5A] transition-colors duration-300"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            aria-label="Join WhatsApp Community"
          >
            Join Now
          </motion.a>
        </motion.div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Join Our Team - Reload Physiotherapy",
          description:
            "Join Reload Physiotherapy’s WhatsApp community to be part of our mission to empower movement.",
          url: "https://reloadphysio.in/contact#join-team",
        })}
      </script>

      {/* Styles */}
      <style jsx>{`
        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1000px;
          }
        }
      `}</style>
    </section>
  );
}
