import AboutHero from "@/components/about/AboutHero";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";


export const metadata = {
  title: "Reload Physiotherapy - Expert Physiotherapy Services in India",
  description:
    "Reload Physiotherapy provides premium physiotherapy services for pain relief and recovery. Book your session today in India.",
  alternates: {
    canonical: "https://reloadphysio.in/about",
  },
};

export default function Home() {
  return (
    <div>
     <AboutHero/>
     <MissionVision/>
     <OurStory/>
     <MeetOurTeam/>
    </div>
  );
}
