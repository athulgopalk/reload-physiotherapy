"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Form field variants
const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 15px rgba(0, 163, 179, 0.5)",
    transition: { duration: 0.5 },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sparkleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\+?\d{10,15}$/))
      newErrors.phone = "Valid phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Send form data via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );
      setShowModal(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setShowModal(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({ submit: "Failed to send. Please try again." });
    }
    setIsSubmitting(false);
  };

  return (
    <section
      className="relative bg-[#F7F7F7] py-16 sm:py-20 md:py-24 overflow-hidden"
      role="form"
      aria-label="Booking Form"
      id="booking"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_20s_linear_infinite]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#E8F5FF]/20 to-[#F7F7F7]/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A3B3_0%,transparent_70%)] opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C5A] text-center mb-12 sm:mb-16 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Book Your Appointment
        </motion.h2>

        {/* Form */}
        <motion.form
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-[#00A3B3]/50 bg-gradient-to-br from-[#E8F5FF]/20 to-[#FFFFFF]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <motion.div
            className="mb-6"
            variants={fieldVariants}
            transition={{ delay: 0.2 }}
          >
            <label
              htmlFor="name"
              className="block text-base sm:text-lg text-[#1A3C5A] font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#00A3B3]/50 focus:ring-2 focus:ring-[#00A3B3] focus:outline-none bg-white text-[#1A3C5A]"
              aria-required="true"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            className="mb-6"
            variants={fieldVariants}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="email"
              className="block text-base sm:text-lg text-[#1A3C5A] font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#00A3B3]/50 focus:ring-2 focus:ring-[#00A3B3] focus:outline-none bg-white text-[#1A3C5A]"
              aria-required="true"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div
            className="mb-6"
            variants={fieldVariants}
            transition={{ delay: 0.6 }}
          >
            <label
              htmlFor="phone"
              className="block text-base sm:text-lg text-[#1A3C5A] font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#00A3B3]/50 focus:ring-2 focus:ring-[#00A3B3] focus:outline-none bg-white text-[#1A3C5A]"
              aria-required="true"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </motion.div>

          {/* Preferred Service */}
          <motion.div
            className="mb-6"
            variants={fieldVariants}
            transition={{ delay: 0.8 }}
          >
            <label
              htmlFor="service"
              className="block text-base sm:text-lg text-[#1A3C5A] font-medium mb-2"
            >
              Preferred Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#00A3B3]/50 focus:ring-2 focus:ring-[#00A3B3] focus:outline-none bg-white text-[#1A3C5A]"
              aria-required="true"
            >
              <option value="">Select a service</option>
              <option value="Back Pain">Back Pain</option>
              <option value="Sports Injury">Sports Injury</option>
              <option value="Elderly Mobility">Elderly Mobility</option>
              <option value="Other">Other</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div
            className="mb-6"
            variants={fieldVariants}
            transition={{ delay: 1 }}
          >
            <label
              htmlFor="message"
              className="block text-base sm:text-lg text-[#1A3C5A] font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-[#00A3B3]/50 focus:ring-2 focus:ring-[#00A3B3] focus:outline-none bg-white text-[#1A3C5A]"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            variants={fieldVariants}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              type="submit"
              className="bg-[#00A3B3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1A3C5A] transition-colors duration-300 disabled:opacity-50"
              variants={buttonVariants}
              initial="rest"
              animate="pulse"
              whileHover="hover"
              disabled={isSubmitting}
              aria-label="Submit Booking Form"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
            {errors.submit && (
              <p className="text-red-500 text-sm mt-2">{errors.submit}</p>
            )}
          </motion.div>

          {/* Healing Sparkles */}
          {showModal &&
            [...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#00A3B3] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={sparkleVariants}
                initial="hidden"
                animate="visible"
              />
            ))}
        </motion.form>

        {/* Modal */}
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
            initial="hidden"
            animate="visible"
            variants={modalVariants}
          >
            <motion.div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full border border-[#00A3B3]/50 bg-gradient-to-br from-[#00A3B3]/20 to-[#FFFFFF]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1A3C5A] mb-4 font-poppins text-center">
                Thank You!
              </h3>
              <p className="text-base sm:text-lg text-[#1A3C5A]/80 mb-6 text-center">
                We’ll contact you soon to start your healing journey!
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-[#00A3B3] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1A3C5A] transition-colors duration-300"
                aria-label="Close Modal"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Book an Appointment - Reload Physiotherapy",
          description:
            "Book your physiotherapy appointment with Reload Physiotherapy. Fill out our form to start your recovery journey.",
          url: "https://reloadphysio.in/contact#booking",
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
