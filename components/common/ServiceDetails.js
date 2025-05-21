

"use client";
import { motion } from "framer-motion";
import {
  Activity,
  Bone,
  Brain,
  Dumbbell,
  Hand,
  Laptop,
  Sparkles,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

// Icon mapping with Lucide icons
const icons = {
  SpineIcon: () => <Bone size={24} className="text-[#00A3B3]" />,
  RunningIcon: () => <Activity size={24} className="text-[#00A3B3]" />,
  KneeIcon: () => <Bone size={24} className="text-[#00A3B3]" />,
  HandsIcon: () => <Hand size={24} className="text-[#00A3B3]" />,
  NeedleIcon: () => <Zap size={24} className="text-[#00A3B3]" />,
  PostureIcon: () => <UserCheck size={24} className="text-[#00A3B3]" />,
  BrainIcon: () => <Brain size={24} className="text-[#00A3B3]" />,
  ChildElderlyIcon: () => <Users size={24} className="text-[#00A3B3]" />,
  DumbbellIcon: () => <Dumbbell size={24} className="text-[#00A3B3]" />,
  LaptopIcon: () => <Laptop size={24} className="text-[#00A3B3]" />,
};

// Icon animation: Subtle scale and glow
const iconVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 6px rgba(0, 163, 179, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Content animation
const contentVariants = {
  initial: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ServiceDetails({ service }) {
  const Icon = icons[service.icon] || Sparkles;

  return (
    <motion.div
      className="p-3 flex flex-col items-center justify-center h-[calc(100%-8rem)] text-center"
      variants={contentVariants}
      initial="initial"
      animate="visible"
    >
      <div className="flex items-center justify-center mb-2">
        <motion.div variants={iconVariants} initial="rest" whileHover="hover">
          <Icon />
        </motion.div>
      </div>
      <h3 className="text-base font-semibold text-[#1A3C5A] mb-1 font-poppins">
        {service.title}
      </h3>
      <p className="text-xs text-[#1A3C5A]/80 line-clamp-3">
        {service.description}
      </p>
    </motion.div>
  );
}