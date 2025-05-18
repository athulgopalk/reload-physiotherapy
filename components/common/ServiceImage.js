import { motion } from "framer-motion";
import Image from "next/image";

// Add images in public/images/ and reference in ServicesList.js services array
// Example: { id: "pain-management", image: "/images/pain-management.webp" }
// Images should be 600x400px, WebP, <150KB for performance
const imageVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 0.9, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    opacity: 1,
    filter: "hue-rotate(20deg)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ServiceImage({ src, alt }) {
  return (
    <motion.div
      className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden"
      initial="initial"
      animate="visible"
      whileHover="hover"
      variants={imageVariants}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}
