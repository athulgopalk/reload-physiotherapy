import Head from "next/head";
import AboutHero from "@/components/about/AboutHero";
import ClientStories from "@/components/about/ClientStories";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import MissionVision from "@/components/about/MissionVision";
// import OurStory from "@/components/about/OurStory";

export const metadata = {
  title: "About Reload Physiotherapy - Our Team & Mission",
  description:
    "Discover Reload Physiotherapy's mission, expert team, and client success stories. Learn about our commitment to quality care.",
  alternates: {
    canonical: "https://www.reloadphysio.in/about",
  },
  keywords: [
    "Reload Physiotherapy",
    "reload physio",
    "reloadphsyio",
    "reloadpshiotherpy",
    "about physiotherapy",
    "physiotherapy team Kerala",
    "physiotherapy mission Karnataka",
    "physiotherapy client stories",
    "physical therapy team",
    "rehabilitation mission",
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

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reload Physiotherapy",
    url: "https://www.reloadphysio.in/about",
    description:
      "Learn about Reload Physiotherapy's mission, expert team, and client success stories in Kerala, Karnataka, and India.",
  };

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Reload Physiotherapy, reload physio, reloadphsyio, reloadpshiotherpy, about physiotherapy, physiotherapy team Kerala, physiotherapy mission Karnataka, physiotherapy client stories, physical therapy team, rehabilitation mission"
        />
        <meta name="author" content="Reload Physiotherapy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <AboutHero />
      <MissionVision />
      {/* <OurStory /> */}
      <MeetOurTeam />
      <ClientStories />
    </div>
  );
}
