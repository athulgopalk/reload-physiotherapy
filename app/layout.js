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
    default: "Reload Physiotherapy - Premium Physiotherapy Services in India",
    template: "%s | Reload Physiotherapy",
  },
  description:
    "Reload Physiotherapy offers expert physiotherapy services for pain relief and recovery across India. Book your session today for personalized care.",
  keywords: [
    "Reload Physiotherapy",
    "physiotherapy India",
    "pain relief",
    "physical therapy",
    "rehabilitation",
  ].join(", "),
  openGraph: {
    title: "Reload Physiotherapy - Premium Physiotherapy Services in India",
    description:
      "Relaod Physiotherapy ,Your Destination for Advanced - Patient-Centered Physiotherapy.",
    url: "https://reloadphysio.in",
    siteName: "Reload Physiotherapy",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
