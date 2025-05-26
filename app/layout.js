import { Poppins, Inter } from "next/font/google";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./globals.css";

// Configure Poppins for headings
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// Configure Inter for body text
const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Reload Physiotherapy - Premium Physiotherapy Services",
    template: "%s | Reload Physiotherapy",
  },
  description:
    "Reload Physiotherapy offers expert physiotherapy services for pain relief and recovery. Book your session today for personalized care.",
  keywords: [
    "Reload Physiotherapy",
    "reload physio",
    "reloadphsyio",
    "reloadpshiotherpy",
    "physiotherapy Kerala",
    "physiotherapy Karnataka",
    "physiotherapy India",
    "pain relief",
    "physical therapy",
    "rehabilitation",
  ].join(", "),
  alternates: {
    canonical: "https://www.reloadphysio.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: "Reload Physiotherapy",
    url: "https://www.reloadphysio.in",
    description:
      "Reload Physiotherapy offers expert physiotherapy services for pain relief and recovery in Kerala, Karnataka, and India.",
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon-reload.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1A3C5A" />
        <meta
          name="keywords"
          content="Reload Physiotherapy, reload physio, reloadphsyio, reloadpshiotherpy, physiotherapy Kerala, physiotherapy Karnataka, physiotherapy India, pain relief, physical therapy, rehabilitation"
        />
        <meta name="author" content="Reload Physiotherapy" />
        <link rel="sitemap" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col bg-[#E8F5FF] text-[#1A3C5A]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
