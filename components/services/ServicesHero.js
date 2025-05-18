"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  hidden: (direction) => ({ opacity: 0, x: direction === "left" ? -50 : 50 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.2 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.2, 0, 0.2],
    transition: { duration: 2, repeat: Infinity, ease: "easeOut" },
  },
};

const particleVariants = {
  initial: { opacity: 0, y: 0, scale: 1 },
  animate: {
    opacity: [0.8, 1, 0],
    y: "-100vh",
    scale: [1, 1.3, 1],
    transition: { duration: 6, ease: "easeOut" },
  },
};

export default function ServicesHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="relative bg-[#E8F5FF] h-screen overflow-hidden"
      role="banner"
      aria-label="Services Hero"
    >
      <motion.div
        className="absolute inset-0 bg-[url('/muscle-joint.webp')] bg-cover bg-center"
        style={{ y }}
        data-speed="0.5"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#00A3B3]/20 to-[#F7F7F7]/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_20s_linear_infinite]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)]"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
      />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00A3B3] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: Math.random() * 5 }}
          />
        ))}
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1A3C5A] font-poppins mb-4"
          variants={textVariants}
          custom="left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Comprehensive Physiotherapy Solutions
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#1A3C5A]/80 max-w-2xl mx-auto"
          variants={textVariants}
          custom="right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          Tailored care for every need.
        </motion.p>
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Physiotherapy Services - Reload Physiotherapy",
          description:
            "Explore comprehensive physiotherapy solutions tailored to your needs at Reload Physiotherapy.",
          url: "https://reloadphysio.in/services#hero",
        })}
      </script>
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
