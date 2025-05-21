// components/services/ServicesList.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Services data
const services = [
  {
    id: "pain-management",
    title: "Pain Management",
    icon: "SpineIcon",
    description: "Relieve back, neck, and joint pain with targeted therapies.",
    image: "/services/pain-management.webp",
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehabilitation",
    icon: "RunningIcon",
    description: "Recover from acute and chronic sports injuries.",
    image: "/services/sports-injury.webp",
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Rehabilitation",
    icon: "KneeIcon",
    description: "Restore mobility after orthopedic surgeries.",
    image: "/services/post-surgical.webp",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    icon: "HandsIcon",
    description: "Joint mobilizations and soft tissue release.",
    image: "/services/manual-therapy.webp",
  },
  {
    id: "dry-needling",
    title: "Dry Needling & Cupping",
    icon: "NeedleIcon",
    description: "Target muscle trigger points for pain relief.",
    image: "/services/dry-needling.webp",
  },
  {
    id: "posture-correction",
    title: "Posture & Ergonomic Training",
    icon: "PostureIcon",
    description: "Improve posture and optimize workstation setup.",
    image: "/services/posture-correction.webp",
  },
  {
    id: "neuro-physio",
    title: "Neuro Physiotherapy",
    icon: "BrainIcon",
    description: "Rehabilitation for stroke, Parkinson’s, and spinal injuries.",
    image: "/services/neuro-physio.webp",
  },
  {
    id: "pediatric-geriatric",
    title: "Pediatric & Geriatric Care",
    icon: "ChildElderlyIcon",
    description: "Support for developmental delays and fall prevention.",
    image: "/services/pediatric-geriatric.webp",
  },
  {
    id: "fitness-preventive",
    title: "Fitness & Preventive Programs",
    icon: "DumbbellIcon",
    description: "Custom fitness routines and injury prevention plans.",
    image: "/services/fitness-preventive.webp",
  },
  {
    id: "tele-physio",
    title: "Tele-Physiotherapy",
    icon: "LaptopIcon",
    description: "Virtual consultations for convenient care.",
    image: "/services/tele-physio.webp",
  },
];



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
    filter: "",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Custom image animation: Subtle scale and glow
const customImageVariants = {
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
      className="relative w-full h-[85%] overflow-hidden rounded-t-xl"
      initial="initial"
      animate="visible"
      // whileHover="hover"
      variants={imageVariants}
    >
      <Image
        src={src}
        alt={alt}
        width={288}
        height={288} // Adjusted for 1:1 aspect ratio
        className="w-full h-full object-cover hover:scale-110 transition-all "
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 288px"
      />
    </motion.div>
  );
}

// ServiceDetails Component
function ServiceDetails({ service }) {
  return (
    <motion.div
      className="p-2 flex items-center h-[20%] w-full"
      variants={contentVariants}
      initial="initial"
      animate="visible"
    >
      <motion.div
        variants={customImageVariants}
        initial="rest"
        whileHover="hover"
        className="flex items-center justify-center w-8 h-8 bg-[#00A3B3]/10 rounded-full mr-3"
      >
        <Image
          src={service.customImage || "/placeholder-icon.png"} // Add your custom image path in the services array
          // alt={`${service.title} icon`}
          width={20}
          height={20}
        />
      </motion.div>
      <div className="">
        <h3 className="text-sm font-semibold text-[#1A3C5A] font-poppins">
          {service.title}
        </h3>
        <p className="text-xs text-[#1A3C5A]/80">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

// ServiceCard Component
function ServiceCard({ service }) {
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-md border border-[#00A3B3]/20 overflow-hidden w-full max-w-[18rem] h-[24rem] flex flex-col"
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
      className="relative bg-[#F7F7F7] py-12 md:py-16 overflow-hidden"
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
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5A] text-center mb-8 md:mb-12 font-poppins">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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