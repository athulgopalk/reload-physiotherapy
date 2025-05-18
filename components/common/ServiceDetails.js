import { motion } from "framer-motion";
import Link from "next/link";

// Placeholder icons; replace with Lucide or custom SVGs in public/icons/
const icons = {
  SpineIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  RunningIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  KneeIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  HandsIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  NeedleIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  PostureIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  BrainIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  ChildElderlyIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  DumbbellIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
  LaptopIcon: () => (
    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#00A3B3] rounded-full" />
  ),
};

// Icon animation: Scale and glow on hover
const iconVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.2,
    boxShadow: "0 0 10px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Description: Always visible, fits within fixed card height
const detailsVariants = {
  initial: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants = {
  initial: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiceDetails({ service }) {
  const Icon = icons[service.icon] || (() => <div />);

  return (
    <div className="p-4 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-14rem)] md:h-[calc(100%-16rem)]">
      <div className="flex items-center mb-3">
        <motion.div variants={iconVariants} initial="rest" whileHover="hover">
          <Icon />
        </motion.div>
        <motion.h3
          className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A3C5A] ml-3 font-poppins"
          variants={titleVariants}
          initial="initial"
          animate="visible"
        >
          {service.title}
        </motion.h3>
      </div>
      <motion.div
        className="flex-grow"
        variants={detailsVariants}
        initial="initial"
        animate="visible"
      >
        <p className="text-sm sm:text-base text-[#1A3C5A]/80 mb-3 line-clamp-3">
          {service.description}
        </p>
        <Link
          href="/contact#booking"
          className="inline-block bg-[#00A3B3] text-white px-3 py-1.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#1A3C5A] transition-colors duration-300"
          aria-label={`Book ${service.title}`}
        >
          Book Now
        </Link>
      </motion.div>
    </div>
  );
}
