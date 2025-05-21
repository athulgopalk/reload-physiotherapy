// app/services/page.js
import CallToAction from "@/components/services/CallToAction";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export const metadata = {
  title: "Reload Physiotherapy - Expert Physiotherapy Services in India",
  description:
    "Reload Physiotherapy provides premium physiotherapy services for pain relief and recovery. Book your session today in India.",
  alternates: {
    canonical: "https://reloadphysio.in/services",
  },
};

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <ServicesList />
      <CallToAction />
    </div>
  );
}
