"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { sendEmail } from "../../libs/emailjs"; // Adjust path based on your folder structure

// Animation variants
const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0 4px 12px rgba(0, 163, 179, 0.4)",
    transition: { duration: 0.3 },
  },
  pulse: {
    scale: [1, 1.03, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    place: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email";
    if (!formData.phone.match(/^\+?\d{10,15}$/))
      newErrors.phone = "Invalid phone";
    if (!formData.state) newErrors.state = "Select a state";
    if (!formData.place) newErrors.place = "Select a place";
    if (!formData.service) newErrors.service = "Select a service";
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
      await sendEmail(formData); // Use sendEmail from libs/emailjs.js
      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        place: "",
        service: "",
        message: "",
      });
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({ submit: "Failed to send. Try again." });
    }
    setIsSubmitting(false);
  };

  return (
    <section
      className="relative bg-gradient-to-br from-[#E8F5FF] to-[#F7F7F7] py-12 overflow-hidden"
      role="form"
      aria-label="Booking Form"
      id="booking"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/waveform-bg.svg')] bg-cover bg-center opacity-10 animate-[wave_20s_linear_infinite] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-[#1A3C5A] text-center mb-8 font-poppins"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Book Your Appointment
        </motion.h2>

        {/* Form */}
        <motion.form
          className="bg-white rounded-xl shadow-md p-6 border border-[#00A3B3]/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <motion.div variants={fieldVariants} transition={{ delay: 0.2 }}>
              <label
                htmlFor="name"
                className="block text-sm text-[#1A3C5A] font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-[#00A3B3]/50 focus:ring-1 focus:ring-[#00A3B3] focus:outline-none text-[#1A3C5A]"
                aria-required="true"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fieldVariants} transition={{ delay: 0.3 }}>
              <label
                htmlFor="email"
                className="block text-sm text-[#1A3C5A] font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-[#00A3B3]/50 focus:ring-1 focus:ring-[#00A3B3] focus:outline-none text-[#1A3C5A]"
                aria-required="true"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Phone */}
            <motion.div variants={fieldVariants} transition={{ delay: 0.4 }}>
              <label
                htmlFor="phone"
                className="block text-sm text-[#1A3C5A] font-medium mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-[#00A3B3]/50 focus:ring-1 focus:ring-[#00A3B3] focus:outline-none text-[#1A3C5A]"
                aria-required="true"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </motion.div>

            {/* State */}
            <motion.div variants={fieldVariants} transition={{ delay: 0.5 }}>
              <label
                htmlFor="state"
                className="block text-sm text-[#1A3C5A] font-medium mb-1"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-[#00A3B3]/50 focus:ring-1 focus:ring-[#00A3B3] focus:outline-none text-[#1A3C5A]"
                aria-required="true"
              >
                <option value="">Select a state</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">{errors.state}</p>
              )}
            </motion.div>

            {/* Place */}
            <motion.div variants={fieldVariants} transition={{ delay: 0.6 }}>
              <label
                htmlFor="place"
                className="block text-sm text-[#1A3C5A] font-medium mb-1"
              >
                Place
              </label>
              <select
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-[#00A3B3]/50 focus:ring-1 focus:ring-[#00A3B3] focus:outline-none text-[#1A3C5A]"
                aria-required="true"
              >
                <option value="">Select a place</option>
                {formData.state === "Kerala" && (
                  <>
                    <option value="Kasaragod">Kasaragod</option>
                    <option value="Kanhangad">Kanhangad</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Malappuram">Malappuram</option>
                  </>
                )}
                {formData.state === "Karnataka" && (
                  <>
                    <option value="Mangalore">Mangalore</option>
                    <option value="Bangalore">Bangalore</option>
                  </>
                )}
              </select>
              {errors.place && (
                <p className="text-red-500 text-xs mt-1">{errors.place}</p>
              )}
            </motion.div>

            {/* Preferred Service */}
            <motion.div variants={fieldVariants} transition={{ delay: 0.7 }}>
              <label
                htmlFor="service"
                className="block text-sm text-[#1A3C5A] font-medium mb-1"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-[#00A3B3]/50 focus:ring-1 focus:ring-[#00A3B3] focus:outline-none text-[#1A3C5A]"
                aria-required="true"
              >
                <option value="">Select a service</option>
                <option value="Back Pain">Back Pain</option>
                <option value="Sports Injury">Sports Injury</option>
                <option value="Elderly Mobility">Elderly Mobility</option>
                <option value="Other">Other</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service}</p>
              )}
            </motion.div>
          </div>

          {/* Message */}
          <motion.div
            className="mt-4"
            variants={fieldVariants}
            transition={{ delay: 0.8 }}
          >
            <label
              htmlFor="message"
              className="block text-sm text-[#1A3C5A] font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 rounded-md border border-[#00A3B3]/50 focus:ring-1 focus:ring-[#00A3B3] focus:outline-none text-[#1A3C5A]"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center mt-6"
            variants={fieldVariants}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              type="submit"
              className="bg-[#00A3B3] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1A3C5A] transition-colors duration-300 disabled:opacity-50"
              variants={buttonVariants}
              initial="rest"
              animate="pulse"
              whileHover="hover"
              disabled={isSubmitting}
              aria-label="Submit Booking Form"
            >
              {isSubmitting ? "Submitting..." : "Book Now"}
            </motion.button>
            {errors.submit && (
              <p className="text-red-500 text-xs mt-2">{errors.submit}</p>
            )}
          </motion.div>
        </motion.form>

        {/* Modal */}
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
            initial="hidden"
            animate="visible"
            variants={modalVariants}
          >
            <motion.div className="bg-white rounded-xl p-6 max-w-sm w-full border border-[#00A3B3]/30">
              <h3 className="text-lg font-semibold text-[#1A3C5A] mb-2 text-center">
                Thank You!
              </h3>
              <p className="text-sm text-[#1A3C5A]/80 text-center">
                We’ll contact you soon!
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-4 bg-[#00A3B3] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1A3C5A] transition-colors"
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
            "Book your physiotherapy appointment with Reload Physiotherapy.",
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