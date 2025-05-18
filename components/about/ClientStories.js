"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

// Client stories data
const stories = [
  {
    quote:
      "I thought chronic back pain was my life. In 4 months, Reload helped me dance at my daughter’s wedding!",
    image: "/stories/dancing-silhouette.jpg",
    alt: "Silhouette of a person dancing",
    progress: "Pain-Free Living",
  },
  {
    quote:
      "A shoulder injury benched me. Reload got me back on the pitch, bowling stronger than ever!",
    image: "/stories/cricket-ball.jpg",
    alt: "Illustration of a cricket ball",
    progress: "Back to Cricket",
  },
  {
    quote:
      "At 78, I struggled to walk. Reload’s care gave me the confidence to stroll with my grandkids!",
    image: "/stories/walking-stick.jpg",
    alt: "Illustration of a walking stick",
    progress: "Restored Mobility",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 12px 32px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.3 },
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
};

const progressVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.2, ease: "easeOut", delay: 0.4 },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

export default function ClientStories() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      className="relative bg-[#F7F7F7] py-16 sm:py-20 md:py-24 overflow-hidden"
      role="region"
      aria-label="Client Success Stories"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_15s_linear_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/50 to-[#F7F7F7]/80" />

      {/* Healing Path SVG */}
      <motion.svg
        className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-12 opacity-20"
        viewBox="0 0 24 1000"
        preserveAspectRatio="none"
        style={{ opacity: pathOpacity }}
      >
        <motion.path
          d="M12 0 V1000"
          stroke="#00A3B3"
          strokeWidth="4"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.circle
          cx="12"
          cy="50"
          r="6"
          fill="#00A3B3"
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.svg>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-12 sm:mb-16 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Journeys of Hope
        </motion.h2>

        {/* Stories Reel */}
        <div className="space-y-12 sm:space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.quote}
              className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col items-center text-center border border-[#00A3B3]/50 bg-gradient-to-br from-[#E8F5FF]/20 to-[#FFFFFF] relative sticky top-24"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover="hover"
            >
              {/* Sparkle Effect */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-[#00A3B3] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Checkmark Icon */}
              <motion.div variants={iconVariants}>
                <CheckCircle
                  className="w-12 h-12 sm:w-14 sm:h-14 text-[#00A3B3] mb-6"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Image */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 overflow-hidden rounded-full border-2 border-[#00A3B3]/20">
                <Image
                  src={story.image}
                  alt={story.alt}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Client Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl text-[#1A3C5A] font-medium mb-6 italic max-w-md">
                “{story.quote}”
              </blockquote>

              {/* Progress Bar */}
              <div className="w-full max-w-sm">
                <div className="flex justify-between text-sm text-[#1A3C5A]/70 mb-2">
                  <span>Before</span>
                  <span>{story.progress}</span>
                </div>
                <div className="h-2 bg-[#E8F5FF] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00A3B3]"
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Reload Physiotherapy",
          description:
            "Inspiring client success stories from Reload Physiotherapy, showcasing life-changing recoveries through expert care.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "IN",
          },
          review: stories.map((story) => ({
            "@type": "Review",
            reviewBody: story.quote,
            itemReviewed: {
              "@type": "Service",
              name: "Physiotherapy Services",
            },
          })),
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
      `}</style>
    </section>
  );
}
