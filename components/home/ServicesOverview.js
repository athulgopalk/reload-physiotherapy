"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Service data
const services = [
  {
    title: "Pain Management",
    description: "Relieve back, neck, and joint pain.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Pain Management Icon"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="#00A3B3"
        />
        <path d="M12 6v12" stroke="#1A3C5A" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Sports Injuries",
    description: "Recover and return to sport.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Sports Injuries Icon"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="#00A3B3"
        />
        <path d="M8 8l8 8" stroke="#1A3C5A" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Post-Surgery",
    description: "Restore mobility after surgery.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Post-Surgery Icon"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="#00A3B3"
        />
        <path d="M6 12h12" stroke="#1A3C5A" strokeWidth="2" />
      </svg>
    ),
  },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const frontVariants = {
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  hidden: { opacity: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const backVariants = {
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  hidden: { opacity: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const cardVariants = {
  hover: {
    borderColor: "#00A3B3",
    boxShadow: "0 10px 15px rgba(0, 163, 179, 0.2)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 10px rgba(0, 163, 179, 0.5)",
    transition: { duration: 1 },
  },
  tap: { scale: 0.95 },
};

export default function ServicesOverview() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      className="relative bg-[#E8F5FF] py-16 overflow-hidden"
      role="region"
      aria-label="Services Overview"
    >
      {/* Waveform Background */}
      <div
        className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_10s_linear_infinite]"
        style={{
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#E8F5FF]/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A3C5A] text-center mb-12 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Our Expert Physiotherapy Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative bg-[#FFFFFF] rounded-lg shadow-lg h-64 border-2 border-transparent"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onFocus={() => setHoveredCard(index)}
              onBlur={() => setHoveredCard(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setHoveredCard(hoveredCard === index ? null : index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${service.title}`}
            >
              {/* Front Content (Title & Icon) */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6"
                animate={hoveredCard === index ? "hidden" : "visible"}
                variants={frontVariants}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[#1A3C5A] font-poppins">
                  {service.title}
                </h3>
              </motion.div>

              {/* Back Content (Description) */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6"
                animate={hoveredCard === index ? "visible" : "hidden"}
                variants={backVariants}
              >
                <p className="text-sm text-[#1A3C5A] text-center">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Callout & Button */}
        <div className="text-center mt-12">
          <p className="text-base text-[#1A3C5A] mb-6">
            Explore our{" "}
            <Link
              href="/services"
              className="text-[#00A3B3] hover:underline font-medium"
              aria-label="Explore comprehensive physiotherapy services"
            >
              comprehensive physiotherapy solutions
            </Link>
          </p>
          <Link href="/services" passHref>
            <motion.a
              className="bg-[#1A3C5A] text-white px-6 py-3 rounded-lg font-semibold inline-block"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              aria-label="View All Services"
            >
              View All Services
            </motion.a>
          </Link>
        </div>
      </div>

      {/* Tailwind Animation for Waveform */}
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
