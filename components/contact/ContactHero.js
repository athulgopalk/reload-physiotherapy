"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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

export default function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      className="relative bg-[#E8F5FF] min-h-screen flex items-center overflow-hidden"
      role="banner"
      aria-label="Contact Us Hero"
      ref={ref}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF] to-[#F7F7F7]/80"
        style={{ scale }}
      />
      <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_15s_linear_infinite]" />
      {/* Joint Illustration */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/joint-illustration.svg"
          alt="Joint illustration"
          width={100}
          height={0}
          className="w-1/2 max-w-md"
          aria-hidden="true"
        />
      </motion.div>
      {/* Healing Pulse */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)] opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00A3B3] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative text-center">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] mb-6 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Let’s Start Your Journey to Recovery
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#1A3C5A]/80 mb-8 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subtextVariants}
        >
          Reach out or book your appointment today.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link href="/contact#booking">
            <motion.a
              className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              aria-label="Book Appointment"
            >
              Book Now
            </motion.a>
          </Link>
          <Link href="/contact#details">
            <motion.a
              className="bg-transparent text-[#1A3C5A] px-6 py-3 rounded-lg font-semibold border-2 border-[#1A3C5A] hover:bg-[#1A3C5A] hover:text-white transition-colors duration-300"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              aria-label="Contact Us"
            >
              Contact Us
            </motion.a>
          </Link>
        </div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Contact Us - Reload Physiotherapy",
          description:
            "Start your recovery journey with Reload Physiotherapy. Book an appointment or reach out today for expert care.",
          url: "https://reloadphysio.in/contact",
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
