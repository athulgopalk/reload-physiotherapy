
"use client";
import { motion } from "framer-motion";
import ServiceImage from "./ServiceImage";
import ServiceDetails from "./ServiceDetails";

// Card animation: Subtle border glow on hover
const cardVariants = {
  rest: { boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" },
  hover: {
    boxShadow: "0 0 10px rgba(0, 163, 179, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Healing Ripple: Lightweight teal wave effect
const rippleVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: {
    scale: 1.05,
    opacity: 0.08,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Vignette: Minimal overlay for depth
const vignetteVariants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 0.1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function ServiceCard({ service }) {
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-md border border-[#00A3B3]/20 overflow-hidden w-full max-w-[16rem] mx-auto h-[24rem]"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
    >
      {/* Healing Ripple */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)]"
        variants={rippleVariants}
        initial="rest"
        whileHover="hover"
      />
      {/* Vignette */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,179,0.15)_0%,transparent_70%)]"
        variants={vignetteVariants}
        initial="rest"
        whileHover="hover"
      />
      <ServiceImage src={service.image} alt={service.title} />
      <ServiceDetails service={service} />
    </motion.div>
  );
}