

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Image animation: Subtle fade and hue shift
const imageVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 0.95, transition: { duration: 0.4, ease: "easeOut" } },
  hover: {
    opacity: 1,
    filter: "hue-rotate(10deg)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function ServiceImage({ src, alt }) {
  return (
    <motion.div
      className="relative w-full h-[10rem] overflow-hidden"
      initial="initial"
      animate="visible"
      whileHover="hover"
      variants={imageVariants}
    >
      <Image
        src={src}
        alt={alt}
        width={288}
        height={160}
        className="w-full h-full object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 288px"
        quality={75}
      />
    </motion.div>
  );
}