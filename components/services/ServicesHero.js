"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const subtextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 15px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

export default function ServicesHero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // UseInView for reliable animation triggers
  const { ref: textRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className="relative bg-[#E8F5FF] min-h-screen flex items-center overflow-hidden"
      role="banner"
      aria-label="Services Hero Section"
      ref={sectionRef}
    >
      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#1A3C5A] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={textRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative text-center"
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] mb-6 font-poppins"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Comprehensive Physiotherapy Solutions
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#1A3C5A] mb-8 max-w-2xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={subtextVariants}
        >
          Tailored care for every need.
        </motion.p>

        {/* CTAs */}
        <div className=" justify-center gap-4 sm:gap-6">
          <motion.a
            href="/services#serviceslist"
            className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300 w-[200px] md:w-[250px] text-center"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            aria-label="Explore Services"
          >
            Explore Services
          </motion.a>
          
        </div>
      </div>

      {/* SEO Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Physiotherapy Services - Reload Physiotherapy",
            description:
              "Explore comprehensive physiotherapy solutions tailored to your needs at Reload Physiotherapy.",
            url: "https://reloadphysio.in/services#hero",
            publisher: {
              "@type": "Organization",
              name: "Reload Physiotherapy",
              logo: {
                "@type": "ImageObject",
                url: "https://reloadphysio.in/logo.png",
              },
            },
          }),
        }}
      />

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s infinite linear;
        }
      `}</style>
    </section>
  );
}