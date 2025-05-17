"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Team data
const teamMembers = [
  {
    name: "Dr. Anoop Menon",
    role: "Pediatric Physiotherapist",
    image: "/team/anoop.jpg",
    alt: "Dr. Anoop Menon, Pediatric Physiotherapist",
    description: "Specializing in children’s mobility and development.",
  },
  {
    name: "Dr. Priya Nair",
    role: "Geriatric Specialist",
    image: "/team/priya.jpg",
    alt: "Dr. Priya Nair, Geriatric Specialist",
    description: "Expert in senior care and pain management.",
  },
  {
    name: "Dr. Vishnu Suresh",
    role: "Sports Physiotherapist",
    image: "/team/vishnu.jpg",
    alt: "Dr. Vishnu Suresh, Sports Physiotherapist",
    description: "Focused on athletic recovery and performance.",
  },
  {
    name: "Dr. Lakshmi Venu",
    role: "Neuro Physiotherapist",
    image: "/team/lakshmi.jpg",
    alt: "Dr. Lakshmi Venu, Neuro Physiotherapist",
    description: "Enhancing strength for neurological conditions.",
  },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 24px rgba(0, 163, 179, 0.3)",
    transition: { duration: 0.3 },
  },
};

export default function MeetOurTeam() {
  return (
    <section
      className="relative bg-[#F7F7F7] py-12 sm:py-16 md:py-20 overflow-hidden"
      role="region"
      aria-label="Meet Our Team"
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[#E8F5FF]/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-12 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Meet Our Team
        </motion.h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1A3C5A] font-poppins">
                {member.name}
              </h3>
              <p className="text-sm text-[#00A3B3] font-medium mb-2">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm text-[#1A3C5A]/80">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Reload Physiotherapy",
          member: teamMembers.map((member) => ({
            "@type": "Person",
            name: member.name,
            jobTitle: member.role,
            description: member.description,
          })),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "IN",
          },
        })}
      </script>
    </section>
  );
}
