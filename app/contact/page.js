import BookingForm from "@/components/contact/BookingForm";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactHero from "@/components/contact/ContactHero";
import JoinTeam from "@/components/contact/JoinTeam";



export const metadata = {
  title: "Reload Physiotherapy - Expert Physiotherapy Services in India",
  description:
    "Reload Physiotherapy provides premium physiotherapy services for pain relief and recovery. Book your session today in India.",
  alternates: {
    canonical: "https://reloadphysio.in/contact",
  },
};

export default function Home() {
  return (
    <div>
    <ContactHero/>
    <ContactDetails/>
    <BookingForm/>
    <JoinTeam/>
    </div>
  );
}
