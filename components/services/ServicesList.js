// components/services/ServicesList.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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

// Services data
const services = [
  {
    id: "pain-management",
    title: "Pain Management",
    icon: "SpineIcon",
    description: "Relieve back, neck, and joint pain with targeted therapies.",
    image: "/images/pain-management.webp",
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehabilitation",
    icon: "RunningIcon",
    description: "Recover from acute and chronic sports injuries.",
    image: "/images/sports-injury.webp",
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Rehabilitation",
    icon: "KneeIcon",
    description: "Restore mobility after orthopedic surgeries.",
    image: "/images/post-surgical.webp",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    icon: "HandsIcon",
    description: "Joint mobilizations and soft tissue release.",
    image: "/images/manual-therapy.webp",
  },
  {
    id: "dry-needling",
    title: "Dry Needling & Cupping",
    icon: "NeedleIcon",
    description: "Target muscle trigger points for pain relief.",
    image: "/images/dry-needling.webp",
  },
  {
    id: "posture-correction",
    title: "Posture & Ergonomic Training",
    icon: "PostureIcon",
    description: "Improve posture and optimize workstation setup.",
    image: "/images/posture-correction.webp",
  },
  {
    id: "neuro-physio",
    title: "Neuro Physiotherapy",
    icon: "BrainIcon",
    description: "Rehabilitation for stroke, Parkinson’s, and spinal injuries.",
    image: "/images/neuro-physio.webp",
  },
  {
    id: "pediatric-geriatric",
    title: "Pediatric & Geriatric Care",
    icon: "ChildElderlyIcon",
    description: "Support for developmental delays and fall prevention.",
    image: "/images/pediatric-geriatric.webp",
  },
  {
    id: "fitness-preventive",
    title: "Fitness & Preventive Programs",
    icon: "DumbbellIcon",
    description: "Custom fitness routines and injury prevention plans.",
    image: "/images/fitness-preventive.webp",
  },
  {
    id: "tele-physio",
    title: "Tele-Physiotherapy",
    icon: "LaptopIcon",
    description: "Virtual consultations for convenient care.",
    image: "/images/tele-physio.webp",
  },
];

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

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const webVariants = {
  initial: { opacity: 0.15 },
  animate: {
    opacity: [0.15, 0.3, 0.15],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// Card animation: Subtle border glow on hover
const serviceCardVariants = {
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

// Image animation: Subtle fade and hue shift
const imageVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 0.95, transition: { duration: 0.4, ease: "easeOut" } },
  hover: {
    opacity: 1,
    filter: "hue-rotate(10deg)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
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

// ServiceImage Component
function ServiceImage({ src, alt }) {
  return (
    <motion.div
      className="relative w-full h-[10rem] overflow-hidden"
      initial="initial"
      animate="visible"
      whileHover="hover"
      variants={imageVariants}
    >
      <Image
        src={src}
        alt={alt}
        width={288}
        height={160}
        className="w-full h-full object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 288px"
        quality={75}
      />
    </motion.div>
  );
}

// ServiceDetails Component
function ServiceDetails({ service }) {
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

// ServiceCard Component
function ServiceCard({ service }) {
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-md border border-[#00A3B3]/20 overflow-hidden w-full max-w-[16rem] mx-auto h-[24rem]"
      variants={serviceCardVariants}
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

// ServicesList Component
export default function ServicesList() {
  return (
    <section
      className="relative bg-[#F7F7F7] py-10 sm:py-12 md:py-16 overflow-hidden"
      role="region"
      aria-label="Physiotherapy Services"
    >
      {/* Vitality Web */}
      <motion.div
        className="absolute inset-0 bg-[url('/vitality-web.svg')] bg-cover bg-center opacity-15 pointer-events-none"
        variants={webVariants}
        initial="initial"
        animate="animate"
      />

      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/10 to-[#F7F7F7]/60 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A3C5A] text-center mb-6 sm:mb-8 font-poppins">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="flex justify-center"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Reload Physiotherapy Services",
          description:
            "Comprehensive physiotherapy services for pain relief, recovery, and wellness at Reload Physiotherapy.",
          url: "https://reloadphysio.in/services",
          itemListElement: services.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.description,
            image: `https://reloadphysio.in${service.image}`,
          })),
        })}
      </script>
    </section>
  );
}