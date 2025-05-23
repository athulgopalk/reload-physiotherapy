// "use client";
// import { motion } from "framer-motion";
// import { Heart, Star } from "lucide-react";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       ease: "easeOut",
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const iconVariants = {
//   hidden: { scale: 0, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//       type: "spring",
//       stiffness: 100,
//     },
//   },
// };

// export default function MissionVision() {
//   return (
//     <section
//       className="relative bg-[#F7F7F7] py-12 sm:py-16 md:py-20 overflow-hidden"
//       role="region"
//       aria-label="Mission and Vision"
//     >
//       {/* Subtle Background Accent */}
//       <div className="absolute inset-0 bg-[#E8F5FF]/20" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           {/* Mission Section */}
//           <motion.div
//             className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center"
//             variants={itemVariants}
//           >
//             <motion.div variants={iconVariants}>
//               <Heart
//                 className="w-12 h-12 text-[#00A3B3] mb-4"
//                 aria-hidden="true"
//               />
//             </motion.div>
//             <h3 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-4 font-poppins">
//               Our Mission
//             </h3>
//             <p className="text-sm sm:text-base text-[#1A3C5A]/80">
//               To empower individuals to move freely and live pain-free through
//               expert physiotherapy.
//             </p>
//           </motion.div>

//           {/* Vision Section */}
//           <motion.div
//             className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center"
//             variants={itemVariants}
//           >
//             <motion.div variants={iconVariants}>
//               <Star
//                 className="w-12 h-12 text-[#00A3B3] mb-4"
//                 aria-hidden="true"
//               />
//             </motion.div>
//             <h3 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-4 font-poppins">
//               Our Vision
//             </h3>
//             <p className="text-sm sm:text-base text-[#1A3C5A]/80">
//               To lead the way in physiotherapy by delivering personalized,
//               innovative, and result-driven treatment solutions that help people
//               move better and live stronger.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* SEO Metadata */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Organization",
//           name: "Reload Physiotherapy",
//           description:
//             "Reload Physiotherapy’s mission is to empower individuals to move freely and live pain-free through expert physiotherapy, with a vision to be India’s leading physiotherapy provider, blending innovation and care.",
//           address: {
//             "@type": "PostalAddress",
//             addressLocality: "Kerala",
//             addressCountry: "IN",
//           },
//         })}
//       </script>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function MissionVision() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const sectionRef = useRef(null);

  // Ensure visibility on navigation
  useEffect(() => {
    if (inView) {
      sectionRef.current?.focus();
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F7F7F7] py-12 sm:py-16 md:py-20 overflow-hidden"
      role="region"
      aria-label="Mission and Vision Section"
      tabIndex={-1}
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#E8F5FF]/20 via-[#00A3B3]/10 to-[#1A3C5A]/10 animate-wave"
        aria-hidden="true"
      />
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-[#F7F7F7]/50" aria-hidden="true" />

      {/* Decorative Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-20 text-[#E8F5FF]/30">
        <svg
          viewBox="0 0 1440 100"
          fill="currentColor"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,80C672,96,768,96,864,80C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,100L0,100Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Mission Card */}
          <motion.div
            className="group bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={itemVariants}
            role="article"
            aria-labelledby="mission-title"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4"
            >
              <Heart className="w-12 h-12 text-[#00A3B3]" aria-hidden="true" />
            </motion.div>
            <h3
              id="mission-title"
              className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-4 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#00A3B3] to-[#1A3C5A]"
            >
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-[#1A3C5A]/80 mb-6">
              To empower individuals to move freely and live pain-free through
              expert physiotherapy.
            </p>
            {/* <Link
              href="#mission" // Replace with actual URL
              className="inline-block px-4 py-2 bg-[#00A3B3] text-white rounded-full text-sm font-medium hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] focus:ring-offset-2"
              aria-label="Learn more about our mission"
            >
              Learn More
            </Link> */}
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={itemVariants}
            role="article"
            aria-labelledby="vision-title"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4"
            >
              <Star className="w-12 h-12 text-[#00A3B3]" aria-hidden="true" />
            </motion.div>
            <h3
              id="vision-title"
              className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-4 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#00A3B3] to-[#1A3C5A]"
            >
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-[#1A3C5A]/80 mb-6">
              To lead the way in physiotherapy by delivering personalized,
              innovative, and result-driven treatment solutions that help people
              move better and live stronger.
            </p>
            {/* <Link
              href="#vision" // Replace with actual URL
              className="inline-block px-4 py-2 bg-[#00A3B3] text-white rounded-full text-sm font-medium hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] focus:ring-offset-2"
              aria-label="Learn more about our vision"
            >
              Learn More
            </Link> */}
          </motion.div>
        </motion.div>
      </div>

      {/* SEO Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mission and Vision - Reload Physiotherapy",
            description:
              "Reload Physiotherapy’s mission is to empower individuals to move freely and live pain-free through expert physiotherapy. Our vision is to lead with innovative, personalized treatment solutions across India.",
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