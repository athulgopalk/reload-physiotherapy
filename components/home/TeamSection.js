"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Team data
const teamMembers = [
  {
    name: "Dr. John Doe",
    role: "Lead Physiotherapist",
    image: "/team/lead-physio.jpg", // Replace with actual image path
    description: "Expert in musculoskeletal recovery",
  },
  {
    name: "Dr. Jane Smith",
    role: "Sports Rehab Specialist",
    image: "/team/sports-rehab.jpg", // Replace with actual image path
    description: "Specialized in athletic injury rehabilitation",
  },
  {
    name: "Dr. Emily Brown",
    role: "Neuro Physiotherapist",
    image: "/team/neuro-physio.jpg", // Replace with actual image path
    description: "Focused on neurological condition therapy",
  },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 50,
    scale: 0.95,
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 24px rgba(0, 163, 179, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function TeamSection() {
  return (
    <div className="relative bg-[#F7F7F7] py-12 sm:py-16 md:py-20">
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative"
        role="region"
        aria-label="Meet Our Team"
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-12 md:mb-16 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Meet Our Expert Team
        </motion.h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.role}
              className="relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 transition-colors duration-300 hover:bg-[#E6F7FA]"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover rounded-full border-4 border-[#00A3B3]"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A3C5A] mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[#1A3C5A]/80 mb-2">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-[#1A3C5A]/70">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
