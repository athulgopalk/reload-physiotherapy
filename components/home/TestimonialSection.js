"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: "Anoop Menon",
    text: "Reload Physio transformed my recovery after a knee injury. Their expertise and care made all the difference!",
    location: "Kochi, Kerala",
  },
  {
    name: "Priya Nair",
    text: "The team’s personalized approach helped me regain mobility post-surgery. Highly recommend their services!",
    location: "Trivandrum, Kerala",
  },
  {
    name: "Vishnu Suresh",
    text: "Professional and compassionate care. My back pain is gone thanks to Reload Physio’s tailored sessions.",
    location: "Kozhikode, Kerala",
  },
  {
    name: "Lakshmi Venu",
    text: "Their neuro physiotherapy sessions improved my strength significantly. Truly grateful for their support!",
    location: "Thrissur, Kerala",
  },
  {
    name: "Rahul Pillai",
    text: "Reload Physio’s sports rehab got me back on the field faster than expected. Exceptional service!",
    location: "Alappuzha, Kerala",
  },
  {
    name: "Meera Thomas",
    text: "The staff’s dedication and knowledge made my recovery smooth and stress-free. Best physio in Kerala!",
    location: "Kollam, Kerala",
  },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: i * 0.2 },
  }),
  exit: { opacity: 0, y: -30, transition: { duration: 0.8, ease: "easeOut" } },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 24px rgba(0, 163, 179, 0.3)",
    transition: { duration: 0.3 },
  },
};

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Adjust cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + cardsPerView >= testimonials.length ? 0 : prev + cardsPerView
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  // Get current testimonials
  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section
      className="relative bg-[#F7F7F7] py-8 sm:py-12 md:py-16"
      role="region"
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A3C5A] text-center mb-8 md:mb-12 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonial Cards */}
        <div
          className={`grid grid-cols-1 ${
            cardsPerView === 2 ? "sm:grid-cols-2" : ""
          } ${
            cardsPerView === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : ""
          } gap-4 sm:gap-6 md:gap-8`}
        >
          <AnimatePresence mode="wait">
            {currentTestimonials.map((testimonial, i) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}`}
                className="relative bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center text-center min-h-[200px] sm:min-h-[240px]"
                custom={i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                whileHover="hover"
              >
                <Quote
                  className="w-6 h-6 text-[#00A3B3] mb-3"
                  aria-hidden="true"
                />
                <blockquote className="flex-1">
                  <p className="text-xs sm:text-sm text-[#1A3C5A]/80 mb-3 line-clamp-4">
                    {testimonial.text}
                  </p>
                </blockquote>
                <footer>
                  <cite className="text-sm sm:text-base font-semibold text-[#1A3C5A] not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-xs text-[#1A3C5A]/70">
                    {testimonial.location}
                  </p>
                </footer>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* SEO Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: "Reload Physiotherapy",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kerala",
                addressCountry: "IN",
              },
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: t.name,
              },
              reviewBody: t.text,
              reviewRating: {
                "@type": "Rating",
                ratingValue: 5,
              },
              publisher: {
                "@type": "Organization",
                name: "Reload Physiotherapy",
              },
            })),
          }),
        }}
      />
    </section>
  );
}
