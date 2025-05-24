// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const textVariants = {
//   hidden: (direction) => ({ opacity: 0, x: direction === "left" ? -50 : 50 }),
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const pulseVariants = {
//   initial: { scale: 1, opacity: 0.2 },
//   animate: {
//     scale: [1, 1.2, 1],
//     opacity: [0.2, 0, 0.2],
//     transition: { duration: 2, repeat: Infinity, ease: "easeOut" },
//   },
// };

// const particleVariants = {
//   initial: { opacity: 0, y: 0, scale: 1 },
//   animate: {
//     opacity: [0.8, 1, 0],
//     y: "-100vh",
//     scale: [1, 1.3, 1],
//     transition: { duration: 6, ease: "easeOut" },
//   },
// };

// export default function ServicesHero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   return (
//     <section
//       ref={ref}
//       className="relative bg-[#E8F5FF] h-screen overflow-hidden"
//       role="banner"
//       aria-label="Services Hero"
//     >
//       <motion.div
//         className="absolute inset-0 bg-[url('/muscle-joint.webp')] bg-cover bg-center"
//         style={{ y }}
//         data-speed="0.5"
//       />
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-b from-[#00A3B3]/20 to-[#F7F7F7]/80"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       />
//       <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_20s_linear_infinite]" />
//       <motion.div
//         className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)]"
//         variants={pulseVariants}
//         initial="initial"
//         animate="animate"
//       />
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-[#00A3B3] rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             variants={particleVariants}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: Math.random() * 5 }}
//           />
//         ))}
//       </div>
//       <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center text-center">
//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1A3C5A] font-poppins mb-4"
//           variants={textVariants}
//           custom="left"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           Comprehensive Physiotherapy Solutions
//         </motion.h1>
//         <motion.p
//           className="text-base sm:text-lg md:text-xl text-[#1A3C5A]/80 max-w-2xl mx-auto"
//           variants={textVariants}
//           custom="right"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ delay: 0.3 }}
//         >
//           Tailored care for every need.
//         </motion.p>
//       </div>
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebPage",
//           name: "Physiotherapy Services - Reload Physiotherapy",
//           description:
//             "Explore comprehensive physiotherapy solutions tailored to your needs at Reload Physiotherapy.",
//           url: "https://reloadphysio.in/services#hero",
//         })}
//       </script>
//       <style jsx>{`
//         @keyframes wave {
//           0% {
//             background-position-x: 0;
//           }
//           100% {
//             background-position-x: 1000px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { useInView } from "react-intersection-observer";

// const textVariants = {
//   hidden: (direction) => ({ opacity: 0, x: direction === "left" ? -50 : 50 }),
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const pulseVariants = {
//   initial: { scale: 1, opacity: 0.2 },
//   animate: {
//     scale: [1, 1.2, 1],
//     opacity: [0.2, 0, 0.2],
//     transition: { duration: 2, repeat: Infinity, ease: "easeOut" },
//   },
// };

// const particleVariants = {
//   initial: { opacity: 0, y: 0, scale: 1 },
//   animate: {
//     opacity: [0.8, 1, 0],
//     y: "-100vh",
//     scale: [1, 1.3, 1],
//     transition: { duration: 6, ease: "easeOut" },
//   },
// };

// export default function ServicesHero() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef });
//   const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   // UseInView to trigger animations reliably
//   const { ref: textRef, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#E8F5FF] h-screen overflow-hidden"
//       role="banner"
//       aria-label="Services Hero Section"
//     >
//       {/* Optimized Background Image */}
//       <motion.picture
//         className="absolute inset-0"
//         style={{ y }}
//         data-speed="0.5"
//       >
//         <source
//           srcSet="/muscle-joint.webp"
//           type="image/webp"
//           media="(min-width: 768px)"
//         />
//         <source
//           srcSet="/muscle-joint-sm.webp"
//           type="image/webp"
//           media="(max-width: 767px)"
//         />
//         <motion.img
//           src="/muscle-joint.jpg"
//           alt="Physiotherapy muscle and joint background"
//           className="object-cover w-full h-full"
//           loading="eager"
//           decoding="async"
//           style={{ y }}
//         />
//       </motion.picture>

//       {/* Gradient Overlay */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-b from-[#00A3B3]/20 to-[#F7F7F7]/80"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: inView ? 1 : 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       />

//       {/* Waveform Background */}
//       <div
//         className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_20s_linear_infinite]"
//         aria-hidden="true"
//       />

//       {/* Pulse Effect */}
//       <motion.div
//         className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)]"
//         variants={pulseVariants}
//         initial="initial"
//         animate="animate"
//       />

//       {/* Particle Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-[#00A3B3] rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             variants={particleVariants}
//             initial="initial"
//             animate={inView ? "animate" : "initial"}
//             transition={{ delay: Math.random() * 5 }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div
//         ref={textRef}
//         className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center text-center"
//       >
//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1A3C5A] font-poppins mb-4"
//           variants={textVariants}
//           custom="left"
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           Comprehensive Physiotherapy Solutions
//         </motion.h1>
//         <motion.p
//           className="text-base sm:text-lg md:text-xl text-[#1A3C5A]/80 max-w-2xl mx-auto"
//           variants={textVariants}
//           custom="right"
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           transition={{ delay: 0.3 }}
//         >
//           Tailored care for every need.
//         </motion.p>
//       </div>

//       {/* Structured Data for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Physiotherapy Services - Reload Physiotherapy",
//             description:
//               "Explore comprehensive physiotherapy solutions tailored to your needs at Reload Physiotherapy.",
//             url: "https://reloadphysio.in/services#hero",
//             image: "https://reloadphysio.in/muscle-joint.webp",
//             publisher: {
//               "@type": "Organization",
//               name: "Reload Physiotherapy",
//               logo: {
//                 "@type": "ImageObject",
//                 url: "https://reloadphysio.in/logo.png",
//               },
//             },
//           }),
//         }}
//       />

//       <style jsx>{`
//         @keyframes wave {
//           0% {
//             background-position-x: 0;
//           }
//           100% {
//             background-position-x: 1000px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

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
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b"
        style={{ scale }}
      />
      <div
        className="absolute inset-0 bg-[url('/Contact-Hero.jpg')] bg-cover bg-center animate-[wave_15s_linear_infinite]"
        aria-hidden="true"
      />
      {/* Second background image for layered effect */}
      <div
        className="absolute inset-0 bg-[url('/Contact-Hero2.jpg')] bg-cover bg-center animate-[wave_20s_linear_infinite] opacity-50"
        aria-hidden="true"
      />

      {/* Joint Illustration */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Healing Pulse */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)] opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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

      <div
        ref={textRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative text-center"
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 font-poppins"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Comprehensive Physiotherapy Solutions
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#f5f5f5]/80 mb-8 max-w-2xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={subtextVariants}
        >
          Tailored care for every need.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.NextLink
            href="/services#booking"
            className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            aria-label="Explore Services"
          >
            Explore Services
          </motion.NextLink>
          <motion.NextLink
            href="/services#details"
            className="bg-transparent text-[#ffffff] px-6 py-3 rounded-lg font-semibold border-2 border-[#1A3C5A] hover:bg-[#1A3C5A] hover:text-white transition-colors duration-300 sm:mt-0 mt-4"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            aria-label="Learn More"
          >
            Learn More
          </motion.NextLink>
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
            image: "https://reloadphysio.in/Contact-Hero.jpg",
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