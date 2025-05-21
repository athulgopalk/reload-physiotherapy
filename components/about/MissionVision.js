"use client";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function MissionVision() {
  return (
    <section
      className="relative bg-[#F7F7F7] py-12 sm:py-16 md:py-20 overflow-hidden"
      role="region"
      aria-label="Mission and Vision"
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[#E8F5FF]/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Mission Section */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <motion.div variants={iconVariants}>
              <Heart
                className="w-12 h-12 text-[#00A3B3] mb-4"
                aria-hidden="true"
              />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-4 font-poppins">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-[#1A3C5A]/80">
              To empower individuals to move freely and live pain-free through
              expert physiotherapy.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <motion.div variants={iconVariants}>
              <Star
                className="w-12 h-12 text-[#00A3B3] mb-4"
                aria-hidden="true"
              />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-4 font-poppins">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-[#1A3C5A]/80">
              To lead the way in physiotherapy by delivering personalized,
              innovative, and result-driven treatment solutions that help people
              move better and live stronger.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Reload Physiotherapy",
          description:
            "Reload Physiotherapy’s mission is to empower individuals to move freely and live pain-free through expert physiotherapy, with a vision to be India’s leading physiotherapy provider, blending innovation and care.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "IN",
          },
        })}
      </script>
    </section>
  );
}
