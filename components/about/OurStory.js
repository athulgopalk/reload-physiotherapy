"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building, Users, Heart, Star, Globe } from "lucide-react";
import Image from "next/image";

// Milestone data
const milestones = [
  {
    year: "2023",
    title: "Founded Reload Physiotherapy",
    description: "Started our journey in Kerala to empower movement.",
    icon: <Building className="w-8 h-8 text-[#00A3B3]" aria-hidden="true" />,
    image: "/milestones/founded.jpg",
    alt: "Reload Physiotherapy founding event",
  },
  {
    year: "2024",
    title: "Opened Mumbai Clinic",
    description: "Expanded to Mumbai, bringing expert care to more people.",
    icon: <Users className="w-8 h-8 text-[#00A3B3]" aria-hidden="true" />,
    image: "/milestones/mumbai-clinic.jpg",
    alt: "Mumbai clinic opening",
  },
  {
    year: "2024",
    title: "Introduced Pain-Free Program",
    description: "Launched our signature pain management initiative.",
    icon: <Heart className="w-8 h-8 text-[#00A3B3]" aria-hidden="true" />,
    image: "/milestones/pain-free.jpg",
    alt: "Pain-free program launch",
  },
  {
    year: "2025",
    title: "Awarded Best Physio Service",
    description: "Recognized as India’s top physiotherapy provider.",
    icon: <Star className="w-8 h-8 text-[#00A3B3]" aria-hidden="true" />,
    image: "/milestones/award.jpg",
    alt: "Award ceremony for best physio service",
  },
  {
    year: "2025",
    title: "Nationwide Expansion",
    description: "Began operations across major Indian cities.",
    icon: <Globe className="w-8 h-8 text-[#00A3B3]" aria-hidden="true" />,
    image: "/milestones/expansion.jpg",
    alt: "Nationwide expansion announcement",
  },
];

// Animation variants
const milestoneVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.3,
    backgroundColor: "#00A3B3",
    boxShadow: "0 0 12px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

export default function OurStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"], // Adjusted to start when section enters viewport
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="relative bg-[#F7F7F7] py-12 sm:py-16 md:py-20 overflow-hidden"
      ref={ref}
      role="region"
      aria-label="Our Story Timeline"
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[#E8F5FF]/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-12 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Story
        </motion.h2>

        {/* Timeline and Progress Bar */}
        <div className="relative flex flex-col md:flex-row">
          {/* Timeline */}
          <div className="flex-1 relative">
            <div className="absolute left-8 sm:left-12 md:left-16 top-0 bottom-0 w-1 bg-[#00A3B3]/30"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                className="relative mb-12 sm:mb-16 flex items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={milestoneVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 sm:left-10 md:left-14 w-4 h-4 bg-[#1A3C5A] rounded-full z-10"
                  variants={dotVariants}
                  whileHover="hover"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                {/* Milestone Content */}
                <div className="ml-16 sm:ml-20 md:ml-24 flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1A3C5A] font-poppins flex items-center gap-2">
                      {milestone.icon}
                      {milestone.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#1A3C5A]/80 mt-2">
                      {milestone.description}
                    </p>
                    <p className="text-xs sm:text-sm text-[#00A3B3] font-semibold mt-1">
                      {milestone.year}
                    </p>
                  </div>
                  {/* Image */}
                  <motion.div
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden"
                    variants={imageVariants}
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Image
                      src={milestone.image}
                      alt={milestone.alt}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="hidden md:block w-16 relative">
            <div className="absolute top-0 bottom-0 w-2 bg-[#1A3C5A]/20 rounded-full">
              <motion.div
                className="absolute top-0 w-2 bg-[#00A3B3] rounded-full"
                style={{ height: progressHeight }}
              />
            </div>
            {milestones.map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-4 bg-[#1A3C5A] rounded-full -left-1"
                style={{ top: `${(index / (milestones.length - 1)) * 100}%` }}
                animate={{
                  scale:
                    scrollYProgress.get() >= index / (milestones.length - 1)
                      ? 1.3
                      : 1,
                  backgroundColor:
                    scrollYProgress.get() >= index / (milestones.length - 1)
                      ? "#00A3B3"
                      : "#1A3C5A",
                  transition: { duration: 0.3 },
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Reload Physiotherapy",
          description:
            "The story of Reload Physiotherapy, from its founding in 2023 to nationwide expansion in 2025, delivering expert physiotherapy across India.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "IN",
          },
          event: milestones.map((milestone) => ({
            "@type": "Event",
            name: milestone.title,
            startDate: milestone.year,
            description: milestone.description,
          })),
        })}
      </script>
    </section>
  );
}
