import Head from "next/head";
import BookingForm from "@/components/contact/BookingForm";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactHero from "@/components/contact/ContactHero";
import JoinTeam from "@/components/contact/JoinTeam";

export const metadata = {
  title: "Contact us, Reload Physiotherapy - Book Your Appointment",
  description:
    "Reach out to Reload Physiotherapy for expert physiotherapy bookings and inquiries. Connect with us today.",
  alternates: {
    canonical: "https://www.reloadphysio.in/contact",
  },
  keywords: [
    "Reload Physiotherapy",
    "reload physio",
    "reloadphsyio",
    "reloadpshiotherpy",
    "contact physiotherapy",
    "physiotherapy Kerala contact",
    "physiotherapy Karnataka contact",
    "book physiotherapy appointment",
    "physical therapy contact",
    "rehabilitation contact",
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

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: "Reload Physiotherapy",
    url: "https://www.reloadphysio.in/contact",
    description:
      "Contact Reload Physiotherapy for expert physiotherapy services and appointments in Kerala, Karnataka, and India.",
  };

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Reload Physiotherapy, reload physio, reloadphsyio, reloadpshiotherpy, contact physiotherapy, physiotherapy Kerala contact, physiotherapy Karnataka contact, book physiotherapy appointment, physical therapy contact, rehabilitation contact"
        />
        <meta name="author" content="Reload Physiotherapy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <ContactHero />
      <ContactDetails />
      <BookingForm />
      <JoinTeam />
    </div>
  );
}
