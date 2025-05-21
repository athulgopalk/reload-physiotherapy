"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: " Bhaskar Ullal",
    text: "I am truly grateful for the care I received at the facility in Ullal. The treatment I underwent has completely relieved my pain, and I can now move freely and perform my daily activities without any discomfort. The team’s support and expertise made all the difference. Thank you for helping me get back to my normal life",
    location: "Ullal, Kerala",
  },
  {
    name: "Rajan P",
    text: "I am currently receiving rehabilitation treatment for my lower back pain and knee osteoarthritis at the facility. The care and attention from the team have been very supportive, and I’m hopeful about my progress. While I’m still in treatment, I appreciate the efforts to help manage my pain and improve my mobility. Thank you for your ongoing care.",
    location: "Maimoona, Kerala",
  },
  {
    name: "Anitha K",
    text: "I had severe neck and shoulder pain that was affecting my sleep and daily life. After starting treatment, I slowly began to feel better. The support I received made all the difference. I'm now able to move freely without discomfort. Truly thankful for the care and guidance.",
    location: "Kasaragod, Kerala",
  },
  {
    name: "Shyam Raj",
    text: "I was recovering from a sports injury and couldn’t walk properly for weeks. The treatment helped me gain strength and confidence again. Every session brought small improvements, and now I’m almost back to normal. Really appreciate the patience and support throughout.",
    location: "Kanhangad, Kerala",
  },
  {
    name: "Fathima N",
    text: "After my knee surgery, I was really anxious about recovery. But the process was smooth and encouraging. The way I was guided through each step helped me regain both strength and hope. I can finally move around without fear. Thank you for being so kind and professional.",
    location: "Kannur, Kerala",
  },
  {
    name: "Ravi Shetty",
    text: "I had been dealing with chronic back pain for years. Tried many things, but nothing really helped until I started this treatment. The pain has reduced a lot, and I feel much more active now. The care I received was consistent and honest. Can’t thank you enough.",
    location: "Mangalore, Karnataka",
  },
  {
    name: "Megha Suresh",
    text: "I was struggling with shoulder pain that made everyday tasks difficult. The exercises and therapy I received helped me get back to normal slowly and steadily. Now I can work and sleep without pain. I’m genuinely grateful for the support and care throughout.",
    location: "Indiranagar, Bangalore, Karnataka",
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
