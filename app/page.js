import ServicesOverview from "@/components/home/ServicesOverview";
import Hero from "../components/home/Hero"
import SocialSection from "@/components/home/SocialSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BookAppointment from "@/components/home/BookAppointment";
import MeetOurTeam from "@/components/about/MeetOurTeam";

export const metadata = {
  title: "Reload Physiotherapy - Expert Physiotherapy Services in India",
  description:
    "Reload Physiotherapy provides premium physiotherapy services for pain relief and recovery. Book your session today in India.",
  alternates: {
    canonical: "https://reloadphysio.in/",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview/>
      <SocialSection/>
    <MeetOurTeam/>
      <TestimonialSection/>
      <BookAppointment/>
    </div>
  );
}
