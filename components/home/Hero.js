"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Placeholder carousel images
const carouselImages = [
  { src: "/Slide1.webp", alt: "Physiotherapy Waveform 1" },
  { src: "/Slide2.webp", alt: "Physiotherapy Waveform 2" },
  { src: "/Slide3.webp", alt: "Physiotherapy Waveform 3" },
];

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#134467",
    boxShadow: "0 4px 12px rgba(0, 163, 179, 0.4)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  tap: { scale: 0.95 },
  pulse: {
    scale: [1, 1.03, 1],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const carouselVariants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const bubbleVariants = {
  active: { scale: 1.3, backgroundColor: "#00A3B3" },
  inactive: { scale: 1, backgroundColor: "#D1D5DB" },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Preload first image
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = carouselImages[0].src;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Lazy load carousel and trigger animations on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const interval = setInterval(() => {
            setCurrentSlide((prev) => {
              const next = (prev + 1) % carouselImages.length;
              return next;
            });
          }, 4000);
          return () => clearInterval(interval);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3, rootMargin: "50px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Optimized parallax effect
  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) > 10) {
        lastScrollY = scrollY;
        const offset = scrollY * 0.05;
        document.documentElement.style.setProperty(
          "--parallax-offset",
          `${offset}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F1F7FE] to-[#D9EFFF]"
      role="region"
      aria-label="Hero Section for Reload Physiotherapy"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial="hidden"
            animate={index === currentSlide ? "visible" : "hidden"}
            variants={carouselVariants}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
              quality={75}
            />
          </motion.div>
        ))}
        <div
          className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-25"
          style={{
            transform: "translateY(var(--parallax-offset, 0))",
            willChange: "transform",
          }}
        />
        <div className="absolute inset-0 bg-[#000]/10" />
      </div>

      {/* Optimized Particle Effect */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#00A3B3] rounded-full opacity-15"
            style={{
              width: `${Math.random() * 1.5 + 1}px`,
              height: `${Math.random() * 1.5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.15, 0.3, 0.15],
              transition: {
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: Math.random() * 0.5,
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A3C5A] mb-4 font-poppins"
          style={{ textShadow: "0 0 5px rgba(0, 163, 179, 0.3)" }}
          variants={textVariants}
        >
          Empowering Movement, Restoring Strength
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#1A3C5A] mb-8"
          variants={subtextVariants}
        >
          Bringing expert physiotherapy care right to your doorstep.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/services" passHref>
            <motion.a
              className="bg-[#1A3C5A] text-white px-6 py-3 rounded-lg font-semibold"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              aria-label="Explore Physiotherapy Services"
            >
              Explore Services
            </motion.a>
          </Link>
          <Link href="/contact" passHref>
            <motion.a
              className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold"
              whileHover="hover"
              whileTap="tap"
              animate="pulse"
              variants={buttonVariants}
              aria-label="Book Physiotherapy Appointment"
            >
              Book Now
            </motion.a>
          </Link>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              className="w-3 h-3 rounded-full"
              animate={index === currentSlide ? "active" : "inactive"}
              variants={bubbleVariants}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
