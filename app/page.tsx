import HeroSection from "@/components/hero-section";
import ActionCards from "@/components/action-cards";
import LatestNews from "@/components/latest-news";
import JoinSection from "@/components/join-section";
import ScrollingText from "@/components/scrolling-text";
import CampaignPage from "@/components/campaign-page";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CampaignPage />
      <ActionCards />
      <LatestNews />

      <JoinSection />
      <ScrollingText />
    </main>
  );
}
