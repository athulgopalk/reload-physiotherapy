"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin ,Calendar } from "lucide-react";
import Link from "next/link";

// Contact data
const contacts = [
  {
    label: "Email Us",
    detail: "reloadphysiotherapy@gmail.com",
    href: "mailto:reloadphysiotherapy@gmail.com",
    icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A3B3]" />,
  },
  {
    label: "Call Us",
    detail: "+91 9633045363",
    href: "tel:+919633045363",
    icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A3B3]" />,
  },

  {
    label: "Book Online",
    detail: "Schedule Your Virtual Consultation",
    href: "/contact#booking",
    icon: <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A3B3]" />,
  },
];

// Animation variants
const cardVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: {
    scale: 1.03,
    // boxShadow: "0 8px 24px rgba(0, 163, 179, 0.4)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const iconVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const detailVariants = {
  rest: { opacity: 1, y: 0 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const auraVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: {
    scale: 1,
    opacity: 0.3,
    transition: {
      duration: 1,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function ContactDetails() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      role="region"
      aria-label="Contact Details"
      id="details"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/grid-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_20s_linear_infinite]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/20 to-[#F7F7F7]/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)] opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-12 sm:mb-16 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Connect with Us to Start Healing
        </motion.h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact) => (
            <motion.div
              key={contact.label}
              className="relative bg-white rounded-xl shadow-lg flex flex-col items-center justify-center border border-[#00A3B3]/50 bg-gradient-to-br from-[#E8F5FF]/20 to-[#FFFFFF] overflow-hidden h-64"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
            >
              {/* Healing Aura */}
              <motion.div
                className="absolute inset-0 bg-[#00A3B3] rounded-full blur-xl"
                variants={auraVariants}
                initial="rest"
                whileHover="hover"
              />

              <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 w-full h-full">
                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {contact.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1A3C5A] mt-4 font-poppins">
                  {contact.label}
                </h3>
                <motion.div
                  className="mt-4 text-center"
                  variants={detailVariants}
                  initial="rest"
                  animate="rest"
                >
                  <Link
                    href={contact.href}
                    className="text-base sm:text-lg text-[#1A3C5A] font-medium hover:text-[#00A3B3] transition-colors duration-500"
                    aria-label={contact.label}
                  >
                    {contact.detail}
                  </Link>
                </motion.div>
              </div>
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
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "info@reloadphysio.com",
              telephone: "+91-XXXX-XXXX",
              contactType: "Customer Service",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressCountry: "IN",
          },
        })}
      </script>

      {/* Styles */}
      <style jsx>{`
        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1000px;
          }
        }
      `}</style>
    </section>
  );
}
