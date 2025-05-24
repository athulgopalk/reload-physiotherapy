// // // // "use client";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import { Instagram, Linkedin, X } from "lucide-react";

// // // // // Instagram posts data
// // // // const instagramPosts = [
// // // //   {
// // // //     image: "/insta1.webp",
// // // //     alt: "Reload Physiotherapy Instagram Post 1",
// // // //     link: "https://www.instagram.com/p/DEWPCElPiH1/?igsh=YTE0MHhpN3oyaGQw",
// // // //   },
// // // //   {
// // // //     image: "/insta2.webp",
// // // //     alt: "Reload Physiotherapy Instagram Post 2",
// // // //     link: "https://www.instagram.com/p/DHkfBXKvPu6/?igsh=MXZmdjg4MzVidmExZg==",
// // // //   },
// // // //   {
// // // //     image: "/insta3.webp",
// // // //     alt: "Reload Physiotherapy Instagram Post 3",
// // // //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// // // //   },
// // // //   {
// // // //     image: "/insta4.webp",
// // // //     alt: "Reload Physiotherapy Instagram Post 3",
// // // //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// // // //   },
// // // //   {
// // // //     image: "/insta5.webp",
// // // //     alt: "Reload Physiotherapy Instagram Post 3",
// // // //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// // // //   },
// // // // ];

// // // // // Social media links
// // // // const socialLinks = [
// // // //   {
// // // //     name: "LinkedIn",
// // // //     href: "https://www.linkedin.com/company/reload-physiotherapy",
// // // //     icon: (
// // // //       <Linkedin
// // // //         className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3]"
// // // //         aria-label="LinkedIn Icon"
// // // //       />
// // // //     ),
// // // //   },
// // // //   {
// // // //     name: "Instagram",
// // // //     href: "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
// // // //     icon: (
// // // //       <Instagram
// // // //         className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3]"
// // // //         aria-label="Instagram Icon"
// // // //       />
// // // //     ),
// // // //   },
// // // //   {
// // // //     name: "X",
// // // //     href: "https://x.com/reload_physio",
// // // //     icon: (
// // // //       <X
// // // //         className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3]"
// // // //         aria-label="X Icon"
// // // //       />
// // // //     ),
// // // //   },
// // // // ];

// // // // // Animation variants
// // // // const headingVariants = {
// // // //   hidden: { opacity: 0, y: 20 },
// // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // // // };

// // // // const subtextVariants = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: {
// // // //     opacity: 1,
// // // //     transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
// // // //   },
// // // // };

// // // // const cardVariants = {
// // // //   hidden: { opacity: 0, x: 50 },
// // // //   visible: (i) => ({
// // // //     opacity: 1,
// // // //     x: 0,
// // // //     transition: {
// // // //       duration: 0.7,
// // // //       ease: "easeOut",
// // // //       delay: i * 0.3,
// // // //       type: "spring",
// // // //       stiffness: 80,
// // // //     },
// // // //   }),
// // // //   hover: {
// // // //     scale: 1.05,
// // // //     y: -8,
// // // //     boxShadow: "0 10px 30px rgba(0, 163, 179, 0.5)",
// // // //     transition: { duration: 0.3 },
// // // //   },
// // // // };

// // // // const overlayVariants = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
// // // // };

// // // // const buttonVariants = {
// // // //   hover: {
// // // //     scale: 1.1,
// // // //     boxShadow: "0 0 15px rgba(0, 163, 179, 0.6)",
// // // //     transition: { duration: 0.3 },
// // // //   },
// // // //   tap: { scale: 0.95 },
// // // // };

// // // // const iconVariants = {
// // // //   hidden: { opacity: 0, scale: 0.8 },
// // // //   visible: (i) => ({
// // // //     opacity: 1,
// // // //     scale: 1,
// // // //     transition: {
// // // //       duration: 0.7,
// // // //       ease: "easeOut",
// // // //       delay: i * 0.3,
// // // //       type: "spring",
// // // //       bounce: 0.3,
// // // //     },
// // // //   }),
// // // //   hover: { scale: 1.2, y: -5, transition: { duration: 0.3 } },
// // // // };

// // // // export default function SocialSection() {
// // // //   return (
// // // //     <div className="relative bg-[#F7F7F7]">
// // // //       {/* Instagram Preview Section */}
// // // //       <section
// // // //         className="py-12 sm:py-16 relative overflow-hidden"
// // // //         role="region"
// // // //         aria-label="Instagram Preview"
// // // //       >
// // // //         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_12s_linear_infinite]" />
// // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/30 to-[#F7F7F7]/80" />

// // // //         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
// // // //           <motion.h2
// // // //             className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-4 font-poppins"
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true, amount: 0.3 }}
// // // //             variants={headingVariants}
// // // //           >
// // // //             See Our Work
// // // //           </motion.h2>
// // // //           <motion.p
// // // //             className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10"
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true, amount: 0.3 }}
// // // //             variants={subtextVariants}
// // // //           >
// // // //             Follow us for tips and updates!
// // // //           </motion.p>

// // // //           <div className="relative flex justify-center">
// // // //             <div
// // // //               className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 relative"
// // // //               style={{ scrollBehavior: "smooth" }}
// // // //             >
// // // //               {instagramPosts.slice(0, 5).map((post, i) => (
// // // //                 <motion.div
// // // //                   key={post.link} // Using link as unique key
// // // //                   className="flex-shrink-0 w-64 sm:w-72 md:w-[28rem] h-64 sm:h-72 md:h-[28rem] bg-white rounded-xl shadow-lg border border-[#00A3B3]/30 relative overflow-hidden snap-center"
// // // //                   custom={i}
// // // //                   initial="hidden"
// // // //                   whileInView="visible"
// // // //                   viewport={{ once: true, amount: 0.3 }}
// // // //                   variants={cardVariants}
// // // //                   whileHover="hover"
// // // //                 >
// // // //                   <Image
// // // //                     src={post.image}
// // // //                     alt={post.alt}
// // // //                     width={448}
// // // //                     height={448}
// // // //                     className="w-full h-full object-cover"
// // // //                     // loading="lazy"
// // // //                   />
// // // //                   <motion.div
// // // //                     className="absolute inset-0 bg-[#1A3C5A]/50 flex items-center justify-center"
// // // //                     initial="hidden"
// // // //                     whileHover="visible"
// // // //                     variants={overlayVariants}
// // // //                   >
// // // //                     <Link
// // // //                       href={post.link}
// // // //                       target="_blank"
// // // //                       rel="noopener noreferrer"
// // // //                     >
// // // //                       <motion.button
// // // //                         className="text-white font-semibold text-sm sm:text-base bg-[#00A3B3]/90 px-4 py-2 rounded-lg"
// // // //                         aria-label={`View Instagram Post ${i + 1}`}
// // // //                         variants={buttonVariants}
// // // //                         whileHover="hover"
// // // //                         whileTap="tap"
// // // //                       >
// // // //                         View Post
// // // //                       </motion.button>
// // // //                     </Link>
// // // //                   </motion.div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //             <motion.button
// // // //               className="absolute left-4 bottom-[-3rem] sm:-left-15 sm:top-1/2 sm:-translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 "
// // // //               onClick={() =>
// // // //                 document
// // // //                   .querySelector(".snap-x")
// // // //                   ?.scrollBy({ left: -320, behavior: "smooth" })
// // // //               }
// // // //               whileHover={{
// // // //                 scale: 1.15,
// // // //                 boxShadow: "0 0 12px rgba(0, 163, 179, 0.5)",
// // // //               }}
// // // //               aria-label="Previous Posts"
// // // //             >
// // // //               <svg
// // // //                 width="24"
// // // //                 height="24"
// // // //                 viewBox="0 0 24 24"
// // // //                 fill="none"
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //               >
// // // //                 <path
// // // //                   d="M15 18l-6-6 6-6"
// // // //                   stroke="currentColor"
// // // //                   strokeWidth="2"
// // // //                   strokeLinecap="round"
// // // //                   strokeLinejoin="round"
// // // //                 />
// // // //               </svg>
// // // //             </motion.button>
// // // //             <motion.button
// // // //               className="absolute right-4 bottom-[-3rem] sm:-right-15 sm:top-1/2 sm:-translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 "
// // // //               onClick={() =>
// // // //                 document
// // // //                   .querySelector(".snap-x")
// // // //                   ?.scrollBy({ left: 320, behavior: "smooth" })
// // // //               }
// // // //               whileHover={{
// // // //                 scale: 1.15,
// // // //                 boxShadow: "0 0 12px rgba(0, 163, 179, 0.5)",
// // // //               }}
// // // //               aria-label="Next Posts"
// // // //             >
// // // //               <svg
// // // //                 width="24"
// // // //                 height="24"
// // // //                 viewBox="0 0 24 24"
// // // //                 fill="none"
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //               >
// // // //                 <path
// // // //                   d="M9 18l6-6-6-6"
// // // //                   stroke="currentColor"
// // // //                   strokeWidth="2"
// // // //                   strokeLinecap="round"
// // // //                   strokeLinejoin="round"
// // // //                 />
// // // //               </svg>
// // // //             </motion.button>
// // // //           </div>

// // // //           <div className="text-center mt-10 sm:mt-12 cursor-pointer">
// // // //             <Link
// // // //               href="https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ=="
// // // //               target="_blank"
// // // //               className=" cursor-pointer"
// // // //               // rel="noopener noreferrer"
// // // //             >
// // // //               <motion.button
// // // //                 className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-500 cursor-pointer"
// // // //                 aria-label="See More on Instagram"
// // // //                 variants={buttonVariants}
// // // //                 whileHover="hover"
// // // //                 // whileTap="tap"
// // // //               >
// // // //                 See More
// // // //               </motion.button>
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Follow Us Section */}
// // // //       <section
// // // //         className="py-12 sm:py-16 bg-[#E8F5FF]/10 relative"
// // // //         role="region"
// // // //         aria-label="Follow Us"
// // // //       >
// // // //         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-5 animate-[wave_15s_linear_infinite]" />
// // // //         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
// // // //           <motion.h2
// // // //             className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-4 font-poppins"
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true, amount: 0.3 }}
// // // //             variants={headingVariants}
// // // //           >
// // // //             Connect with Us
// // // //           </motion.h2>
// // // //           <motion.p
// // // //             className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10"
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true, amount: 0.3 }}
// // // //             variants={subtextVariants}
// // // //           >
// // // //             Join our community for health tips and updates.
// // // //           </motion.p>

// // // //           <div className="flex justify-center gap-6 sm:gap-8">
// // // //             {socialLinks.map((social, i) => (
// // // //               <Link
// // // //                 key={social.href}
// // // //                 href={social.href}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 aria-label={`Follow Reload Physiotherapy on ${social.name}`}
// // // //               >
// // // //                 <motion.div
// // // //                   className="bg-white rounded-lg p-4 shadow-md border border-[#00A3B3]/20 bg-gradient-to-br from-[#E8F5FF]/50 to-[#FFFFFF] cursor-pointer"
// // // //                   custom={i}
// // // //                   initial="hidden"
// // // //                   whileInView="visible"
// // // //                   viewport={{ once: true, amount: 0.3 }}
// // // //                   variants={iconVariants}
// // // //                   whileHover="hover"
// // // //                 >
// // // //                   {social.icon}
// // // //                 </motion.div>
// // // //               </Link>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <script
// // // //         type="application/ld+json"
// // // //         dangerouslySetInnerHTML={{
// // // //           __html: JSON.stringify({
// // // //             "@context": "https://schema.org",
// // // //             "@type": "Organization",
// // // //             name: "Reload Physiotherapy",
// // // //             sameAs: socialLinks.map((social) => social.href),
// // // //             address: {
// // // //               "@type": "PostalAddress",
// // // //               addressLocality: "Kerala",
// // // //               addressCountry: "IN",
// // // //             },
// // // //           }),
// // // //         }}
// // // //       />

// // // //       <style jsx>{`
// // // //         @keyframes wave {
// // // //           0% {
// // // //             background-position-x: 0;
// // // //           }
// // // //           100% {
// // // //             background-position-x: 1000px;
// // // //           }
// // // //         }
// // // //         .scrollbar-hide::-webkit-scrollbar {
// // // //           display: none;
// // // //         }
// // // //         .scrollbar-hide {
// // // //           -ms-overflow-style: none;
// // // //           scrollbar-width: none;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import Image from "next/image";
// // // import { Instagram, Linkedin, X } from "lucide-react";
// // // import { useRef, useEffect, useState } from "react";

// // // // Instagram posts data
// // // const instagramPosts = [
// // //   {
// // //     id: "post1",
// // //     image: "/insta1.webp",
// // //     alt: "Reload Physiotherapy Instagram Post 1",
// // //     link: "https://www.instagram.com/p/DEWPCElPiH1/?igsh=YTE0MHxpN3oyaGQw",
// // //   },
// // //   {
// // //     id: "post2",
// // //     image: "/insta2.webp",
// // //     alt: "Reload Physiotherapy Instagram Post 2",
// // //     link: "https://www.instagram.com/p/DHkfBXKvPu6/?igsh=MXZmdjg4MzVidmExZg==",
// // //   },
// // //   {
// // //     id: "post3",
// // //     image: "/insta3.webp",
// // //     alt: "Reload Physiotherapy Instagram Post 3",
// // //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// // //   },
// // //   {
// // //     id: "post4",
// // //     image: "/insta4.webp",
// // //     alt: "Reload Physiotherapy Instagram Post 4",
// // //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// // //   },
// // //   {
// // //     id: "post5",
// // //     image: "/insta5.webp",
// // //     alt: "Reload Physiotherapy Instagram Post 5",
// // //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// // //   },
// // // ];

// // // // Social media links
// // // const socialLinks = [
// // //   {
// // //     id: "linkedin",
// // //     name: "LinkedIn",
// // //     href: "https://www.linkedin.com/company/reload-physiotherapy",
// // //     icon: (
// // //       <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
// // //     ),
// // //     ariaLabel: "Follow Reload Physiotherapy on LinkedIn",
// // //   },
// // //   {
// // //     id: "instagram",
// // //     name: "Instagram",
// // //     href: "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
// // //     icon: (
// // //       <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
// // //     ),
// // //     ariaLabel: "Follow Reload Physiotherapy on Instagram",
// // //   },
// // //   {
// // //     id: "x",
// // //     name: "X",
// // //     href: "https://x.com/reload_physio",
// // //     icon: (
// // //       <X className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
// // //     ),
// // //     ariaLabel: "Follow Reload Physiotherapy on X",
// // //   },
// // // ];

// // // // Animation variants
// // // const headingVariants = {
// // //   initial: { opacity: 0, y: 20 },
// // //   animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// // // };

// // // const subtextVariants = {
// // //   initial: { opacity: 0 },
// // //   animate: {
// // //     opacity: 1,
// // //     transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
// // //   },
// // // };

// // // const cardVariants = {
// // //   initial: { opacity: 0, x: 50 },
// // //   animate: (i) => ({
// // //     opacity: 1,
// // //     x: 0,
// // //     transition: {
// // //       duration: 0.6,
// // //       ease: "easeOut",
// // //       delay: i * 0.2,
// // //       type: "spring",
// // //       stiffness: 100,
// // //     },
// // //   }),
// // //   hover: {
// // //     scale: 1.03,
// // //     y: -10,
// // //     transition: { duration: 0.3 },
// // //   },
// // // };

// // // const overlayVariants = {
// // //   initial: { opacity: 0 },
// // //   animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
// // // };

// // // const buttonVariants = {
// // //   hover: {
// // //     scale: 1.08,
// // //     boxShadow: "0 0 16px rgba(0, 163, 179, 0.7)",
// // //     transition: { duration: 0.3 },
// // //   },
// // //   tap: { scale: 0.95 },
// // // };

// // // const iconVariants = {
// // //   initial: { opacity: 0, scale: 0.9 },
// // //   animate: (i) => ({
// // //     opacity: 1,
// // //     scale: 1,
// // //     transition: {
// // //       duration: 0.6,
// // //       ease: "easeOut",
// // //       delay: i * 0.2,
// // //       type: "spring",
// // //       bounce: 0.4,
// // //     },
// // //   }),
// // //   hover: {
// // //     scale: 1.2,
// // //     color: "#1A3C5A",
// // //     transition: { duration: 0.3, ease: "easeOut" },
// // //   },
// // // };

// // // export default function SocialSection() {
// // //   const carouselRef = useRef(null);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     // Ensure text visibility on mount and navigation
// // //     setIsVisible(true);

// // //     // Preload images for faster loading
// // //     instagramPosts.forEach((post) => {
// // //       const img = new window.Image();
// // //       img.src = post.image;
// // //     });

// // //     // Intersection Observer for lazy loading visibility
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //           observer.disconnect();
// // //         }
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     if (carouselRef.current) {
// // //       observer.observe(carouselRef.current);
// // //     }

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   const scrollCarousel = (direction) => {
// // //     if (carouselRef.current) {
// // //       const cardWidth = 320; // Approximate width of each card including gap
// // //       const currentScroll = carouselRef.current.scrollLeft;
// // //       const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      
// // //       let newScroll = currentScroll + direction * cardWidth;
      
// // //       // Ensure scroll stays within bounds
// // //       newScroll = Math.max(0, Math.min(newScroll, maxScroll));
      
// // //       carouselRef.current.scrollTo({
// // //         left: newScroll,
// // //         behavior: "smooth",
// // //       });
// // //     }
// // //   };

// // //   return (
// // //     <div className="relative bg-[#F7F7F7]">
// // //       {/* Instagram Preview Section */}
// // //       <section
// // //         className="py-12 sm:py-16 relative overflow-hidden"
// // //         role="region"
// // //         aria-label="Instagram Preview"
// // //       >
// // //         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_10s_linear_infinite] z-0" />
// // //         <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/50 to-[#F7F7F7]/90 z-0" />

// // //         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
// // //           <AnimatePresence>
// // //             {isVisible && (
// // //               <>
// // //                 <motion.h2
// // //                   className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
// // //                   initial="initial"
// // //                   animate="animate"
// // //                   variants={headingVariants}
// // //                 >
// // //                   See Our Work
// // //                 </motion.h2>
// // //                 <motion.p
// // //                   className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
// // //                   initial="initial"
// // //                   animate="animate"
// // //                   variants={subtextVariants}
// // //                 >
// // //                   Follow us for tips and updates!
// // //                 </motion.p>
// // //               </>
// // //             )}
// // //           </AnimatePresence>

// // //           <div className="relative flex justify-center" ref={carouselRef}>
// // //             <div
// // //               className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6"
// // //               style={{ scrollBehavior: "smooth" }}
// // //             >
// // //               {instagramPosts.map((post, i) => (
// // //                 <motion.div
// // //                   key={post.id}
// // //                   className="flex-shrink-0 w-64 sm:w-72 md:w-[28rem] h-64 sm:h-72 md:h-[28rem] bg-white rounded-2xl shadow-xl border border-[#00A3B3]/20 relative overflow-hidden snap-center"
// // //                   custom={i}
// // //                   initial="initial"
// // //                   animate="animate"
// // //                   variants={cardVariants}
// // //                   whileHover="hover"
// // //                 >
// // //                   <Image
// // //                     src={post.image}
// // //                     alt={post.alt}
// // //                     width={448}
// // //                     height={448}
// // //                     className="w-full h-full object-cover rounded-2xl"
// // //                     priority={i === 0 || i === 1}
// // //                     fetchPriority="high"
// // //                     sizes="(max-width: 640px) 64vw, (max-width: 768px) 72vw, 28rem"
// // //                     placeholder="blur"
// // //                     blurDataURL="/placeholder.webp"
// // //                   />
// // //                   <motion.div
// // //                     className="absolute inset-0 bg-[#1A3C5A]/60 flex items-center justify-center"
// // //                     initial="initial"
// // //                     whileHover="animate"
// // //                     variants={overlayVariants}
// // //                   >
// // //                     <button
// // //                       className="text-white font-semibold text-sm sm:text-base bg-[#00A3B3] px-5 py-2.5 rounded-lg cursor-pointer hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
// // //                       onClick={() =>
// // //                         window.open(post.link, "_blank", "noopener,noreferrer")
// // //                       }
// // //                       aria-label={`View Instagram Post ${i + 1}`}
// // //                     >
// // //                       View Post
// // //                     </button>
// // //                   </motion.div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
            
// // //             {/* New Scroll Buttons */}
// // //             <motion.button
// // //               className="absolute left-4 sm:-left-12 top-1/2 -translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-30"
// // //               onClick={() => scrollCarousel(-1)}
// // //               variants={buttonVariants}
// // //               whileHover="hover"
// // //               whileTap="tap"
// // //               aria-label="Previous Instagram Posts"
// // //             >
// // //               <svg
// // //                 width="24"
// // //                 height="24"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   d="M15 18l-6-6 6-6"
// // //                   stroke="currentColor"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 />
// // //               </svg>
// // //             </motion.button>
// // //             <motion.button
// // //               className="absolute right-4 sm:-right-12 top-1/2 -translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-30"
// // //               onClick={() => scrollCarousel(1)}
// // //               variants={buttonVariants}
// // //               whileHover="hover"
// // //               whileTap="tap"
// // //               aria-label="Next Instagram Posts"
// // //             >
// // //               <svg
// // //                 width="24"
// // //                 height="24"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   d="M9 18l6-6-6-6"
// // //                   stroke="currentColor"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 />
// // //               </svg>
// // //             </motion.button>
// // //           </div>

// // //           <div className="text-center mt-8 sm:mt-10">
// // //             <button
// // //               className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20 shadow-md"
// // //               onClick={() =>
// // //                 window.open(
// // //                   "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
// // //                   "_blank",
// // //                   "noopener,noreferrer"
// // //                 )
// // //               }
// // //               aria-label="See More on Instagram"
// // //             >
// // //               See More
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Follow Us Section */}
// // //       <section
// // //         className="py-12 sm:py-16 bg-[#E8F5FF]/10 relative"
// // //         role="region"
// // //         aria-label="Follow Us"
// // //       >
// // //         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-5 animate-[wave_12s_linear_infinite] z-0" />
// // //         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
// // //           <AnimatePresence>
// // //             {isVisible && (
// // //               <>
// // //                 <motion.h2
// // //                   className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
// // //                   initial="initial"
// // //                   animate="animate"
// // //                   variants={headingVariants}
// // //                 >
// // //                   Connect with Us
// // //                 </motion.h2>
// // //                 <motion.p
// // //                   className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
// // //                   initial="initial"
// // //                   animate="animate"
// // //                   variants={subtextVariants}
// // //                 >
// // //                   Join our community for health tips and updates.
// // //                 </motion.p>
// // //               </>
// // //             )}
// // //           </AnimatePresence>

// // //           <div className="flex justify-center gap-6 sm:gap-8">
// // //             {socialLinks.map((social, i) => (
// // //               <button
// // //                 key={social.id}
// // //                 className="group bg-white rounded-full p-4 shadow-xl border border-[#00A3B3]/20 bg-gradient-to-br from-[#E8F5FF]/60 to-[#FFFFFF] cursor-pointer hover:bg-[#E8F5FF] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
// // //                 onClick={() =>
// // //                   window.open(social.href, "_blank", "noopener,noreferrer")
// // //                 }
// // //                 aria-label={social.ariaLabel}
// // //               >
// // //                 <motion.div
// // //                   custom={i}
// // //                   initial="initial"
// // //                   animate="animate"
// // //                   variants={iconVariants}
// // //                   className="group-hover:scale-120 group-hover:text-[#1A3C5A] transition-all duration-300"
// // //                 >
// // //                   {social.icon}
// // //                 </motion.div>
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <script
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{
// // //           __html: JSON.stringify({
// // //             "@context": "https://schema.org",
// // //             "@type": "Organization",
// // //             name: "Reload Physiotherapy",
// // //             sameAs: socialLinks.map((social) => social.href),
// // //             address: {
// // //               "@type": "PostalAddress",
// // //               addressLocality: "Kerala",
// // //               addressCountry: "IN",
// // //             },
// // //             image: instagramPosts.map((post) => ({
// // //               "@type": "ImageObject",
// // //               url: `https://www.reloadphysiotherapy.in${post.image}`,
// // //               caption: post.alt,
// // //             })),
// // //           }),
// // //         }}
// // //       />

// // //       <style jsx>{`
// // //         @keyframes wave {
// // //           0% {
// // //             background-position-x: 0;
// // //           }
// // //           100% {
// // //             background-position-x: 1000px;
// // //           }
// // //         }
// // //         .scrollbar-hide::-webkit-scrollbar {
// // //           display: none;
// // //         }
// // //         .scrollbar-hide {
// // //           -ms-overflow-style: none;
// // //           scrollbar-width: none;
// // //         }
// // //         button {
// // //           cursor: pointer !important;
// // //           position: relative;
// // //           z-index: 20 !important;
// // //         }
// // //         button:focus {
// // //           outline: none;
// // //           box-shadow: 0 0 0 3px rgba(0, 163, 179, 0.5);
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image from "next/image";
// // import { Instagram, Linkedin, X } from "lucide-react";
// // import { useRef, useEffect, useState } from "react";

// // // Instagram posts data
// // const instagramPosts = [
// //   {
// //     id: "post1",
// //     image: "/insta1.webp",
// //     alt: "Reload Physiotherapy Instagram Post 1",
// //     link: "https://www.instagram.com/p/DEWPCElPiH1/?igsh=YTE0MHxpN3oyaGQw",
// //   },
// //   {
// //     id: "post2",
// //     image: "/insta2.webp",
// //     alt: "Reload Physiotherapy Instagram Post 2",
// //     link: "https://www.instagram.com/p/DHkfBXKvPu6/?igsh=MXZmdjg4MzVidmExZg==",
// //   },
// //   {
// //     id: "post3",
// //     image: "/insta3.webp",
// //     alt: "Reload Physiotherapy Instagram Post 3",
// //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// //   },
// //   {
// //     id: "post4",
// //     image: "/insta4.webp",
// //     alt: "Reload Physiotherapy Instagram Post 4",
// //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// //   },
// //   {
// //     id: "post5",
// //     image: "/insta5.webp",
// //     alt: "Reload Physiotherapy Instagram Post 5",
// //     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
// //   },
// // ];

// // // Social media links
// // const socialLinks = [
// //   {
// //     id: "linkedin",
// //     name: "LinkedIn",
// //     href: "https://www.linkedin.com/company/reload-physiotherapy",
// //     icon: (
// //       <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
// //     ),
// //     ariaLabel: "Follow Reload Physiotherapy on LinkedIn",
// //   },
// //   {
// //     id: "instagram",
// //     name: "Instagram",
// //     href: "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
// //     icon: (
// //       <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
// //     ),
// //     ariaLabel: "Follow Reload Physiotherapy on Instagram",
// //   },
// //   {
// //     id: "x",
// //     name: "X",
// //     href: "https://x.com/reload_physio",
// //     icon: (
// //       <X className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
// //     ),
// //     ariaLabel: "Follow Reload Physiotherapy on X",
// //   },
// // ];

// // // Animation variants
// // const headingVariants = {
// //   initial: { opacity: 0, y: 20 },
// //   animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// // };

// // const subtextVariants = {
// //   initial: { opacity: 0 },
// //   animate: {
// //     opacity: 1,
// //     transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
// //   },
// // };

// // const cardVariants = {
// //   initial: { opacity: 0, x: 50 },
// //   animate: (i) => ({
// //     opacity: 1,
// //     x: 0,
// //     transition: {
// //       duration: 0.6,
// //       ease: "easeOut",
// //       delay: i * 0.2,
// //       type: "spring",
// //       stiffness: 100,
// //     },
// //   }),
// //   hover: {
// //     scale: 1.03,
// //     y: -10,
// //     transition: { duration: 0.3 },
// //   },
// // };

// // const overlayVariants = {
// //   initial: { opacity: 0 },
// //   animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
// // };

// // const buttonVariants = {
// //   hover: {
// //     scale: 1.08,
// //     boxShadow: "0 0 16px rgba(0, 163, 179, 0.7)",
// //     transition: { duration: 0.3 },
// //   },
// //   tap: { scale: 0.95 },
// // };

// // const iconVariants = {
// //   initial: { opacity: 0, scale: 0.9 },
// //   animate: (i) => ({
// //     opacity: 1,
// //     scale: 1,
// //     transition: {
// //       duration: 0.6,
// //       ease: "easeOut",
// //       delay: i * 0.2,
// //       type: "spring",
// //       bounce: 0.4,
// //     },
// //   }),
// //   hover: {
// //     scale: 1.2,
// //     color: "#1A3C5A",
// //     transition: { duration: 0.3, ease: "easeOut" },
// //   },
// // };

// // export default function SocialSection() {
// //   const carouselRef = useRef(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     // Ensure text visibility on mount and navigation
// //     setIsVisible(true);

// //     // Preload images for faster loading
// //     instagramPosts.forEach((post) => {
// //       const img = new window.Image();
// //       img.src = post.image;
// //     });

// //     // Intersection Observer for lazy loading visibility
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (carouselRef.current) {
// //       observer.observe(carouselRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   const scrollCarousel = (direction) => {
// //     if (carouselRef.current) {
// //       const cardWidth = 320 + 16; // Card width (320px) + gap (16px from gap-4)
// //       const currentScroll = carouselRef.current.scrollLeft;
// //       const maxScroll =
// //         carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

// //       let newScroll = currentScroll + direction * cardWidth;

// //       // Ensure scroll stays within bounds
// //       newScroll = Math.max(0, Math.min(newScroll, maxScroll));

// //       carouselRef.current.scrollTo({
// //         left: newScroll,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <div className="relative bg-[#F7F7F7]">
// //       {/* Instagram Preview Section */}
// //       <section
// //         className="py-12 sm:py-16 relative overflow-hidden"
// //         role="region"
// //         aria-label="Instagram Preview"
// //       >
// //         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_10s_linear_infinite] z-0" />
// //         <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/50 to-[#F7F7F7]/90 z-0" />

// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
// //           <AnimatePresence>
// //             {isVisible && (
// //               <>
// //                 <motion.h2
// //                   className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
// //                   initial="initial"
// //                   animate="animate"
// //                   variants={headingVariants}
// //                 >
// //                   See Our Work
// //                 </motion.h2>
// //                 <motion.p
// //                   className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
// //                   initial="initial"
// //                   animate="animate"
// //                   variants={subtextVariants}
// //                 >
// //                   Follow us for tips and updates!
// //                 </motion.p>
// //               </>
// //             )}
// //           </AnimatePresence>

// //           <div className="relative flex justify-center" ref={carouselRef}>
// //             <div
// //               className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6 w-full"
// //               style={{
// //                 scrollBehavior: "smooth",
// //                 scrollSnapType: "x mandatory",
// //               }}
// //             >
// //               {instagramPosts.map((post, i) => (
// //                 <motion.div
// //                   key={post.id}
// //                   className="flex-shrink-0 w-64 sm:w-72 md:w-[28rem] h-64 sm:h-72 md:h-[28rem] bg-white rounded-2xl shadow-xl border border-[#00A3B3]/20 relative overflow-hidden snap-center"
// //                   custom={i}
// //                   initial="initial"
// //                   animate="animate"
// //                   variants={cardVariants}
// //                   whileHover="hover"
// //                 >
// //                   <Image
// //                     src={post.image}
// //                     alt={post.alt}
// //                     width={448}
// //                     height={448}
// //                     className="w-full h-full object-cover rounded-2xl"
// //                     priority={i === 0 || i === 1}
// //                     fetchPriority="high"
// //                     sizes="(max-width: 640px) 64vw, (max-width: 768px) 72vw, 28rem"
// //                     placeholder="blur"
// //                     blurDataURL="/placeholder.webp"
// //                   />
// //                   <motion.div
// //                     className="absolute inset-0 bg-[#1A3C5A]/60 flex items-center justify-center"
// //                     initial="initial"
// //                     whileHover="animate"
// //                     variants={overlayVariants}
// //                   >
// //                     <button
// //                       className="text-white font-semibold text-sm sm:text-base bg-[#00A3B3] px-5 py-2.5 rounded-lg cursor-pointer hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
// //                       onClick={() =>
// //                         window.open(post.link, "_blank", "noopener,noreferrer")
// //                       }
// //                       aria-label={`View Instagram Post ${i + 1}`}
// //                     >
// //                       View Post
// //                     </button>
// //                   </motion.div>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* Scroll Buttons */}
// //             <motion.button
// //               className="absolute left-4 sm:-left-12 top-1/2 -translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-30"
// //               onClick={() => scrollCarousel(-1)}
// //               variants={buttonVariants}
// //               whileHover="hover"
// //               whileTap="tap"
// //               aria-label="Previous Instagram Posts"
// //             >
// //               <svg
// //                 width="24"
// //                 height="24"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   d="M15 18l-6-6 6-6"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               </svg>
// //             </motion.button>
// //             <motion.button
// //               className="absolute right-4 sm:-right-12 top-1/2 -translate-y-1/2 bg-[#00A3B3] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-30"
// //               onClick={() => scrollCarousel(1)}
// //               variants={buttonVariants}
// //               whileHover="hover"
// //               whileTap="tap"
// //               aria-label="Next Instagram Posts"
// //             >
// //               <svg
// //                 width="24"
// //                 height="24"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   d="M9 18l6-6-6-6"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               </svg>
// //             </motion.button>
// //           </div>

// //           <div className="text-center mt-8 sm:mt-10">
// //             <button
// //               className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20 shadow-md"
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
// //                   "_blank",
// //                   "noopener,noreferrer"
// //                 )
// //               }
// //               aria-label="See More on Instagram"
// //             >
// //               See More
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Follow Us Section */}
// //       <section
// //         className="py-12 sm:py-16 bg-[#E8F5FF]/10 relative"
// //         role="region"
// //         aria-label="Follow Us"
// //       >
// //         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-5 animate-[wave_12s_linear_infinite] z-0" />
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
// //           <AnimatePresence>
// //             {isVisible && (
// //               <>
// //                 <motion.h2
// //                   className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
// //                   initial="initial"
// //                   animate="animate"
// //                   variants={headingVariants}
// //                 >
// //                   Connect with Us
// //                 </motion.h2>
// //                 <motion.p
// //                   className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
// //                   initial="initial"
// //                   animate="animate"
// //                   variants={subtextVariants}
// //                 >
// //                   Join our community for health tips and updates.
// //                 </motion.p>
// //               </>
// //             )}
// //           </AnimatePresence>

// //           <div className="flex justify-center gap-6 sm:gap-8">
// //             {socialLinks.map((social, i) => (
// //               <button
// //                 key={social.id}
// //                 className="group bg-white rounded-full p-4 shadow-xl border border-[#00A3B3]/20 bg-gradient-to-br from-[#E8F5FF]/60 to-[#FFFFFF] cursor-pointer hover:bg-[#E8F5FF] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
// //                 onClick={() =>
// //                   window.open(social.href, "_blank", "noopener,noreferrer")
// //                 }
// //                 aria-label={social.ariaLabel}
// //               >
// //                 <motion.div
// //                   custom={i}
// //                   initial="initial"
// //                   animate="animate"
// //                   variants={iconVariants}
// //                   className="group-hover:scale-120 group-hover:text-[#1A3C5A] transition-all duration-300"
// //                 >
// //                   {social.icon}
// //                 </motion.div>
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html: JSON.stringify({
// //             "@context": "https://schema.org",
// //             "@type": "Organization",
// //             name: "Reload Physiotherapy",
// //             sameAs: socialLinks.map((social) => social.href),
// //             address: {
// //               "@type": "PostalAddress",
// //               addressLocality: "Kerala",
// //               addressCountry: "IN",
// //             },
// //             image: instagramPosts.map((post) => ({
// //               "@type": "ImageObject",
// //               url: `https://www.reloadphysiotherapy.in${post.image}`,
// //               caption: post.alt,
// //             })),
// //           }),
// //         }}
// //       />

// //       <style jsx>{`
// //         @keyframes wave {
// //           0% {
// //             background-position-x: 0;
// //           }
// //           100% {
// //             background-position-x: 1000px;
// //           }
// //         }
// //         .scrollbar-hide::-webkit-scrollbar {
// //           display: none;
// //         }
// //         .scrollbar-hide {
// //           -ms-overflow-style: none;
// //           scrollbar-width: none;
// //         }
// //         button {
// //           cursor: pointer !important;
// //           position: relative;
// //           z-index: 20 !important;
// //         }
// //         button:focus {
// //           outline: none;
// //           box-shadow: 0 0 0 3px rgba(0, 163, 179, 0.5);
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }



// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Instagram, Linkedin, X } from "lucide-react";
// import { useRef, useEffect, useState } from "react";

// // Instagram posts data
// const instagramPosts = [
//   {
//     id: "post1",
//     image: "/insta1.webp",
//     alt: "Reload Physiotherapy Instagram Post 1",
//     link: "https://www.instagram.com/p/DEWPCElPiH1/?igsh=YTE0MHxpN3oyaGQw",
//   },
//   {
//     id: "post2",
//     image: "/insta2.webp",
//     alt: "Reload Physiotherapy Instagram Post 2",
//     link: "https://www.instagram.com/p/DHkfBXKvPu6/?igsh=MXZmdjg4MzVidmExZg==",
//   },
//   {
//     id: "post3",
//     image: "/insta3.webp",
//     alt: "Reload Physiotherapy Instagram Post 3",
//     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
//   },
//   {
//     id: "post4",
//     image: "/insta4.webp",
//     alt: "Reload Physiotherapy Instagram Post 4",
//     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
//   },
//   {
//     id: "post5",
//     image: "/insta5.webp",
//     alt: "Reload Physiotherapy Instagram Post 5",
//     link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
//   },
// ];

// // Social media links
// const socialLinks = [
//   {
//     id: "linkedin",
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/company/reload-physiotherapy",
//     icon: (
//       <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
//     ),
//     ariaLabel: "Follow Reload Physiotherapy on LinkedIn",
//   },
//   {
//     id: "instagram",
//     name: "Instagram",
//     href: "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
//     icon: (
//       <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
//     ),
//     ariaLabel: "Follow Reload Physiotherapy on Instagram",
//   },
//   {
//     id: "x",
//     name: "X",
//     href: "https://x.com/reload_physio",
//     icon: (
//       <X className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
//     ),
//     ariaLabel: "Follow Reload Physiotherapy on X",
//   },
// ];

// // Animation variants
// const headingVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const subtextVariants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
//   },
// };

// const cardVariants = {
//   initial: { opacity: 0, x: 50 },
//   animate: (i) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//       delay: i * 0.2,
//       type: "spring",
//       stiffness: 100,
//     },
//   }),
//   hover: {
//     scale: 1.03,
//     y: -10,
//     transition: { duration: 0.3 },
//   },
// };

// const overlayVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.08,
//     boxShadow: "0 0 16px rgba(0, 163, 179, 0.7)",
//     transition: { duration: 0.3 },
//   },
//   tap: { scale: 0.95 },
// };

// const iconVariants = {
//   initial: { opacity: 0, scale: 0.9 },
//   animate: (i) => ({
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//       delay: i * 0.2,
//       type: "spring",
//       bounce: 0.4,
//     },
//   }),
//   hover: {
//     scale: 1.2,
//     color: "#1A3C5A",
//     transition: { duration: 0.3, ease: "easeOut" },
//   },
// };

// export default function SocialSection() {
//   const carouselRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Ensure text visibility on mount and navigation
//     setIsVisible(true);

//     // Preload images for faster loading
//     instagramPosts.forEach((post) => {
//       const img = new window.Image();
//       img.src = post.image;
//     });

//     // Intersection Observer for lazy loading visibility
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (carouselRef.current) {
//       observer.observe(carouselRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="relative bg-[#F7F7F7]">
//       {/* Instagram Preview Section */}
//       <section
//         className="py-12 sm:py-16 relative overflow-hidden"
//         role="region"
//         aria-label="Instagram Preview"
//       >
//         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_10s_linear_infinite] z-0" />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/50 to-[#F7F7F7]/90 z-0" />

//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
//           <AnimatePresence>
//             {isVisible && (
//               <>
//                 <motion.h2
//                   className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
//                   initial="initial"
//                   animate="animate"
//                   variants={headingVariants}
//                 >
//                   See Our Work
//                 </motion.h2>
//                 <motion.p
//                   className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
//                   initial="initial"
//                   animate="animate"
//                   variants={subtextVariants}
//                 >
//                   Follow us for tips and updates!
//                 </motion.p>
//               </>
//             )}
//           </AnimatePresence>

//           <div className="relative flex justify-center" ref={carouselRef}>
//             <div
//               className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 w-full"
//               style={{
//                 scrollBehavior: "smooth",
//                 scrollSnapType: "x mandatory",
//               }}
//             >
//               {instagramPosts.map((post, i) => (
//                 <motion.div
//                   key={post.id}
//                   className="flex-shrink-0 w-64 sm:w-72 md:w-[28rem] h-64 sm:h-72 md:h-[28rem] bg-white rounded-2xl shadow-xl border border-[#00A3B3]/20 relative overflow-hidden snap-center"
//                   custom={i}
//                   initial="initial"
//                   animate="animate"
//                   variants={cardVariants}
//                   whileHover="hover"
//                 >
//                   <Image
//                     src={post.image}
//                     alt={post.alt}
//                     width={448}
//                     height={448}
//                     className="w-full h-full object-cover rounded-2xl"
//                     priority={i === 0 || i === 1}
//                     fetchPriority="high"
//                     sizes="(max-width: 640px) 64vw, (max-width: 768px) 72vw, 28rem"
//                     placeholder="blur"
//                     blurDataURL="/placeholder.webp"
//                   />
//                   <motion.div
//                     className="absolute inset-0 bg-[#1A3C5A]/60 flex items-center justify-center"
//                     initial="initial"
//                     whileHover="animate"
//                     variants={overlayVariants}
//                   >
//                     <button
//                       className="text-white font-semibold text-sm sm:text-base bg-[#00A3B3] px-5 py-2.5 rounded-lg cursor-pointer hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
//                       onClick={() =>
//                         window.open(post.link, "_blank", "noopener,noreferrer")
//                       }
//                       aria-label={`View Instagram Post ${i + 1}`}
//                     >
//                       View Post
//                     </button>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div className="text-center mt-8 sm:mt-10">
//             <button
//               className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20 shadow-md"
//               onClick={() =>
//                 window.open(
//                   "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
//                   "_blank",
//                   "noopener,noreferrer"
//                 )
//               }
//               aria-label="See More on Instagram"
//             >
//               See More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Follow Us Section */}
//       <section
//         className="py-12 sm:py-16 bg-[#E8F5FF]/10 relative"
//         role="region"
//         aria-label="Follow Us"
//       >
//         <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-5 animate-[wave_12s_linear_infinite] z-0" />
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
//           <AnimatePresence>
//             {isVisible && (
//               <>
//                 <motion.h2
//                   className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
//                   initial="initial"
//                   animate="animate"
//                   variants={headingVariants}
//                 >
//                   Connect with Us
//                 </motion.h2>
//                 <motion.p
//                   className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
//                   initial="initial"
//                   animate="animate"
//                   variants={subtextVariants}
//                 >
//                   Join our community for health tips and updates.
//                 </motion.p>
//               </>
//             )}
//           </AnimatePresence>

//           <div className="flex justify-center gap-6 sm:gap-8">
//             {socialLinks.map((social, i) => (
//               <button
//                 key={social.id}
//                 className="group bg-white rounded-full p-4 shadow-xl border border-[#00A3B3]/20 bg-gradient-to-br from-[#E8F5FF]/60 to-[#FFFFFF] cursor-pointer hover:bg-[#E8F5FF] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
//                 onClick={() =>
//                   window.open(social.href, "_blank", "noopener,noreferrer")
//                 }
//                 aria-label={social.ariaLabel}
//               >
//                 <motion.div
//                   custom={i}
//                   initial="initial"
//                   animate="animate"
//                   variants={iconVariants}
//                   className="group-hover:scale-120 group-hover:text-[#1A3C5A] transition-all duration-300"
//                 >
//                   {social.icon}
//                 </motion.div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Reload Physiotherapy",
//             sameAs: socialLinks.map((social) => social.href),
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Kerala",
//               addressCountry: "IN",
//             },
//             image: instagramPosts.map((post) => ({
//               "@type": "ImageObject",
//               url: `https://www.reloadphysiotherapy.in${post.image}`,
//               caption: post.alt,
//             })),
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
//         /* Custom scrollbar styling */
//         .scrollbar-custom::-webkit-scrollbar {
//           height: 8px;
//         }
//         .scrollbar-custom::-webkit-scrollbar-track {
//           background: #e8f5ff;
//           border-radius: 4px;
//         }
//         .scrollbar-custom::-webkit-scrollbar-thumb {
//           background: #00a3b3;
//           border-radius: 4px;
//         }
//         .scrollbar-custom::-webkit-scrollbar-thumb:hover {
//           background: #1a3c5a;
//         }
//         .scrollbar-custom {
//           -ms-overflow-style: auto;
//           scrollbar-width: thin;
//           scrollbar-color: #00a3b3 #e8f5ff;
//         }
//         button {
//           cursor: pointer !important;
//           position: relative;
//           z-index: 20 !important;
//         }
//         button:focus {
//           outline: none;
//           box-shadow: 0 0 0 3px rgba(0, 163, 179, 0.5);
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instagram, Linkedin, X } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Instagram posts data
const instagramPosts = [
  {
    id: "post1",
    image: "/insta1.webp",
    alt: "Reload Physiotherapy Instagram Post 1",
    link: "https://www.instagram.com/p/DEWPCElPiH1/?igsh=YTE0MHxpN3oyaGQw",
  },
  {
    id: "post2",
    image: "/insta2.webp",
    alt: "Reload Physiotherapy Instagram Post 2",
    link: "https://www.instagram.com/p/DHkfBXKvPu6/?igsh=MXZmdjg4MzVidmExZg==",
  },
  {
    id: "post3",
    image: "/insta3.webp",
    alt: "Reload Physiotherapy Instagram Post 3",
    link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
  },
  {
    id: "post4",
    image: "/insta4.webp",
    alt: "Reload Physiotherapy Instagram Post 4",
    link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
  },
  {
    id: "post5",
    image: "/insta5.webp",
    alt: "Reload Physiotherapy Instagram Post 5",
    link: "https://www.instagram.com/p/C4LATULPFU1/?igsh=dHM1a3Buc3dlbWpv",
  },
];

// Social media links
const socialLinks = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/reload-physiotherapy",
    icon: (
      <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
    ),
    ariaLabel: "Follow Reload Physiotherapy on LinkedIn",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
    icon: (
      <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
    ),
    ariaLabel: "Follow Reload Physiotherapy on Instagram",
  },
  {
    id: "x",
    name: "X",
    href: "https://x.com/reload_physio",
    icon: (
      <X className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A3B3] transition-colors duration-300" />
    ),
    ariaLabel: "Follow Reload Physiotherapy on X",
  },
];

// Animation variants
const headingVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const subtextVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const cardVariants = {
  initial: { opacity: 0, x: 50 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: {
    scale: 1.03,
    y: -10,
    transition: { duration: 0.3 },
  },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const buttonVariants = {
  hover: {
    scale: 1.08,
    boxShadow: "0 0 16px rgba(0, 163, 179, 0.7)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const iconVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2,
      type: "spring",
      bounce: 0.4,
    },
  }),
  hover: {
    scale: 1.2,
    color: "#1A3C5A",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function SocialSection() {
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Ensure text visibility on mount and navigation
    setIsVisible(true);

    // Preload images for faster loading
    instagramPosts.forEach((post) => {
      const img = new window.Image();
      img.src = post.image;
    });

    // Intersection Observer for lazy loading visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    // Scroll event listener to detect scrolling
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Reset after 150ms of no scrolling
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      observer.disconnect();
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#F7F7F7]">
      {/* Instagram Preview Section */}
      <section
        className="py-12 sm:py-16 relative overflow-hidden"
        role="region"
        aria-label="Instagram Preview"
      >
        <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_10s_linear_infinite] z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/50 to-[#F7F7F7]/90 z-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
                  initial="initial"
                  animate="animate"
                  variants={headingVariants}
                >
                  See Our Work
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
                  initial="initial"
                  animate="animate"
                  variants={subtextVariants}
                >
                  Follow us for tips and updates!
                </motion.p>
              </>
            )}
          </AnimatePresence>

          <div className="relative flex justify-center" ref={carouselRef}>
            <div
              className={`flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 w-full scrollbar-custom ${
                isScrolling ? "scrolling" : ""
              }`}
              style={{
                scrollBehavior: "smooth",
                scrollSnapType: "x mandatory",
              }}
            >
              {instagramPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-[28rem] h-64 sm:h-72 md:h-[28rem] bg-white rounded-2xl shadow-xl border border-[#00A3B3]/20 relative overflow-hidden snap-center"
                  custom={i}
                  initial="initial"
                  animate="animate"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={448}
                    height={448}
                    className="w-full h-full object-cover rounded-2xl"
                    priority={i === 0 || i === 1}
                    fetchPriority="high"
                    sizes="(max-width: 640px) 64vw, (max-width: 768px) 72vw, 28rem"
                    placeholder="blur"
                    blurDataURL="/placeholder.webp"
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#1A3C5A]/60 flex items-center justify-center"
                    initial="initial"
                    whileHover="animate"
                    variants={overlayVariants}
                  >
                    <button
                      className="text-white font-semibold text-sm sm:text-base bg-[#00A3B3] px-5 py-2.5 rounded-lg cursor-pointer hover:bg-[#1A3C5A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
                      onClick={() =>
                        window.open(post.link, "_blank", "noopener,noreferrer")
                      }
                      aria-label={`View Instagram Post ${i + 1}`}
                    >
                      View Post
                    </button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <button
              className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold border-2 border-[#00A3B3] hover:bg-[#1A3C5A] hover:border-[#1A3C5A] transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20 shadow-md"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/reload.physiotherapy?igsh=MXFhaGwxb3pmMzNyZQ==",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              aria-label="See More on Instagram"
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section
        className="py-12 sm:py-16 bg-[#E8F5FF]/10 relative"
        role="region"
        aria-label="Follow Us"
      >
        <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-5 animate-[wave_12s_linear_infinite] z-0" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5A] text-center mb-4 font-poppins tracking-tight"
                  initial="initial"
                  animate="animate"
                  variants={headingVariants}
                >
                  Connect with Us
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-[#1A3C5A] text-center mb-10 font-medium"
                  initial="initial"
                  animate="animate"
                  variants={subtextVariants}
                >
                  Join our community for health tips and updates.
                </motion.p>
              </>
            )}
          </AnimatePresence>

          <div className="flex justify-center gap-6 sm:gap-8">
            {socialLinks.map((social, i) => (
              <button
                key={social.id}
                className="group bg-white rounded-full p-4 shadow-xl border border-[#00A3B3]/20 bg-gradient-to-br from-[#E8F5FF]/60 to-[#FFFFFF] cursor-pointer hover:bg-[#E8F5FF] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A3B3] z-20"
                onClick={() =>
                  window.open(social.href, "_blank", "noopener,noreferrer")
                }
                aria-label={social.ariaLabel}
              >
                <motion.div
                  custom={i}
                  initial="initial"
                  animate="animate"
                  variants={iconVariants}
                  className="group-hover:scale-120 group-hover:text-[#1A3C5A] transition-all duration-300"
                >
                  {social.icon}
                </motion.div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Reload Physiotherapy",
            sameAs: socialLinks.map((social) => social.href),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kerala",
              addressCountry: "IN",
            },
            image: instagramPosts.map((post) => ({
              "@type": "ImageObject",
              url: `https://www.reloadphysiotherapy.in${post.image}`,
              caption: post.alt,
            })),
          }),
        }}
      />

      <style jsx>{`
        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1000px;
          }
        }

        /* Custom Scrollbar Styling - Tesla-inspired */
        .scrollbar-custom {
          -ms-overflow-style: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 163, 179, 0.5) rgba(232, 245, 255, 0.2);
          scroll-behavior: smooth;
        }

        .scrollbar-custom::-webkit-scrollbar {
          height: 6px; /* Thin scrollbar for a sleek look */
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(232, 245, 255, 0.1); /* Semi-transparent track */
          border-radius: 12px;
          margin: 0 10px; /* Edge spacing */
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(
            90deg,
            #00a3b3 0%,
            #1a3c5a 100%
          ); /* Gradient for futuristic look */
          border-radius: 12px;
          box-shadow: 0 0 8px rgba(0, 163, 179, 0.4); /* Subtle glow */
          transition: all 0.3s ease;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          transform: scaleY(1.2); /* Slight scale on hover */
          box-shadow: 0 0 12px rgba(0, 163, 179, 0.6); /* Enhanced glow */
          background: linear-gradient(
            90deg,
            #1a3c5a 0%,
            #00a3b3 100%
          ); /* Reverse gradient */
        }

        /* Pulse animation when scrolling */
        .scrollbar-custom.scrolling::-webkit-scrollbar-thumb {
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 8px rgba(0, 163, 179, 0.4);
          }
          50% {
            box-shadow: 0 0 12px rgba(0, 163, 179, 0.7);
          }
          100% {
            box-shadow: 0 0 8px rgba(0, 163, 179, 0.4);
          }
        }

        button {
          cursor: pointer !important;
          position: relative;
          z-index: 20 !important;
        }

        button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 163, 179, 0.5);
        }
      `}</style>
    </div>
  );
}