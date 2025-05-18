import { motion } from "framer-motion";
import ServiceImage from "./ServiceImage";
import ServiceDetails from "./ServiceDetails";

// Card animation: Border glow on hover, no scaling for classy look
const cardVariants = {
  rest: { boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" },
  hover: {
    boxShadow: "0 0 12px rgba(0, 163, 179, 0.4)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Healing Ripple: Teal wave expands on hover, symbolizing recovery
const rippleVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: {
    scale: 1.1,
    opacity: 0.15,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

// Vignette: Soft teal overlay for depth and hope-giving vibe
const vignetteVariants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 0.2,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceCard({ service }) {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg border border-[#00A3B3]/50 bg-gradient-to-br from-[#E8F5FF]/20 to-[#FFFFFF] overflow-hidden w-full max-w-96 mx-auto h-96"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
    >
      {/* Healing Ripple: Teal wave effect on hover */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)]"
        variants={rippleVariants}
        initial="rest"
        whileHover="hover"
      />
      {/* Vignette: Soft teal overlay for depth */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,179,0.3)_0%,transparent_70%)]"
        variants={vignetteVariants}
        initial="rest"
        whileHover="hover"
      />
      <ServiceImage src={service.image} alt={service.title} />
      <ServiceDetails service={service} />
    </motion.div>
  );
}
