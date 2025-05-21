
"use client";
import { motion } from "framer-motion";
import ServiceCard from "@/components/common/ServiceCard";

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