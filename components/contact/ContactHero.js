// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import NextLink from "next/link";
// import { useRef } from "react";
// import { useInView } from "react-intersection-observer";

// // Animation variants
// const headingVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const subtextVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
//   },
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0 0 15px rgba(0, 163, 179, 0.5)",
//     transition: { duration: 0.3 },
//   },
//   tap: { scale: 0.95 },
// };

// export default function ContactHero() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

//   // UseInView for reliable animation triggers
//   const { ref: textRef, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section
//       className="relative bg-[#E8F5FF] min-h-screen flex items-center overflow-hidden"
//       role="banner"
//       aria-label="Contact Us Hero Section"
//       ref={sectionRef}
//     >
//       {/* Background */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-b"
//         style={{ scale }}
//       />
//       <div
//         className="absolute inset-0 bg-[url('/Contact-Hero3.jpg')] bg-cover bg-center"
//         aria-hidden="true"
//       />

//       {/* Joint Illustration */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center opacity-20"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 0.2, scale: 1 }}
//         transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
//       ></motion.div>

//       {/* Healing Pulse */}
//       <motion.div
//         className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)] opacity-10"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Particle Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-[#00A3B3] rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div
//         ref={textRef}
//         className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative text-center"
//       >
//         {/* Heading */}
//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 font-poppins"
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={headingVariants}
//         >
//           Let’s Start Your Journey to Recovery
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           className="text-base sm:text-lg md:text-xl text-[#f5f5f5]/80 mb-8 max-w-2xl mx-auto"
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={subtextVariants}
//         >
//           Reach out or book your appointment today.
//         </motion.p>

//         {/* CTAs */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
//           <motion.NextLink
//             href="/contact#booking"
//             className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300"
//             whileHover="hover"
//             whileTap="tap"
//             variants={buttonVariants}
//             aria-label="Book Appointment"
//           >
//             Book Now
//           </motion.NextLink>
//           <motion.NextLink
//             href="/contact#details"
//             className="bg-transparent text-[#ffffff] px-6 py-3 rounded-lg font-semibold border-2 border-[#1A3C5A] hover:bg-[#1A3C5A] hover:text-white transition-colors duration-300 sm:mt-0 mt-4"
//             whileHover="hover"
//             whileTap="tap"
//             variants={buttonVariants}
//             aria-label="Contact Us"
//           >
//             Contact Us
//           </motion.NextLink>
//         </div>
//       </div>

//       {/* SEO Metadata */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Contact Us - Reload Physiotherapy",
//             description:
//               "Start your recovery journey with Reload Physiotherapy. Book an appointment or reach out today for expert care.",
//             url: "https://reloadphysio.in/contact",
//             image: "https://reloadphysio.in/Contact-Hero.jpg",
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

//       {/* Styles */}
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0);
//             opacity: 0.8;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100vh);
//             opacity: 0;
//           }
//         }
//         .animate-float {
//           animation: float 6s infinite linear;
//         }
//       `}</style>
//     </section>
//   );
// }



// components/contact/ContactHero.js
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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

export default function ContactHero() {
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
      aria-label="Contact Us Hero Section"
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
          Let’s Start Your Journey to Recovery
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#1A3C5A] mb-8 max-w-2xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={subtextVariants}
        >
          Reach out or book your appointment today.
        </motion.p>

        {/* CTAs with Glow Effect */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#00A3B3] opacity-20 blur-md rounded-lg"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <Link href="/contact#booking">
              <motion.span
                className="relative bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300 inline-block"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                role="link"
                aria-label="Book Appointment"
                tabIndex={0}
              >
                Book Now
              </motion.span>
            </Link>
          </motion.div>
          <motion.div
            className="relative sm:mt-0 mt-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#1A3C5A] opacity-20 blur-md rounded-lg"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <Link href="/contact#details">
              <motion.span
                className="relative bg-transparent text-[#1A3C5A] px-6 py-3 rounded-lg font-semibold border-2 border-[#1A3C5A] hover:bg-[#1A3C5A] hover:text-white transition-colors duration-300 inline-block"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                role="link"
                aria-label="Contact Us"
                tabIndex={0}
              >
                Contact Us
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* SEO Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact Us - Reload Physiotherapy",
            description:
              "Start your recovery journey with Reload Physiotherapy. Book an appointment or reach out today for expert care.",
            url: "https://reloadphysio.in/contact",
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