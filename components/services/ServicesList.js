"use client";
import { motion } from "framer-motion";
import ServiceCard from "@/components/common/ServiceCard";

// Services data
const services = [
  {
    id: "pain-management",
    title: "Pain Management",
    icon: "SpineIcon", // Placeholder; use Lucide or custom SVG
    description: "Relieve back, neck, and joint pain with targeted therapies.",
    image: "/images/pain-management.webp", // Placeholder; replace with real image
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehabilitation",
    icon: "RunningIcon",
    description: "Recover from acute and chronic injuries.",
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
    title: "Dry Needling & Cupping Therapy",
    icon: "NeedleIcon",
    description: "Target muscle trigger points for pain relief.",
    image: "/images/dry-needling.webp",
  },
  {
    id: "posture-correction",
    title: "Posture Correction & Ergonomic Training",
    icon: "PostureIcon",
    description: "Improve posture and workstation setup.",
    image: "/images/posture-correction.webp",
  },
  {
    id: "neuro-physio",
    title: "Neuro Physiotherapy",
    icon: "BrainIcon",
    description: "Rehab for stroke, Parkinson’s, and spinal injuries.",
    image: "/images/neuro-physio.webp",
  },
  {
    id: "pediatric-geriatric",
    title: "Pediatric & Geriatric Physiotherapy",
    icon: "ChildElderlyIcon",
    description: "Care for developmental delays and fall prevention.",
    image: "/images/pediatric-geriatric.webp",
  },
  {
    id: "fitness-preventive",
    title: "Fitness & Preventive Programs",
    icon: "DumbbellIcon",
    description: "Custom fitness routines and injury prevention.",
    image: "/images/fitness-preventive.webp",
  },
  {
    id: "tele-physio",
    title: "Tele-Physiotherapy Consultations",
    icon: "LaptopIcon",
    description: "Virtual sessions for convenient care.",
    image: "/images/tele-physio.webp",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: i * 0.2 },
  }),
};

const webVariants = {
  initial: { opacity: 0.3 },
  animate: {
    opacity: [0.3, 0.5, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function ServicesList() {
  return (
    <section
      className="relative bg-[#F7F7F7] py-16 sm:py-20 md:py-24 overflow-hidden"
      role="region"
      aria-label="Services List"
    >
      {/* Vitality Web */}
      <motion.div
        className="absolute inset-0 bg-[url('/vitality-web.svg')] bg-cover bg-center opacity-30"
        variants={webVariants}
        initial="initial"
        animate="animate"
      />

      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/20 to-[#F7F7F7]/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
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
          "@type": "Service",
          name: "Reload Physiotherapy Services",
          description:
            "Explore our 10 physiotherapy services for pain relief, recovery, and wellness.",
          url: "https://reloadphysio.in/services#services-list",
        })}
      </script>
    </section>
  );
}
