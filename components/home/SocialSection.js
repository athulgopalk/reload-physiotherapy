"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, X } from "lucide-react";

// Instagram post data (3 placeholder posts)
const instagramPosts = [
  {
    image: "/posts/physio-tool.jpg",
    alt: "Physiotherapy tool in action",
    link: "#",
  },
  {
    image: "/posts/body-part.jpg",
    alt: "Body part rehabilitation session",
    link: "#",
  },
  {
    image: "/posts/therapy-session.jpg",
    alt: "Physiotherapy session for mobility",
    link: "#",
  },
];

// Social media links
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <Linkedin
        className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3]"
        aria-label="LinkedIn Icon"
      />
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <Instagram
        className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3]"
        aria-label="Instagram Icon"
      />
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    icon: (
      <X
        className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3]"
        aria-label="X Icon"
      />
    ),
  },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.3,
      type: "spring",
      stiffness: 80,
    },
  }),
  hover: {
    scale: 1.05,
    y: -8,
    boxShadow: "0 10px 30px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.3 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 15px rgba(0, 163, 179, 0.6)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.3,
      type: "spring",
      bounce: 0.3,
    },
  }),
  hover: {
    scale: 1.1,
    y: -5,
    boxShadow: "0 0 20px rgba(0, 163, 179, 0.6)",
    transition: { duration: 0.3 },
  },
};

export default function SocialSection() {
  return (
    <div className="relative bg-[#F7F7F7]">
      {/* Instagram Preview Section */}
      <section
        className="py-12 sm:py-16 relative overflow-hidden"
        role="region"
        aria-label="Instagram Preview"
      >
        {/* Wave Background */}
        <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_12s_linear_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/30 to-[#F7F7F7]/80" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
          {/* Heading & Subtext */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-4 font-poppins"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            See Our Work
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-[#1A3C5A] text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={subtextVariants}
          >
            Follow us for tips and updates!
          </motion.p>

          {/* Gallery */}
          <div className="relative flex justify-center">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 relative"
              style={{ scrollBehavior: "smooth" }}
            >
              {instagramPosts.map((post, i) => (
                <motion.div
                  key={post.alt}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[28rem] bg-white rounded-xl shadow-lg border border-[#00A3B3]/30 relative overflow-hidden snap-center"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={320}
                    height={448}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#1A3C5A]/50 flex items-center justify-center"
                    initial="hidden"
                    whileHover="visible"
                    variants={overlayVariants}
                  >
                    <Link href={post.link} passHref>
                      <motion.a
                        className="text-white font-semibold text-sm sm:text-base bg-[#00A3B3]/90 px-4 py-2 rounded-lg"
                        aria-label={`View Instagram Post ${i + 1}`}
                        target="_blank"
                        rel="noopener noreferrer noindex"
                      >
                        View Post
                      </motion.a>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            {/* Arrows */}
            <motion.button
              className="absolute left-4 bottom-[-3rem] sm:left-0 sm:top-1/2 sm:-translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 lg:hidden"
              onClick={() =>
                document
                  .querySelector(".snap-x")
                  .scrollBy({ left: -320, behavior: "smooth" })
              }
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 12px rgba(0, 163, 179, 0.5)",
              }}
              aria-label="Previous Posts"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
            <motion.button
              className="absolute right-4 bottom-[-3rem] sm:right-0 sm:top-1/2 sm:-translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 lg:hidden"
              onClick={() =>
                document
                  .querySelector(".snap-x")
                  .scrollBy({ left: 320, behavior: "smooth" })
              }
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 12px rgba(0, 163, 179, 0.5)",
              }}
              aria-label="Next Posts"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          {/* See More Button */}
          <div className="text-center mt-12 sm:mt-10">
            <Link href="https://instagram.com" passHref>
              <motion.a
                className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-500"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                aria-label="See More on Instagram"
                target="_blank"
                rel="noopener noreferrer noindex"
              >
                See More
              </motion.a>
            </Link>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section
        className="py-12 sm:py-16 bg-[#E8F5FF]/10 relative"
        role="region"
        aria-label="Follow Us"
      >
        <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-5 animate-[wave_15s_linear_infinite]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Heading & Subtext */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-4 font-poppins"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            Connect with Us
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-[#1A3C5A] text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={subtextVariants}
          >
            Join our community for health tips and updates.
          </motion.p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 sm:gap-8">
            {socialLinks.map((social, i) => (
              <motion.div
                key={social.name}
                className="bg-white rounded-lg p-4 shadow-md border border-[#00A3B3]/20 bg-gradient-to-br from-[#E8F5FF]/50 to-[#FFFFFF]"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={iconVariants}
                whileHover="hover"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer noindex"
                  aria-label={`Follow Reload Physiotherapy on ${social.name}`}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Reload Physiotherapy",
          sameAs: socialLinks.map((social) => social.href),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "IN",
          },
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
