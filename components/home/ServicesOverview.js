"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Service data
const services = [
  {
    title: "Pain Management",
    description: "Relieve back, neck, and joint pain.",
    icon: "/pain-management.webp",
  },
  {
    title: "Sports Injuries",
    description: "Recover and return to sport.",
    icon: "/sports.webp",
  },
  {
    title: "Post-Surgery",
    description: "Restore mobility after surgery.",
    icon: "/post-surgical.webp",
  },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
  },
  hover: {
    borderColor: "#00A3B3",
    boxShadow: "0 8px 16px rgba(0, 163, 179, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const frontVariants = {
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const backVariants = {
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#134467",
    boxShadow: "0 4px 12px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.95 },
};

export default function ServicesOverview() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Preload service icons
  useEffect(() => {
    services.forEach((service) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = service.icon;
      document.head.appendChild(link);
      return () => document.head.removeChild(link);
    });
  }, []);

  // Trigger animations on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3, rootMargin: "100px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br  py-12 overflow-hidden"
      role="region"
      aria-label="Services Overview for Reload Physiotherapy"
    >
      {/* Waveform Background */}
      <div
        className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-15"
        style={{ willChange: "transform" }}
      />
      {/* <div className="absolute inset-0 bg-[#F1F7FE]/90" /> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ffffff] text-center mb-10 font-poppins tracking-tight"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Our Expert Physiotherapy Services
        </motion.h2>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative bg-white rounded-xl shadow-md h-60 border-2 border-transparent overflow-hidden"
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
              {/* Front Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-5"
                animate={hoveredCard === index ? "hidden" : "visible"}
                variants={frontVariants}
              >
                <div className="mb-3">
                  <Image
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    width={50}
                    height={50}
                    sizes="(max-width: 768px) 40px, 50px"
                    className="object-contain"
                    loading="lazy"
                    quality={70}
                  />
                </div>
                <h3 className="text-base font-semibold text-[#1A3C5A] font-poppins">
                  {service.title}
                </h3>
              </motion.div>

              {/* Back Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-5 bg-gradient-to-t from-[#00A3B3]/10 to-transparent"
                animate={hoveredCard === index ? "visible" : "hidden"}
                variants={backVariants}
              >
                <p className="text-sm text-[#1A3C5A] text-center font-medium">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout & Button */}
        <div className="text-center mt-10">
          <p className="text-base text-white mb-5 font-medium mr-2">
            Explore our
            <Link
              href="/services"
              className="text-[#00A3B3] hover:underline font-semibold ml-1"
              aria-label="Explore comprehensive physiotherapy services"
            >
              comprehensive physiotherapy solutions
            </Link>
          </p>
          <Link href="/services" passHref className="h-8">
            <motion.a
              className="bg-[#1A3C5A] text-white px-5 py-4 rounded-lg font-semibold text-sm sm:text-base shadow-md h-8"
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
    </section>
  );
}
