"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const scrollY = useMotionValue(0);
  const sectionRef = useRef(null);

  // Set loaded state
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll handler for parallax
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Ensure text visibility on navigation
  useEffect(() => {
    if (inView) {
      sectionRef.current?.focus();
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#E8F5FF" }}
      role="region"
      aria-label="About Us Hero Section"
      tabIndex={-1}
    >
      {/* Optimized Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#1A3C5A] rounded-full opacity-20"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.3, 0.2],
              transition: {
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 0.5,
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
        initial="hidden"
        animate={inView || isLoaded ? "visible" : "hidden"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A3C5A] mb-4 font-poppins tracking-tight"
          style={{
            textShadow: "0 2px 4px rgba(0, 163, 179, 0.15)",
            willChange: "opacity, transform",
          }}
          variants={headingVariants}
        >
          Empowering Lives Through Movement
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#1A3C5A] font-medium"
          variants={subtextVariants}
        >
          Your Journey to Better Movement Starts Here.
        </motion.p>
      </motion.div>

      {/* SEO Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Reload Physiotherapy",
            description:
              "Learn about Reload Physiotherapy’s mission to empower lives through movement with expert physiotherapy services across India.",
            publisher: {
              "@type": "Organization",
              name: "Reload Physiotherapy",
              logo: {
                "@type": "ImageObject",
                url: "https://www.reloadphysiotherapy.in/logo.png",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kerala",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />
    </section>
  );
}
