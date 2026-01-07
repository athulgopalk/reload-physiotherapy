"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Muhammed Jazil (PT)",
    role: "Musculoskeletal & Sports Physiotherapist",
    image: "/DrMuhammedJazilPT.webp",
    alt: "Dr. Muhammed Jazil, Musculoskeletal & Sports Physiotherapist",
    description: [
      "BPT, MPT (Musculoskeletal and Sports Sciences)",
      "CDNT, CIASTM, CMT, CKTP",
      "S&C Level 1 (IUSCA), DFM - FIFA",
      "Head Physiotherapist Santosh Trophy, Karnataka State Team 2024",
      "Asst. Physiotherapist SAFF Championship, Indian National Team 2023",
    ],
  },
  {
    name: "Dr. Mohammed Shakkir (PT)",
    role: "Pediatric & Sports Physiotherapist",
    image: "/DrMohammedShakkirPT.webp",
    alt: "Dr. Mohammed Shakkir, Pediatric & Sports Physiotherapist",
    description: [
      "BPT, CDNT, CCT, CKTP, CMT",
      "FIFA Diploma in Football Medicine",
      "Fellowship Program in Podiatry Rehabilitation",
      "Karnataka State Football Team Physio - 2024 BC Roy Trophy",
    ],
  },
  {
    name: "Dr. Hubais Hameed (PT)",
    role: "Neuro & Sports Physiotherapist",
    image: "/Dr.HubaisHameed.webp",
    alt: "Dr. Hubais Hameed, Neuro & Sports Physiotherapist",
    description: [
      "MPT (Neurological Sciences)",
      "FIFA Diploma in Football Medicine",
      "Level 1 S&C (IUSCA)",
      "Head Physiotherapist U20 Kerala State Team 2024",
      "Head Physiotherapist Santosh Trophy Andhra Pradesh State Team 2023",
    ],
  },
  {
    name: "Dr. Abhijith VV (PT)",
    role: "Musculoskeletal & Sports Physiotherapist",
    image: "/Dr.Abhijithvv.webp",
    alt: "Dr. Abhijith VV, Musculoskeletal & Sports Physiotherapist",
    description: [
      "BPT, MPT (Musculoskeletal and Sports Sciences)",
      "CDNT, CMT, CKTP",
      "S&C Level 1 (IUSCA)",
      "FIFA Diploma in Football Medicine",
    ],
  },
  {
    name: "Dr. Mohamed Fayz (PT)",
    role: "Musculoskeletal & Sports Physiotherapist",
    image: "/DRMOHAMEDFAYZPT.webp",
    alt: "Dr. Mohamed Fayz, Musculoskeletal & Sports Physiotherapist",
    description: [
      "BPT, MPT (Musculoskeletal and Sports Sciences)",
      "CDNT, CIASTM, CMT, CKTP",
      "S&C Level 1 (ACE, ASCM)",
      "FIFA Diploma in Football Medicine",
    ],
  },
  {
    name: "Dr. Hadhi Roshan (PT)",
    role: "Consultant Physiotherapist",
    image: "/drhadhi.jpg",
    alt: "Dr. Hadhi Roshan, Consultant Physiotherapist",
    description: [
      "Certified Dry Needling Therapist",
      "Certified Kinesio Taping Practitioner",
      "FIFA Diploma in Football Medicine",
    ],
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-12 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#1A3C5A] font-poppins mb-2">
                {member.name}
              </h3>

              <p className="text-sm text-[#00A3B3] font-medium mb-6">
                {member.role}
              </p>

              <ul className="w-full text-left text-xs sm:text-sm text-[#1A3C5A]/80 space-y-1.5">
                {member.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00A3B3] mr-3  text-lg">•</span>
                    <span className="mt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Reload Physiotherapy",
          member: teamMembers.map((member) => ({
            "@type": "Person",
            name: member.name,
            jobTitle: member.role,
            description: member.description.join(", "),
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
