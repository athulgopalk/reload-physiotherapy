import Head from "next/head";
import CallToAction from "@/components/services/CallToAction";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export const metadata = {
  title: "Reload Physiotherapy - Premium Physiotherapy Services",
  description:
    "Explore Reload Physiotherapy's expert services for pain relief and rehabilitation. Book your appointment now.",
  alternates: {
    canonical: "https://www.reloadphysio.in/services",
  },
  keywords: [
    "Reload Physiotherapy",
    "reload physio",
    "reloadphsyio",
    "reloadpshiotherpy",
    "physiotherapy services Kerala",
    "physiotherapy services Karnataka",
    "physiotherapy services India",
    "pain relief services",
    "physical therapy services",
    "rehabilitation services",
  ].join(", "),
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

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Physiotherapy",
    provider: {
      "@type": "Physiotherapy",
      name: "Reload Physiotherapy",
      url: "https://www.reloadphysio.in/",
    },
    description:
      "Reload Physiotherapy offers expert services for pain relief and rehabilitation in Kerala, Karnataka, and India.",
    areaServed: ["Kerala", "Karnataka", "India"],
  };

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Reload Physiotherapy, reload physio, reloadphsyio, reloadpshiotherpy, physiotherapy services Kerala, physiotherapy services Karnataka, physiotherapy services India, pain relief services, physical therapy services, rehabilitation services"
        />
        <meta name="author" content="Reload Physiotherapy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <ServicesHero />
      <ServicesList />
      <CallToAction />
    </div>
  );
}
