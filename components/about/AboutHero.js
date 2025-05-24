"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Optimized carousel images with WebP format
const carouselImages = [
  { src: "/About-Hero.jpg", alt: "Healing Wave 1" },
 
];

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

const carouselVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export default function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const scrollY = useMotionValue(0);
  const backgroundPositionY = useTransform(scrollY, [0, 200], [0, 30]);
  const sectionRef = useRef(null);

  // Preload images
  useEffect(() => {
    carouselImages.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
    setIsLoaded(true);
  }, []);

  // Auto-cycle carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
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
      className="relative w-full h-screen flex items-center justify-center  overflow-hidden"
      role="region"
      aria-label="About Us Hero Section"
      tabIndex={-1}
    >
      {/* Parallax Background with Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {carouselImages.map(
            (image, index) =>
              index === currentSlide && (
                <motion.div
                  key={image.src}
                  className="absolute inset-0"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={carouselVariants}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                    quality={85}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
        {/* Animated Gradient Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b   animate-wave"
          style={{ backgroundPositionY }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 " aria-hidden="true" />
      </div>

      {/* Optimized Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute  rounded-full opacity-20"
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
          Your Journey to Better Movement Starts Here.
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
            image: carouselImages.map((img) => ({
              "@type": "ImageObject",
              url: `https://www.reloadphysiotherapy.in${img.src}`,
              caption: img.alt,
            })),
          }),
        }}
      />
    </section>
  );
}