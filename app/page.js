import Head from "next/head";
import ServicesOverview from "@/components/home/ServicesOverview";
import Hero from "../components/home/Hero";
import SocialSection from "@/components/home/SocialSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BookAppointment from "@/components/home/BookAppointment";
import MeetOurTeam from "@/components/about/MeetOurTeam";

export const metadata = {
  title: "Reload Physiotherapy - Expert Physiotherapy Service",
  description:
    "Reload Physiotherapy provides premium physiotherapy services for pain relief and recovery. Book your session today.",
  alternates: {
    canonical: "https://www.reloadphysio.in/",
  },
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

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: "Reload Physiotherapy",
    url: "https://www.reloadphysio.in/",
    description:
      "Reload Physiotherapy offers premium physiotherapy services for pain relief and recovery in Kerala, Karnataka, and India.",
  };

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Reload Physiotherapy, reload physio, reloadphsyio, reloadpshiotherpy, physiotherapy Kerala, physiotherapy Karnataka, physiotherapy India, pain relief, physical therapy, rehabilitation"
        />
        <meta name="author" content="Reload Physiotherapy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Hero />
      <ServicesOverview />
      <SocialSection />
      <MeetOurTeam />
      <TestimonialSection />
      <BookAppointment />
    </div>
  );
}
