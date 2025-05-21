"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Placeholder carousel images
const carouselImages = [
  { src: "/Slide1.webp", alt: "Physiotherapy Waveform 1" },
  { src: "/Slide2.webp", alt: "Physiotherapy Waveform 2" },
  { src: "/Slide3.webp", alt: "Physiotherapy Waveform 3" },
];

// Animation variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay: 1.5 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 10px rgba(0, 163, 179, 0.5)",
    transition: { duration: 1 },
  },
  tap: { scale: 0.95 },
  pulse: {
    scale: [1, 1.03, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const carouselVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const bubbleVariants = {
  active: { scale: 1.2, backgroundColor: "#00A3B3" },
  inactive: { scale: 1, backgroundColor: "#FFFFFF" },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle carousel every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.2;
      document.documentElement.style.setProperty(
        "--parallax-offset",
        `${offset}px`
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center  overflow-hidden"
      role="region"
      aria-label="Hero Section"
    >
      {/* Parallax Background with Carousel */}
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
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              loading="eager"
            />
          </motion.div>
        ))}
        <div
          className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center"
          style={{ transform: "translateY(var(--parallax-offset, 0))" }}
        />
        <div className="absolute inset-0 bg-[#000]/3" />
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
          Bringing expert physiotherapy care right to your doorstep.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <Link href="/services" passHref>
            <motion.a
              className="bg-[#1A3C5A] text-white px-6 py-3 rounded-lg font-semibold"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              aria-label="Explore Services"
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
              aria-label="Book Now"
            >
              Book Now
            </motion.a>
          </Link>
        </div>

        {/* Carousel Navigation Bubbles */}
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
