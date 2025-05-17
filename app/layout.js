import { Poppins, Inter } from "next/font/google";
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import "./globals.css";
import { motion } from "framer-motion";

// Configure Poppins for headings
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

// Configure Inter for body text
const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Reload Physiotherapy - Premium Physiotherapy Services in India",
    template: "%s | Reload Physiotherapy",
  },
  description:
    "Reload Physiotherapy offers expert physiotherapy services for pain relief and recovery across India. Book your session today for personalized care.",
  keywords: [
    "Reload Physiotherapy",
    "Reload Physio",
    "physiotherapy India",
    "pain relief",
    "physical therapy",
    "rehabilitation",
    "physiotherapist near me",
  ].join(", "),
  openGraph: {
    title: "Reload Physiotherapy - Premium Physiotherapy Services in India",
    description:
      "Discover expert physiotherapy at Reload Physiotherapy, designed for pain relief and recovery in India.",
    url: "https://reloadphysio.in",
    siteName: "Reload Physiotherapy",
    type: "website",
    locale: "en_IN",
  },
};

// Animated logo component
const AnimatedLogo = () => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 163, 179, 0.5)" }}
      role="img"
      aria-label="Reload Physiotherapy Logo"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
          fill="#00A3B3"
        />
        <path d="M18 20h4v4h-4z" fill="#1A3C5A" />
      </svg>
      <span className="ml-2 text-xl font-bold text-[#1A3C5A] font-poppins">
        Reload Physio
      </span>
    </motion.div>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col bg-[#E8F5FF] text-[#1A3C5A]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Header  />
       {children}
        <Footer />
      </body>
    </html>
  );
}
